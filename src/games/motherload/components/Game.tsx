"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GameInit } from "../game/GameInit";
import { GameLoop } from "../game/GameLoop";
import { GameLogic } from "../game/GameLogic";
import { GameInput } from "../game/GameInput";
import { GameAudio } from "../game/GameAudio";
import { GamePhysics } from "../game/GamePhysics";
import { PlayerGameGUI, UISettings } from "../game/PlayerGameGUI";
import {
  PlayerInventoryGUI,
  ItemCallbacks,
  SkillTreeCallbacks,
} from "../game/PlayerInventoryGUI";
import { playerState, StateChangeEvent } from "../game/PlayerState";
import { TileType, TILE_CONFIG, TileEncoder } from "../game/TileConfig";

// Helper function removed - now using playerState.getCargoForGUI() directly

// Visual Effects Functions
function createExplosionEffect(
  scene: THREE.Scene,
  position: { x: number; y: number },
  radius: number,
) {
  const explosionGroup = new THREE.Group();

  // Create multiple explosion rings for a more dramatic effect
  for (let ring = 0; ring <= radius; ring++) {
    setTimeout(() => {
      // Create explosion ring particles
      const particleCount = 8 + ring * 4;
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2;
        const distance = ring + Math.random() * 0.5;

        // Create particle geometry
        const particleGeometry = new THREE.PlaneGeometry(0.2, 0.2);
        const particleMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            Math.random() * 0.1, // Red-orange hues
            0.8 + Math.random() * 0.2,
            0.5 + Math.random() * 0.3,
          ),
          transparent: true,
          opacity: 0.9,
        });

        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(
          position.x + Math.cos(angle) * distance,
          position.y + Math.sin(angle) * distance,
          Math.random() * 0.5, // Slight Z variation
        );

        explosionGroup.add(particle);

        // Animate particle
        const startTime = Date.now();
        const duration = 500 + Math.random() * 300;

        const animateParticle = () => {
          const elapsed = Date.now() - startTime;
          const progress = elapsed / duration;

          if (progress < 1) {
            // Expand outward
            const currentDistance = distance * (1 + progress * 2);
            particle.position.x =
              position.x + Math.cos(angle) * currentDistance;
            particle.position.y =
              position.y + Math.sin(angle) * currentDistance;

            // Fade out
            particleMaterial.opacity = 0.9 * (1 - progress);

            // Scale up then down
            const scale = 1 + Math.sin(progress * Math.PI) * 0.5;
            particle.scale.setScalar(scale);

            requestAnimationFrame(animateParticle);
          } else {
            // Remove particle
            explosionGroup.remove(particle);
            particleGeometry.dispose();
            particleMaterial.dispose();
          }
        };

        requestAnimationFrame(animateParticle);
      }
    }, ring * 50); // Stagger ring creation
  }

  scene.add(explosionGroup);

  // Clean up the group after all particles are done
  setTimeout(() => {
    scene.remove(explosionGroup);
  }, 2000);
}

function createPileDriverEffect(
  scene: THREE.Scene,
  startPos: { x: number; y: number },
  endPos: { x: number; y: number },
  direction: string,
) {
  // Create a line effect showing the pile driver path
  const points = [
    new THREE.Vector3(startPos.x, startPos.y, 0.1),
    new THREE.Vector3(endPos.x, endPos.y, 0.1),
  ];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ffff, // Cyan color for the line
    linewidth: 3,
    transparent: true,
    opacity: 1,
  });

  const line = new THREE.Line(lineGeometry, lineMaterial);
  scene.add(line);

  // Create sparks along the line
  const sparkCount =
    Math.floor(
      Math.abs(endPos.x - startPos.x) + Math.abs(endPos.y - startPos.y),
    ) * 2;
  const sparks: THREE.Mesh[] = [];

  for (let i = 0; i < sparkCount; i++) {
    const progress = i / sparkCount;
    const sparkX = startPos.x + (endPos.x - startPos.x) * progress;
    const sparkY = startPos.y + (endPos.y - startPos.y) * progress;

    const sparkGeometry = new THREE.PlaneGeometry(0.1, 0.1);
    const sparkMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color().setHSL(
        0.15 + Math.random() * 0.1, // Yellow-orange
        0.9,
        0.7 + Math.random() * 0.3,
      ),
      transparent: true,
      opacity: 0.8,
    });

    const spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
    spark.position.set(
      sparkX + (Math.random() - 0.5) * 0.3,
      sparkY + (Math.random() - 0.5) * 0.3,
      0.2,
    );

    sparks.push(spark);
    scene.add(spark);
  }

  // Animate the effect
  const startTime = Date.now();
  const duration = 450; // Slowed down by 50% (was 300ms)

  const animateEffect = () => {
    const elapsed = Date.now() - startTime;
    const progress = elapsed / duration;

    if (progress < 1) {
      // Fade out line and sparks
      lineMaterial.opacity = 1 - progress;
      sparks.forEach((spark, index) => {
        const material = spark.material as THREE.MeshBasicMaterial;
        material.opacity = 0.8 * (1 - progress);

        // Add some movement to sparks
        spark.position.x += (Math.random() - 0.5) * 0.02;
        spark.position.y += (Math.random() - 0.5) * 0.02;
      });

      requestAnimationFrame(animateEffect);
    } else {
      // Clean up
      scene.remove(line);
      lineGeometry.dispose();
      lineMaterial.dispose();

      sparks.forEach((spark) => {
        scene.remove(spark);
        (spark.geometry as THREE.PlaneGeometry).dispose();
        (spark.material as THREE.MeshBasicMaterial).dispose();
      });
    }
  };

  requestAnimationFrame(animateEffect);
}

export function Game() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<{
    gameLoop: GameLoop;
    gameAudio: GameAudio;
    gameInput: GameInput;
    playerGUI: PlayerGameGUI;
    inventoryGUI: PlayerInventoryGUI;
    resetGame: () => void;
    cleanup: () => void;
  } | null>(null);

  const [audioStarted, setAudioStarted] = useState(false);
  const [backgroundMusicEnabled, setBackgroundMusicEnabled] = useState(false);
  const [soundEffectsEnabled, setSoundEffectsEnabled] = useState(false);
  const [showCollisionBoxes, setShowCollisionBoxes] = useState(false);

  // Game state counters for HUD display
  const [gameCounters, setGameCounters] = useState({
    depth: 0,
    fuel: 100,
    maxFuel: 100,
    hull: 100,
    maxHull: 100,
    money: 0,
    weight: 0,
  });

  // Game over state
  const [gameOverData, setGameOverData] = useState<{
    isGameOver: boolean;
    reason: string;
    score: number;
    playTime: string;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let cleanup: (() => void) | null = null;

    // Initialize game systems asynchronously (for Rapier physics)
    const initGame = async () => {
      const {
        gameState,
        renderer,
        cleanup: initCleanup,
      } = await GameInit.createGameState(mountRef.current!);
      const gameAudio = new GameAudio();
      const gameLogic = new GameLogic(gameAudio);

      // Setup input without motor sound callback (now handled in game loop)
      const gameInput = new GameInput();

      // Update sound effects setting in game logic
      gameLogic.setSoundEffectsEnabled(soundEffectsEnabled);

      // Update collision box visibility
      gameState.physics.setCollisionBoxesVisible(showCollisionBoxes);

      // Initialize game loop
      const gameLoop = new GameLoop(gameState, renderer, gameLogic, gameInput);

      // Create PlayerGameGUI with UI settings only (player data comes from playerState)
      const uiSettings: UISettings = {
        backgroundMusicEnabled,
        soundEffectsEnabled,
        showCollisionBoxes,
      };

      // Create skill tree callbacks that modify game state and affect gameplay
      const skillTreeCallbacks: SkillTreeCallbacks = {
        upgradeBlastRange: () => {
          const currentLevel = playerState.skills.blastRange || 0;
          if (currentLevel >= 5) {
            console.log("💥 Blast Range already at max level!");
            return;
          }

          const cost = 1000 * (currentLevel + 1);
          if (playerState.money >= cost) {
            playerState.updateMoney(playerState.money - cost);
            playerState.updateSkill("blastRange", currentLevel + 1);
            console.log(
              `💥 Blast Range upgraded to level ${playerState.skills.blastRange}! Cost: $${cost.toLocaleString()}`,
            );

            // State updates are automatic via playerState listeners
          } else {
            console.log(
              `💥 Not enough money! Need $${cost.toLocaleString()}, have $${playerState.money.toLocaleString()}`,
            );
          }
        },

        upgradeHealthReserve: () => {
          const currentLevel = playerState.skills.healthReserve || 0;
          if (currentLevel >= 5) {
            console.log("❤️ Health Reserve already at max level!");
            return;
          }

          const cost = 1500 * (currentLevel + 1);
          if (playerState.money >= cost) {
            playerState.updateMoney(playerState.money - cost);
            playerState.updateSkill("healthReserve", currentLevel + 1);

            // Increase max hull based on level (each level adds 20 hull)
            const hullIncrease = 20;
            playerState.updateMaxHull(playerState.maxHull + hullIncrease);
            playerState.updateHull(playerState.maxHull); // Also heal to full

            console.log(
              `❤️ Health Reserve upgraded to level ${playerState.skills.healthReserve}! Max Hull increased by ${hullIncrease}. Cost: $${cost.toLocaleString()}`,
            );

            // State updates are automatic via playerState listeners
          } else {
            console.log(
              `❤️ Not enough money! Need $${cost.toLocaleString()}, have $${playerState.money.toLocaleString()}`,
            );
          }
        },
      };

      const playerGUI = new PlayerGameGUI(uiSettings, gameAudio, undefined);

      // Create god mode callbacks that use playerState directly
      const godModeCallbacks = {
        addMoney: (amount: number) => {
          playerState.updateMoney(playerState.money + amount);
          // State updates are automatic via playerState listeners
        },
        setFuel: (amount: number) => {
          playerState.updateFuel(amount);
          // State updates are automatic via playerState listeners
        },
        setHull: (amount: number) => {
          playerState.updateHull(amount);
          // State updates are automatic via playerState listeners
        },
        resetPlayer: () => {
          // Reset player state
          playerState.updateFuel(playerState.maxFuel);
          playerState.updateHull(playerState.maxHull);
          playerState.updateMoney(0);
          playerState.updateDepth(0);
          playerState.clearCargo();

          // Reset player position to surface
          const playerBody = gameState.physics.getPlayerBody();
          if (playerBody) {
            playerBody.rigidBody.setTranslation({ x: 0, y: 4 }, true);
            playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);
          }

          // State updates are automatic via playerState listeners
        },
        teleportToSurface: () => {
          const playerBody = gameState.physics.getPlayerBody();
          if (playerBody) {
            const surfaceY = 1.5; // Proper surface spawn position
            playerBody.rigidBody.setTranslation({ x: 0, y: surfaceY }, true);
            playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);
          }
          playerState.updateDepth(0);
          // State updates are automatic via playerState listeners
        },
      };

      // Set the god mode callbacks after creation
      playerGUI.setGodModeCallbacks(godModeCallbacks);

      // PlayerInventoryGUI now gets data directly from playerState

      const itemCallbacks: ItemCallbacks = {
        useTeleporter: () => {
          // Teleport player to surface
          const playerBody = gameState.physics.getPlayerBody();
          if (playerBody) {
            const surfaceY = 1.5; // Proper surface spawn position
            playerBody.rigidBody.setTranslation({ x: 0, y: surfaceY }, true);
            playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);
          }
          console.log("🚀 Teleported to surface!");
        },
        useFuelReserve: () => {
          // Add 500 fuel
          const newFuel = Math.min(playerState.fuel + 500, playerState.maxFuel);
          playerState.updateFuel(newFuel);
          console.log("⛽ Used fuel reserve! +500 fuel");
        },
        useDynamite: () => {
          // Destroy tiles in 3x3 pattern around player, expanding with blast range skill
          const playerPos = gameState.physics.getPlayerPosition();
          const blastRange = playerState.skills.blastRange || 0;
          const explosionRadius = 1 + blastRange; // Base radius 1, +1 per skill level

          let destroyedTiles = 0;
          const centerX = Math.floor(playerPos.x);
          const centerY = Math.floor(playerPos.y);

          // Destroy tiles in expanding square pattern (including center)
          for (let radius = 0; radius <= explosionRadius; radius++) {
            for (let dx = -radius; dx <= radius; dx++) {
              for (let dy = -radius; dy <= radius; dy++) {
                // Only process edge tiles for current radius, except for radius 0 (center)
                if (
                  radius > 0 &&
                  Math.abs(dx) !== radius &&
                  Math.abs(dy) !== radius
                )
                  continue;

                const tileX = centerX + dx;
                const tileY = centerY + dy;

                // Use forceDigTile to destroy obstacles and treasures
                const result = gameState.terrain.forceDigTile(tileX, tileY);
                if (result.success && result.tileType !== undefined) {
                  // Add the destroyed tile as cargo (even obstacles like rock)
                  gameLogic.addCargoFromTileType(result.tileType);
                  destroyedTiles++;
                }
              }
            }
          }

          // Create explosion effect
          createExplosionEffect(gameState.scene, playerPos, explosionRadius);

          console.log(
            `💥 Dynamite exploded! Destroyed ${destroyedTiles} tiles (range: ${explosionRadius})`,
          );
        },
        usePileDriver: (direction: string) => {
          // Launch player through tiles in direction
          const playerBody = gameState.physics.getPlayerBody();
          if (!playerBody) return;

          const playerPos = gameState.physics.getPlayerPosition();
          const dashDistance = 4;
          const pileDriverLevel = playerState.skills.blastRange || 0; // Use blast range skill for pile driver level
          let targetX = playerPos.x;
          let targetY = playerPos.y;
          let deltaX = 0;
          let deltaY = 0;

          // Determine direction and calculate target position
          switch (direction.toLowerCase()) {
            case "down":
              deltaY = -1;
              targetY = playerPos.y - dashDistance;
              break;
            case "up":
              deltaY = 1;
              targetY = playerPos.y + dashDistance;
              break;
            case "left":
              deltaX = -1;
              targetX = playerPos.x - dashDistance;
              break;
            case "right":
              deltaX = 1;
              targetX = playerPos.x + dashDistance;
              break;
            default:
              // Default to down if direction is not recognized
              deltaY = -1;
              targetY = playerPos.y - dashDistance;
              break;
          }

          // Ensure target is within world bounds
          const worldBounds = GamePhysics.getWorldBounds();
          targetX = Math.max(
            worldBounds.left,
            Math.min(targetX, worldBounds.right),
          );
          targetY = Math.max(
            worldBounds.bottom,
            Math.min(targetY, worldBounds.top),
          );

          // Check for obstacles along the path before launching
          let destroyedTiles = 0;
          let hitRock = false;
          let actualDistance = dashDistance;
          const tilesToDestroy: Array<{
            x: number;
            y: number;
            tileType: TileType;
          }> = [];

          // Calculate all tiles that will be crossed during the movement
          // Use a more precise path calculation
          const startTileX = Math.floor(playerPos.x + 0.5);
          const startTileY = Math.floor(playerPos.y + 0.5);
          const endTileX = Math.floor(targetX + 0.5);
          const endTileY = Math.floor(targetY + 0.5);

          // Generate all tiles along the path using a comprehensive approach
          const pathTiles: Array<{ x: number; y: number }> = [];

          // Add tiles immediately adjacent to player in the movement direction
          for (let step = 1; step <= dashDistance; step++) {
            const tileX = startTileX + deltaX * step;
            const tileY = startTileY + deltaY * step;

            // Check if this tile is within world bounds
            if (
              tileX >= worldBounds.left &&
              tileX <= worldBounds.right &&
              tileY >= worldBounds.bottom &&
              tileY <= worldBounds.top
            ) {
              pathTiles.push({ x: tileX, y: tileY });
            }
          }

          console.log(
            `🔨 Pile driver path: from (${startTileX}, ${startTileY}) -> tiles: ${pathTiles.map((t) => `(${t.x},${t.y})`).join(", ")}`,
          );

          // Pre-scan the path for obstacles
          for (let i = 0; i < pathTiles.length; i++) {
            const { x: checkX, y: checkY } = pathTiles[i];

            // Stop if we hit world boundaries
            if (
              checkX < worldBounds.left ||
              checkX > worldBounds.right ||
              checkY < worldBounds.bottom ||
              checkY > worldBounds.top
            ) {
              actualDistance = i;
              // Recalculate target based on how far we actually got
              if (deltaX !== 0) {
                targetX = startTileX + deltaX * actualDistance;
              } else {
                targetY = startTileY + deltaY * actualDistance;
              }
              break;
            }

            const tile = gameState.terrain.getTileAt(checkX, checkY);
            if (tile && !TileEncoder.isEmpty(tile.encodedType)) {
              const tileType = tile.encodedType as TileType;

              // Check if it's rock
              if (tileType === TileType.ROCK) {
                // Only break rock if pile driver level is 2+
                if (pileDriverLevel >= 2) {
                  tilesToDestroy.push({ x: checkX, y: checkY, tileType });
                  console.log(
                    `🔨 Pile driver level ${pileDriverLevel} - will break through rock!`,
                  );
                } else {
                  // Stop before the rock and take damage
                  hitRock = true;
                  actualDistance = i; // Stop at this position
                  // Recalculate target position
                  if (deltaX !== 0) {
                    targetX = startTileX + deltaX * actualDistance;
                  } else {
                    targetY = startTileY + deltaY * actualDistance;
                  }

                  // Apply damage for hitting rock
                  const damage = 25;
                  const newHull = Math.max(0, playerState.hull - damage);
                  playerState.updateHull(newHull);

                  console.log(
                    `💥 Pile driver hit rock! Stopped at distance ${actualDistance}, took ${damage} damage (Hull: ${newHull})`,
                  );
                  break;
                }
              } else {
                // Queue non-rock tiles for destruction
                tilesToDestroy.push({ x: checkX, y: checkY, tileType });
              }
            }
          }

          // Create pile driver line effect
          createPileDriverEffect(
            gameState.scene,
            playerPos,
            { x: targetX, y: targetY },
            direction,
          );

          // Launch player to target position instantly
          playerBody.rigidBody.setTranslation({ x: targetX, y: targetY }, true);

          // Add high velocity launch effect
          const launchVelocity = hitRock && pileDriverLevel < 2 ? 8 : 20;
          playerBody.rigidBody.setLinvel(
            {
              x: deltaX * launchVelocity,
              y: deltaY * launchVelocity,
            },
            true,
          );

          // Destroy all tiles along the path after launching (with a small delay for visual effect)
          setTimeout(() => {
            tilesToDestroy.forEach(({ x, y, tileType }) => {
              const result = gameState.terrain.forceDigTile(x, y);
              if (result.success) {
                gameLogic.addCargoFromTileType(tileType);
                destroyedTiles++;
              }
            });

            // Also ensure the destination tile is clear
            const finalTileX = Math.floor(targetX + 0.5);
            const finalTileY = Math.floor(targetY + 0.5);
            const finalTile = gameState.terrain.getTileAt(
              finalTileX,
              finalTileY,
            );
            if (finalTile && !TileEncoder.isEmpty(finalTile.encodedType)) {
              const result = gameState.terrain.forceDigTile(
                finalTileX,
                finalTileY,
              );
              if (result.success && result.tileType !== undefined) {
                gameLogic.addCargoFromTileType(result.tileType);
                destroyedTiles++;
              }
            }

            // Calculate actual distance traveled in tiles and log message after destruction
            const distanceTraveled = Math.abs(
              deltaX !== 0 ? targetX - playerPos.x : targetY - playerPos.y,
            );

            const message =
              hitRock && pileDriverLevel < 2
                ? `🔨 Pile driver hit rock! Launched ${distanceTraveled.toFixed(1)} tiles, destroyed ${destroyedTiles} tiles, took 25 damage`
                : `🔨 Pile driver launched ${direction}! Traveled ${distanceTraveled.toFixed(1)} tiles, destroyed ${destroyedTiles} tiles`;
            console.log(message);
          }, 50); // Small delay to let the visual effect start first
        },
      };

      const inventoryGUI = new PlayerInventoryGUI(
        itemCallbacks,
        skillTreeCallbacks,
      );

      // Add some test items for development/testing
      inventoryGUI.addItem("teleporter", 3);
      inventoryGUI.addItem("fuelReserve", 10);
      inventoryGUI.addItem("dynamite", 5);
      inventoryGUI.addItem("pileDriver", 2);

      // Set up counter updates callback for HUD display only
      // All GUIs now automatically sync via playerState listeners
      gameLogic.setCountersUpdateCallback((counters) => {
        // Update React state for HUD display only
        setGameCounters(counters);

        // All other updates are automatic via playerState event system
      });

      // Set up game over callback
      gameLogic.setGameOverCallback((gameOverData) => {
        console.log("🎮 Game Over detected:", gameOverData);
        setGameOverData({
          isGameOver: true,
          reason: gameOverData.reason,
          score: gameOverData.score,
          playTime: gameOverData.playTime,
        });
      });

      // Set up PlayerState listener for game over events
      const handleGameOver = (event: StateChangeEvent) => {
        if (event.type === "gameOver") {
          const { reason, score } = event.newValue as {
            reason: string;
            score: number;
          };
          const playTime = playerState.formatPlayTime();

          setGameOverData({
            isGameOver: true,
            reason,
            score,
            playTime,
          });
        } else if (event.type === "gameReset") {
          setGameOverData(null);
        }
      };

      playerState.addStateChangeListener(handleGameOver);

      // Set up settings change callback
      playerGUI.setOnSettingsChange(async (settings) => {
        if ("backgroundMusicEnabled" in settings) {
          setBackgroundMusicEnabled(settings.backgroundMusicEnabled!);
          // Actually start/stop background music
          try {
            if (settings.backgroundMusicEnabled) {
              await gameAudio.startBackgroundMusic();
            } else {
              gameAudio.stopBackgroundMusic();
            }
          } catch (error) {
            console.error("🎵 Error controlling background music:", error);
          }
        }
        if ("soundEffectsEnabled" in settings) {
          setSoundEffectsEnabled(settings.soundEffectsEnabled!);
          gameLogic.setSoundEffectsEnabled(settings.soundEffectsEnabled!);
        }
        if ("showCollisionBoxes" in settings) {
          setShowCollisionBoxes(settings.showCollisionBoxes!);
          gameState.physics.setCollisionBoxesVisible(
            settings.showCollisionBoxes!,
          );
        }
      });

      // Set up interaction callback for E key
      gameInput.setInteractionCallback(() => {
        if (gameLoop.isGamePaused()) {
          // If shop is open, close it and unpause
          gameState.shop.close();
          gameLoop.unpause();
          console.log("🏪 Shop closed");
        } else {
          // Try to open shop if near building
          gameLogic.handlePlayerInteraction(gameState, gameLoop);
        }
      });

      // Add player GUI toggle key (Tab key)
      gameInput.addKeydownCallback("Tab", (event) => {
        event.preventDefault(); // Prevent default tab behavior
        playerGUI.toggle();
        console.log("🎮 Player GUI toggled");
      });

      // Add inventory toggle key (I key)
      gameInput.addKeydownCallback("KeyI", (event) => {
        event.preventDefault();
        inventoryGUI.toggle();
        console.log("🎒 Inventory toggled");
      });

      // Add item usage keys

      // Add debug key for testing game over (G key)
      gameInput.addKeydownCallback("KeyG", (event) => {
        event.preventDefault();
        console.log("🧪 Debug: Triggering game over for testing...");
        playerState.updateFuel(0); // Force game over by setting fuel to 0
      });

      // X key - Dynamite
      gameInput.addKeydownCallback("KeyX", (event) => {
        event.preventDefault();
        if (playerState.items.dynamite && playerState.items.dynamite > 0) {
          itemCallbacks.useDynamite();
          inventoryGUI.removeItem("dynamite", 1);
        } else {
          console.log("💥 No dynamite available!");
        }
      });

      // F key - Fuel Reserve
      gameInput.addKeydownCallback("KeyF", (event) => {
        event.preventDefault();
        if (
          playerState.items.fuelReserve &&
          playerState.items.fuelReserve > 0
        ) {
          itemCallbacks.useFuelReserve();
          inventoryGUI.removeItem("fuelReserve", 1);
        } else {
          console.log("⛽ No fuel reserve available!");
        }
      });

      // T key - Teleporter
      gameInput.addKeydownCallback("KeyT", (event) => {
        event.preventDefault();
        if (playerState.items.teleporter && playerState.items.teleporter > 0) {
          itemCallbacks.useTeleporter();
          inventoryGUI.removeItem("teleporter", 1);
        } else {
          console.log("🚀 No teleporter available!");
        }
      });

      // Shift + Direction keys - Pile Driver
      const handlePileDriverInput = (
        event: KeyboardEvent,
        direction: string,
      ) => {
        // Only trigger if shift is actively being held down
        if (gameInput.isShiftPressed()) {
          event.preventDefault();
          if (
            playerState.items.pileDriver &&
            playerState.items.pileDriver > 0
          ) {
            itemCallbacks.usePileDriver(direction);
            inventoryGUI.removeItem("pileDriver", 1);
          } else {
            console.log("🔨 No pile driver available!");
          }
        }
      };

      // Direction keys - check for pile driver when shift is held
      gameInput.addKeydownCallback("KeyW", (event) =>
        handlePileDriverInput(event, "up"),
      );
      gameInput.addKeydownCallback("ArrowUp", (event) =>
        handlePileDriverInput(event, "up"),
      );

      gameInput.addKeydownCallback("KeyS", (event) =>
        handlePileDriverInput(event, "down"),
      );
      gameInput.addKeydownCallback("ArrowDown", (event) =>
        handlePileDriverInput(event, "down"),
      );

      gameInput.addKeydownCallback("KeyA", (event) =>
        handlePileDriverInput(event, "left"),
      );
      gameInput.addKeydownCallback("ArrowLeft", (event) =>
        handlePileDriverInput(event, "left"),
      );

      gameInput.addKeydownCallback("KeyD", (event) =>
        handlePileDriverInput(event, "right"),
      );
      gameInput.addKeydownCallback("ArrowRight", (event) =>
        handlePileDriverInput(event, "right"),
      );

      // Reset game function
      const resetGame = () => {
        console.log("🔄 Resetting game from UI...");

        // Stop current game loop
        gameLoop.stop();

        // Reset player state first
        playerState.resetGame();

        // Reset terrain (regenerate world)
        gameState.terrain.reset();

        // Wait for physics world to stabilize, then reset player position
        setTimeout(() => {
          const playerBody = gameState.physics.getPlayerBody();
          if (playerBody) {
            const startY = 1.5; // GamePhysics.SURFACE_Y (0) + 1.5 tiles above surface
            playerBody.rigidBody.setTranslation({ x: 0, y: startY }, true);
            playerBody.rigidBody.setLinvel({ x: 0, y: 0 }, true);

            // Also reset any digging state
            gameState.isDigging = false;
            gameState.digTimer = 0;
            gameState.digDuration = 0;
            gameState.digStartPosition = undefined;
            gameState.digTargetPosition = undefined;

            // Ensure depth is properly reset to 0
            playerState.updateDepth(0);

            console.log(
              `🎮 Player reset to surface position: (0, ${startY}), depth reset to 0`,
            );
          }

          // Restart game loop after position reset
          gameLoop.start();
          console.log("✅ Game reset complete - Player back on surface");
        }, 100); // Small delay to ensure physics world is ready

        // Clear game over state immediately
        setGameOverData(null);
      };

      // Store references
      gameRef.current = {
        gameLoop,
        gameAudio,
        gameInput,
        playerGUI,
        inventoryGUI,
        resetGame,
        cleanup: () => {
          console.log("🧹 Game cleanup starting...");

          // Stop game loop first
          gameLoop.stop();
          console.log("🧹 Game loop stopped");

          // Clean up input (removes DOM event listeners)
          gameInput.cleanup();
          console.log("🧹 Game input cleaned up");

          // Clean up audio
          gameAudio.cleanup();
          console.log("🧹 Game audio cleaned up");

          // Clean up GUIs (removes state listeners and destroys dat.GUI instances)
          playerGUI.cleanup();
          inventoryGUI.cleanup();

          // Clean up PlayerState (removes any remaining listeners)
          playerState.removeStateChangeListener(handleGameOver);
          playerState.cleanup();

          // Clean up game initialization (physics, terrain, etc.)
          initCleanup();
          console.log("🧹 Game initialization cleaned up");

          console.log("🧹 Game cleanup complete");
        },
      };

      cleanup = gameRef.current.cleanup;

      // Start the game loop
      gameLoop.start();

      // Start background music when user interacts (due to browser autoplay policies)
      const startAudio = async () => {
        if (!audioStarted) {
          if (backgroundMusicEnabled) {
            await gameAudio.startBackgroundMusic();
          }
          setAudioStarted(true);
          document.removeEventListener("click", startAudio);
          document.removeEventListener("keydown", startAudio);
        }
      };

      document.addEventListener("click", startAudio);
      document.addEventListener("keydown", startAudio);

      // Store audio cleanup function for proper cleanup
      const audioCleanup = () => {
        document.removeEventListener("click", startAudio);
        document.removeEventListener("keydown", startAudio);
        console.log("🧹 Audio event listeners removed");
      };

      // Add audio cleanup to main cleanup function
      const originalCleanup = gameRef.current!.cleanup;
      gameRef.current!.cleanup = () => {
        audioCleanup();
        originalCleanup();
      };

      return { startAudio, audioCleanup };
    };

    // Initialize the game
    initGame()
      .then(() => {
        // Game initialized successfully
      })
      .catch(console.error);

    // Cleanup
    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []); // Only initialize once on mount

  // Handle sound effects setting changes without reinitializing
  useEffect(() => {
    if (gameRef.current?.gameLoop) {
      const gameLogic = gameRef.current.gameLoop.getGameLogic();
      if (gameLogic) {
        gameLogic.setSoundEffectsEnabled(soundEffectsEnabled);
      }
    }
  }, [soundEffectsEnabled]);

  // Handle collision box visibility changes without reinitializing
  useEffect(() => {
    if (gameRef.current?.gameLoop) {
      const gameState = gameRef.current.gameLoop.getGameState();
      if (gameState?.physics) {
        gameState.physics.setCollisionBoxesVisible(showCollisionBoxes);
      }
    }
  }, [showCollisionBoxes]);

  // Handle background music changes without reinitializing
  useEffect(() => {
    if (gameRef.current?.gameAudio && audioStarted) {
      if (backgroundMusicEnabled) {
        gameRef.current.gameAudio.startBackgroundMusic();
      } else {
        gameRef.current.gameAudio.stopBackgroundMusic();
      }
    }
  }, [backgroundMusicEnabled, audioStarted]);

  return (
    <div className="relative w-full h-full">
      <div ref={mountRef} className="w-full h-full" />

      {/* Game Over Overlay */}
      {gameOverData?.isGameOver && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 border-4 border-red-600 rounded-lg p-8 text-center max-w-md mx-4">
            <div className="text-red-500 text-4xl font-bold mb-4">
              💀 GAME OVER
            </div>
            <div className="text-red-400 text-xl mb-6">
              {gameOverData.reason}
            </div>

            <div className="text-white space-y-3 mb-6">
              <div className="text-2xl font-bold text-yellow-400">
                Final Score: {gameOverData.score.toLocaleString()}
              </div>
              <div className="text-lg">
                Time Played:{" "}
                <span className="text-green-400">{gameOverData.playTime}</span>
              </div>
              <div className="text-lg">
                Max Depth:{" "}
                <span className="text-blue-400">{gameCounters.depth}m</span>
              </div>
              <div className="text-lg">
                Money Earned:{" "}
                <span className="text-yellow-400">
                  ${gameCounters.money.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                if (gameRef.current?.resetGame) {
                  gameRef.current.resetGame();
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors"
            >
              🔄 Play Again
            </button>
          </div>
        </div>
      )}

      {/* Game HUD Counters */}
      <div className="absolute top-4 left-4 text-white font-mono text-lg font-bold pointer-events-none select-none">
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "18px",
            textShadow:
              "2px 2px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000",
            lineHeight: "1.4",
          }}
        >
          <div>Depth: {gameCounters.depth}m</div>
          <div>
            Fuel: {Math.round(gameCounters.fuel)} / {gameCounters.maxFuel}
          </div>
          <div>
            Hull: {Math.round(gameCounters.hull)} / {gameCounters.maxHull}
          </div>
          <div>Money: ${Math.round(gameCounters.money)}</div>
          <div>Weight: {gameCounters.weight}</div>
        </div>
      </div>

      {/* Audio prompt */}
      {!audioStarted && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-70 p-3 rounded-lg">
          <p className="text-yellow-300">
            🎵 Click anywhere or press a key to start audio
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 text-white bg-black bg-opacity-70 p-3 rounded-lg pointer-events-none select-none">
        <div className="text-sm">
          <div>
            🎮 <strong>WASD</strong> - Move & Drill
          </div>
          <div>
            📋 <strong>Tab</strong> - Toggle Player/Game GUI
          </div>
          <div>
            🎒 <strong>I</strong> - Toggle Inventory
          </div>
          <div>
            🏪 <strong>E</strong> - Interact with Junk Shop
          </div>
          <div className="mt-2 border-t border-gray-400 pt-2">
            <div>
              💥 <strong>X</strong> - Use Dynamite
            </div>
            <div>
              ⛽ <strong>F</strong> - Use Fuel Reserve
            </div>
            <div>
              🚀 <strong>T</strong> - Use Teleporter
            </div>
            <div>
              🔨 <strong>Hold Shift + Direction</strong> - Pile Driver
            </div>
            <div className="mt-2 border-t border-gray-400 pt-2">
              <div className="text-yellow-300">
                🧪 <strong>G</strong> - Debug Game Over (Testing)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
