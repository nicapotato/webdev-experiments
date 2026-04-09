/**
 * Equipment Configuration System
 * Defines all equipment types, tiers, and their effects on gameplay
 */

export interface EquipmentTier {
  id: string;
  name: string;
  price: number;
  description: string;
  stats: Record<string, number>;
}

export interface EquipmentType {
  id: string;
  name: string;
  icon: string;
  description: string;
  tiers: EquipmentTier[];
}

// Pricing tiers as specified: 500, 1000, 4000, 15000, 40000, 100000, 500000, 1000000
const PRICE_TIERS = [500, 1000, 4000, 15000, 40000, 100000, 500000, 1000000];

export const EQUIPMENT_TYPES: Record<string, EquipmentType> = {
  drill: {
    id: "drill",
    name: "Drill",
    icon: "⛏️",
    description: "Controls drilling speed and material penetration",
    tiers: [
      {
        id: "basic",
        name: "Basic Drill",
        price: 0, // Starting equipment
        description: "Standard drilling capabilities",
        stats: { drillSpeed: 1.0, drillPower: 1 },
      },
      {
        id: "steel",
        name: "Steel Drill",
        price: PRICE_TIERS[0], // 500
        description: "25% faster drilling",
        stats: { drillSpeed: 1.25, drillPower: 1 },
      },
      {
        id: "diamond",
        name: "Diamond Drill",
        price: PRICE_TIERS[1], // 1000
        description: "50% faster drilling",
        stats: { drillSpeed: 1.5, drillPower: 2 },
      },
      {
        id: "titanium",
        name: "Titanium Drill",
        price: PRICE_TIERS[2], // 4000
        description: "75% faster, breaks through rock obstacles",
        stats: { drillSpeed: 1.75, drillPower: 3 },
      },
      {
        id: "quantum",
        name: "Quantum Drill",
        price: PRICE_TIERS[3], // 15000
        description: "2x faster drilling",
        stats: { drillSpeed: 2.0, drillPower: 4 },
      },
      {
        id: "plasma",
        name: "Plasma Drill",
        price: PRICE_TIERS[4], // 40000
        description: "3x faster, instant material breakdown",
        stats: { drillSpeed: 3.0, drillPower: 5 },
      },
      {
        id: "antimatter",
        name: "Antimatter Drill",
        price: PRICE_TIERS[5], // 100000
        description: "4x faster, molecular disintegration",
        stats: { drillSpeed: 4.0, drillPower: 6 },
      },
      {
        id: "singularity",
        name: "Singularity Drill",
        price: PRICE_TIERS[6], // 500000
        description: "6x faster, reality-bending power",
        stats: { drillSpeed: 6.0, drillPower: 7 },
      },
      {
        id: "omnidrill",
        name: "Omnidrill",
        price: PRICE_TIERS[7], // 1000000
        description: "10x faster, drills through spacetime",
        stats: { drillSpeed: 10.0, drillPower: 8 },
      },
    ],
  },

  fuelTank: {
    id: "fuelTank",
    name: "Fuel Tank",
    icon: "⛽",
    description: "Increases maximum fuel capacity",
    tiers: [
      {
        id: "basic",
        name: "Basic Tank",
        price: 0,
        description: "500 fuel capacity",
        stats: { maxFuel: 500 },
      },
      {
        id: "extended",
        name: "Extended Tank",
        price: PRICE_TIERS[0], // 500
        description: "750 fuel capacity (+50%)",
        stats: { maxFuel: 750 },
      },
      {
        id: "large",
        name: "Large Tank",
        price: PRICE_TIERS[1], // 1000
        description: "1000 fuel capacity (+100%)",
        stats: { maxFuel: 1000 },
      },
      {
        id: "jumbo",
        name: "Jumbo Tank",
        price: PRICE_TIERS[2], // 4000
        description: "1500 fuel capacity (+200%)",
        stats: { maxFuel: 1500 },
      },
      {
        id: "mega",
        name: "Mega Tank",
        price: PRICE_TIERS[3], // 15000
        description: "2000 fuel capacity (+300%)",
        stats: { maxFuel: 2000 },
      },
      {
        id: "ultra",
        name: "Ultra Tank",
        price: PRICE_TIERS[4], // 40000
        description: "3000 fuel capacity (+500%)",
        stats: { maxFuel: 3000 },
      },
      {
        id: "infinite",
        name: "Infinite Tank",
        price: PRICE_TIERS[5], // 100000
        description: "5000 fuel capacity (+900%)",
        stats: { maxFuel: 5000 },
      },
      {
        id: "dimensional",
        name: "Dimensional Tank",
        price: PRICE_TIERS[6], // 500000
        description: "8000 fuel capacity (+1500%)",
        stats: { maxFuel: 8000 },
      },
      {
        id: "omnifuel",
        name: "Omnifuel Tank",
        price: PRICE_TIERS[7], // 1000000
        description: "15000 fuel capacity (+2900%)",
        stats: { maxFuel: 15000 },
      },
    ],
  },

  hull: {
    id: "hull",
    name: "Hull Armor",
    icon: "🛡️",
    description: "Increases maximum hull strength",
    tiers: [
      {
        id: "basic",
        name: "Basic Hull",
        price: 0,
        description: "100 hull points",
        stats: { maxHull: 100 },
      },
      {
        id: "reinforced",
        name: "Reinforced Hull",
        price: PRICE_TIERS[0], // 500
        description: "150 hull points (+50%)",
        stats: { maxHull: 150 },
      },
      {
        id: "armored",
        name: "Armored Hull",
        price: PRICE_TIERS[1], // 1000
        description: "200 hull points (+100%)",
        stats: { maxHull: 200 },
      },
      {
        id: "composite",
        name: "Composite Hull",
        price: PRICE_TIERS[2], // 4000
        description: "300 hull points (+200%)",
        stats: { maxHull: 300 },
      },
      {
        id: "reactive",
        name: "Reactive Hull",
        price: PRICE_TIERS[3], // 15000
        description: "450 hull points (+350%)",
        stats: { maxHull: 450 },
      },
      {
        id: "adaptive",
        name: "Adaptive Hull",
        price: PRICE_TIERS[4], // 40000
        description: "650 hull points (+550%)",
        stats: { maxHull: 650 },
      },
      {
        id: "quantum",
        name: "Quantum Hull",
        price: PRICE_TIERS[5], // 100000
        description: "900 hull points (+800%)",
        stats: { maxHull: 900 },
      },
      {
        id: "temporal",
        name: "Temporal Hull",
        price: PRICE_TIERS[6], // 500000
        description: "1300 hull points (+1200%)",
        stats: { maxHull: 1300 },
      },
      {
        id: "omnishield",
        name: "Omnishield Hull",
        price: PRICE_TIERS[7], // 1000000
        description: "2000 hull points (+1900%)",
        stats: { maxHull: 2000 },
      },
    ],
  },

  engine: {
    id: "engine",
    name: "Engine",
    icon: "🚀",
    description: "Improves movement speed and fuel efficiency",
    tiers: [
      {
        id: "basic",
        name: "Basic Engine",
        price: 0,
        description: "Standard movement and efficiency",
        stats: { moveSpeed: 1.0, fuelEfficiency: 1.0 },
      },
      {
        id: "improved",
        name: "Improved Engine",
        price: PRICE_TIERS[0], // 500
        description: "10% faster, 10% more efficient",
        stats: { moveSpeed: 1.1, fuelEfficiency: 0.9 },
      },
      {
        id: "turbo",
        name: "Turbo Engine",
        price: PRICE_TIERS[1], // 1000
        description: "25% faster, 20% more efficient",
        stats: { moveSpeed: 1.25, fuelEfficiency: 0.8 },
      },
      {
        id: "supercharged",
        name: "Supercharged Engine",
        price: PRICE_TIERS[2], // 4000
        description: "50% faster, 35% more efficient",
        stats: { moveSpeed: 1.5, fuelEfficiency: 0.65 },
      },
      {
        id: "hybrid",
        name: "Hybrid Engine",
        price: PRICE_TIERS[3], // 15000
        description: "75% faster, 50% more efficient",
        stats: { moveSpeed: 1.75, fuelEfficiency: 0.5 },
      },
      {
        id: "fusion",
        name: "Fusion Engine",
        price: PRICE_TIERS[4], // 40000
        description: "2x faster, 70% more efficient",
        stats: { moveSpeed: 2.0, fuelEfficiency: 0.3 },
      },
      {
        id: "antimatter",
        name: "Antimatter Engine",
        price: PRICE_TIERS[5], // 100000
        description: "3x faster, 85% more efficient",
        stats: { moveSpeed: 3.0, fuelEfficiency: 0.15 },
      },
      {
        id: "warp",
        name: "Warp Engine",
        price: PRICE_TIERS[6], // 500000
        description: "5x faster, 95% more efficient",
        stats: { moveSpeed: 5.0, fuelEfficiency: 0.05 },
      },
      {
        id: "omnipropulsion",
        name: "Omnipropulsion",
        price: PRICE_TIERS[7], // 1000000
        description: "10x faster, 99% more efficient",
        stats: { moveSpeed: 10.0, fuelEfficiency: 0.01 },
      },
    ],
  },

  cargoBay: {
    id: "cargoBay",
    name: "Cargo Bay",
    icon: "📦",
    description: "Increases cargo capacity and reduces weight penalties",
    tiers: [
      {
        id: "basic",
        name: "Basic Bay",
        price: 0,
        description: "Standard cargo capacity",
        stats: { cargoCapacity: 100, weightReduction: 0 },
      },
      {
        id: "expanded",
        name: "Expanded Bay",
        price: PRICE_TIERS[0], // 500
        description: "150 capacity, 10% less weight penalty",
        stats: { cargoCapacity: 150, weightReduction: 0.1 },
      },
      {
        id: "reinforced",
        name: "Reinforced Bay",
        price: PRICE_TIERS[1], // 1000
        description: "200 capacity, 20% less weight penalty",
        stats: { cargoCapacity: 200, weightReduction: 0.2 },
      },
      {
        id: "modular",
        name: "Modular Bay",
        price: PRICE_TIERS[2], // 4000
        description: "300 capacity, 35% less weight penalty",
        stats: { cargoCapacity: 300, weightReduction: 0.35 },
      },
      {
        id: "compression",
        name: "Compression Bay",
        price: PRICE_TIERS[3], // 15000
        description: "500 capacity, 50% less weight penalty",
        stats: { cargoCapacity: 500, weightReduction: 0.5 },
      },
      {
        id: "quantum",
        name: "Quantum Bay",
        price: PRICE_TIERS[4], // 40000
        description: "750 capacity, 70% less weight penalty",
        stats: { cargoCapacity: 750, weightReduction: 0.7 },
      },
      {
        id: "dimensional",
        name: "Dimensional Bay",
        price: PRICE_TIERS[5], // 100000
        description: "1200 capacity, 85% less weight penalty",
        stats: { cargoCapacity: 1200, weightReduction: 0.85 },
      },
      {
        id: "infinite",
        name: "Infinite Bay",
        price: PRICE_TIERS[6], // 500000
        description: "2000 capacity, 95% less weight penalty",
        stats: { cargoCapacity: 2000, weightReduction: 0.95 },
      },
      {
        id: "omnistorage",
        name: "Omnistorage Bay",
        price: PRICE_TIERS[7], // 1000000
        description: "5000 capacity, 99% less weight penalty",
        stats: { cargoCapacity: 5000, weightReduction: 0.99 },
      },
    ],
  },

  radiator: {
    id: "radiator",
    name: "Radiator",
    icon: "❄️",
    description: "Reduces drilling heat and enables deeper mining",
    tiers: [
      {
        id: "basic",
        name: "Basic Radiator",
        price: 0,
        description: "Standard heat dissipation",
        stats: { heatReduction: 0, depthBonus: 0 },
      },
      {
        id: "enhanced",
        name: "Enhanced Radiator",
        price: PRICE_TIERS[0], // 500
        description: "25% heat reduction, +100m depth",
        stats: { heatReduction: 0.25, depthBonus: 100 },
      },
      {
        id: "advanced",
        name: "Advanced Radiator",
        price: PRICE_TIERS[1], // 1000
        description: "40% heat reduction, +250m depth",
        stats: { heatReduction: 0.4, depthBonus: 250 },
      },
      {
        id: "cooling",
        name: "Cooling System",
        price: PRICE_TIERS[2], // 4000
        description: "60% heat reduction, +500m depth",
        stats: { heatReduction: 0.6, depthBonus: 500 },
      },
      {
        id: "cryogenic",
        name: "Cryogenic Cooler",
        price: PRICE_TIERS[3], // 15000
        description: "75% heat reduction, +1000m depth",
        stats: { heatReduction: 0.75, depthBonus: 1000 },
      },
      {
        id: "absolute",
        name: "Absolute Zero",
        price: PRICE_TIERS[4], // 40000
        description: "90% heat reduction, +2000m depth",
        stats: { heatReduction: 0.9, depthBonus: 2000 },
      },
      {
        id: "quantum",
        name: "Quantum Cooler",
        price: PRICE_TIERS[5], // 100000
        description: "95% heat reduction, +4000m depth",
        stats: { heatReduction: 0.95, depthBonus: 4000 },
      },
      {
        id: "void",
        name: "Void Radiator",
        price: PRICE_TIERS[6], // 500000
        description: "99% heat reduction, +8000m depth",
        stats: { heatReduction: 0.99, depthBonus: 8000 },
      },
      {
        id: "omnifrost",
        name: "Omnifrost System",
        price: PRICE_TIERS[7], // 1000000
        description: "100% heat immunity, unlimited depth",
        stats: { heatReduction: 1.0, depthBonus: 99999 },
      },
    ],
  },
};

/**
 * Helper class for equipment operations
 */
export class EquipmentHelper {
  /**
   * Get equipment tier by ID
   */
  static getTier(equipmentType: string, tierId: string): EquipmentTier | null {
    const equipment = EQUIPMENT_TYPES[equipmentType];
    if (!equipment) return null;

    return equipment.tiers.find((tier) => tier.id === tierId) || null;
  }

  /**
   * Get next available tier for upgrade
   */
  static getNextTier(
    equipmentType: string,
    currentTierId: string,
  ): EquipmentTier | null {
    const equipment = EQUIPMENT_TYPES[equipmentType];
    if (!equipment) return null;

    const currentIndex = equipment.tiers.findIndex(
      (tier) => tier.id === currentTierId,
    );
    if (currentIndex === -1 || currentIndex >= equipment.tiers.length - 1)
      return null;

    return equipment.tiers[currentIndex + 1];
  }

  /**
   * Check if equipment can be upgraded
   */
  static canUpgrade(equipmentType: string, currentTierId: string): boolean {
    return this.getNextTier(equipmentType, currentTierId) !== null;
  }

  /**
   * Get all equipment types for shop display
   */
  static getAllEquipmentTypes(): EquipmentType[] {
    return Object.values(EQUIPMENT_TYPES);
  }

  /**
   * Calculate total stats from all equipped items
   */
  static calculateTotalStats(
    equipment: Record<string, string>,
  ): Record<string, number> {
    const totalStats: Record<string, number> = {};

    Object.entries(equipment).forEach(([equipmentType, tierId]) => {
      const tier = this.getTier(equipmentType, tierId);
      if (tier) {
        Object.entries(tier.stats).forEach(([stat, value]) => {
          totalStats[stat] = (totalStats[stat] || 0) + value;
        });
      }
    });

    return totalStats;
  }
}
