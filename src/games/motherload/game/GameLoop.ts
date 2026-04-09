import { GameState, GameLogic } from "./GameLogic";
import { GameInput } from "./GameInput";
import { playerState } from "./PlayerState";
import * as THREE from "three";

export class GameLoop {
  private lastTime = 0;
  private accumulator = 0;
  private readonly FIXED_TIMESTEP = 1000 / 60; // 60 TPS (ticks per second)
  private animationId?: number;
  private isRunning = false;
  private isPaused = false;

  private gameLogic: GameLogic;
  private gameInput: GameInput;
  private gameState: GameState;
  private renderer: THREE.WebGLRenderer;

  constructor(
    gameState: GameState,
    renderer: THREE.WebGLRenderer,
    gameLogic: GameLogic,
    gameInput: GameInput,
  ) {
    this.gameState = gameState;
    this.renderer = renderer;
    this.gameLogic = gameLogic;
    this.gameInput = gameInput;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.animate(this.lastTime);
  }

  stop() {
    console.log("🧹 GameLoop: Stopping...");
    this.isRunning = false;
    this.isPaused = false; // Reset pause state

    if (this.animationId !== undefined) {
      cancelAnimationFrame(this.animationId);
      this.animationId = undefined;
      console.log("🧹 GameLoop: Animation frame cancelled");
    }

    console.log("🧹 GameLoop: Stopped");
  }

  pause() {
    this.isPaused = true;
  }

  unpause() {
    this.isPaused = false;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
  }

  isGamePaused(): boolean {
    return this.isPaused;
  }

  getGameLogic(): GameLogic {
    return this.gameLogic;
  }

  getGameState(): GameState {
    return this.gameState;
  }

  private animate = (currentTime: number) => {
    if (!this.isRunning) return;

    // Calculate delta time
    const deltaTime = currentTime - this.lastTime;
    this.lastTime = currentTime;
    this.accumulator += deltaTime;

    // Fixed timestep updates (consistent on all refresh rates)
    // Only update game logic when not paused and game is not over
    if (!this.isPaused && !playerState.isGameOver) {
      while (this.accumulator >= this.FIXED_TIMESTEP) {
        this.updateGameLogic(this.FIXED_TIMESTEP / 1000); // Convert to seconds
        this.accumulator -= this.FIXED_TIMESTEP;
      }
    } else {
      // When paused or game over, still consume the accumulator to prevent time buildup
      this.accumulator = 0;
    }

    // Smooth interpolated rendering
    const interpolation = this.accumulator / this.FIXED_TIMESTEP;
    this.render();

    this.animationId = requestAnimationFrame(this.animate);
  };

  private updateGameLogic(deltaTime: number) {
    // Get input
    const movement = this.gameInput.getMovementInput();
    const diggingInput = this.gameInput.getDiggingInput();

    // Update physics simulation
    this.gameLogic.updatePhysics(this.gameState, deltaTime);

    // Update player based on input
    this.gameLogic.updatePlayer(
      this.gameState,
      movement,
      deltaTime,
      diggingInput,
    );
  }

  private render() {
    // Update camera position
    this.gameLogic.updateCamera(this.gameState);

    // Render the scene
    this.renderer.render(this.gameState.scene, this.gameState.camera);
  }
}
