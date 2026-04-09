import * as THREE from "three";
import { GamePhysics } from "./GamePhysics";
import { GameTerrain } from "./GameTerrain";
import { GameAudio } from "./GameAudio";
import { PlayerSprites, PlayerState, FacingDirection } from "./PlayerSprites";
import { TileType, TILE_CONFIG, TileConfigHelper } from "./TileConfig";
import { GameShop } from "./GameShop";
import { playerState } from "./PlayerState";

// Remove PlayerCargo and GameCounters interfaces - now handled by PlayerState

// Interface for counter updates callback - for backwards compatibility with existing code
export interface CountersUpdate {
  depth: number;
  fuel: number;
  maxFuel: number;
  hull: number;
  maxHull: number;
  money: number;
  weight: number;
}

export interface GameState {
  player: THREE.Mesh;
  camera: THREE.OrthographicCamera;
  scene: THREE.Scene;
  physics: GamePhysics;
  terrain: GameTerrain;
  playerSprites: PlayerSprites;
  shop: GameShop;
  isDigging: boolean;
  digTimer: number;
  digStartPosition?: { x: number; y: number };
  digTargetPosition?: { x: number; y: number };
  digDuration: number;
  facingDirection: FacingDirection;
  lastMovementDirection: { x: number; y: number };
  // Player state is now managed by the global playerState singleton
  // Remove fuel, maxFuel, hull, maxHull, money, cargo, items - use playerState instead
}

export class GameLogic {
  private currentDigDirection?: "down" | "left" | "right";
  private drillingFacingDirection?: FacingDirection;
  private gameAudio?: GameAudio;
  private soundEffectsEnabled = true;
  private countersUpdateCallback?: (counters: CountersUpdate) => void;
  private wasGrounded = false; // Track previous grounded state for impact detection

  // Game constants
  static readonly MAX_FUEL = 100;
  static readonly MAX_HULL = 100;

  constructor(gameAudio?: GameAudio) {
    this.gameAudio = gameAudio;
  }

  setSoundEffectsEnabled(enabled: boolean) {
    this.soundEffectsEnabled = enabled;
  }

  getSoundEffectsEnabled(): boolean {
    return this.soundEffectsEnabled;
  }

  setCountersUpdateCallback(callback: (counters: CountersUpdate) => void) {
    this.countersUpdateCallback = callback;
  }

  // Game over callback
  private gameOverCallback?: (gameOverData: {
    reason: string;
    score: number;
    playTime: string;
  }) => void;

  setGameOverCallback(
    callback: (gameOverData: {
      reason: string;
      score: number;
      playTime: string;
    }) => void,
  ) {
    this.gameOverCallback = callback;
  }

  handlePlayerInteraction(
    gameState: GameState,
    gameLoop: { pause: () => void },
  ) {
    const playerPos = gameState.physics.getPlayerPosition();

    // Check if player is near junk shop
    if (
      gameState.terrain.isPlayerNearBuilding(
        playerPos.x,
        playerPos.y,
        "junk_shop",
      )
    ) {
      // Open shop and pause game
      gameState.shop.open();
      gameLoop.pause();

      console.log("🏪 Junk shop opened!");
    }
  }

  private updateCounters(gameState: GameState) {
    if (!this.countersUpdateCallback) return;

    const playerPos = gameState.physics.getPlayerPosition();
    const depth = Math.max(
      0,
      Math.floor(GamePhysics.SURFACE_Y - (playerPos.y - 0.4)),
    ); // Bottom of player box to surface

    // Update player state depth
    playerState.updateDepth(depth);

    this.countersUpdateCallback({
      depth: playerState.depth,
      fuel: playerState.fuel,
      maxFuel: playerState.maxFuel,
      hull: playerState.hull,
      maxHull: playerState.maxHull,
      money: playerState.money,
      weight: playerState.cargoWeight,
    });
  }

  private checkImpactDamage(
    gameState: GameState,
    velocity: { x: number; y: number },
  ) {
    const impactSpeed = Math.abs(velocity.y);
    const maxSafeSpeed = 8; // Speed threshold for safe landing

    if (impactSpeed > maxSafeSpeed) {
      const damage = Math.min(impactSpeed * 2, 30); // X * 2 damage, max 30
      const newHull = Math.max(0, playerState.hull - damage);
      playerState.updateHull(newHull);

      console.log(
        `💥 Impact damage! Speed: ${impactSpeed.toFixed(1)}, Damage: ${damage.toFixed(1)}, Hull: ${playerState.hull.toFixed(1)}`,
      );

      // Play impact sound if available
      if (this.gameAudio && this.soundEffectsEnabled) {
        // TODO: Add impact sound effect
      }
    }
  }

  private consumeFuel(
    gameState: GameState,
    deltaTime: number,
    movement: { x: number; y: number },
    isDigging: boolean,
    digDirection?: "down" | "left" | "right",
  ) {
    let fuelCost = 0;

    // Get equipment stats for fuel efficiency
    const equipmentStats = playerState.getEquipmentStats();
    const fuelEfficiency = equipmentStats.fuelEfficiency || 1.0; // 1.0 = normal, 0.5 = 50% less fuel
    const cargoWeightReduction = equipmentStats.weightReduction || 0; // 0 = no reduction, 0.5 = 50% reduction

    // Calculate effective cargo weight with reduction
    const effectiveCargoWeight =
      playerState.cargoWeight * (1 - cargoWeightReduction);

    // Base cost of driving: 1 fuel per second, modified by fuel efficiency
    if (movement.x !== 0 || movement.y !== 0) {
      fuelCost += deltaTime * fuelEfficiency; // Fuel efficiency affects movement
    }

    // Additional cost for flying up: 1 + (effective weight * 0.01) with max 4
    if (movement.y > 0) {
      const weightMultiplier = Math.min(effectiveCargoWeight * 0.01, 3); // Max additional 3 fuel
      const upwardCost = (1 + weightMultiplier) * fuelEfficiency;
      fuelCost += upwardCost * deltaTime;
    }

    // Drilling costs
    if (isDigging && digDirection) {
      // Get the tile being drilled
      const playerPos = gameState.physics.getPlayerPosition();
      let targetX = playerPos.x;
      let targetY = playerPos.y;

      switch (digDirection) {
        case "down":
          targetY -= 1;
          break;
        case "left":
          targetX -= 1;
          break;
        case "right":
          targetX += 1;
          break;
      }

      const tile = gameState.terrain.getTileAt(targetX, targetY);
      if (tile) {
        const tileType = tile.encodedType as TileType;
        const config = TILE_CONFIG[tileType];
        if (config) {
          // Base drilling costs: Dirt = 1 fuel, minerals = 5 fuel
          const baseDrillCost = config.name.toLowerCase() === "dirt" ? 1 : 5;

          // Apply heat reduction from radiator equipment
          const heatReduction = equipmentStats.heatReduction || 0;
          const heatModifier = 1 - heatReduction; // More heat reduction = less fuel cost

          const drillCost = baseDrillCost * heatModifier * fuelEfficiency;
          fuelCost += drillCost * deltaTime;
        }
      }
    }

    // Apply fuel consumption
    if (fuelCost > 0) {
      const newFuel = Math.max(0, playerState.fuel - fuelCost);
      playerState.updateFuel(newFuel);
    }
  }

  private addCargoItem(gameState: GameState, tileType: TileType) {
    // Only add cargo for collectible tiles
    if (!TileConfigHelper.isCollectible(tileType)) {
      return;
    }

    const config = TILE_CONFIG[tileType];

    // Add mineral to player state
    playerState.addMineral(tileType, 1);

    console.log(
      `📦 Added cargo: ${config.name} (weight: ${config.weight}, value: ${config.goldCost})`,
    );
  }

  // Public method for adding cargo from tile type (used by dynamite, pile driver, etc.)
  addCargoFromTileType(tileType: TileType) {
    // Only add cargo for collectible tiles
    if (!TileConfigHelper.isCollectible(tileType)) {
      return;
    }

    const config = TILE_CONFIG[tileType];

    // Add mineral to player state
    playerState.addMineral(tileType, 1);

    console.log(
      `📦 Added cargo: ${config.name} (weight: ${config.weight}, value: ${config.goldCost})`,
    );
  }

  // Method removed - cargo weight calculation now handled by playerState

  // Smooth easing function for drilling animation
  private easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  updatePlayer(
    gameState: GameState,
    movement: { x: number; y: number },
    deltaTime: number,
    input: { digging: boolean; digDirection?: "down" | "left" | "right" },
  ) {
    if (!gameState.physics) return;

    const playerPos = gameState.physics.getPlayerPosition();
    const velocity = gameState.physics.getPlayerVelocity();

    // Unified flying detection: player is flying when not grounded
    // This works consistently in sky (above surface) and underground dug areas
    // Flying = free movement in open space, Grounded = touching dirt below
    const isGrounded = gameState.terrain.isPlayerGrounded(
      playerPos.x,
      playerPos.y,
    );
    const isFlying = !isGrounded;
    const isSlowEnoughToDrill =
      Math.abs(velocity.x) < 1.0 && Math.abs(velocity.y) < 1.0; // More lenient

    // Handle motor sound based on movement state (moved from React useEffect to game loop)
    const isMoving = Math.abs(movement.x) > 0.1 || Math.abs(movement.y) > 0.1;
    if (this.gameAudio && this.soundEffectsEnabled) {
      if (isMoving && !gameState.isDigging) {
        this.gameAudio.startMotorSound();
      } else {
        this.gameAudio.stopMotorSound();
      }
    } else if (this.gameAudio) {
      this.gameAudio.stopMotorSound();
    }

    // Check for impact damage when landing (when player was flying and now is grounded)
    if (!this.wasGrounded && isGrounded) {
      this.checkImpactDamage(gameState, velocity);
    }

    // Update grounded state for next frame
    this.wasGrounded = isGrounded;

    // Update facing direction based on movement (but not during drilling to preserve drill direction)
    if (!gameState.isDigging) {
      this.updateFacingDirection(gameState, movement);
    }

    // Update player sprite state
    this.updatePlayerSpriteState(gameState, movement, isFlying);

    // Only allow digging when grounded and not moving too fast
    // Prevent starting new drilling while already drilling to lock drill direction
    if (
      input.digging &&
      !gameState.isDigging &&
      input.digDirection &&
      isGrounded &&
      isSlowEnoughToDrill
    ) {
      this.startDigging(gameState, input.digDirection);
    } else if (
      input.digging &&
      gameState.isDigging &&
      input.digDirection &&
      input.digDirection !== this.currentDigDirection
    ) {
      // Log attempt to change drill direction during drilling (for debugging)
      console.log(
        `🚫 Cannot change drill direction from ${this.currentDigDirection} to ${input.digDirection} during drilling animation`,
      );
    }

    // Update digging timer and animate drilling
    if (gameState.isDigging) {
      gameState.digTimer -= deltaTime;

      // Animate the drilling movement
      if (gameState.digStartPosition && gameState.digTargetPosition) {
        const progress = 1 - gameState.digTimer / gameState.digDuration;
        const smoothProgress = this.easeInOutCubic(progress);

        // Interpolate between start and target positions
        const currentX =
          gameState.digStartPosition.x +
          (gameState.digTargetPosition.x - gameState.digStartPosition.x) *
            smoothProgress;
        const currentY =
          gameState.digStartPosition.y +
          (gameState.digTargetPosition.y - gameState.digStartPosition.y) *
            smoothProgress;

        // Update physics body position during drilling
        const playerBody = gameState.physics.getPlayerBody();
        if (playerBody) {
          playerBody.rigidBody.setTranslation(
            { x: currentX, y: currentY },
            true,
          );
          playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true); // Keep velocity at zero during drilling
        }
      }

      if (gameState.digTimer <= 0) {
        this.finishDigging(gameState);
      }
    }

    // Allow movement unless actively in digging animation
    // This allows movement on surface and underground when not digging
    if (!gameState.isDigging) {
      const equipmentStats = playerState.getEquipmentStats();
      gameState.physics.updatePlayerMovement(
        movement,
        deltaTime,
        isFlying,
        equipmentStats,
      );
    }

    // Update visual position based on physics (only when not drilling, since we manually control position during drilling)
    if (!gameState.isDigging) {
      gameState.physics.updatePlayerVisual(gameState.player);
    } else {
      // During drilling, update visual position directly from physics
      const position = gameState.physics.getPlayerPosition();
      gameState.player.position.x = position.x;
      gameState.player.position.y = position.y;
    }

    // Consume fuel based on movement and drilling
    this.consumeFuel(
      gameState,
      deltaTime,
      movement,
      gameState.isDigging,
      this.currentDigDirection,
    );

    // Update UI counters
    this.updateCounters(gameState);
  }

  private updateFacingDirection(
    gameState: GameState,
    movement: { x: number; y: number },
  ) {
    // Update facing direction based on horizontal movement
    if (movement.x > 0) {
      gameState.facingDirection = FacingDirection.RIGHT;
    } else if (movement.x < 0) {
      gameState.facingDirection = FacingDirection.LEFT;
    }

    // Store last movement for sprite state decisions
    if (movement.x !== 0 || movement.y !== 0) {
      gameState.lastMovementDirection = { ...movement };
    }
  }

  private updatePlayerSpriteState(
    gameState: GameState,
    movement: { x: number; y: number },
    isFlying: boolean,
  ) {
    let newState: PlayerState;

    // Determine player state
    if (gameState.isDigging && this.currentDigDirection) {
      // Drilling state - use stored direction during drilling animation
      // This ensures drill sprite remains active even if directional key is released
      switch (this.currentDigDirection) {
        case "down":
          newState = PlayerState.DIGGING_DOWN;
          break;
        case "left":
          newState = PlayerState.DIGGING_LEFT;
          break;
        case "right":
          newState = PlayerState.DIGGING_RIGHT;
          break;
        default:
          newState = PlayerState.DIGGING_DOWN;
      }
    } else if (isFlying && (movement.x !== 0 || movement.y !== 0)) {
      // Flying when not grounded (works both in sky and underground dug areas)
      newState = PlayerState.FLYING;
    } else if (movement.x !== 0 || movement.y !== 0) {
      // Moving on ground
      newState = PlayerState.MOVING;
    } else {
      // Idle
      newState = PlayerState.IDLE;
    }

    // Update sprite - use stored facing direction during drilling to prevent sprite flipping
    const facingDirection =
      gameState.isDigging && this.drillingFacingDirection
        ? this.drillingFacingDirection
        : gameState.facingDirection;
    gameState.playerSprites.updateState(newState, facingDirection);
  }

  private startDigging(
    gameState: GameState,
    direction: "down" | "left" | "right",
  ) {
    const playerPos = gameState.physics.getPlayerPosition();

    // Check if we can dig in the specified direction
    if (!gameState.terrain.canDigAt(playerPos.x, playerPos.y, direction)) {
      return; // Can't dig here
    }

    // Check if conditions are met for digging
    const canDig = this.canDigInDirection(gameState, playerPos, direction);
    if (!canDig) {
      return;
    }

    // SET UP START AND TARGET POSITIONS BASED ON DRILLING DIRECTION
    // Start from player's current position instead of adjusted position
    const startX = playerPos.x;
    const startY = playerPos.y;
    let targetX: number;
    let targetY: number;

    if (direction === "down") {
      // For downward drilling, target X should be tile-centered, but start from current X
      targetX = Math.floor(playerPos.x + 0.5);
      // Calculate target Y to ensure player rests properly on ground below dug tile
      // Player collider radius is 0.4, so bottom edge is at playerY - 0.4
      // Target should place player's bottom edge just above the tile below the dug tile
      const dugTileY = Math.floor(playerPos.y - 0.5);
      const tileBelow = dugTileY - 1;
      targetY = tileBelow + 0.5 + 0.4; // Tile center + half tile + collider radius
    } else {
      // For sideways drilling, target X should move to adjacent tile, Y stays at current level
      const centeredX = Math.floor(playerPos.x + 0.5);
      targetX = direction === "left" ? centeredX - 1 : centeredX + 1;
      targetY = startY; // Stay at same Y level as current position
    }

    // Double-check that target position is within world boundaries
    const worldBounds = GamePhysics.getWorldBounds();

    if (
      targetX < worldBounds.left ||
      targetX > worldBounds.right ||
      targetY < worldBounds.bottom ||
      targetY > worldBounds.top
    ) {
      console.log(
        `🚫 Drilling ${direction} blocked: target (${targetX}, ${targetY}) outside boundaries`,
      );
      return; // Cancel drilling if target is outside boundaries
    }

    const playerBody = gameState.physics.getPlayerBody();
    if (playerBody) {
      // Stop current movement but keep current position as start position
      playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);
      // No need to reposition player since we start from current location
    }

    // Set up drilling animation state with depth and cargo penalties
    const equipmentStats = playerState.getEquipmentStats();
    const baseDrillSpeed = equipmentStats.drillSpeed || 1.0; // 1.0 = normal, 2.0 = 2x faster

    // Apply depth penalty (capped at 50% slower)
    const depthPenalty = Math.min(playerState.depth * 0.001, 0.5); // Max 50% slower at depth 500+
    const depthModifier = 1 - depthPenalty;

    // Apply cargo weight penalty (capped at 75% slower)
    const cargoWeightReduction = equipmentStats.weightReduction || 0;
    const effectiveCargoWeight =
      playerState.cargoWeight * (1 - cargoWeightReduction);
    const cargoPenalty = Math.min(effectiveCargoWeight * 0.01, 0.75); // Max 75% slower at 75+ effective cargo
    const cargoModifier = 1 - cargoPenalty;

    // Calculate final drill speed with all modifiers
    const finalDrillSpeed = baseDrillSpeed * depthModifier * cargoModifier;

    gameState.isDigging = true;
    gameState.digDuration = 1.0 / finalDrillSpeed; // All factors affect drilling speed
    gameState.digTimer = gameState.digDuration; // Start with full duration

    console.log(
      `⛏️ Drilling speed: base ${baseDrillSpeed}x, depth penalty ${(depthPenalty * 100).toFixed(1)}%, cargo penalty ${(cargoPenalty * 100).toFixed(1)}%, final ${finalDrillSpeed.toFixed(2)}x (${gameState.digDuration.toFixed(2)}s)`,
    );
    gameState.digStartPosition = { x: startX, y: startY };
    gameState.digTargetPosition = { x: targetX, y: targetY };
    this.currentDigDirection = direction; // Store the dig direction
    this.drillingFacingDirection = gameState.facingDirection; // Lock facing direction during drilling

    console.log(
      `🎯 Starting drilling ${direction}: from current position (${startX.toFixed(2)}, ${startY.toFixed(2)}) to (${targetX.toFixed(2)}, ${targetY.toFixed(2)}) over ${gameState.digDuration}s`,
    );
    if (direction === "down") {
      const dugTileY = Math.floor(playerPos.y - 0.5);
      console.log(
        `⛏️  Downward drilling: dug tile at y=${dugTileY}, player lands at y=${targetY} (on tile below at y=${dugTileY - 1})`,
      );
    }

    // Play drilling sound when starting to dig
    if (this.gameAudio && this.soundEffectsEnabled) {
      this.gameAudio.startDrillingSound();
    }
  }

  private canDigInDirection(
    gameState: GameState,
    playerPos: { x: number; y: number },
    direction: "down" | "left" | "right",
  ): boolean {
    switch (direction) {
      case "down":
        // Can dig down if player is grounded (above dirt)
        return gameState.terrain.isPlayerGrounded(playerPos.x, playerPos.y);

      case "left":
      case "right":
        // Can dig sideways if player is grounded AND touching dirt on that side
        return (
          gameState.terrain.isPlayerGrounded(playerPos.x, playerPos.y) &&
          gameState.terrain.isPlayerTouchingDirtSide(
            playerPos.x,
            playerPos.y,
            direction,
          )
        );

      default:
        return false;
    }
  }

  private finishDigging(gameState: GameState) {
    // Use stored target position for digging (player should be at target position by now)
    const digDirection = this.currentDigDirection || "down";
    const targetPos = gameState.digTargetPosition;

    if (!targetPos) {
      console.error("No target position found for drilling!");
      this.resetDiggingState(gameState);
      return;
    }

    // The dig target position is where we want to dig the tile
    const digX = Math.round(targetPos.x);
    const digY = Math.round(targetPos.y);

    console.log(
      `⚡ Finishing drilling ${digDirection}: Player at target (${targetPos.x}, ${targetPos.y}) digging tile (${digX}, ${digY})`,
    );

    // Actually dig the tile
    const digResult = gameState.terrain.digTile(digX, digY);

    // Add cargo when successfully digging collectible tiles
    if (digResult.success && digResult.tileType) {
      this.addCargoItem(gameState, digResult.tileType);
    }

    // Ensure player is positioned correctly at the target location
    const playerBody = gameState.physics.getPlayerBody();
    if (playerBody && digResult.success) {
      // For final positioning, handle differently based on drill direction
      let finalX: number;
      let finalY: number;

      if (digDirection === "down") {
        // For downward drilling, use the same calculation as target position
        // to ensure consistency and prevent any gap
        finalX = digX;
        const tileBelow = digY - 1;
        finalY = tileBelow + 0.5 + 0.4; // Tile center + half tile + collider radius
      } else {
        // For sideways drilling, use exact target position to avoid Y-axis bump
        finalX = digX; // Round X for tile alignment
        finalY = targetPos.y; // Keep exact Y position
      }

      playerBody.rigidBody.setTranslation({ x: finalX, y: finalY }, true);

      // Set velocity to zero for all drilling directions to prevent drops
      playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);
    }

    // Reset digging state
    this.resetDiggingState(gameState);
  }

  private resetDiggingState(gameState: GameState) {
    gameState.isDigging = false;
    gameState.digTimer = 0;
    gameState.digDuration = 0;
    gameState.digStartPosition = undefined;
    gameState.digTargetPosition = undefined;
    this.currentDigDirection = undefined;
    this.drillingFacingDirection = undefined; // Reset locked facing direction
  }

  updateCamera(gameState: GameState) {
    if (!gameState.player || !gameState.camera) return;

    // Get player position from physics
    const playerPos = gameState.physics.getPlayerPosition();

    // Calculate camera view dimensions from the orthographic camera
    const camera = gameState.camera as THREE.OrthographicCamera;
    const cameraHalfWidth = Math.abs(camera.right - camera.left) / 2;
    const cameraHalfHeight = Math.abs(camera.top - camera.bottom) / 2;

    // Start with player position as target
    let targetX = playerPos.x;
    let targetY = playerPos.y;

    // Get world bounds and calculate proper camera limits
    const worldBounds = GamePhysics.getWorldBounds();

    // Calculate the limits where camera center can be positioned
    // so that the camera view edges don't go outside the world
    const minCameraX = worldBounds.left + cameraHalfWidth;
    const maxCameraX = worldBounds.right - cameraHalfWidth;
    const minCameraY = worldBounds.bottom + cameraHalfHeight;
    const maxCameraY = worldBounds.top - cameraHalfHeight;

    // Clamp camera position to prevent showing areas outside world bounds
    targetX = Math.max(minCameraX, Math.min(maxCameraX, targetX));
    targetY = Math.max(minCameraY, Math.min(maxCameraY, targetY));

    // Update camera position (instant following for responsive controls)
    gameState.camera.position.x = targetX;
    gameState.camera.position.y = targetY;
  }

  updatePhysics(gameState: GameState, deltaTime: number) {
    // Step the physics simulation
    gameState.physics.step(deltaTime);
  }
}
