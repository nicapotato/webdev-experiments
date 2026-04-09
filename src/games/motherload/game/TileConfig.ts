export enum TileType {
  // Use 0 for empty/air - this will be used for both sky and empty underground spaces
  EMPTY = 0, // Also represents dug out tiles (holes)

  // Basic terrain
  DIRT = 1,
  GRASS = 2,
  CONCRETE = 3,

  // Obstacles
  ROCK = 10,
  LAVA = 11,

  // Common Minerals (20-29)
  BRONZIUM = 20,
  IRONIUM = 21,
  SILVERIUM = 22,

  // Mid-tier Minerals (30-39)
  GOLDIUM = 30,
  PLATINIUM = 31,
  EINSTEINIUM = 32,

  // Gems (40-49)
  EMERALD = 40,
  RUBY = 41,

  // Ultra-rare (50-59)
  DIAMOND = 50,
  AMAZONITE = 51,

  // Treasures (60-69)
  DINOSAUR_BONES = 60,
  MARTIAN_SKELETON = 61,
  TREASURE = 62,
  RELIGIOUS_ARTIFACT = 63,
}

export enum TileCategory {
  DECORATION = "decoration",
  OBSTACLE_HARD = "obstacle-hard",
  OBSTACLE_EXPLOSIVE_DAMAGE = "obstacle-explosive-damage",
  MINERAL = "mineral",
  TREASURE = "treasure",
}

export interface TileProperties {
  name: string;
  imagePath: string;
  category: TileCategory;
  goldCost: number | null; // null for non-collectible items
  weight: number | null; // null for non-weight items
  hardness?: number; // for obstacles - drill time modifier
  damage?: number; // for explosive obstacles
  rarity: number; // 0-100, lower = rarer (for generation probability)
  depthRange?: {
    // depth range where this tile can spawn
    min: number;
    max: number;
  };
}

export const TILE_CONFIG: Record<TileType, TileProperties> = {
  // Basic terrain
  [TileType.EMPTY]: {
    name: "Empty",
    imagePath: "",
    category: TileCategory.DECORATION,
    goldCost: null,
    weight: null,
    rarity: 0,
  },

  [TileType.DIRT]: {
    name: "Dirt",
    imagePath: "/games/motherload/visual/tiles/ground.jpg",
    category: TileCategory.DECORATION,
    goldCost: null, // Dirt no longer contributes weight or value
    weight: null,
    rarity: 85, // Very common
    depthRange: { min: 0, max: 10000 },
  },

  // Surface/decoration
  [TileType.GRASS]: {
    name: "Grass",
    imagePath: "/games/motherload/visual/tiles/grass.jpg",
    category: TileCategory.DECORATION,
    goldCost: null,
    weight: null,
    rarity: 0, // Only used for surface
  },

  [TileType.CONCRETE]: {
    name: "Concrete",
    imagePath: "/games/motherload/visual/tiles/concrete.jpg",
    category: TileCategory.DECORATION,
    goldCost: null,
    weight: null,
    rarity: 0, // Only used under buildings
  },

  // Obstacles
  [TileType.ROCK]: {
    name: "Rock",
    imagePath: "/games/motherload/visual/tiles/rock.jpg",
    category: TileCategory.OBSTACLE_HARD,
    goldCost: null,
    weight: null,
    hardness: 1, // Takes longer to drill
    rarity: 15,
    depthRange: { min: 500, max: 9999 },
  },

  [TileType.LAVA]: {
    name: "Lava",
    imagePath: "/games/motherload/visual/tiles/lava.jpg",
    category: TileCategory.OBSTACLE_EXPLOSIVE_DAMAGE,
    goldCost: null,
    weight: null,
    damage: 10,
    rarity: 2,
    depthRange: { min: 1300, max: 9999 }, // Only deep underground
  },

  // Common Minerals (higher rarity)
  [TileType.BRONZIUM]: {
    name: "Bronzium",
    imagePath: "/games/motherload/visual/tiles/bronzium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 50,
    weight: 1,
    rarity: 12,
    depthRange: { min: 2, max: 800 },
  },

  [TileType.IRONIUM]: {
    name: "Ironium",
    imagePath: "/games/motherload/visual/tiles/ironium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 100,
    weight: 1.5,
    rarity: 8,
    depthRange: { min: 5, max: 1200 },
  },

  [TileType.SILVERIUM]: {
    name: "Silverium",
    imagePath: "/games/motherload/visual/tiles/silverium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 200,
    weight: 0.7,
    rarity: 6,
    depthRange: { min: 60, max: 1800 },
  },

  // Mid-tier Minerals
  [TileType.GOLDIUM]: {
    name: "Goldium",
    imagePath: "/games/motherload/visual/tiles/goldium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 3000,
    weight: 2,
    rarity: 4,
    depthRange: { min: 120, max: 1800 },
  },

  [TileType.PLATINIUM]: {
    name: "Platinium",
    imagePath: "/games/motherload/visual/tiles/platinium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 4000,
    weight: 1.5,
    rarity: 3,
    depthRange: { min: 200, max: 1900 },
  },

  [TileType.EINSTEINIUM]: {
    name: "Einsteinium",
    imagePath: "/games/motherload/visual/tiles/einsteinium.jpg",
    category: TileCategory.MINERAL,
    goldCost: 1000,
    weight: 2,
    rarity: 5,
    depthRange: { min: 350, max: 2000 },
  },

  // Gems
  [TileType.EMERALD]: {
    name: "Emerald",
    imagePath: "/games/motherload/visual/tiles/emerald.jpg",
    category: TileCategory.MINERAL,
    goldCost: 20000,
    weight: 2,
    rarity: 2,
    depthRange: { min: 500, max: 2000 },
  },

  [TileType.RUBY]: {
    name: "Ruby",
    imagePath: "/games/motherload/visual/tiles/ruby.jpg",
    category: TileCategory.MINERAL,
    goldCost: 20000,
    weight: 1.5,
    rarity: 2,
    depthRange: { min: 750, max: 2000 },
  },

  // Rare/Ultra-rare
  [TileType.DIAMOND]: {
    name: "Diamond",
    imagePath: "/games/motherload/visual/tiles/diamond.jpg",
    category: TileCategory.MINERAL,
    goldCost: 500000,
    weight: 10,
    rarity: 0.5,
    depthRange: { min: 1200, max: 9999 },
  },

  [TileType.AMAZONITE]: {
    name: "Amazonite",
    imagePath: "/games/motherload/visual/tiles/amazonite.jpg",
    category: TileCategory.MINERAL,
    goldCost: 500000,
    weight: 10,
    rarity: 0.5,
    depthRange: { min: 1800, max: 9999 },
  },

  // Treasures
  [TileType.DINOSAUR_BONES]: {
    name: "Dinosaur Bones",
    imagePath: "/games/motherload/visual/tiles/dinosaur_bones.jpg",
    category: TileCategory.TREASURE,
    goldCost: 1000,
    weight: 1,
    rarity: 4,
    depthRange: { min: 200, max: 1000 },
  },

  [TileType.MARTIAN_SKELETON]: {
    name: "Martian Skeleton",
    imagePath: "/games/motherload/visual/tiles/martian_skeleton.jpg",
    category: TileCategory.TREASURE,
    goldCost: 12000,
    weight: 1,
    rarity: 1.5,
    depthRange: { min: 1400, max: 2000 },
  },

  [TileType.TREASURE]: {
    name: "Treasure",
    imagePath: "/games/motherload/visual/tiles/treasure.jpg",
    category: TileCategory.TREASURE,
    goldCost: 12000,
    weight: 1,
    rarity: 1.5,
    depthRange: { min: 400, max: 2000 },
  },

  [TileType.RELIGIOUS_ARTIFACT]: {
    name: "Religious Artifact",
    imagePath: "/games/motherload/visual/tiles/religious_artifact.jpg",
    category: TileCategory.TREASURE,
    goldCost: 60000,
    weight: 1,
    rarity: 0.8,
    depthRange: { min: 800, max: 2000 },
  },
};

// Tile encoding utilities (now working directly with enum values)
export class TileEncoder {
  /**
   * Encode a tile type to an unsigned integer (now just returns the enum value)
   */
  static encode(tileType: TileType): number {
    return tileType as number;
  }

  /**
   * Decode an unsigned integer back to a tile type (now just casts back to enum)
   */
  static decode(encoded: number): TileType {
    return encoded as TileType;
  }

  /**
   * Check if an encoded value represents empty space (sky or dug areas)
   */
  static isEmpty(encoded: number): boolean {
    return encoded === TileType.EMPTY;
  }

  /**
   * Check if an encoded value represents a solid tile (has collision)
   */
  static isSolid(encoded: number): boolean {
    return encoded !== TileType.EMPTY;
  }
}

// Helper functions for tile generation
export class TileConfigHelper {
  /**
   * Get tiles that can spawn at a given depth
   */
  static getTilesForDepth(depth: number): TileType[] {
    const availableTiles: TileType[] = [];

    for (const tileTypeKey of Object.keys(TILE_CONFIG)) {
      const tileType = parseInt(tileTypeKey) as TileType;
      const config = TILE_CONFIG[tileType];

      if (
        config.depthRange &&
        depth >= config.depthRange.min &&
        depth <= config.depthRange.max &&
        config.rarity > 0
      ) {
        availableTiles.push(tileType);
      }
    }

    return availableTiles;
  }

  /**
   * Generate a random tile for a given depth based on rarity weights
   */
  static generateRandomTileForDepth(depth: number): TileType {
    const availableTiles = this.getTilesForDepth(depth);

    if (availableTiles.length === 0) {
      return TileType.DIRT; // Fallback to dirt
    }

    // Create weighted array based on rarity
    const weightedTiles: TileType[] = [];

    for (const tileType of availableTiles) {
      const config = TILE_CONFIG[tileType];
      const weight = Math.max(1, Math.floor(config.rarity));

      // Add tile multiple times based on its rarity weight
      for (let i = 0; i < weight; i++) {
        weightedTiles.push(tileType);
      }
    }

    // Select random tile from weighted array
    const randomIndex = Math.floor(Math.random() * weightedTiles.length);
    return weightedTiles[randomIndex];
  }

  /**
   * Check if a tile is collectible (has gold cost and weight)
   */
  static isCollectible(tileType: TileType): boolean {
    const config = TILE_CONFIG[tileType];
    return config.goldCost !== null && config.weight !== null;
  }

  /**
   * Check if a tile is an obstacle
   */
  static isObstacle(tileType: TileType): boolean {
    const config = TILE_CONFIG[tileType];
    return (
      config.category === TileCategory.OBSTACLE_HARD ||
      config.category === TileCategory.OBSTACLE_EXPLOSIVE_DAMAGE
    );
  }

  /**
   * Get drill time modifier for a tile
   */
  static getDrillTimeModifier(tileType: TileType): number {
    const config = TILE_CONFIG[tileType];

    if (config.category === TileCategory.OBSTACLE_HARD && config.hardness) {
      return config.hardness;
    }

    return 1.0; // Normal drill time
  }
}
