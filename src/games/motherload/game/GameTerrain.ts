import * as THREE from "three";
import RAPIER from "@dimforge/rapier2d";
import { GamePhysics } from "./GamePhysics";
import {
  TileType,
  TileCategory,
  TILE_CONFIG,
  TileConfigHelper,
  TileEncoder,
} from "./TileConfig";
import { playerState } from "./PlayerState";

export interface Tile {
  x: number;
  y: number;
  encodedType: number; // Now directly stores the TileType enum value
  mesh?: THREE.Mesh;
  collider?: RAPIER.Collider;
  rigidBody?: RAPIER.RigidBody;
  texture?: THREE.Texture; // For loading tile textures
}

export interface Building {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  height: number;
  mesh: THREE.Mesh;
  collider?: RAPIER.Collider;
  rigidBody?: RAPIER.RigidBody;
  interactionZone: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

// Helper to get tile type from encoded value
export function getTileType(tile: Tile): TileType {
  return tile.encodedType as TileType;
}

export class GameTerrain {
  private tiles: Map<string, Tile> = new Map();
  private buildings: Map<string, Building> = new Map();
  private scene: THREE.Scene;
  private physics: GamePhysics;
  private textureLoader: THREE.TextureLoader;

  constructor(scene: THREE.Scene, physics: GamePhysics) {
    this.scene = scene;
    this.physics = physics;
    this.textureLoader = new THREE.TextureLoader();
    this.generateTerrain();
  }

  private tileKey(x: number, y: number): string {
    return `${Math.floor(x)},${Math.floor(y)}`;
  }

  private generateTerrain() {
    const worldBounds = GamePhysics.getWorldBounds();

    // Create grass tiles on the surface for aesthetics
    for (
      let x = Math.floor(worldBounds.left);
      x <= Math.ceil(worldBounds.right);
      x++
    ) {
      this.createTile(x, worldBounds.surface, TileType.GRASS);
    }

    // Create floating platform (4 tiles wide, 1 tile high, on right side)
    const platformStartX = 4; // Right side of the world
    const platformWidth = 4;
    const platformHeight = 1;
    const platformBaseY = 3; // 3 tiles above surface

    for (let x = platformStartX; x < platformStartX + platformWidth; x++) {
      for (let y = platformBaseY; y < platformBaseY + platformHeight; y++) {
        this.createTile(x, y, TileType.CONCRETE);
      }
    }

    // Create junk shop building on top of platform
    this.createJunkShop(platformStartX, platformBaseY + platformHeight);

    // Create randomized tiles underground with depth-based distribution
    for (
      let x = Math.floor(worldBounds.left);
      x <= Math.ceil(worldBounds.right);
      x++
    ) {
      for (
        let y = Math.floor(worldBounds.bottom);
        y <= worldBounds.surface;
        y++
      ) {
        if (y < worldBounds.surface) {
          // Underground only
          const depth = worldBounds.surface - y;
          const tileType = TileConfigHelper.generateRandomTileForDepth(depth);
          this.createTile(x, y, tileType as number);
        }
      }
    }
  }

  private createTile(x: number, y: number, encodedType: number) {
    const tileType = encodedType as TileType;
    const config = TILE_CONFIG[tileType];
    const worldBounds = GamePhysics.getWorldBounds();
    const depth = worldBounds.surface - y;

    // Create visual mesh with texture or color
    const geometry = new THREE.PlaneGeometry(1, 1);
    let material: THREE.MeshBasicMaterial;

    if (config.imagePath && config.imagePath !== "") {
      // Try to load texture for the tile
      try {
        const texture = this.textureLoader.load(config.imagePath);
        texture.generateMipmaps = false;
        texture.minFilter = THREE.NearestFilter;
        texture.magFilter = THREE.NearestFilter;
        material = new THREE.MeshBasicMaterial({ map: texture });
      } catch (error) {
        console.warn(
          `Failed to load texture for ${config.name}: ${config.imagePath}`,
        );
        material = this.createFallbackMaterial(tileType, depth);
      }
    } else {
      material = this.createFallbackMaterial(tileType, depth);
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, -1);
    this.scene.add(mesh);

    // Create physics collider for solid tiles (not holes or certain decorations)
    let collider: RAPIER.Collider | undefined;
    let rigidBody: RAPIER.RigidBody | undefined;

    if (TileEncoder.isSolid(encodedType)) {
      const rigidBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(x, y);
      rigidBody = this.physics.getWorld().createRigidBody(rigidBodyDesc);

      const colliderDesc = RAPIER.ColliderDesc.cuboid(0.5, 0.5);
      collider = this.physics
        .getWorld()
        .createCollider(colliderDesc, rigidBody);
    }

    // Store tile with encoded type
    const tile: Tile = {
      x,
      y,
      encodedType,
      mesh,
      collider,
      rigidBody,
    };

    this.tiles.set(this.tileKey(x, y), tile);
  }

  private createFallbackMaterial(
    tileType: TileType,
    depth: number,
  ): THREE.MeshBasicMaterial {
    let color: number;

    // Create fallback colors based on tile type
    switch (tileType) {
      case TileType.DIRT:
        // Darker dirt colors for better atmosphere
        if (depth <= 5) {
          color = new THREE.Color()
            .setHSL(0.1, 0.4, 0.2 + Math.random() * 0.08)
            .getHex();
        } else if (depth <= 15) {
          color = new THREE.Color()
            .setHSL(0.1, 0.5, 0.15 + Math.random() * 0.08)
            .getHex();
        } else {
          color = new THREE.Color()
            .setHSL(0.1, 0.6, 0.08 + Math.random() * 0.07)
            .getHex();
        }
        break;
      case TileType.ROCK:
        color = 0x4a4a4a; // Darker grey
        break;
      case TileType.LAVA:
        color = 0xff4400; // Red-orange
        break;
      case TileType.BRONZIUM:
        color = 0xcd7f32; // Bronze
        break;
      case TileType.IRONIUM:
        color = 0x5a5a5a; // Darker iron grey
        break;
      case TileType.SILVERIUM:
        color = 0x909090; // Darker silver
        break;
      case TileType.GOLDIUM:
        color = 0xffd700; // Gold
        break;
      case TileType.EMERALD:
        color = 0x50c878; // Emerald green
        break;
      case TileType.RUBY:
        color = 0xe0115f; // Ruby red
        break;
      case TileType.DIAMOND:
        color = 0xb9f2ff; // Diamond blue-white
        break;
      default:
        // Darker random earthy color for other types
        color = new THREE.Color()
          .setHSL(0.1, 0.3, 0.15 + Math.random() * 0.15)
          .getHex();
    }

    return new THREE.MeshBasicMaterial({ color });
  }

  getTileAt(x: number, y: number): Tile | undefined {
    return this.tiles.get(this.tileKey(x, y));
  }

  digTile(
    x: number,
    y: number,
  ): { success: boolean; tileType?: TileType; drillTime?: number } {
    const tileX = Math.floor(x);
    const tileY = Math.floor(y);
    const tile = this.getTileAt(tileX, tileY);

    if (!tile || TileEncoder.isEmpty(tile.encodedType)) {
      return { success: false }; // Can't dig holes or empty tiles
    }

    const originalTileType = tile.encodedType as TileType;

    // Check if tile is diggable
    const config = TILE_CONFIG[originalTileType];
    if (TileConfigHelper.isObstacle(originalTileType)) {
      // Check if drill power is sufficient for obstacles
      const equipmentStats = playerState.getEquipmentStats();
      const drillPower = equipmentStats.drillPower || 1;

      // Rock obstacles require drill power >= 3 (Titanium drill tier)
      const requiredPower = originalTileType === TileType.ROCK ? 3 : 5; // Future obstacles might need more

      if (drillPower < requiredPower) {
        console.log(
          `🚫 Cannot dig ${config.name} - need drill power ${requiredPower}, have ${drillPower}!`,
        );
        return { success: false };
      }

      console.log(
        `⛏️ Breaking through ${config.name} with drill power ${drillPower}!`,
      );
    }

    const drillTimeModifier =
      TileConfigHelper.getDrillTimeModifier(originalTileType);

    // Remove physics collider
    if (tile.collider && tile.rigidBody) {
      this.physics.getWorld().removeCollider(tile.collider, true);
      this.physics.getWorld().removeRigidBody(tile.rigidBody);
      tile.collider = undefined;
      tile.rigidBody = undefined;
    }

    // Change visual to hole (grey)
    if (tile.mesh) {
      (tile.mesh.material as THREE.MeshBasicMaterial).color.setHex(0x444444); // Dark grey
    }

    // Update tile to empty/hole (encoded as 0)
    tile.encodedType = TileType.EMPTY;

    return {
      success: true,
      tileType: originalTileType,
      drillTime: drillTimeModifier,
    };
  }

  // Force dig method for explosives - can destroy obstacles and treasures
  forceDigTile(
    x: number,
    y: number,
  ): { success: boolean; tileType?: TileType; obstacle?: boolean } {
    const tileX = Math.floor(x);
    const tileY = Math.floor(y);
    const tile = this.getTileAt(tileX, tileY);

    if (!tile || TileEncoder.isEmpty(tile.encodedType)) {
      return { success: false }; // Can't dig holes or empty tiles
    }

    const originalTileType = tile.encodedType as TileType;
    const isObstacle = TileConfigHelper.isObstacle(originalTileType);

    // Remove physics collider
    if (tile.collider && tile.rigidBody) {
      this.physics.getWorld().removeCollider(tile.collider, true);
      this.physics.getWorld().removeRigidBody(tile.rigidBody);
      tile.collider = undefined;
      tile.rigidBody = undefined;
    }

    // Change visual to hole (grey)
    if (tile.mesh) {
      (tile.mesh.material as THREE.MeshBasicMaterial).color.setHex(0x444444); // Dark grey
    }

    // Update tile to empty/hole (encoded as 0)
    tile.encodedType = TileType.EMPTY;

    return {
      success: true,
      tileType: originalTileType,
      obstacle: isObstacle,
    };
  }

  // Check if player can dig in a direction
  canDigAt(
    playerX: number,
    playerY: number,
    direction: "down" | "left" | "right",
  ): boolean {
    let checkX = Math.floor(playerX + 0.5); // Round to nearest tile center
    let checkY = Math.floor(playerY + 0.5); // Round to nearest tile center

    switch (direction) {
      case "down":
        checkY = Math.floor(playerY - 0.5); // Check tile directly below player
        break;
      case "left":
        checkX = Math.floor(playerX - 0.5); // Check tile to the left
        break;
      case "right":
        checkX = Math.floor(playerX + 1.5); // Check tile to the right
        break;
    }

    // First check if the tile exists and can be dug
    const tile = this.getTileAt(checkX, checkY);
    if (!tile || TileEncoder.isEmpty(tile.encodedType)) {
      return false;
    }

    // Check if tile is diggable (not an obstacle, or obstacle with sufficient drill power)
    const tileType = tile.encodedType as TileType;
    if (TileConfigHelper.isObstacle(tileType)) {
      // Check if drill power is sufficient for obstacles
      const equipmentStats = playerState.getEquipmentStats();
      const drillPower = equipmentStats.drillPower || 1;

      // Rock obstacles require drill power >= 3 (Titanium drill tier)
      const requiredPower = tileType === TileType.ROCK ? 3 : 5; // Future obstacles might need more

      if (drillPower < requiredPower) {
        return false; // Cannot dig this obstacle
      }
    }

    // Then check if drilling would move player outside world boundaries
    const worldBounds = GamePhysics.getWorldBounds();
    let targetPlayerX = playerX;
    let targetPlayerY = playerY;

    switch (direction) {
      case "down":
        targetPlayerY = checkY; // Player would move to the dug tile position
        break;
      case "left":
        targetPlayerX = checkX; // Player would move to the dug tile position
        break;
      case "right":
        targetPlayerX = checkX; // Player would move to the dug tile position
        break;
    }

    // Check if target position is within world boundaries
    const isWithinBounds =
      targetPlayerX >= worldBounds.left &&
      targetPlayerX <= worldBounds.right &&
      targetPlayerY >= worldBounds.bottom &&
      targetPlayerY <= worldBounds.top;

    // console.log(`⛏️  Can dig ${direction}: Player at (${playerX.toFixed(2)}, ${playerY.toFixed(2)}) checking tile (${checkX}, ${checkY}) target (${targetPlayerX}, ${targetPlayerY}) bounds check: ${isWithinBounds}`, tileType || 'NO_TILE');

    return isWithinBounds;
  }

  // Check if player is grounded (touching solid tile below)
  // Used for unified flying detection - works in sky or underground
  isPlayerGrounded(playerX: number, playerY: number): boolean {
    const checkX = Math.floor(playerX + 0.5); // Round to nearest tile center
    const checkY = Math.floor(playerY - 0.5); // Check tile directly below player's bottom edge
    const tileBelow = this.getTileAt(checkX, checkY);

    // console.log(`🔍 Grounded check: Player at (${playerX.toFixed(2)}, ${playerY.toFixed(2)}) checking tile (${checkX}, ${checkY})`, tileBelow?.encodedType || 'NO_TILE');

    // Player is grounded if there's a solid tile below (anything with collision)
    if (!tileBelow || !TileEncoder.isSolid(tileBelow.encodedType)) {
      return false;
    }

    // Additional distance check: player must be close to the ground
    // Player's bottom edge is at playerY - 0.4 (collider radius)
    // Tile's top edge is at tileY + 0.5
    const playerBottomEdge = playerY - 0.4;
    const tileTopEdge = checkY + 0.5;
    const distanceToGround = playerBottomEdge - tileTopEdge;

    // Only consider grounded if within 0.05 units of the ground
    const maxGroundDistance = 0.05;
    const isCloseToGround = distanceToGround <= maxGroundDistance;

    // console.log(`🔍 Distance check: Player bottom (${playerBottomEdge.toFixed(3)}) vs Tile top (${tileTopEdge.toFixed(3)}) = distance ${distanceToGround.toFixed(3)}, grounded: ${isCloseToGround}`);

    return isCloseToGround;
  }

  // Check if player is flying (in open space - sky or underground dug areas)
  isPlayerFlying(playerX: number, playerY: number): boolean {
    return !this.isPlayerGrounded(playerX, playerY);
  }

  // Check if player is touching solid tile on the side
  isPlayerTouchingDirtSide(
    playerX: number,
    playerY: number,
    direction: "left" | "right",
  ): boolean {
    // Round player position to nearest tile center for consistent checking
    const playerTileX = Math.floor(playerX + 0.5);
    const playerTileY = Math.floor(playerY + 0.5);

    // Check the adjacent tile in the specified direction
    const checkX = direction === "left" ? playerTileX - 1 : playerTileX + 1;
    const checkY = playerTileY;

    const tile = this.getTileAt(checkX, checkY);

    // console.log(`🔍 Side solid tile check ${direction}: Player at (${playerX.toFixed(2)}, ${playerY.toFixed(2)}) tile (${playerTileX}, ${playerTileY}) checking adjacent (${checkX}, ${checkY})`, tile?.encodedType || 'NO_TILE');

    // Player is touching solid tile if there's a tile with collision next to them
    return tile !== undefined && TileEncoder.isSolid(tile.encodedType);
  }

  private createJunkShop(platformX: number, platformY: number) {
    // Create junk shop building mesh with texture
    const buildingWidth = 4;
    const buildingHeight = 2;

    const geometry = new THREE.PlaneGeometry(buildingWidth, buildingHeight);

    // Try to load the junk shop texture with transparency
    let material: THREE.MeshBasicMaterial;
    try {
      const texture = this.textureLoader.load(
        "/games/motherload/visual/buildings/junk_shop.png",
      );
      texture.generateMipmaps = false;
      texture.minFilter = THREE.NearestFilter;
      texture.magFilter = THREE.NearestFilter;
      // Enable transparency for PNG with alpha channel
      material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.1, // Only render pixels with alpha > 0.1
      });
    } catch (error) {
      console.warn("Failed to load junk shop texture, using fallback color");
      material = new THREE.MeshBasicMaterial({
        color: 0x8b4513,
        transparent: true,
        opacity: 0.8,
      }); // Brown fallback with some transparency
    }

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      platformX - 0.5 + buildingWidth / 2,
      platformY - 0.5 + buildingHeight / 2,
      -0.5,
    ); // Behind player (negative Z)
    this.scene.add(mesh);

    // NO collision box - player can drive over the building
    // Only keep the interaction zone for E key detection

    // Create the building object (no collision)
    const building: Building = {
      id: "junk_shop",
      name: "Junk Shop",
      x: platformX,
      y: platformY - 1,
      width: buildingWidth,
      height: buildingHeight,
      mesh,
      // No collider or rigidBody - player can pass through
      interactionZone: {
        x: platformX - 1, // Extend interaction zone around the building
        y: platformY - 1,
        width: buildingWidth + 2,
        height: buildingHeight + 2,
      },
    };

    this.buildings.set("junk_shop", building);
  }

  getBuilding(id: string): Building | undefined {
    return this.buildings.get(id);
  }

  isPlayerNearBuilding(
    playerX: number,
    playerY: number,
    buildingId: string,
  ): boolean {
    const building = this.buildings.get(buildingId);
    if (!building) return false;

    const zone = building.interactionZone;
    return (
      playerX >= zone.x &&
      playerX <= zone.x + zone.width &&
      playerY >= zone.y &&
      playerY <= zone.y + zone.height
    );
  }

  cleanup() {
    // Clean up all physics bodies and colliders
    for (const tile of this.tiles.values()) {
      if (tile.collider && tile.rigidBody) {
        this.physics.getWorld().removeCollider(tile.collider, true);
        this.physics.getWorld().removeRigidBody(tile.rigidBody);
      }
      if (tile.mesh) {
        this.scene.remove(tile.mesh);
      }
    }
    this.tiles.clear();

    // Clean up buildings
    for (const building of this.buildings.values()) {
      // Only clean up collision if it exists (some buildings like junk shop don't have collision)
      if (building.collider && building.rigidBody) {
        this.physics.getWorld().removeCollider(building.collider, true);
        this.physics.getWorld().removeRigidBody(building.rigidBody);
      }
      if (building.mesh) {
        this.scene.remove(building.mesh);
      }
    }
    this.buildings.clear();
  }

  // Reset terrain for game restart
  reset() {
    console.log("🌍 Resetting terrain...");
    this.cleanup();
    this.generateTerrain();
    console.log("✅ Terrain reset complete");
  }
}
