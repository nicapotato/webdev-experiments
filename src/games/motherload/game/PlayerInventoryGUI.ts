import { GUI } from "dat.gui";
import { TileType, TILE_CONFIG } from "./TileConfig";
import { playerState, StateChangeEvent } from "./PlayerState";

// Remove InventoryState and PlayerSkills interfaces - now handled by PlayerState

export interface ItemCallbacks {
  useTeleporter: () => void;
  useFuelReserve: () => void;
  useDynamite: () => void;
  usePileDriver: (direction: string) => void;
}

export interface SkillTreeCallbacks {
  upgradeBlastRange: () => void;
  upgradeHealthReserve: () => void;
}

export class PlayerInventoryGUI {
  private gui: GUI | null = null;
  private itemCallbacks?: ItemCallbacks;
  private skillTreeCallbacks?: SkillTreeCallbacks;
  private isOpen = false;
  private stateChangeListener: (changes: StateChangeEvent) => void;

  // Store references to GUI controls for manual updates
  private mineralControls: { [key: string]: unknown } = {};

  // GUI data structure
  private guiData = {
    // Mineral inventory display
    cargo: {
      totalValue: "0",
      totalWeight: "0/100",
    },

    // Items and their usage
    items: {
      useTeleporter: () => this.useItem("teleporter"),
      useFuelReserve: () => this.useItem("fuelReserve"),
      useDynamite: () => this.useItem("dynamite"),
      usePileDriver: () => this.useItem("pileDriver"),
    },

    // Equipment display (read-only)
    equipment: {
      currentDrill: "Stock Drill",
      currentHull: "Stock Hull",
      currentEngine: "Stock Engine",
      currentFuelTank: "Micro Tank",
      currentRadiator: "Stock Fan",
      currentCargoBay: "Micro Bay",
    },

    // Minerals Inventory (moved from PlayerGameGUI)
    minerals: {
      ironium: 0,
      bronzium: 0,
      silverium: 0,
      goldium: 0,
      platinium: 0,
      diamond: 0,
      emerald: 0,
      ruby: 0,
      amazonite: 0,
      einsteinium: 0,
    },

    // Items Inventory (moved from PlayerGameGUI)
    itemsInventory: {
      teleporter: "0",
      fuelReserve: "0",
      dynamite: "0",
      pileDriver: "0",
    },

    // Skill Tree (moved from PlayerGameGUI)
    skillTree: {
      // Blast Range Skill (0-5 levels)
      blastRangeLevel: "0/5",
      blastRangeCost: "$1,000",
      upgradeBlastRange: () => this.upgradeBlastRange(),

      // Health Reserve Skill (0-5 levels)
      healthReserveLevel: "0/5",
      healthReserveCost: "$1,500",
      upgradeHealthReserve: () => this.upgradeHealthReserve(),
    },
  };

  constructor(
    itemCallbacks?: ItemCallbacks,
    skillTreeCallbacks?: SkillTreeCallbacks,
  ) {
    this.itemCallbacks = itemCallbacks;
    this.skillTreeCallbacks = skillTreeCallbacks;
    this.createGUI();

    // Subscribe to player state changes
    // Add state change listener to update GUI when player state changes
    this.stateChangeListener = this.onPlayerStateChange.bind(this);
    playerState.addStateChangeListener(this.stateChangeListener);
  }

  private createGUI() {
    this.gui = new GUI({ autoPlace: false, width: 320 });
    this.gui.domElement.style.position = "fixed";
    this.gui.domElement.style.top = "50%";
    this.gui.domElement.style.left = "50%";
    this.gui.domElement.style.transform = "translate(-50%, -50%)";
    this.gui.domElement.style.zIndex = "1001"; // Higher than other GUIs

    // Start hidden
    this.gui.hide();

    document.body.appendChild(this.gui.domElement);

    // Cargo/Minerals Section
    const cargoFolder = this.gui.addFolder("📦 Cargo Bay");
    cargoFolder.add(this.guiData.cargo, "totalWeight").name("Weight").listen();
    cargoFolder
      .add(this.guiData.cargo, "totalValue")
      .name("Total Value")
      .listen();

    // Display individual minerals
    this.updateCargoDisplay(cargoFolder);
    cargoFolder.open();

    // Equipment Section
    const equipmentFolder = this.gui.addFolder("⚙️ Equipment");
    equipmentFolder
      .add(this.guiData.equipment, "currentDrill")
      .name("Drill")
      .listen();
    equipmentFolder
      .add(this.guiData.equipment, "currentHull")
      .name("Hull")
      .listen();
    equipmentFolder
      .add(this.guiData.equipment, "currentEngine")
      .name("Engine")
      .listen();
    equipmentFolder
      .add(this.guiData.equipment, "currentFuelTank")
      .name("Fuel Tank")
      .listen();
    equipmentFolder
      .add(this.guiData.equipment, "currentRadiator")
      .name("Radiator")
      .listen();
    equipmentFolder
      .add(this.guiData.equipment, "currentCargoBay")
      .name("Cargo Bay")
      .listen();
    equipmentFolder.open();

    // Minerals Inventory Section (moved from PlayerGameGUI)
    const mineralsFolder = this.gui.addFolder("💎 Minerals Inventory");
    this.mineralControls.ironium = mineralsFolder
      .add(this.guiData.minerals, "ironium")
      .name("Ironium")
      .listen();
    this.mineralControls.bronzium = mineralsFolder
      .add(this.guiData.minerals, "bronzium")
      .name("Bronzium")
      .listen();
    this.mineralControls.silverium = mineralsFolder
      .add(this.guiData.minerals, "silverium")
      .name("Silverium")
      .listen();
    this.mineralControls.goldium = mineralsFolder
      .add(this.guiData.minerals, "goldium")
      .name("Goldium")
      .listen();
    this.mineralControls.platinium = mineralsFolder
      .add(this.guiData.minerals, "platinium")
      .name("Platinium")
      .listen();
    this.mineralControls.diamond = mineralsFolder
      .add(this.guiData.minerals, "diamond")
      .name("Diamond")
      .listen();
    this.mineralControls.emerald = mineralsFolder
      .add(this.guiData.minerals, "emerald")
      .name("Emerald")
      .listen();
    this.mineralControls.ruby = mineralsFolder
      .add(this.guiData.minerals, "ruby")
      .name("Ruby")
      .listen();
    this.mineralControls.amazonite = mineralsFolder
      .add(this.guiData.minerals, "amazonite")
      .name("Amazonite")
      .listen();
    this.mineralControls.einsteinium = mineralsFolder
      .add(this.guiData.minerals, "einsteinium")
      .name("Einsteinium")
      .listen();
    mineralsFolder.open();

    // Items Inventory Section (moved from PlayerGameGUI)
    const itemsInventoryFolder = this.gui.addFolder("🎒 Items Inventory");
    itemsInventoryFolder
      .add(this.guiData.itemsInventory, "teleporter")
      .name("🚀 Teleporter")
      .listen();
    itemsInventoryFolder
      .add(this.guiData.itemsInventory, "fuelReserve")
      .name("⛽ Fuel Reserve")
      .listen();
    itemsInventoryFolder
      .add(this.guiData.itemsInventory, "dynamite")
      .name("💣 Dynamite")
      .listen();
    itemsInventoryFolder
      .add(this.guiData.itemsInventory, "pileDriver")
      .name("🔨 Pile Driver")
      .listen();

    // Add usage buttons for items
    itemsInventoryFolder
      .add({ useTeleporter: () => this.useItem("teleporter") }, "useTeleporter")
      .name("Use Teleporter");
    itemsInventoryFolder
      .add(
        { useFuelReserve: () => this.useItem("fuelReserve") },
        "useFuelReserve",
      )
      .name("Use Fuel Reserve");
    itemsInventoryFolder
      .add({ useDynamite: () => this.useItem("dynamite") }, "useDynamite")
      .name("Use Dynamite");
    itemsInventoryFolder
      .add({ usePileDriver: () => this.useItem("pileDriver") }, "usePileDriver")
      .name("Use Pile Driver");

    itemsInventoryFolder.open();

    // Skill Tree Section (moved from PlayerGameGUI)
    const skillTreeFolder = this.gui.addFolder("🌟 Skill Tree");
    skillTreeFolder
      .add(this.guiData.skillTree, "blastRangeLevel")
      .name("Blast Range Level")
      .listen();
    skillTreeFolder
      .add(this.guiData.skillTree, "blastRangeCost")
      .name("Upgrade Cost")
      .listen();
    skillTreeFolder
      .add(this.guiData.skillTree, "upgradeBlastRange")
      .name("💥 Upgrade Blast Range");
    skillTreeFolder
      .add(this.guiData.skillTree, "healthReserveLevel")
      .name("Health Reserve Level")
      .listen();
    skillTreeFolder
      .add(this.guiData.skillTree, "healthReserveCost")
      .name("Upgrade Cost")
      .listen();
    skillTreeFolder
      .add(this.guiData.skillTree, "upgradeHealthReserve")
      .name("❤️ Upgrade Health Reserve");
    skillTreeFolder.open();

    console.log("🎒 Player Inventory GUI created");
  }

  private updateCargoDisplay(folder: GUI) {
    // Clear existing mineral displays
    // (In a more advanced implementation, we'd properly manage folder contents)

    const cargo = playerState.getCargoForGUI();
    Object.entries(cargo).forEach(([mineral, quantity]) => {
      if (quantity > 0) {
        const value = this.getMineralValue(mineral);
        const display = { info: `${quantity}x = $${quantity * value}` };
        folder
          .add(display, "info")
          .name(`${mineral.charAt(0).toUpperCase() + mineral.slice(1)}`);
      }
    });

    // Update totals
    const totalValue = this.calculateTotalValue();
    const totalWeight = this.calculateTotalWeight();

    this.guiData.cargo.totalValue = `$${totalValue}`;
    this.guiData.cargo.totalWeight = `${totalWeight}/100`;
  }

  private updateItemsDisplay(folder: GUI) {
    // Remove dynamic GUI creation - items will be displayed in the Items Inventory section
    // This method is kept for compatibility but doesn't create GUI controls anymore
    // Items are now handled by updateItemsInventoryDisplay() which updates the static GUI data
  }

  private getItemDisplayName(itemName: string): string {
    const names: { [key: string]: string } = {
      teleporter: "Teleporter",
      fuelReserve: "Fuel Reserve",
      dynamite: "Dynamite",
      pileDriver: "Pile Driver",
    };
    return names[itemName] || itemName;
  }

  private getMineralValue(mineral: string): number {
    // Convert mineral name to TileType and get value from TILE_CONFIG
    // Handle both underscore and space versions
    const normalizedMineral = mineral.toLowerCase().replace(/_/g, " ");

    for (const [tileTypeKey, config] of Object.entries(TILE_CONFIG)) {
      const configName = config.name.toLowerCase();
      if (
        configName === normalizedMineral ||
        configName === mineral.toLowerCase()
      ) {
        return config.goldCost || 0;
      }
    }

    // Also try direct TileType enum lookup
    const tileTypeNum = parseInt(mineral);
    if (!isNaN(tileTypeNum) && TILE_CONFIG[tileTypeNum as TileType]) {
      return TILE_CONFIG[tileTypeNum as TileType].goldCost || 0;
    }

    // If still not found, return 0 instead of throwing error
    console.warn(`Unknown mineral for value calculation: ${mineral}`);
    return 0;
  }

  private getMineralWeight(mineral: string): number {
    // Convert mineral name to TileType and get weight from TILE_CONFIG
    // Handle both underscore and space versions
    const normalizedMineral = mineral.toLowerCase().replace(/_/g, " ");

    for (const [tileTypeKey, config] of Object.entries(TILE_CONFIG)) {
      const configName = config.name.toLowerCase();
      if (
        configName === normalizedMineral ||
        configName === mineral.toLowerCase()
      ) {
        return config.weight || 0;
      }
    }

    // Also try direct TileType enum lookup
    const tileTypeNum = parseInt(mineral);
    if (!isNaN(tileTypeNum) && TILE_CONFIG[tileTypeNum as TileType]) {
      return TILE_CONFIG[tileTypeNum as TileType].weight || 0;
    }

    // If still not found, return 0 instead of throwing error
    console.warn(`Unknown mineral for weight calculation: ${mineral}`);
    return 0;
  }

  private calculateTotalValue(): number {
    let total = 0;
    const cargo = playerState.getCargoForGUI();
    Object.entries(cargo).forEach(([mineral, quantity]) => {
      total += quantity * this.getMineralValue(mineral);
    });
    return total;
  }

  private calculateTotalWeight(): number {
    return playerState.cargoWeight;
  }

  private useItem(itemName: string) {
    const items = playerState.items;
    if (!items[itemName] || items[itemName] <= 0) {
      console.log(`🎒 No ${itemName} available!`);
      return;
    }

    // Use the item via callback
    switch (itemName) {
      case "teleporter":
        if (this.itemCallbacks?.useTeleporter) {
          this.itemCallbacks.useTeleporter();
          this.consumeItem(itemName);
        }
        break;
      case "fuelReserve":
        if (this.itemCallbacks?.useFuelReserve) {
          this.itemCallbacks.useFuelReserve();
          this.consumeItem(itemName);
        }
        break;
      case "dynamite":
        if (this.itemCallbacks?.useDynamite) {
          this.itemCallbacks.useDynamite();
          this.consumeItem(itemName);
        }
        break;
      case "pileDriver":
        if (this.itemCallbacks?.usePileDriver) {
          // For pile driver, use default direction when triggered from GUI
          this.itemCallbacks.usePileDriver("down"); // Default direction for GUI usage
          this.consumeItem(itemName);
        }
        break;
      default:
        console.log(`🎒 Unknown item: ${itemName}`);
    }
  }

  private consumeItem(itemName: string) {
    try {
      playerState.removeItem(itemName, 1);
      console.log(
        `🎒 Used ${itemName}. Remaining: ${playerState.items[itemName] || 0}`,
      );
    } catch (error) {
      console.error(`🎒 Failed to consume ${itemName}:`, error);
    }
  }

  // Handle player state changes
  private onPlayerStateChange(change: StateChangeEvent): void {
    // Refresh display when relevant state changes
    if (["minerals", "items", "equipment", "skills"].includes(change.type)) {
      this.refreshDisplay();
    }
  }

  private refreshDisplay() {
    // In a more sophisticated implementation, we'd properly refresh the GUI folders
    // For now, just update the calculated values
    const totalValue = this.calculateTotalValue();
    const totalWeight = this.calculateTotalWeight();

    this.guiData.cargo.totalValue = `$${totalValue}`;
    this.guiData.cargo.totalWeight = `${totalWeight}/100`;

    // Update minerals and items inventory displays
    this.updateMineralsDisplay();
    this.updateItemsInventoryDisplay();
    this.updateSkillTreeDisplay();

    // Also update the cargo display if the GUI is open
    if (this.gui && this.isOpen) {
      // Force GUI to update the display
      this.gui.updateDisplay();
    }
  }

  // Minerals Inventory Management (moved from PlayerGameGUI)
  private updateMineralsDisplay() {
    // Use cargo data from player state
    const cargo = playerState.getCargoForGUI();
    Object.keys(this.guiData.minerals).forEach((mineral) => {
      const count = cargo[mineral] || 0;
      (this.guiData.minerals as Record<string, number>)[mineral] = count;
    });

    // Force the entire GUI to update after all values are set
    if (this.gui && this.isOpen) {
      this.gui.updateDisplay();

      // Additional force update with a small delay to ensure DOM updates
      setTimeout(() => {
        if (this.gui) {
          this.gui.updateDisplay();
        }
      }, 10);

      // Try to force a DOM update by triggering a resize event
      setTimeout(() => {
        if (this.gui) {
          window.dispatchEvent(new Event("resize"));
        }
      }, 20);
    }
  }

  // Items Inventory Management (moved from PlayerGameGUI)
  private updateItemsInventoryDisplay() {
    // Use items data from player state
    const items = playerState.items;
    Object.keys(this.guiData.itemsInventory).forEach((item) => {
      const count = items[item] || 0;
      (this.guiData.itemsInventory as Record<string, string>)[item] =
        count.toString();
    });
  }

  // Skill Tree Management (moved from PlayerGameGUI)
  private updateSkillTreeDisplay() {
    const skills = playerState.skills;
    // Update blast range skill
    const blastLevel = skills.blastRange || 0;
    this.guiData.skillTree.blastRangeLevel = `${blastLevel}/5`;
    this.guiData.skillTree.blastRangeCost =
      blastLevel >= 5
        ? "MAX LEVEL"
        : `$${(1000 * (blastLevel + 1)).toLocaleString()}`;

    // Update health reserve skill
    const healthLevel = skills.healthReserve || 0;
    this.guiData.skillTree.healthReserveLevel = `${healthLevel}/5`;
    this.guiData.skillTree.healthReserveCost =
      healthLevel >= 5
        ? "MAX LEVEL"
        : `$${(1500 * (healthLevel + 1)).toLocaleString()}`;
  }

  // Skill Tree Functions (moved from PlayerGameGUI)
  private upgradeBlastRange() {
    if (this.skillTreeCallbacks?.upgradeBlastRange) {
      this.skillTreeCallbacks.upgradeBlastRange();
    } else {
      console.log("💥 Blast Range upgrade (needs implementation)");
    }
  }

  private upgradeHealthReserve() {
    if (this.skillTreeCallbacks?.upgradeHealthReserve) {
      this.skillTreeCallbacks.upgradeHealthReserve();
    } else {
      console.log("❤️ Health Reserve upgrade (needs implementation)");
    }
  }

  // Setter for skill tree callbacks
  setSkillTreeCallbacks(callbacks: SkillTreeCallbacks) {
    this.skillTreeCallbacks = callbacks;
  }

  // Set item usage callbacks
  setItemCallbacks(callbacks: ItemCallbacks) {
    this.itemCallbacks = callbacks;
  }

  // Add items to inventory (delegates to playerState)
  addItem(itemName: string, quantity: number = 1) {
    try {
      playerState.addItem(itemName, quantity);
      console.log(
        `🎒 Added ${quantity}x ${itemName}. Total: ${playerState.items[itemName]}`,
      );
    } catch (error) {
      console.error(`🎒 Failed to add ${itemName}:`, error);
    }
  }

  // Remove items from inventory (delegates to playerState)
  removeItem(itemName: string, quantity: number = 1) {
    try {
      playerState.removeItem(itemName, quantity);
      console.log(
        `🎒 Removed ${quantity}x ${itemName}. Remaining: ${playerState.items[itemName] || 0}`,
      );
      return true;
    } catch (error) {
      console.error(`🎒 Failed to remove ${itemName}:`, error);
      return false;
    }
  }

  // Get item count
  getItemCount(itemName: string): number {
    return playerState.items[itemName] || 0;
  }

  // Control visibility
  show() {
    this.isOpen = true;
    this.refreshDisplay();
    if (this.gui) {
      this.gui.show();
    }
  }

  hide() {
    this.isOpen = false;
    if (this.gui) {
      this.gui.hide();
    }
  }

  toggle() {
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
    }
  }

  isVisible(): boolean {
    return this.isOpen;
  }

  cleanup() {
    console.log("🧹 PlayerInventoryGUI cleanup starting...");

    // Remove state change listener using stored reference
    if (this.stateChangeListener) {
      playerState.removeStateChangeListener(this.stateChangeListener);
      this.stateChangeListener = null as any;
      console.log("🧹 PlayerInventoryGUI: State listener removed");
    }

    // Clean up dat.GUI
    if (this.gui) {
      try {
        this.gui.destroy();
        console.log("🧹 PlayerInventoryGUI: dat.GUI destroyed");
      } catch (error) {
        console.error("🧹 PlayerInventoryGUI: Error destroying GUI:", error);
      }
      this.gui = null;
    }

    // Clear references
    this.itemCallbacks = undefined;
    this.skillTreeCallbacks = undefined;
    this.mineralControls = {};
    this.isOpen = false;

    console.log("🎒 Player Inventory GUI cleaned up");
  }
}
