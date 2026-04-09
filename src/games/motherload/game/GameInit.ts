import * as THREE from "three";
import { GameState, GameLogic } from "./GameLogic";
import { GamePhysics } from "./GamePhysics";
import { GameTerrain } from "./GameTerrain";
import { PlayerSprites, FacingDirection } from "./PlayerSprites";
import { GameShop } from "./GameShop";
import { TileType, TILE_CONFIG } from "./TileConfig";
import { playerState } from "./PlayerState";

export class GameInit {
  // Helper method to convert string mineral names to TileType enum
  private static getTileTypeFromName(name: string): TileType | null {
    // Convert mineral name to TileType enum
    for (const [tileTypeKey, config] of Object.entries(TILE_CONFIG)) {
      if (config.name.toLowerCase() === name.toLowerCase()) {
        return parseInt(tileTypeKey) as TileType;
      }
    }
    return null;
  }

  static createScene(): THREE.Scene {
    const scene = new THREE.Scene();
    // Darker sky blue for better atmosphere
    scene.background = new THREE.Color(0x4a6fa5); // Darker blue
    return scene;
  }

  static createCamera(): THREE.OrthographicCamera {
    // Camera sized to show square tiles properly

    // Show about 12 tiles in height for good gameplay view
    const viewHeight = 12;
    const viewWidth = viewHeight * (window.innerWidth / window.innerHeight);

    const camera = new THREE.OrthographicCamera(
      -viewWidth / 2, // left
      viewWidth / 2, // right
      viewHeight / 2, // top
      -viewHeight / 2, // bottom
      0.1,
      1000, // near, far
    );
    camera.position.z = 10;
    return camera;
  }

  static createRenderer(container: HTMLElement): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    return renderer;
  }

  static createPlayer(scene: THREE.Scene): THREE.Mesh {
    // Create a placeholder that will be updated with sprites by PlayerSprites
    // Make it larger to properly show the sprite (collision is handled separately by physics)
    const playerGeometry = new THREE.PlaneGeometry(1.5, 1.5); // Larger visual size for better sprite visibility
    const playerMaterial = new THREE.MeshBasicMaterial({
      transparent: true,
      alphaTest: 0.1,
    });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);

    // Start at surface level - align with tile grid
    const startY = GamePhysics.SURFACE_Y + 1.5; // 1.5 tiles above surface (tile centers are at integer coords)
    player.position.set(0, startY, 0);
    scene.add(player);
    return player;
  }

  // Terrain creation is now handled by GameTerrain class

  static setupWindowResize(
    camera: THREE.OrthographicCamera,
    renderer: THREE.WebGLRenderer,
  ) {
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;

      // Keep tiles square by adjusting camera based on aspect ratio
      const viewHeight = 12; // Show 12 tiles vertically
      const viewWidth = viewHeight * aspect;

      camera.left = -viewWidth / 2;
      camera.right = viewWidth / 2;
      camera.top = viewHeight / 2;
      camera.bottom = -viewHeight / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return handleResize;
  }

  static async createGameState(container: HTMLElement): Promise<{
    gameState: GameState;
    renderer: THREE.WebGLRenderer;
    cleanup: () => void;
  }> {
    // Initialize Rapier physics (modern version doesn't need explicit init)
    await import("@dimforge/rapier2d");

    const scene = this.createScene();
    const camera = this.createCamera();
    const renderer = this.createRenderer(container);
    const player = this.createPlayer(scene);

    // Create physics world
    const physics = new GamePhysics();

    // Set scene reference for collision box visualization
    physics.setScene(scene);

    // Create terrain system with collision
    const terrain = new GameTerrain(scene, physics);

    // Create player physics body at starting position - align with tile grid
    const startY = GamePhysics.SURFACE_Y + 1.5; // 1.5 tiles above surface
    physics.createPlayerBody(0, startY);

    // Initialize player sprites
    const playerSprites = new PlayerSprites(player);
    await playerSprites.loadSprites();

    const handleResize = this.setupWindowResize(camera, renderer);

    // Initialize player state with starting values
    playerState.initializeState({
      fuel: GameLogic.MAX_FUEL,
      maxFuel: GameLogic.MAX_FUEL,
      hull: GameLogic.MAX_HULL,
      maxHull: GameLogic.MAX_HULL,
      money: 100, // Start with some money for testing
      depth: 0,
      minerals: {},
      items: {},
      equipment: {
        drill: "basic",
        hull: "basic",
        engine: "basic",
        fuelTank: "basic",
        radiator: "basic",
        cargoBay: "basic",
      },
      skills: {
        blastRange: 0,
        healthReserve: 0,
      },
    });

    // Create base game state (without player data - now in playerState)
    const baseGameState = {
      scene,
      camera,
      player,
      physics,
      terrain,
      playerSprites,
      isDigging: false,
      digTimer: 0,
      digDuration: 0,
      facingDirection: FacingDirection.RIGHT,
      lastMovementDirection: { x: 0, y: 0 },
    };

    console.log("🏪 Shop initialized with player state:", {
      money: playerState.money,
      fuel: playerState.fuel,
      hull: playerState.hull,
    });

    // Create the complete game state (without player data - now in playerState)
    const gameState: GameState = {
      ...baseGameState,
      shop: null as unknown as GameShop, // Temporary placeholder
    };

    // Initialize shop system with simplified callbacks
    // No state change callbacks needed - shop reads directly from playerState
    const shopCallbacks = {
      onStateChange: (_newState: Record<string, unknown>) => {
        // Shop now manages state through playerState directly
        // This callback is kept for compatibility but does nothing
      },
      onNotification: (message: string) => {
        console.log(message);
        // Could trigger UI notifications here
      },
    };

    const shop = new GameShop(shopCallbacks, gameState);

    // Now assign the shop to the game state
    gameState.shop = shop;

    const cleanup = () => {
      window.removeEventListener("resize", handleResize);
      playerSprites.cleanup();
      terrain.cleanup();
      physics.cleanup();
      shop.cleanup();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };

    return { gameState, renderer, cleanup };
  }
}
