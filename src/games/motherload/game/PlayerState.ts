import { TileType } from "./TileConfig";
import { EquipmentHelper, EQUIPMENT_TYPES } from "./EquipmentConfig";

/**
 * Consolidated Player State - Single Source of Truth for Gameplay Data
 * This class manages all player-related gameplay data in one place.
 * Use the same instance everywhere - do not copy values.
 *
 * UI settings like sound/collision boxes are kept in their respective GUI classes.
 */
export class PlayerState {
  // Core player stats
  private _fuel: number = 500;
  private _maxFuel: number = 500;
  private _hull: number = 100;
  private _maxHull: number = 100;
  private _money: number = 0;
  private _depth: number = 0;

  // Game session tracking
  private _gameStartTime: number = Date.now();
  private _isGameOver: boolean = false;

  // Cargo system
  private _minerals: Partial<Record<TileType, number>> = {};
  private _cargoWeight: number = 0;

  // Items and equipment
  private _items: Record<string, number> = {};
  private _equipment: {
    drill: string;
    hull: string;
    engine: string;
    fuelTank: string;
    radiator: string;
    cargoBay: string;
  } = {
    drill: "basic",
    hull: "basic",
    engine: "basic",
    fuelTank: "basic",
    radiator: "basic",
    cargoBay: "basic",
  };

  // Player skills
  private _skills: {
    blastRange: number;
    healthReserve: number;
  } = {
    blastRange: 0,
    healthReserve: 0,
  };

  // Event system for state changes
  private _listeners: Set<(changes: StateChangeEvent) => void> = new Set();

  // Core Stats Getters
  get fuel(): number {
    return this._fuel;
  }
  get maxFuel(): number {
    return this._maxFuel;
  }
  get hull(): number {
    return this._hull;
  }
  get maxHull(): number {
    return this._maxHull;
  }
  get money(): number {
    return this._money;
  }
  get depth(): number {
    return this._depth;
  }

  // Game session getters
  get gameStartTime(): number {
    return this._gameStartTime;
  }
  get isGameOver(): boolean {
    return this._isGameOver;
  }
  get gameTimeElapsed(): number {
    return Date.now() - this._gameStartTime;
  }

  // Cargo Getters
  get minerals(): Partial<Record<TileType, number>> {
    return { ...this._minerals }; // Return copy to prevent external mutation
  }
  get cargoWeight(): number {
    return this._cargoWeight;
  }

  // Items and Equipment Getters
  get items(): Record<string, number> {
    return { ...this._items }; // Return copy to prevent external mutation
  }
  get equipment(): typeof this._equipment {
    return { ...this._equipment }; // Return copy to prevent external mutation
  }

  // Skills Getters
  get skills(): typeof this._skills {
    return { ...this._skills }; // Return copy to prevent external mutation
  }

  // Pointed update methods - only change specific values
  updateFuel(value: number): void {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`Invalid fuel value: ${value}. Must be a valid number.`);
    }
    const oldValue = this._fuel;
    this._fuel = Math.max(0, Math.min(value, this._maxFuel));
    this._notifyChange({ type: "fuel", oldValue, newValue: this._fuel });

    // Check for game over condition
    this._checkGameOver();
  }

  updateMaxFuel(value: number): void {
    if (typeof value !== "number" || isNaN(value) || value <= 0) {
      throw new Error(
        `Invalid maxFuel value: ${value}. Must be a positive number.`,
      );
    }
    const oldValue = this._maxFuel;
    this._maxFuel = value;
    // Ensure current fuel doesn't exceed new max
    if (this._fuel > this._maxFuel) {
      this._fuel = this._maxFuel;
    }
    this._notifyChange({ type: "maxFuel", oldValue, newValue: this._maxFuel });
  }

  updateHull(value: number): void {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`Invalid hull value: ${value}. Must be a valid number.`);
    }
    const oldValue = this._hull;
    this._hull = Math.max(0, Math.min(value, this._maxHull));
    this._notifyChange({ type: "hull", oldValue, newValue: this._hull });

    // Check for game over condition
    this._checkGameOver();
  }

  updateMaxHull(value: number): void {
    if (typeof value !== "number" || isNaN(value) || value <= 0) {
      throw new Error(
        `Invalid maxHull value: ${value}. Must be a positive number.`,
      );
    }
    const oldValue = this._maxHull;
    this._maxHull = value;
    // Ensure current hull doesn't exceed new max
    if (this._hull > this._maxHull) {
      this._hull = this._maxHull;
    }
    this._notifyChange({ type: "maxHull", oldValue, newValue: this._maxHull });
  }

  updateMoney(value: number): void {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`Invalid money value: ${value}. Must be a valid number.`);
    }
    const oldValue = this._money;
    this._money = Math.max(0, value);
    this._notifyChange({ type: "money", oldValue, newValue: this._money });
  }

  updateDepth(value: number): void {
    if (typeof value !== "number" || isNaN(value)) {
      throw new Error(`Invalid depth value: ${value}. Must be a valid number.`);
    }
    const oldValue = this._depth;
    this._depth = Math.max(0, value);
    this._notifyChange({ type: "depth", oldValue, newValue: this._depth });
  }

  // Cargo management methods
  addMineral(tileType: TileType, quantity: number): void {
    if (!Object.values(TileType).includes(tileType)) {
      throw new Error(`Invalid tile type: ${tileType}`);
    }
    if (typeof quantity !== "number" || isNaN(quantity) || quantity <= 0) {
      throw new Error(
        `Invalid quantity: ${quantity}. Must be a positive number.`,
      );
    }

    const currentQuantity = this._minerals[tileType] || 0;
    this._minerals[tileType] = currentQuantity + quantity;
    this._recalculateCargoWeight();
    this._notifyChange({
      type: "minerals",
      oldValue: { ...this._minerals, [tileType]: currentQuantity },
      newValue: { ...this._minerals },
    });
  }

  removeMineral(tileType: TileType, quantity: number): void {
    if (!Object.values(TileType).includes(tileType)) {
      throw new Error(`Invalid tile type: ${tileType}`);
    }
    if (typeof quantity !== "number" || isNaN(quantity) || quantity <= 0) {
      throw new Error(
        `Invalid quantity: ${quantity}. Must be a positive number.`,
      );
    }

    const currentQuantity = this._minerals[tileType] || 0;
    if (currentQuantity < quantity) {
      throw new Error(
        `Cannot remove ${quantity} of ${tileType}. Only ${currentQuantity} available.`,
      );
    }

    const newQuantity = currentQuantity - quantity;
    if (newQuantity === 0) {
      delete this._minerals[tileType];
    } else {
      this._minerals[tileType] = newQuantity;
    }

    this._recalculateCargoWeight();
    this._notifyChange({
      type: "minerals",
      oldValue: { ...this._minerals, [tileType]: currentQuantity },
      newValue: { ...this._minerals },
    });
  }

  clearCargo(): void {
    const oldMinerals = { ...this._minerals };
    this._minerals = {};
    this._cargoWeight = 0;
    this._notifyChange({
      type: "minerals",
      oldValue: oldMinerals,
      newValue: {},
    });
  }

  // Item management methods
  addItem(itemName: string, quantity: number): void {
    if (!itemName || typeof itemName !== "string") {
      throw new Error(`Invalid item name: ${itemName}`);
    }
    if (typeof quantity !== "number" || isNaN(quantity) || quantity <= 0) {
      throw new Error(
        `Invalid quantity: ${quantity}. Must be a positive number.`,
      );
    }

    const currentQuantity = this._items[itemName] || 0;
    this._items[itemName] = currentQuantity + quantity;
    this._notifyChange({
      type: "items",
      oldValue: { ...this._items, [itemName]: currentQuantity },
      newValue: { ...this._items },
    });
  }

  removeItem(itemName: string, quantity: number): void {
    if (!itemName || typeof itemName !== "string") {
      throw new Error(`Invalid item name: ${itemName}`);
    }
    if (typeof quantity !== "number" || isNaN(quantity) || quantity <= 0) {
      throw new Error(
        `Invalid quantity: ${quantity}. Must be a positive number.`,
      );
    }

    const currentQuantity = this._items[itemName] || 0;
    if (currentQuantity < quantity) {
      throw new Error(
        `Cannot remove ${quantity} of ${itemName}. Only ${currentQuantity} available.`,
      );
    }

    const newQuantity = currentQuantity - quantity;
    if (newQuantity === 0) {
      delete this._items[itemName];
    } else {
      this._items[itemName] = newQuantity;
    }

    this._notifyChange({
      type: "items",
      oldValue: { ...this._items, [itemName]: currentQuantity },
      newValue: { ...this._items },
    });
  }

  // Equipment management
  updateEquipment(slot: keyof typeof this._equipment, value: string): void {
    if (!this._equipment.hasOwnProperty(slot)) {
      throw new Error(`Invalid equipment slot: ${slot}`);
    }
    if (!value || typeof value !== "string") {
      throw new Error(`Invalid equipment value: ${value}`);
    }

    const oldValue = { ...this._equipment };
    this._equipment[slot] = value;

    // Apply equipment effects immediately when equipment changes
    this._applyEquipmentEffects();

    this._notifyChange({
      type: "equipment",
      oldValue,
      newValue: { ...this._equipment },
    });
  }

  // Get current equipment stats
  getEquipmentStats(): Record<string, number> {
    return EquipmentHelper.calculateTotalStats(this._equipment);
  }

  // Check if equipment can be upgraded
  canUpgradeEquipment(equipmentType: keyof typeof this._equipment): boolean {
    const currentTier = this._equipment[equipmentType];
    return EquipmentHelper.canUpgrade(equipmentType, currentTier);
  }

  // Get next equipment tier info
  getNextEquipmentTier(equipmentType: keyof typeof this._equipment) {
    const currentTier = this._equipment[equipmentType];
    return EquipmentHelper.getNextTier(equipmentType, currentTier);
  }

  // Get current equipment tier info
  getCurrentEquipmentTier(equipmentType: keyof typeof this._equipment) {
    const currentTier = this._equipment[equipmentType];
    return EquipmentHelper.getTier(equipmentType, currentTier);
  }

  // Game over and scoring methods
  private _checkGameOver(): void {
    if (!this._isGameOver && (this._fuel <= 0 || this._hull <= 0)) {
      this._isGameOver = true;
      const reason = this._fuel <= 0 ? "OUT OF FUEL" : "HULL DESTROYED";
      console.log(`💀 GAME OVER: ${reason}`);
      this._notifyChange({
        type: "gameOver",
        oldValue: false,
        newValue: { reason, score: this.calculateFinalScore() },
      });
    }
  }

  calculateFinalScore(): number {
    // Score calculation based on multiple factors
    const moneyScore = this._money; // Direct money value
    const depthBonus = Math.floor(this._depth * 10); // 10 points per meter depth
    const timeBonus = Math.max(0, 300000 - this.gameTimeElapsed) / 1000; // Bonus for quick completion (5 min baseline)
    const cargoBonus = this._cargoWeight * 50; // 50 points per cargo item still held
    const survivalBonus = this._hull > 0 && this._fuel > 0 ? 10000 : 0; // Bonus for staying alive

    const totalScore = Math.floor(
      moneyScore + depthBonus + timeBonus + cargoBonus + survivalBonus,
    );
    return Math.max(0, totalScore);
  }

  resetGame(): void {
    console.log("🔄 Resetting game...");

    // Reset all core stats to initial values
    this._fuel = 500;
    this._maxFuel = 500;
    this._hull = 100;
    this._maxHull = 100;
    this._money = 0;
    this._depth = 0;

    // Clear cargo and items
    this._minerals = {};
    this._cargoWeight = 0;
    this._items = {};

    // Reset equipment to basic
    this._equipment = {
      drill: "basic",
      hull: "basic",
      engine: "basic",
      fuelTank: "basic",
      radiator: "basic",
      cargoBay: "basic",
    };

    // Reset skills
    this._skills = {
      blastRange: 0,
      healthReserve: 0,
    };

    // Reset game session
    this._gameStartTime = Date.now();
    this._isGameOver = false;

    // Apply equipment effects to set correct initial values
    this._applyEquipmentEffects();

    // Notify all listeners of the reset
    this._notifyChange({
      type: "gameReset",
      oldValue: null,
      newValue: "reset",
    });

    console.log("✅ Game reset complete");
  }

  formatPlayTime(): string {
    const totalMs = this.gameTimeElapsed;
    const totalSeconds = Math.floor(totalMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }

  // Skills management
  updateSkill(skill: keyof typeof this._skills, value: number): void {
    if (!this._skills.hasOwnProperty(skill)) {
      throw new Error(`Invalid skill: ${skill}`);
    }
    if (typeof value !== "number" || isNaN(value) || value < 0) {
      throw new Error(
        `Invalid skill value: ${value}. Must be a non-negative number.`,
      );
    }

    const oldValue = { ...this._skills };
    this._skills[skill] = value;
    this._notifyChange({
      type: "skills",
      oldValue,
      newValue: { ...this._skills },
    });
  }

  // Event system
  addStateChangeListener(listener: (changes: StateChangeEvent) => void): void {
    this._listeners.add(listener);
  }

  removeStateChangeListener(
    listener: (changes: StateChangeEvent) => void,
  ): void {
    this._listeners.delete(listener);
  }

  // Cleanup method to remove all listeners and reset state
  cleanup(): void {
    console.log("🧹 PlayerState cleanup: Removing all listeners...");
    this._listeners.clear();
    console.log("🧹 PlayerState cleanup complete");
  }

  // Helper to get listener count for debugging
  getListenerCount(): number {
    return this._listeners.size;
  }

  // Private methods
  private _recalculateCargoWeight(): void {
    // This is a simplified weight calculation
    // In a real implementation, you'd look up actual mineral weights
    this._cargoWeight = Object.values(this._minerals).reduce(
      (sum, quantity) => sum + quantity,
      0,
    );
  }

  // Apply equipment effects to stats (called when equipment changes)
  private _applyEquipmentEffects(): void {
    const stats = this.getEquipmentStats();

    // Update max fuel based on fuel tank
    if (stats.maxFuel && stats.maxFuel !== this._maxFuel) {
      const oldMaxFuel = this._maxFuel;
      this._maxFuel = stats.maxFuel;
      // Maintain current fuel percentage when tank capacity changes
      const fuelPercentage = this._fuel / oldMaxFuel;
      this._fuel = Math.min(
        this._fuel,
        Math.floor(fuelPercentage * this._maxFuel),
      );
    }

    // Update max hull based on hull armor
    if (stats.maxHull && stats.maxHull !== this._maxHull) {
      const oldMaxHull = this._maxHull;
      this._maxHull = stats.maxHull;
      // Maintain current hull percentage when capacity changes
      const hullPercentage = this._hull / oldMaxHull;
      this._hull = Math.min(
        this._hull,
        Math.floor(hullPercentage * this._maxHull),
      );
    }
  }

  private _notifyChange(change: StateChangeEvent): void {
    this._listeners.forEach((listener) => {
      try {
        listener(change);
      } catch (error) {
        console.error("Error in state change listener:", error);
      }
    });
  }

  // Utility methods for compatibility with existing code
  getCargoForGUI(): Record<string, number> {
    const result: Record<string, number> = {};
    Object.entries(this._minerals).forEach(([tileType, quantity]) => {
      // Convert TileType enum to string name for GUI compatibility
      const tileKey = TileType[parseInt(tileType) as TileType];
      if (tileKey) {
        result[tileKey.toLowerCase()] = quantity;
      }
    });
    return result;
  }

  // Bulk update method for initial state setup
  initializeState(initialState: {
    fuel?: number;
    maxFuel?: number;
    hull?: number;
    maxHull?: number;
    money?: number;
    depth?: number;
    minerals?: Partial<Record<TileType, number>>;
    items?: Record<string, number>;
    equipment?: Partial<{
      drill: string;
      hull: string;
      engine: string;
      fuelTank: string;
      radiator: string;
      cargoBay: string;
    }>;
    skills?: Partial<{
      blastRange: number;
      healthReserve: number;
    }>;
  }): void {
    // Validate all values before applying any changes
    if (
      initialState.fuel !== undefined &&
      (typeof initialState.fuel !== "number" || isNaN(initialState.fuel))
    ) {
      throw new Error(`Invalid initial fuel: ${initialState.fuel}`);
    }
    if (
      initialState.maxFuel !== undefined &&
      (typeof initialState.maxFuel !== "number" ||
        isNaN(initialState.maxFuel) ||
        initialState.maxFuel <= 0)
    ) {
      throw new Error(`Invalid initial maxFuel: ${initialState.maxFuel}`);
    }
    if (
      initialState.hull !== undefined &&
      (typeof initialState.hull !== "number" || isNaN(initialState.hull))
    ) {
      throw new Error(`Invalid initial hull: ${initialState.hull}`);
    }
    if (
      initialState.maxHull !== undefined &&
      (typeof initialState.maxHull !== "number" ||
        isNaN(initialState.maxHull) ||
        initialState.maxHull <= 0)
    ) {
      throw new Error(`Invalid initial maxHull: ${initialState.maxHull}`);
    }
    if (
      initialState.money !== undefined &&
      (typeof initialState.money !== "number" || isNaN(initialState.money))
    ) {
      throw new Error(`Invalid initial money: ${initialState.money}`);
    }
    if (
      initialState.depth !== undefined &&
      (typeof initialState.depth !== "number" || isNaN(initialState.depth))
    ) {
      throw new Error(`Invalid initial depth: ${initialState.depth}`);
    }

    // Apply changes only after all validation passes
    if (initialState.fuel !== undefined)
      this._fuel = Math.max(0, initialState.fuel);
    if (initialState.maxFuel !== undefined)
      this._maxFuel = initialState.maxFuel;
    if (initialState.hull !== undefined)
      this._hull = Math.max(0, initialState.hull);
    if (initialState.maxHull !== undefined)
      this._maxHull = initialState.maxHull;
    if (initialState.money !== undefined)
      this._money = Math.max(0, initialState.money);
    if (initialState.depth !== undefined)
      this._depth = Math.max(0, initialState.depth);
    if (initialState.minerals !== undefined)
      this._minerals = { ...initialState.minerals };
    if (initialState.items !== undefined)
      this._items = { ...initialState.items };
    if (initialState.equipment !== undefined)
      this._equipment = { ...this._equipment, ...initialState.equipment };
    if (initialState.skills !== undefined)
      this._skills = { ...this._skills, ...initialState.skills };

    this._recalculateCargoWeight();

    // Apply equipment effects after initialization
    this._applyEquipmentEffects();

    this._notifyChange({
      type: "bulk_init",
      oldValue: null,
      newValue: "initialized",
    });
  }
}

// Type definitions for the state change event system
export interface StateChangeEvent {
  type:
    | "fuel"
    | "maxFuel"
    | "hull"
    | "maxHull"
    | "money"
    | "depth"
    | "minerals"
    | "items"
    | "equipment"
    | "skills"
    | "bulk_init"
    | "gameOver"
    | "gameReset";
  oldValue: unknown;
  newValue: unknown;
}

// Export a singleton instance for global use
export const playerState = new PlayerState();
