export class GameInput {
  private keys: { [key: string]: boolean } = {};
  private isMoving = false;
  private onMovementChange?: (isMoving: boolean) => void;
  private onInteractionCallback?: () => void;
  private lastInteractionTime = 0;
  private interactionCooldown = 300; // 300ms cooldown to prevent spam
  private keydownCallbacks: { [key: string]: (event: KeyboardEvent) => void } =
    {};

  constructor(onMovementChange?: (isMoving: boolean) => void) {
    this.onMovementChange = onMovementChange;
    this.setupEventListeners();
  }

  private setupEventListeners() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    // Prevent spacebar from triggering browser default behavior (scroll, click buttons, etc.)
    if (event.code === "Space") {
      event.preventDefault();
    }

    this.keys[event.code] = true;
    this.updateMovementState();

    // Handle interaction (E key) with cooldown
    if (event.code === "KeyE") {
      const currentTime = Date.now();
      if (currentTime - this.lastInteractionTime > this.interactionCooldown) {
        if (this.onInteractionCallback) {
          this.onInteractionCallback();
          this.lastInteractionTime = currentTime;
        }
      }
    }

    // Handle additional key callbacks
    if (this.keydownCallbacks[event.code]) {
      this.keydownCallbacks[event.code](event);
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.keys[event.code] = false;
    this.updateMovementState();
  };

  private updateMovementState() {
    const wasMoving = this.isMoving;
    this.isMoving = this.isAnyMovementKeyPressed();

    if (wasMoving !== this.isMoving && this.onMovementChange) {
      this.onMovementChange(this.isMoving);
    }
  }

  private isAnyMovementKeyPressed(): boolean {
    return (
      this.keys["ArrowUp"] ||
      this.keys["KeyW"] ||
      this.keys["ArrowDown"] ||
      this.keys["KeyS"] ||
      this.keys["ArrowLeft"] ||
      this.keys["KeyA"] ||
      this.keys["ArrowRight"] ||
      this.keys["KeyD"]
    );
  }

  isKeyPressed(key: string): boolean {
    return !!this.keys[key];
  }

  isShiftPressed(): boolean {
    return !!(this.keys["ShiftLeft"] || this.keys["ShiftRight"]);
  }

  getMovementInput(): { x: number; y: number } {
    let x = 0;
    let y = 0;

    if (this.keys["ArrowLeft"] || this.keys["KeyA"]) x -= 1;
    if (this.keys["ArrowRight"] || this.keys["KeyD"]) x += 1;
    if (this.keys["ArrowDown"] || this.keys["KeyS"]) y -= 1;
    if (this.keys["ArrowUp"] || this.keys["KeyW"]) y += 1;

    return { x, y };
  }

  getDiggingInput(): {
    digging: boolean;
    digDirection?: "down" | "left" | "right";
  } {
    // Support drilling in all directions based on key input
    // Each direction key triggers drilling in that direction
    // BUT disable drilling when shift is held down (for pile driver mode)

    // If shift is held, disable drilling
    if (this.keys["ShiftLeft"] || this.keys["ShiftRight"]) {
      return { digging: false };
    }

    if (this.keys["ArrowDown"] || this.keys["KeyS"]) {
      return { digging: true, digDirection: "down" };
    }

    if (this.keys["ArrowLeft"] || this.keys["KeyA"]) {
      return { digging: true, digDirection: "left" };
    }

    if (this.keys["ArrowRight"] || this.keys["KeyD"]) {
      return { digging: true, digDirection: "right" };
    }

    return { digging: false };
  }

  setInteractionCallback(callback: () => void) {
    this.onInteractionCallback = callback;
  }

  addKeydownCallback(
    keyCode: string,
    callback: (event: KeyboardEvent) => void,
  ) {
    this.keydownCallbacks[keyCode] = callback;
  }

  removeKeydownCallback(keyCode: string) {
    delete this.keydownCallbacks[keyCode];
  }

  cleanup() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    this.keydownCallbacks = {};
  }
}
