import { GUI } from "dat.gui";
import { GameAudio } from "./GameAudio";
import { playerState, StateChangeEvent } from "./PlayerState";

// Remove PlayerGameState interface - now using PlayerState for gameplay data
// UI settings are kept in this class

export interface GodModeCallbacks {
  addMoney: (amount: number) => void;
  setFuel: (amount: number) => void;
  setHull: (amount: number) => void;
  resetPlayer: () => void;
  teleportToSurface: () => void;
}

// UI Settings interface for this GUI only
export interface UISettings {
  backgroundMusicEnabled: boolean;
  soundEffectsEnabled: boolean;
  showCollisionBoxes: boolean;
}

export class PlayerGameGUI {
  private gui: GUI | null = null;
  private uiSettings: UISettings;
  private gameAudio: GameAudio | null = null;
  private isOpen = false;
  private godModeCallbacks?: GodModeCallbacks;
  private stateChangeListener: (changes: StateChangeEvent) => void;

  // GUI data structure
  private guiData = {
    // Player Status (read-only displays)
    status: {
      currentDepth: "0m",
      currentFuel: "0/0",
      currentHull: "0/0",
      currentMoney: "$0",
      currentWeight: "0kg",
    },

    // Game Settings
    settings: {
      backgroundMusic: false,
      soundEffects: true,
      showCollisionBoxes: true,
      toggleMusic: () => this.toggleBackgroundMusic(),
      toggleSounds: () => this.toggleSoundEffects(),
      toggleCollision: () => this.toggleCollisionBoxes(),
    },

    // God Mode / Cheats
    godMode: {
      addMillion: () => this.addMillion(),
      addFuel: () => this.addFuel(),
      repairHull: () => this.repairHull(),
      resetPlayer: () => this.resetPlayer(),
      teleportSurface: () => this.teleportToSurface(),
    },

    // Player Controls
    controls: {
      openInventory: () => this.openInventory(),
      openShop: () => this.openShop(),
      saveGame: () => this.saveGame(),
      loadGame: () => this.loadGame(),
    },
  };

  private onSettingsChange?: (settings: Partial<UISettings>) => void;

  constructor(
    initialSettings: UISettings,
    gameAudio: GameAudio | null = null,
    godModeCallbacks?: GodModeCallbacks,
  ) {
    this.uiSettings = { ...initialSettings };
    this.gameAudio = gameAudio;
    this.godModeCallbacks = godModeCallbacks;

    // Sync initial GUI data with UI settings
    this.guiData.settings.backgroundMusic =
      this.uiSettings.backgroundMusicEnabled;
    this.guiData.settings.soundEffects = this.uiSettings.soundEffectsEnabled;
    this.guiData.settings.showCollisionBoxes =
      this.uiSettings.showCollisionBoxes;

    this.createGUI();

    // Subscribe to player state changes for status display
    // Add state change listener to update GUI when player state changes
    this.stateChangeListener = this.onPlayerStateChange.bind(this);
    playerState.addStateChangeListener(this.stateChangeListener);
  }

  private createGUI() {
    this.gui = new GUI({ autoPlace: false, width: 300 });
    this.gui.domElement.style.position = "fixed";
    this.gui.domElement.style.top = "10px";
    this.gui.domElement.style.left = "10px";
    this.gui.domElement.style.zIndex = "1000";

    // Start hidden
    this.gui.hide();

    document.body.appendChild(this.gui.domElement);

    // Player Status Section
    const statusFolder = this.gui.addFolder("📊 Player Status");
    statusFolder
      .add(this.guiData.status, "currentDepth")
      .name("Depth")
      .listen();
    statusFolder.add(this.guiData.status, "currentFuel").name("Fuel").listen();
    statusFolder.add(this.guiData.status, "currentHull").name("Hull").listen();
    statusFolder
      .add(this.guiData.status, "currentMoney")
      .name("Money")
      .listen();
    statusFolder
      .add(this.guiData.status, "currentWeight")
      .name("Weight")
      .listen();
    statusFolder.open();

    // Game Settings Section
    const settingsFolder = this.gui.addFolder("⚙️ Game Settings");
    settingsFolder
      .add(this.guiData.settings, "backgroundMusic")
      .name("Background Music")
      .onChange((value: boolean) => {
        this.uiSettings.backgroundMusicEnabled = value;
        this.notifySettingsChange({ backgroundMusicEnabled: value });
      });
    settingsFolder
      .add(this.guiData.settings, "soundEffects")
      .name("Sound Effects")
      .onChange((value: boolean) => {
        this.uiSettings.soundEffectsEnabled = value;
        this.notifySettingsChange({ soundEffectsEnabled: value });
      });
    settingsFolder
      .add(this.guiData.settings, "showCollisionBoxes")
      .name("Show Collision Boxes")
      .onChange((value: boolean) => {
        this.uiSettings.showCollisionBoxes = value;
        this.notifySettingsChange({ showCollisionBoxes: value });
      });
    settingsFolder.open();

    // God Mode / Cheats Section
    const godModeFolder = this.gui.addFolder("👑 God Mode");
    godModeFolder
      .add(this.guiData.godMode, "addMillion")
      .name("💰 Add $1,000,000");
    godModeFolder
      .add(this.guiData.godMode, "addFuel")
      .name("⛽ Fill Fuel Tank");
    godModeFolder
      .add(this.guiData.godMode, "repairHull")
      .name("🔧 Repair Hull");
    godModeFolder
      .add(this.guiData.godMode, "resetPlayer")
      .name("🔄 Reset Player");
    godModeFolder
      .add(this.guiData.godMode, "teleportSurface")
      .name("🚀 Teleport to Surface");
    godModeFolder.open();

    // Player Controls Section
    const controlsFolder = this.gui.addFolder("🎮 Player Controls");
    controlsFolder
      .add(this.guiData.controls, "openInventory")
      .name("🎒 Open Inventory");
    controlsFolder.add(this.guiData.controls, "openShop").name("🏪 Open Shop");
    controlsFolder.add(this.guiData.controls, "saveGame").name("💾 Save Game");
    controlsFolder.add(this.guiData.controls, "loadGame").name("📁 Load Game");
    controlsFolder.close(); // Start this one closed

    console.log("🎮 Player/Game GUI created");
  }

  // God Mode Functions
  private addMillion() {
    if (this.godModeCallbacks?.addMoney) {
      this.godModeCallbacks.addMoney(1000000);
      console.log("👑 God Mode: Added $1,000,000!");
    } else {
      // Fallback to player state if no callback
      playerState.updateMoney(playerState.money + 1000000);
      console.log("👑 God Mode: Added $1,000,000!");
    }
  }

  private addFuel() {
    if (this.godModeCallbacks?.setFuel) {
      this.godModeCallbacks.setFuel(playerState.maxFuel);
      console.log("👑 God Mode: Fuel tank filled!");
    } else {
      playerState.updateFuel(playerState.maxFuel);
      console.log("👑 God Mode: Fuel tank filled!");
    }
  }

  private repairHull() {
    if (this.godModeCallbacks?.setHull) {
      this.godModeCallbacks.setHull(playerState.maxHull);
      console.log("👑 God Mode: Hull fully repaired!");
    } else {
      playerState.updateHull(playerState.maxHull);
      console.log("👑 God Mode: Hull fully repaired!");
    }
  }

  private resetPlayer() {
    if (this.godModeCallbacks?.resetPlayer) {
      this.godModeCallbacks.resetPlayer();
      console.log("👑 God Mode: Player stats reset!");
    } else {
      playerState.updateFuel(playerState.maxFuel);
      playerState.updateHull(playerState.maxHull);
      playerState.updateMoney(0);
      playerState.updateDepth(0);
      playerState.clearCargo();
      console.log("👑 God Mode: Player stats reset!");
    }
  }

  private teleportToSurface() {
    if (this.godModeCallbacks?.teleportToSurface) {
      this.godModeCallbacks.teleportToSurface();
      console.log("👑 God Mode: Teleported to surface!");
    } else {
      console.log("👑 God Mode: Teleport to surface (needs implementation)");
    }
  }

  // Settings Functions
  private toggleBackgroundMusic() {
    this.guiData.settings.backgroundMusic =
      !this.guiData.settings.backgroundMusic;
    this.uiSettings.backgroundMusicEnabled =
      this.guiData.settings.backgroundMusic;
    this.notifySettingsChange({
      backgroundMusicEnabled: this.guiData.settings.backgroundMusic,
    });
  }

  private toggleSoundEffects() {
    this.guiData.settings.soundEffects = !this.guiData.settings.soundEffects;
    this.uiSettings.soundEffectsEnabled = this.guiData.settings.soundEffects;
    this.notifySettingsChange({
      soundEffectsEnabled: this.guiData.settings.soundEffects,
    });
  }

  private toggleCollisionBoxes() {
    this.guiData.settings.showCollisionBoxes =
      !this.guiData.settings.showCollisionBoxes;
    this.uiSettings.showCollisionBoxes =
      this.guiData.settings.showCollisionBoxes;
    this.notifySettingsChange({
      showCollisionBoxes: this.guiData.settings.showCollisionBoxes,
    });
  }

  // Player Control Functions
  private openInventory() {
    console.log("🎒 Open Inventory (needs implementation)");
  }

  private openShop() {
    console.log("🏪 Open Shop (needs implementation)");
  }

  private saveGame() {
    // Save game state to localStorage
    const gameData = {
      fuel: playerState.fuel,
      hull: playerState.hull,
      money: playerState.money,
      depth: playerState.depth,
      cargoWeight: playerState.cargoWeight,
      minerals: playerState.minerals,
      items: playerState.items,
      equipment: playerState.equipment,
      skills: playerState.skills,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("motherload_save", JSON.stringify(gameData));
    console.log("💾 Game saved!", gameData);
  }

  private loadGame() {
    try {
      const savedData = localStorage.getItem("motherload_save");
      if (savedData) {
        const gameData = JSON.parse(savedData);

        // Use playerState initialization method
        playerState.initializeState({
          fuel: gameData.fuel,
          hull: gameData.hull,
          money: gameData.money,
          depth: gameData.depth,
          minerals: gameData.minerals,
          items: gameData.items,
          equipment: gameData.equipment,
          skills: gameData.skills,
        });

        console.log("📁 Game loaded!", gameData);
      } else {
        console.log("📁 No save file found");
      }
    } catch (error) {
      console.error("📁 Error loading game:", error);
    }
  }

  // Update the status display with current player state
  updateStatusDisplay() {
    this.guiData.status.currentDepth = `${playerState.depth}m`;
    this.guiData.status.currentFuel = `${playerState.fuel}/${playerState.maxFuel}`;
    this.guiData.status.currentHull = `${playerState.hull}/${playerState.maxHull}`;
    this.guiData.status.currentMoney = `$${playerState.money.toLocaleString()}`;
    this.guiData.status.currentWeight = `${playerState.cargoWeight}kg`;
  }

  // Handle player state changes
  private onPlayerStateChange(change: StateChangeEvent): void {
    // Update display when any player state changes
    this.updateStatusDisplay();
  }

  // Update UI settings from external source
  updateUISettings(newSettings: Partial<UISettings>) {
    Object.assign(this.uiSettings, newSettings);

    // Also update GUI data to reflect setting changes
    if ("backgroundMusicEnabled" in newSettings) {
      this.guiData.settings.backgroundMusic =
        newSettings.backgroundMusicEnabled!;
    }
    if ("soundEffectsEnabled" in newSettings) {
      this.guiData.settings.soundEffects = newSettings.soundEffectsEnabled!;
    }
    if ("showCollisionBoxes" in newSettings) {
      this.guiData.settings.showCollisionBoxes =
        newSettings.showCollisionBoxes!;
    }
  }

  // Settings change callback
  setOnSettingsChange(callback: (settings: Partial<UISettings>) => void) {
    this.onSettingsChange = callback;
  }

  // God mode callbacks setter
  setGodModeCallbacks(callbacks: GodModeCallbacks) {
    this.godModeCallbacks = callbacks;
  }

  private notifySettingsChange(settings: Partial<UISettings>) {
    if (this.onSettingsChange) {
      this.onSettingsChange(settings);
    }
  }

  // Control visibility
  show() {
    this.isOpen = true;
    this.updateStatusDisplay();
    // Refresh settings display to ensure checkboxes are correct
    this.refreshSettingsDisplay();
    if (this.gui) {
      this.gui.show();
    }
  }

  private refreshSettingsDisplay() {
    // Make sure GUI controls reflect current UI settings
    this.guiData.settings.backgroundMusic =
      this.uiSettings.backgroundMusicEnabled;
    this.guiData.settings.soundEffects = this.uiSettings.soundEffectsEnabled;
    this.guiData.settings.showCollisionBoxes =
      this.uiSettings.showCollisionBoxes;
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
    console.log("🧹 PlayerGameGUI cleanup starting...");

    // Remove state change listener using stored reference
    if (this.stateChangeListener) {
      playerState.removeStateChangeListener(this.stateChangeListener);
      this.stateChangeListener = null as any;
      console.log("🧹 PlayerGameGUI: State listener removed");
    }

    // Clean up dat.GUI
    if (this.gui) {
      try {
        this.gui.destroy();
        console.log("🧹 PlayerGameGUI: dat.GUI destroyed");
      } catch (error) {
        console.error("🧹 PlayerGameGUI: Error destroying GUI:", error);
      }
      this.gui = null;
    }

    // Clear references
    this.gameAudio = null;
    this.godModeCallbacks = undefined;
    this.isOpen = false;

    console.log("🎮 Player/Game GUI cleaned up");
  }

  // Getter for UI settings
  getUISettings(): UISettings {
    return { ...this.uiSettings };
  }
}
