import { GUI } from "dat.gui";
import { TileType, TILE_CONFIG } from "./TileConfig";
import { GameState } from "./GameLogic";
import { playerState } from "./PlayerState";
import { EquipmentHelper, EQUIPMENT_TYPES } from "./EquipmentConfig";

// Remove ShopGameState interface - now using playerState directly

export interface ShopCallbacks {
  onStateChange: (newState: Record<string, unknown>) => void;
  onNotification: (message: string) => void;
}

export class GameShop {
  private gui: GUI | null = null;
  private shopFolder: GUI | null = null;
  private isOpen = false;
  private mainGameState: GameState; // Reference to main game state for other game objects
  private callbacks: ShopCallbacks;

  // Shop data
  private shopData = {
    // Fuel & Hull
    fuel: {
      buySmall: () => this.buyFuel(100, 5),
      buyMedium: () => this.buyFuel(250, 10),
      buyLarge: () => this.buyFuel(500, 25),
      fillTank: () => this.buyFuel(playerState.maxFuel - playerState.fuel, 50),
      repairHull: () => this.repairHull(25),
    },

    // Mineral processing
    minerals: {
      sellAll: () => this.sellAllMinerals(),
    },

    // Items
    items: {
      buyTeleporter: () => this.buyItem("teleporter", 1000),
      buyFuelReserve: () => this.buyItem("fuelReserve", 200),
      buyDynamite: () => this.buyItem("dynamite", 150),
      buyPileDriver: () => this.buyItem("pileDriver", 300),
    },

    // Equipment Upgrades
    equipment: {} as Record<string, () => void>,

    // Current status (read-only display)
    status: {
      currentFuel: "0/0",
      currentHull: "0/0",
      currentMoney: "$0",
      cargoWeight: "0/100",
    },
  };

  constructor(callbacks: ShopCallbacks, mainGameState: GameState) {
    this.mainGameState = mainGameState;
    this.callbacks = callbacks;
    this.setupEquipmentUpgrades();
    this.createGUI();
  }

  private setupEquipmentUpgrades() {
    // Create upgrade methods for each equipment type
    Object.keys(EQUIPMENT_TYPES).forEach((equipmentType) => {
      const key = `upgrade${equipmentType.charAt(0).toUpperCase() + equipmentType.slice(1)}`;
      this.shopData.equipment[key] = () =>
        this.upgradeEquipment(
          equipmentType as keyof typeof playerState.equipment,
        );
    });
  }

  private createGUI() {
    this.gui = new GUI({ autoPlace: false, width: 350 });
    this.gui.domElement.style.position = "fixed";
    this.gui.domElement.style.top = "10px";
    this.gui.domElement.style.right = "10px";
    this.gui.domElement.style.zIndex = "1000";

    // Hide initially
    this.gui.hide();

    document.body.appendChild(this.gui.domElement);

    this.shopFolder = this.gui.addFolder("🏪 JUNK SHOP");

    // Status Display
    const statusFolder = this.shopFolder.addFolder("📊 Current Status");
    statusFolder
      .add(this.shopData.status, "currentMoney")
      .name("Money")
      .listen();
    statusFolder.add(this.shopData.status, "currentFuel").name("Fuel").listen();
    statusFolder.add(this.shopData.status, "currentHull").name("Hull").listen();
    statusFolder
      .add(this.shopData.status, "cargoWeight")
      .name("Cargo")
      .listen();
    statusFolder.open();

    // Fuel & Hull Repair
    const fuelFolder = this.shopFolder.addFolder("⛽ Fuel & Hull Repair");
    fuelFolder.add(this.shopData.fuel, "buySmall").name("Buy 100 Fuel ($5)");
    fuelFolder.add(this.shopData.fuel, "buyMedium").name("Buy 250 Fuel ($10)");
    fuelFolder.add(this.shopData.fuel, "buyLarge").name("Buy 500 Fuel ($25)");
    fuelFolder.add(this.shopData.fuel, "fillTank").name("Fill Tank ($50)");
    fuelFolder.add(this.shopData.fuel, "repairHull").name("Repair Hull ($25)");
    fuelFolder.open();

    // Mineral Processing
    const mineralsFolder = this.shopFolder.addFolder("💎 Mineral Processing");
    mineralsFolder
      .add(this.shopData.minerals, "sellAll")
      .name("Sell All Minerals");
    this.updateMineralDisplay(mineralsFolder);
    mineralsFolder.open();

    // Items Store
    const itemsFolder = this.shopFolder.addFolder("🎒 Special Items");
    itemsFolder
      .add(this.shopData.items, "buyTeleporter")
      .name("Teleporter ($1000) [T]");
    itemsFolder
      .add(this.shopData.items, "buyFuelReserve")
      .name("Fuel Reserve ($200) [F]");
    itemsFolder
      .add(this.shopData.items, "buyDynamite")
      .name("Dynamite ($150) [X]");
    itemsFolder
      .add(this.shopData.items, "buyPileDriver")
      .name("Pile Driver ($300) [Shift+Arrow]");
    itemsFolder.open();

    // Equipment Upgrades
    const equipmentFolder = this.shopFolder.addFolder("🔧 Equipment Upgrades");
    this.updateEquipmentDisplay(equipmentFolder);
    equipmentFolder.open();

    this.shopFolder.open();

    console.log("🏪 Dat.GUI shop interface created");
  }

  private updateMineralDisplay(folder: GUI) {
    // Display current minerals in cargo from player state
    const cargo = playerState.getCargoForGUI();
    const totalValue = this.calculateMineralValue();
    const cargoItems = Object.keys(cargo).length;

    if (cargoItems > 0) {
      Object.entries(cargo).forEach(([mineral, quantity]) => {
        if (quantity > 0) {
          const value = this.getMineralValue(mineral);
          const display = {
            info: `${quantity}x - $${value} each = $${quantity * value}`,
          };
          folder
            .add(display, "info")
            .name(mineral.charAt(0).toUpperCase() + mineral.slice(1));
        }
      });

      const totalDisplay = { total: `Total Value: $${totalValue}` };
      folder.add(totalDisplay, "total").name("💰 Total Value");
    } else {
      const emptyDisplay = { empty: "No minerals in cargo" };
      folder.add(emptyDisplay, "empty").name("Empty Cargo Bay");
    }
  }

  private updateEquipmentDisplay(folder: GUI) {
    // Display current equipment and upgrade options
    Object.entries(EQUIPMENT_TYPES).forEach(
      ([equipmentType, equipmentConfig]) => {
        const currentTier = playerState.getCurrentEquipmentTier(
          equipmentType as keyof typeof playerState.equipment,
        );
        const nextTier = playerState.getNextEquipmentTier(
          equipmentType as keyof typeof playerState.equipment,
        );

        if (currentTier) {
          // Show current equipment
          const currentDisplay = { info: `Current: ${currentTier.name}` };
          folder
            .add(currentDisplay, "info")
            .name(`${equipmentConfig.icon} ${equipmentConfig.name}`);

          // Show upgrade option if available
          if (nextTier) {
            const upgradeKey = `upgrade${equipmentType.charAt(0).toUpperCase() + equipmentType.slice(1)}`;
            const upgradeLabel = `Upgrade to ${nextTier.name} ($${nextTier.price.toLocaleString()})`;
            folder.add(this.shopData.equipment, upgradeKey).name(upgradeLabel);

            // Show upgrade benefits
            const benefitsDisplay = { benefits: nextTier.description };
            folder
              .add(benefitsDisplay, "benefits")
              .name(`↳ ${nextTier.description}`);
          } else {
            const maxDisplay = { max: "MAX LEVEL" };
            folder.add(maxDisplay, "max").name("↳ MAX LEVEL");
          }
        }
      },
    );
  }

  private recreateGUI() {
    if (!this.isOpen) return; // Don't recreate if shop is closed

    // Store current state
    const wasOpen = this.isOpen;

    // Clean up current GUI
    if (this.gui) {
      this.gui.destroy();
    }

    // Recreate equipment upgrade functions
    this.setupEquipmentUpgrades();

    // Create new GUI
    this.createGUI();

    // Restore state
    if (wasOpen) {
      this.isOpen = true;
      this.updateShopDisplay();
      if (this.gui) {
        this.gui.show();
      }
    }
  }

  // Method removed - now using playerState.getCargoForGUI() directly

  private buyFuel(amount: number, costPerUnit: number) {
    const totalCost = Math.ceil(amount / 10) * costPerUnit;

    if (
      playerState.money >= totalCost &&
      playerState.fuel + amount <= playerState.maxFuel
    ) {
      playerState.updateFuel(playerState.fuel + amount);
      playerState.updateMoney(playerState.money - totalCost);

      this.callbacks.onNotification(
        `⛽ Bought ${amount} fuel for $${totalCost}`,
      );
      this.updateShopDisplay();
    } else if (playerState.money < totalCost) {
      this.callbacks.onNotification(`💸 Not enough money! Need $${totalCost}`);
    } else {
      this.callbacks.onNotification(`⛽ Fuel tank is full or would overflow!`);
    }
  }

  private repairHull(costPerUnit: number) {
    const damageAmount = playerState.maxHull - playerState.hull;
    const totalCost = damageAmount * costPerUnit;

    if (playerState.money >= totalCost && damageAmount > 0) {
      playerState.updateHull(playerState.maxHull);
      playerState.updateMoney(playerState.money - totalCost);

      this.callbacks.onNotification(`🔧 Hull repaired for $${totalCost}`);
      this.updateShopDisplay();
    } else if (playerState.money < totalCost) {
      this.callbacks.onNotification(`💸 Not enough money! Need $${totalCost}`);
    } else {
      this.callbacks.onNotification(`🔧 Hull is already at full health!`);
    }
  }

  private sellAllMinerals() {
    const totalValue = this.calculateMineralValue();

    if (totalValue > 0) {
      // Add money
      playerState.updateMoney(playerState.money + totalValue);

      // Clear cargo
      playerState.clearCargo();

      this.callbacks.onNotification(`💰 Sold all minerals for $${totalValue}`);
      this.updateShopDisplay();
    } else {
      this.callbacks.onNotification(`📦 No minerals to sell!`);
    }
  }

  private buyItem(itemName: string, cost: number) {
    if (playerState.money >= cost) {
      playerState.addItem(itemName, 1);
      playerState.updateMoney(playerState.money - cost);

      this.callbacks.onNotification(`🛒 Bought ${itemName} for $${cost}`);
      this.updateShopDisplay();
    } else {
      this.callbacks.onNotification(`💸 Not enough money! Need $${cost}`);
    }
  }

  private upgradeEquipment(equipmentType: keyof typeof playerState.equipment) {
    const nextTier = playerState.getNextEquipmentTier(equipmentType);

    if (!nextTier) {
      this.callbacks.onNotification(
        `🔧 ${EQUIPMENT_TYPES[equipmentType].name} is already at maximum level!`,
      );
      return;
    }

    if (playerState.money >= nextTier.price) {
      playerState.updateEquipment(equipmentType, nextTier.id);
      playerState.updateMoney(playerState.money - nextTier.price);

      this.callbacks.onNotification(
        `🔧 Upgraded ${EQUIPMENT_TYPES[equipmentType].name} to ${nextTier.name} for $${nextTier.price.toLocaleString()}`,
      );
      this.updateShopDisplay();

      // Recreate the GUI to refresh equipment options
      this.recreateGUI();
    } else {
      this.callbacks.onNotification(
        `💸 Not enough money! Need $${nextTier.price.toLocaleString()}`,
      );
    }
  }

  private calculateMineralValue(): number {
    let total = 0;
    const cargo = playerState.getCargoForGUI();
    Object.entries(cargo).forEach(([mineral, quantity]) => {
      total += quantity * this.getMineralValue(mineral);
    });
    return total;
  }

  private getMineralValue(mineral: string): number {
    // Convert mineral name to TileType and get value from TILE_CONFIG
    for (const [tileTypeKey, config] of Object.entries(TILE_CONFIG)) {
      if (config.name.toLowerCase() === mineral.toLowerCase()) {
        return config.goldCost || 0;
      }
    }

    // No fallback - throw error for unknown minerals
    throw new Error(`Unknown mineral value: ${mineral}`);
  }

  private updateShopDisplay() {
    // Update displayed values from player state
    this.shopData.status.currentMoney = `$${playerState.money.toLocaleString()}`;
    this.shopData.status.currentFuel = `${playerState.fuel}/${playerState.maxFuel}`;
    this.shopData.status.currentHull = `${playerState.hull}/${playerState.maxHull}`;
    this.shopData.status.cargoWeight = `${playerState.cargoWeight}/100 items`;

    // Force GUI to refresh if open
    if (this.gui && this.isOpen) {
      this.gui.updateDisplay();
    }
  }

  // No longer needed - shop reads directly from playerState

  open() {
    this.isOpen = true;
    this.updateShopDisplay();
    if (this.gui) {
      this.gui.show();
    }
    console.log("🏪 Shop opened with dat.gui interface");
  }

  close() {
    this.isOpen = false;
    if (this.gui) {
      this.gui.hide();
    }
    console.log("🏪 Shop closed");
  }

  isShopOpen(): boolean {
    return this.isOpen;
  }

  cleanup() {
    console.log("🧹 GameShop cleanup starting...");

    // Close shop if open
    if (this.isOpen) {
      this.close();
      console.log("🧹 GameShop: Shop closed");
    }

    // Clean up dat.GUI
    if (this.gui) {
      try {
        this.gui.destroy();
        console.log("🧹 GameShop: dat.GUI destroyed");
      } catch (error) {
        console.error("🧹 GameShop: Error destroying GUI:", error);
      }
      this.gui = null;
    }

    console.log("🏪 Shop GUI cleaned up");
  }
}
