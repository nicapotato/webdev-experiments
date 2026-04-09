import * as THREE from "three";

export enum PlayerState {
  MOVING = "moving",
  FLYING = "flying",
  DIGGING_DOWN = "digging_down",
  DIGGING_LEFT = "digging_left",
  DIGGING_RIGHT = "digging_right",
  IDLE = "idle",
}

export enum FacingDirection {
  LEFT = "left",
  RIGHT = "right",
}

interface SpriteInfo {
  texture: THREE.Texture;
  facingDirection: FacingDirection;
}

export class PlayerSprites {
  private textures: Map<string, THREE.Texture> = new Map();
  private currentState: PlayerState = PlayerState.IDLE;
  private currentFacing: FacingDirection = FacingDirection.RIGHT;
  private playerMesh: THREE.Mesh;
  private textureLoader: THREE.TextureLoader;

  constructor(playerMesh: THREE.Mesh) {
    this.playerMesh = playerMesh;
    this.textureLoader = new THREE.TextureLoader();
  }

  async loadSprites(): Promise<void> {
    const sprites = [
      {
        key: "dig_down_left",
        path: "/games/motherload/visual/player/pod_dig_down_lef.png",
      },
      {
        key: "dig_left",
        path: "/games/motherload/visual/player/pod_dig_left.png",
      },
      {
        key: "fly_left",
        path: "/games/motherload/visual/player/pod_fly_left.png",
      },
      {
        key: "move_left",
        path: "/games/motherload/visual/player/pod_move_left.png",
      },
    ];

    const loadPromises = sprites.map(async (sprite) => {
      return new Promise<void>((resolve, reject) => {
        this.textureLoader.load(
          sprite.path,
          (texture) => {
            // Configure texture for pixel art
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;

            // Ensure texture fills the geometry properly
            texture.repeat.set(1, 1);
            texture.offset.set(0, 0);

            this.textures.set(sprite.key, texture);
            console.log(`✅ Loaded player sprite: ${sprite.key}`);
            resolve();
          },
          undefined,
          (error) => {
            console.error(
              `❌ Failed to load player sprite ${sprite.key}:`,
              error,
            );
            reject(error);
          },
        );
      });
    });

    await Promise.all(loadPromises);

    // Set initial sprite
    this.updateSprite();
  }

  updateState(state: PlayerState, facingDirection?: FacingDirection): void {
    let stateChanged = false;
    let facingChanged = false;

    if (this.currentState !== state) {
      this.currentState = state;
      stateChanged = true;
    }

    if (facingDirection && this.currentFacing !== facingDirection) {
      this.currentFacing = facingDirection;
      facingChanged = true;
    }

    if (stateChanged || facingChanged) {
      this.updateSprite();
    }
  }

  private updateSprite(): void {
    const spriteInfo = this.getSpriteForCurrentState();

    if (spriteInfo) {
      const material = this.playerMesh.material as THREE.MeshBasicMaterial;
      material.map = spriteInfo.texture;
      material.needsUpdate = true;

      // Handle horizontal flipping for right-facing sprites
      const shouldFlip =
        this.currentFacing === FacingDirection.RIGHT &&
        spriteInfo.facingDirection === FacingDirection.LEFT;

      if (shouldFlip) {
        // Flip texture coordinates for right-facing
        spriteInfo.texture.repeat.x = -1;
        spriteInfo.texture.offset.x = 1;
      } else {
        // Normal left-facing or already correct direction
        spriteInfo.texture.repeat.x = 1;
        spriteInfo.texture.offset.x = 0;
      }

      spriteInfo.texture.needsUpdate = true;
    }
  }

  private getSpriteForCurrentState(): SpriteInfo | null {
    let spriteKey: string;

    switch (this.currentState) {
      case PlayerState.DIGGING_DOWN:
        spriteKey = "dig_down_left";
        break;
      case PlayerState.DIGGING_LEFT:
        spriteKey = "dig_left";
        break;
      case PlayerState.DIGGING_RIGHT:
        spriteKey = "dig_left"; // Will be flipped horizontally
        break;
      case PlayerState.FLYING:
        spriteKey = "fly_left";
        break;
      case PlayerState.MOVING:
      case PlayerState.IDLE:
      default:
        spriteKey = "move_left";
        break;
    }

    const texture = this.textures.get(spriteKey);
    if (!texture) {
      console.warn(`⚠️  Sprite texture not found: ${spriteKey}`);
      return null;
    }

    return {
      texture,
      facingDirection: FacingDirection.LEFT, // All our sprites are originally left-facing
    };
  }

  getCurrentState(): PlayerState {
    return this.currentState;
  }

  getCurrentFacing(): FacingDirection {
    return this.currentFacing;
  }

  cleanup(): void {
    // Dispose of textures
    for (const texture of this.textures.values()) {
      texture.dispose();
    }
    this.textures.clear();
  }
}
