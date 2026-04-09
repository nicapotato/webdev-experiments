export interface PlayerPositionLog {
  timestamp: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  hitbox: {
    topLeft: { x: number; y: number };
    topRight: { x: number; y: number };
    bottomLeft: { x: number; y: number };
    bottomRight: { x: number; y: number };
  };
  isIdle: boolean;
}

export interface CollisionLog {
  timestamp: number;
  playerPosition: { x: number; y: number };
  objectPosition: { x: number; y: number };
  objectType: string;
  collisionType: "player_collision" | "terrain_collision";
}

export interface DrillingLog {
  timestamp: number;
  event: "drilling_start" | "drilling_end";
  direction: "down" | "left" | "right";
  playerPosition: { x: number; y: number };
  targetPosition?: { x: number; y: number };
  tilePosition?: { x: number; y: number };
}

export class GameLogger {
  private lastPositionLogTime = 0;
  private readonly POSITION_LOG_INTERVAL = 500; // 0.5 seconds in milliseconds
  private readonly PLAYER_COLLIDER_RADIUS = 0.385; // From GamePhysics.ts - smaller to prevent penetration

  // Enable/disable logging categories
  private enablePositionLogging = true;
  private enableCollisionLogging = true;
  private enableDrillingLogging = true;

  constructor() {
    console.log(
      "🔍 GameLogger initialized - Position logs every 0.5s, Collision tracking enabled, Drilling events tracked",
    );
  }

  // Toggle logging categories
  setPositionLogging(enabled: boolean) {
    this.enablePositionLogging = enabled;
    console.log(`🔍 Position logging ${enabled ? "enabled" : "disabled"}`);
  }

  setCollisionLogging(enabled: boolean) {
    this.enableCollisionLogging = enabled;
    console.log(`🔍 Collision logging ${enabled ? "enabled" : "disabled"}`);
  }

  setDrillingLogging(enabled: boolean) {
    this.enableDrillingLogging = enabled;
    console.log(`🔍 Drilling logging ${enabled ? "enabled" : "disabled"}`);
  }

  // Log player position and 4-corner hitbox every 0.5 seconds when not idle
  logPlayerPosition(
    position: { x: number; y: number },
    velocity: { x: number; y: number },
    currentTime: number,
  ) {
    if (!this.enablePositionLogging) return;

    // Check if enough time has passed
    if (currentTime - this.lastPositionLogTime < this.POSITION_LOG_INTERVAL) {
      return;
    }

    // Check if player is idle (no velocity and no speed)
    const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
    const isIdle = speed < 0.01; // Very small threshold to account for floating point precision

    if (isIdle) {
      return; // Don't log when idle
    }

    // Calculate 4-corner hitbox coordinates
    const radius = this.PLAYER_COLLIDER_RADIUS;
    const hitbox = {
      topLeft: { x: position.x - radius, y: position.y + radius },
      topRight: { x: position.x + radius, y: position.y + radius },
      bottomLeft: { x: position.x - radius, y: position.y - radius },
      bottomRight: { x: position.x + radius, y: position.y - radius },
    };

    const logData: PlayerPositionLog = {
      timestamp: currentTime,
      position: { x: position.x, y: position.y },
      velocity: { x: velocity.x, y: velocity.y },
      hitbox,
      isIdle,
    };

    console.log(`📍 PLAYER_POSITION [${new Date(currentTime).toISOString()}]`, {
      position: `(${position.x.toFixed(3)}, ${position.y.toFixed(3)})`,
      velocity: `(${velocity.x.toFixed(3)}, ${velocity.y.toFixed(3)})`,
      speed: speed.toFixed(3),
      hitbox: {
        TL: `(${hitbox.topLeft.x.toFixed(3)}, ${hitbox.topLeft.y.toFixed(3)})`,
        TR: `(${hitbox.topRight.x.toFixed(3)}, ${hitbox.topRight.y.toFixed(3)})`,
        BL: `(${hitbox.bottomLeft.x.toFixed(3)}, ${hitbox.bottomLeft.y.toFixed(3)})`,
        BR: `(${hitbox.bottomRight.x.toFixed(3)}, ${hitbox.bottomRight.y.toFixed(3)})`,
      },
    });

    this.lastPositionLogTime = currentTime;
  }

  // Log collision events with player and object coordinates
  logCollision(
    playerPosition: { x: number; y: number },
    objectPosition: { x: number; y: number },
    objectType: string,
    collisionType:
      | "player_collision"
      | "terrain_collision" = "player_collision",
  ) {
    if (!this.enableCollisionLogging) return;

    const logData: CollisionLog = {
      timestamp: performance.now(),
      playerPosition: { x: playerPosition.x, y: playerPosition.y },
      objectPosition: { x: objectPosition.x, y: objectPosition.y },
      objectType,
      collisionType,
    };

    console.log(`💥 COLLISION [${new Date(logData.timestamp).toISOString()}]`, {
      type: collisionType,
      objectType,
      playerPos: `(${playerPosition.x.toFixed(3)}, ${playerPosition.y.toFixed(3)})`,
      objectPos: `(${objectPosition.x.toFixed(3)}, ${objectPosition.y.toFixed(3)})`,
      distance: Math.sqrt(
        Math.pow(objectPosition.x - playerPosition.x, 2) +
          Math.pow(objectPosition.y - playerPosition.y, 2),
      ).toFixed(3),
    });
  }

  // Log drilling start events
  logDrillingStart(
    direction: "down" | "left" | "right",
    playerPosition: { x: number; y: number },
    targetPosition: { x: number; y: number },
    tilePosition?: { x: number; y: number },
  ) {
    if (!this.enableDrillingLogging) return;

    const logData: DrillingLog = {
      timestamp: performance.now(),
      event: "drilling_start",
      direction,
      playerPosition: { x: playerPosition.x, y: playerPosition.y },
      targetPosition: { x: targetPosition.x, y: targetPosition.y },
      tilePosition,
    };

    console.log(
      `⛏️  DRILLING_START [${new Date(logData.timestamp).toISOString()}]`,
      {
        direction,
        playerPos: `(${playerPosition.x.toFixed(3)}, ${playerPosition.y.toFixed(3)})`,
        targetPos: `(${targetPosition.x.toFixed(3)}, ${targetPosition.y.toFixed(3)})`,
        tilePos: tilePosition
          ? `(${tilePosition.x}, ${tilePosition.y})`
          : "N/A",
        distance: Math.sqrt(
          Math.pow(targetPosition.x - playerPosition.x, 2) +
            Math.pow(targetPosition.y - playerPosition.y, 2),
        ).toFixed(3),
      },
    );
  }

  // Log drilling end events
  logDrillingEnd(
    direction: "down" | "left" | "right",
    playerPosition: { x: number; y: number },
    tilePosition: { x: number; y: number },
  ) {
    if (!this.enableDrillingLogging) return;

    const logData: DrillingLog = {
      timestamp: performance.now(),
      event: "drilling_end",
      direction,
      playerPosition: { x: playerPosition.x, y: playerPosition.y },
      tilePosition,
    };

    console.log(
      `✅ DRILLING_END [${new Date(logData.timestamp).toISOString()}]`,
      {
        direction,
        playerPos: `(${playerPosition.x.toFixed(3)}, ${playerPosition.y.toFixed(3)})`,
        dugTile: `(${tilePosition.x}, ${tilePosition.y})`,
        success: true,
      },
    );
  }

  // Utility method to log debug information
  logDebug(message: string, data?: unknown) {
    console.log(`🔧 DEBUG: ${message}`, data || "");
  }

  // Get current logging status
  getLoggingStatus() {
    return {
      positionLogging: this.enablePositionLogging,
      collisionLogging: this.enableCollisionLogging,
      drillingLogging: this.enableDrillingLogging,
      positionLogInterval: this.POSITION_LOG_INTERVAL,
    };
  }
}
