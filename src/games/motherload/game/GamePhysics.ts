import RAPIER from "@dimforge/rapier2d";
import * as THREE from "three";

export interface PhysicsBody {
  rigidBody: RAPIER.RigidBody;
  collider: RAPIER.Collider;
}

export class GamePhysics {
  private world: RAPIER.World;
  private playerBody?: PhysicsBody;
  private worldBounds: PhysicsBody[] = [];
  private scene?: THREE.Scene;
  private playerCollisionBox?: THREE.LineSegments;
  private showCollisionBoxes: boolean = true;

  // World constants
  public static readonly WORLD_WIDTH = 30;
  public static readonly WORLD_HEIGHT = 40;
  public static readonly SKY_HEIGHT = 10;
  public static readonly UNDERGROUND_DEPTH = 300;
  public static readonly SURFACE_Y = 0; // Surface at y=0, sky above, underground below

  constructor() {
    const gravity = new RAPIER.Vector2(0.0, -70.81); // Gravity pointing down
    this.world = new RAPIER.World(gravity);
    this.createWorldBounds();
  }

  setScene(scene: THREE.Scene) {
    this.scene = scene;
  }

  private createWorldBounds() {
    // World boundaries (invisible walls)
    const halfWidth = GamePhysics.WORLD_WIDTH / 2;

    // Left wall
    this.createStaticWall(-halfWidth - 0.5, 0, 1, GamePhysics.WORLD_HEIGHT);

    // Right wall
    this.createStaticWall(halfWidth + 0.5, 0, 1, GamePhysics.WORLD_HEIGHT);

    // Top wall (sky limit)
    this.createStaticWall(
      0,
      GamePhysics.SKY_HEIGHT + 0.5,
      GamePhysics.WORLD_WIDTH + 2,
      1,
    );

    // Bottom wall (underground limit)
    this.createStaticWall(
      0,
      -GamePhysics.UNDERGROUND_DEPTH - 0.5,
      GamePhysics.WORLD_WIDTH + 2,
      1,
    );
  }

  private createStaticWall(
    x: number,
    y: number,
    width: number,
    height: number,
  ): PhysicsBody {
    const rigidBodyDesc = RAPIER.RigidBodyDesc.fixed().setTranslation(x, y);
    const rigidBody = this.world.createRigidBody(rigidBodyDesc);

    const colliderDesc = RAPIER.ColliderDesc.cuboid(width / 2, height / 2);
    const collider = this.world.createCollider(colliderDesc, rigidBody);

    const body = { rigidBody, collider };
    this.worldBounds.push(body);
    return body;
  }

  createPlayerBody(x: number, y: number): PhysicsBody {
    // Create dynamic rigid body for player
    const rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(x, y)
      .setLinearDamping(2.0) // Very low damping for instant responsiveness
      .setAngularDamping(20.0) // Prevent spinning
      .lockRotations(); // Keep upright

    const rigidBody = this.world.createRigidBody(rigidBodyDesc);

    // Create player collider - simple 2D capsule for smooth movement in all directions
    const colliderDesc = RAPIER.ColliderDesc.capsule(0.15, 0.3) // half-height, radius
      .setRestitution(0.1) // Slight bounce to prevent sticking
      .setFriction(0.2); // Very low friction for instant response

    const collider = this.world.createCollider(colliderDesc, rigidBody);

    this.playerBody = { rigidBody, collider };

    // Create collision box visualization
    this.createPlayerCollisionBox();

    return this.playerBody;
  }

  private createPlayerCollisionBox() {
    if (!this.scene) return;

    // Create accurate visual representation of the capsule collision shape
    // Capsule: half-height 0.15, radius 0.3 = shorter pill shape (rounded rectangle)

    const material = new THREE.LineBasicMaterial({
      color: 0x00ff00, // Bright green for visibility
      linewidth: 2,
    });

    // Create capsule outline manually for accurate representation
    const vertices: number[] = [];
    const indices: number[] = [];

    const radius = 0.3;
    const halfHeight = 0.15; // Made shorter to match the physics collider
    const segments = 8;

    let vertexIndex = 0;

    // Left straight edge
    vertices.push(-radius, -halfHeight, 0);
    vertices.push(-radius, halfHeight, 0);
    indices.push(vertexIndex, vertexIndex + 1);
    vertexIndex += 2;

    // Top semicircle
    for (let i = 0; i <= segments; i++) {
      const angle = (Math.PI * i) / segments;
      const x = -Math.cos(angle) * radius;
      const y = halfHeight + Math.sin(angle) * radius;
      vertices.push(x, y, 0);

      if (i > 0) {
        indices.push(vertexIndex - 1, vertexIndex);
      }
      vertexIndex++;
    }

    // Right straight edge
    vertices.push(radius, halfHeight, 0);
    vertices.push(radius, -halfHeight, 0);
    indices.push(vertexIndex - 1, vertexIndex);
    indices.push(vertexIndex, vertexIndex + 1);
    vertexIndex += 2;

    // Bottom semicircle
    for (let i = 0; i <= segments; i++) {
      const angle = Math.PI + (Math.PI * i) / segments;
      const x = -Math.cos(angle) * radius;
      const y = -halfHeight + Math.sin(angle) * radius;
      vertices.push(x, y, 0);

      if (i > 0) {
        indices.push(vertexIndex - 1, vertexIndex);
      }
      vertexIndex++;
    }

    // Connect back to start
    indices.push(vertexIndex - 1, 0);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setIndex(indices);

    this.playerCollisionBox = new THREE.LineSegments(geometry, material);
    this.playerCollisionBox.position.z = 0.1; // Slightly in front of player sprite

    if (this.showCollisionBoxes) {
      this.scene.add(this.playerCollisionBox);
    }
  }

  updatePlayerMovement(
    movement: { x: number; y: number },
    deltaTime: number,
    isFlying: boolean = false,
    equipmentStats?: Record<string, number>,
  ) {
    if (!this.playerBody) return;

    const currentVel = this.playerBody.rigidBody.linvel();
    const baseSpeed = isFlying ? 6 : 4.5; // Base target speeds (higher when flying in open space)
    const equipmentSpeedMultiplier = equipmentStats?.moveSpeed || 1.0; // Equipment speed multiplier
    const targetSpeed = baseSpeed * 1.3 * equipmentSpeedMultiplier; // Equipment affects movement speed

    // Calculate target velocity for instant response
    const targetVelX = movement.x * targetSpeed;
    const targetVelY = movement.y * targetSpeed;

    // For instant responsiveness, use higher values
    const responsiveness = isFlying ? 0.6 : 0.5; // Higher responsiveness when flying (in sky or underground openings)

    // When no input, stop faster
    const stopResponsiveness = isFlying ? 0.3 : 0.4; // How quickly we stop when no input

    let newVelX, newVelY;

    if (movement.x === 0) {
      // Stop faster when no horizontal input
      newVelX = currentVel.x * (1 - stopResponsiveness);
    } else {
      // Move towards target velocity when input is given
      newVelX = currentVel.x + (targetVelX - currentVel.x) * responsiveness;
    }

    if (movement.y === 0) {
      // Stop faster when no vertical input
      newVelY = currentVel.y * (1 - stopResponsiveness);
    } else {
      // Move towards target velocity when input is given
      newVelY = currentVel.y + (targetVelY - currentVel.y) * responsiveness;
    }

    // Apply the new velocity directly for instant response
    this.playerBody.rigidBody.setLinvel({ x: newVelX, y: newVelY }, true);
  }

  getPlayerPosition(): { x: number; y: number } {
    if (!this.playerBody) return { x: 0, y: 0 };

    const translation = this.playerBody.rigidBody.translation();
    return { x: translation.x, y: translation.y };
  }

  getPlayerVelocity(): { x: number; y: number } {
    if (!this.playerBody) return { x: 0, y: 0 };

    const velocity = this.playerBody.rigidBody.linvel();
    return { x: velocity.x, y: velocity.y };
  }

  getPlayerBody(): PhysicsBody | undefined {
    return this.playerBody;
  }

  updatePlayerVisual(playerMesh: THREE.Mesh) {
    const position = this.getPlayerPosition();
    playerMesh.position.x = position.x;
    playerMesh.position.y = position.y;

    // Update collision box position if it exists
    if (this.playerCollisionBox) {
      this.playerCollisionBox.position.x = position.x;
      this.playerCollisionBox.position.y = position.y;
    }
  }

  step(deltaTime: number) {
    this.world.step();
  }

  getWorld(): RAPIER.World {
    return this.world;
  }

  setCollisionBoxesVisible(visible: boolean) {
    this.showCollisionBoxes = visible;

    if (!this.scene || !this.playerCollisionBox) return;

    if (visible && !this.scene.children.includes(this.playerCollisionBox)) {
      this.scene.add(this.playerCollisionBox);
    } else if (
      !visible &&
      this.scene.children.includes(this.playerCollisionBox)
    ) {
      this.scene.remove(this.playerCollisionBox);
    }
  }

  cleanup() {
    // Clean up collision box visualization
    if (this.scene && this.playerCollisionBox) {
      this.scene.remove(this.playerCollisionBox);
    }

    this.world.free();
  }

  static getWorldBounds() {
    const halfWidth = GamePhysics.WORLD_WIDTH / 2;
    return {
      left: -halfWidth,
      right: halfWidth,
      top: GamePhysics.SKY_HEIGHT,
      bottom: -GamePhysics.UNDERGROUND_DEPTH,
      surface: GamePhysics.SURFACE_Y,
    };
  }
}
