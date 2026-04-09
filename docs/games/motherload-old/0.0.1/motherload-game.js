// Game constants
const TILE_SIZE = 64;
const PLAYER_SPEED = 8;
const DRILL_SPEED = 5;
const MAX_FUEL = 1000;
const FUEL_CONSUMPTION = 0.1;
const VIEWPORT_WIDTH = 1040;
const VIEWPORT_HEIGHT = 780;

// Game state
let gameState = {
  player: {
    x: 0,
    y: 0,
    fuel: MAX_FUEL,
    money: 0,
    inventory: {},
    drillLevel: 1,
    velocityY: 0,
    gravity: 0.5,
  },
  world: {
    width: 100,
    height: 1000,
    tiles: [],
    camera: {
      x: 0,
      y: 0,
    },
  },
  keys: {
    left: false,
    right: false,
    down: false,
    up: false,
    space: false,
  },
};

// Tile types
const TILE_TYPES = {
  EMPTY: 0,
  DIRT: 1,
  BRONZE: 2,
  TIN: 3,
  IRON: 4,
  SILVER: 5,
  GOLD: 6,
  DIAMOND: 7,
  AIR_POCKET: 8,
  TREASURE: 9,
};

// Initialize the game
function onLoadPage() {
  console.log("Initializing Motherload game...");

  // Set up canvas
  const canvas = document.getElementById("game-canvas");
  canvas.width = VIEWPORT_WIDTH;
  canvas.height = VIEWPORT_HEIGHT;
  const ctx = canvas.getContext("2d");

  // Initialize world
  initializeWorld();

  // Set up input handlers
  setupInputHandlers();

  // Start game loop
  requestAnimationFrame(gameLoop);
}

// Initialize the game world
function initializeWorld() {
  // Create empty world
  for (let y = 0; y < gameState.world.height; y++) {
    gameState.world.tiles[y] = [];
    for (let x = 0; x < gameState.world.width; x++) {
      // Surface layer (empty)
      if (y < 5) {
        gameState.world.tiles[y][x] = TILE_TYPES.EMPTY;
      }
      // Dirt layer
      else if (y < 20) {
        gameState.world.tiles[y][x] = TILE_TYPES.DIRT;
      }
      // Ore layers
      else {
        const rand = Math.random();
        if (rand < 0.7) {
          gameState.world.tiles[y][x] = TILE_TYPES.DIRT;
        } else if (rand < 0.8) {
          gameState.world.tiles[y][x] = TILE_TYPES.BRONZE;
        } else if (rand < 0.9) {
          gameState.world.tiles[y][x] = TILE_TYPES.TIN;
        } else if (rand < 0.95) {
          gameState.world.tiles[y][x] = TILE_TYPES.IRON;
        } else if (rand < 0.98) {
          gameState.world.tiles[y][x] = TILE_TYPES.SILVER;
        } else if (rand < 0.99) {
          gameState.world.tiles[y][x] = TILE_TYPES.GOLD;
        } else {
          gameState.world.tiles[y][x] = TILE_TYPES.DIAMOND;
        }
      }
    }
  }

  // Add some air pockets
  for (let i = 0; i < 20; i++) {
    const x = Math.floor(Math.random() * gameState.world.width);
    const y = Math.floor(Math.random() * (gameState.world.height - 20)) + 20;
    createAirPocket(x, y);
  }

  // Add some treasure chests
  for (let i = 0; i < 10; i++) {
    const x = Math.floor(Math.random() * gameState.world.width);
    const y = Math.floor(Math.random() * (gameState.world.height - 20)) + 20;
    gameState.world.tiles[y][x] = TILE_TYPES.TREASURE;
  }

  // Set player starting position
  gameState.player.x = Math.floor(gameState.world.width / 2);
  gameState.player.y = 0;
}

// Create an air pocket
function createAirPocket(x, y) {
  const size = Math.floor(Math.random() * 3) + 2;
  for (let dy = -size; dy <= size; dy++) {
    for (let dx = -size; dx <= size; dx++) {
      const nx = x + dx;
      const ny = y + dy;
      if (
        nx >= 0 &&
        nx < gameState.world.width &&
        ny >= 0 &&
        ny < gameState.world.height
      ) {
        gameState.world.tiles[ny][nx] = TILE_TYPES.AIR_POCKET;
      }
    }
  }
}

// Set up input handlers
function setupInputHandlers() {
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        gameState.keys.left = true;
        break;
      case "ArrowRight":
        gameState.keys.right = true;
        break;
      case "ArrowDown":
        gameState.keys.down = true;
        break;
      case "ArrowUp":
        gameState.keys.up = true;
        break;
      case " ":
        gameState.keys.space = true;
        break;
    }
  });

  document.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        gameState.keys.left = false;
        break;
      case "ArrowRight":
        gameState.keys.right = false;
        break;
      case "ArrowDown":
        gameState.keys.down = false;
        break;
      case "ArrowUp":
        gameState.keys.up = false;
        break;
      case " ":
        gameState.keys.space = false;
        break;
    }
  });
}

// Main game loop
function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Update game state
function update() {
  const player = gameState.player;
  const world = gameState.world;
  const keys = gameState.keys;

  const fuelDrillCost = FUEL_CONSUMPTION * 2;
  const fuelMoveCost = FUEL_CONSUMPTION;
  const fuelFlyCost = FUEL_CONSUMPTION * 1.5;

  let isFlyingUp = false;
  if (keys.up && player.fuel > 0) {
    if (player.fuel >= fuelFlyCost) {
      player.velocityY = -PLAYER_SPEED * 0.75;
      player.fuel -= fuelFlyCost;
      isFlyingUp = true;
    }
  }

  // Handle horizontal movement (always) and drilling (only if not flying)
  // Left movement
  if (keys.left && player.fuel > 0) {
    const probeX = Math.floor((player.x - TILE_SIZE / 2 - 1) / TILE_SIZE);
    const probeY = Math.floor(player.y / TILE_SIZE);

    if (probeX >= 0) {
      const tile = world.tiles[probeY]?.[probeX];
      // Check if we need to drill (if not flying) or just move (if flying or empty space)
      if (
        !isFlyingUp &&
        tile !== undefined &&
        tile !== TILE_TYPES.EMPTY &&
        tile !== TILE_TYPES.AIR_POCKET
      ) {
        // Drill left
        if (player.fuel >= fuelDrillCost) {
          world.tiles[probeY][probeX] = TILE_TYPES.EMPTY;
          player.fuel -= fuelDrillCost;
          if (tile >= TILE_TYPES.BRONZE && tile <= TILE_TYPES.DIAMOND)
            collectOre(tile);
          else if (tile === TILE_TYPES.TREASURE) collectTreasure();
          player.x -= PLAYER_SPEED;
        } else {
          player.x = (probeX + 1) * TILE_SIZE + TILE_SIZE / 2; // Snap to edge
        }
      } else if (
        tile === undefined ||
        tile === TILE_TYPES.EMPTY ||
        tile === TILE_TYPES.AIR_POCKET ||
        isFlyingUp
      ) {
        // Just move left (in empty space or while flying)
        if (player.fuel >= fuelMoveCost) {
          player.x -= PLAYER_SPEED;
          player.fuel -= fuelMoveCost;
        }
      }
    } else {
      // At world edge
      player.x = Math.max(TILE_SIZE / 2, player.x - PLAYER_SPEED);
      if (player.x <= TILE_SIZE / 2 && player.fuel >= fuelMoveCost)
        player.fuel -= fuelMoveCost;
    }
  }

  // Right movement
  if (keys.right && player.fuel > 0) {
    const probeX = Math.floor((player.x + TILE_SIZE / 2 + 1) / TILE_SIZE);
    const probeY = Math.floor(player.y / TILE_SIZE);

    if (probeX < world.width) {
      const tile = world.tiles[probeY]?.[probeX];
      // Check if we need to drill (if not flying) or just move (if flying or empty space)
      if (
        !isFlyingUp &&
        tile !== undefined &&
        tile !== TILE_TYPES.EMPTY &&
        tile !== TILE_TYPES.AIR_POCKET
      ) {
        // Drill right
        if (player.fuel >= fuelDrillCost) {
          world.tiles[probeY][probeX] = TILE_TYPES.EMPTY;
          player.fuel -= fuelDrillCost;
          if (tile >= TILE_TYPES.BRONZE && tile <= TILE_TYPES.DIAMOND)
            collectOre(tile);
          else if (tile === TILE_TYPES.TREASURE) collectTreasure();
          player.x += PLAYER_SPEED;
        } else {
          player.x = probeX * TILE_SIZE - TILE_SIZE / 2; // Snap to edge
        }
      } else if (
        tile === undefined ||
        tile === TILE_TYPES.EMPTY ||
        tile === TILE_TYPES.AIR_POCKET ||
        isFlyingUp
      ) {
        // Just move right (in empty space or while flying)
        if (player.fuel >= fuelMoveCost) {
          player.x += PLAYER_SPEED;
          player.fuel -= fuelMoveCost;
        }
      }
    } else {
      // At world edge
      player.x = Math.min(
        world.width * TILE_SIZE - TILE_SIZE / 2,
        player.x + PLAYER_SPEED,
      );
      if (
        player.x >= world.width * TILE_SIZE - TILE_SIZE / 2 &&
        player.fuel >= fuelMoveCost
      )
        player.fuel -= fuelMoveCost;
    }
  }

  // Apply gravity (unless actively flying up and overriding it)
  if (!isFlyingUp || player.velocityY < 0) {
    player.velocityY += player.gravity;
  }
  player.y += player.velocityY;

  // Handle drilling (downwards) and vertical collision (only if not flying up)
  const playerTileXCenter = Math.floor(player.x / TILE_SIZE);
  const playerTileYBottom = Math.floor((player.y + TILE_SIZE / 2) / TILE_SIZE);

  if (!isFlyingUp && keys.down && player.fuel > 0) {
    const drillTargetTileX = playerTileXCenter;
    const drillTargetTileY = playerTileYBottom;

    if (
      drillTargetTileY < world.height &&
      drillTargetTileY >= 0 &&
      drillTargetTileX >= 0 &&
      drillTargetTileX < world.width
    ) {
      const tile = world.tiles[drillTargetTileY][drillTargetTileX];
      if (tile !== TILE_TYPES.EMPTY && tile !== TILE_TYPES.AIR_POCKET) {
        if (player.fuel >= fuelDrillCost) {
          world.tiles[drillTargetTileY][drillTargetTileX] = TILE_TYPES.EMPTY;
          player.fuel -= fuelDrillCost;
          if (tile >= TILE_TYPES.BRONZE && tile <= TILE_TYPES.DIAMOND)
            collectOre(tile);
          else if (tile === TILE_TYPES.TREASURE) collectTreasure();
        }
      }
    }
    // Allow moving down into empty space if key is held, even if not enough fuel to drill solid block
    if (
      player.fuel >= fuelMoveCost ||
      world.tiles[drillTargetTileY]?.[drillTargetTileX] === TILE_TYPES.EMPTY ||
      world.tiles[drillTargetTileY]?.[drillTargetTileX] ===
        TILE_TYPES.AIR_POCKET
    ) {
      player.velocityY = DRILL_SPEED;
      if (
        world.tiles[drillTargetTileY]?.[drillTargetTileX] ===
          TILE_TYPES.EMPTY ||
        world.tiles[drillTargetTileY]?.[drillTargetTileX] ===
          TILE_TYPES.AIR_POCKET
      ) {
        if (player.fuel >= fuelMoveCost) player.fuel -= fuelMoveCost;
      }
    }
  }

  // Vertical collision (landing on a tile / hitting head)
  const feetTileX = Math.floor(player.x / TILE_SIZE);
  const feetTileY = Math.floor((player.y + TILE_SIZE / 2) / TILE_SIZE);

  if (
    feetTileY >= 0 &&
    feetTileY < world.height &&
    feetTileX >= 0 &&
    feetTileX < world.width
  ) {
    const tileBelowFeet = world.tiles[feetTileY][feetTileX];
    if (
      player.velocityY > 0 &&
      tileBelowFeet !== TILE_TYPES.EMPTY &&
      tileBelowFeet !== TILE_TYPES.AIR_POCKET
    ) {
      player.y = feetTileY * TILE_SIZE - TILE_SIZE / 2;
      player.velocityY = 0;
    }
  }

  const headTileX = Math.floor(player.x / TILE_SIZE);
  const headTileY = Math.floor((player.y - TILE_SIZE / 2) / TILE_SIZE);
  if (
    headTileY >= 0 &&
    headTileY < world.height &&
    headTileX >= 0 &&
    headTileX < world.width
  ) {
    const tileAboveHead = world.tiles[headTileY][headTileX];
    if (
      player.velocityY < 0 &&
      tileAboveHead !== TILE_TYPES.EMPTY &&
      tileAboveHead !== TILE_TYPES.AIR_POCKET
    ) {
      player.y = (headTileY + 1) * TILE_SIZE + TILE_SIZE / 2;
      player.velocityY = 0;
    }
  }

  // Clamp player position to world bounds
  player.x = Math.max(
    TILE_SIZE / 2,
    Math.min(player.x, world.width * TILE_SIZE - TILE_SIZE / 2),
  );
  player.y = Math.max(
    TILE_SIZE / 2,
    Math.min(player.y, world.height * TILE_SIZE - TILE_SIZE / 2),
  );

  // Update camera position
  world.camera.x = player.x - VIEWPORT_WIDTH / 2;
  world.camera.y = player.y - VIEWPORT_HEIGHT / 2;

  // Clamp camera to world bounds
  world.camera.x = Math.max(
    0,
    Math.min(world.camera.x, world.width * TILE_SIZE - VIEWPORT_WIDTH),
  );
  world.camera.y = Math.max(
    0,
    Math.min(world.camera.y, world.height * TILE_SIZE - VIEWPORT_HEIGHT),
  );

  // Update UI
  updateUI();
}

// Render the game
function render() {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");

  // Clear canvas
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load spritesheet
  const spritesheet = new Image();
  spritesheet.src = "motherload.png"; // Assuming the image is in an 'assets' folder

  // Calculate visible tile range
  const startX = Math.floor(gameState.world.camera.x / TILE_SIZE);
  const startY = Math.floor(gameState.world.camera.y / TILE_SIZE);
  const endX = Math.ceil(
    (gameState.world.camera.x + VIEWPORT_WIDTH) / TILE_SIZE,
  );
  const endY = Math.ceil(
    (gameState.world.camera.y + VIEWPORT_HEIGHT) / TILE_SIZE,
  );

  // Draw visible tiles
  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      if (
        x >= 0 &&
        x < gameState.world.width &&
        y >= 0 &&
        y < gameState.world.height
      ) {
        const tile = gameState.world.tiles[y][x];
        const screenX = x * TILE_SIZE - gameState.world.camera.x;
        const screenY = y * TILE_SIZE - gameState.world.camera.y;

        // Draw tile based on type
        switch (tile) {
          case TILE_TYPES.EMPTY:
            ctx.fillStyle = "#000";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.DIRT:
            ctx.fillStyle = "#654321"; // Darker Brown
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.BRONZE:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the bronze sprite
            if (spritesheet.complete) {
              ctx.drawImage(
                spritesheet,
                2 * TILE_SIZE,
                1 * TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE,
                screenX,
                screenY,
                TILE_SIZE,
                TILE_SIZE,
              );
            } else {
              ctx.fillStyle = "#CD7F32"; // Fallback color for bronze if spritesheet not loaded
              ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            }
            break;
          case TILE_TYPES.TIN:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the tin color (this acts as a fallback like other ores)
            ctx.fillStyle = "#C0C0C0";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.IRON:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the iron color (this acts as a fallback like other ores)
            ctx.fillStyle = "#A19D94";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.SILVER:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the bronze sprite
            if (spritesheet.complete) {
              ctx.drawImage(
                spritesheet,
                0 * TILE_SIZE,
                1 * TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE,
                screenX,
                screenY,
                TILE_SIZE,
                TILE_SIZE,
              );
            } else {
              ctx.fillStyle = "#E6E6FA"; // Fallback color for silver if spritesheet not loaded
              ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            }
            break;
          case TILE_TYPES.GOLD:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the bronze sprite
            if (spritesheet.complete) {
              ctx.drawImage(
                spritesheet,
                1 * TILE_SIZE,
                1 * TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE,
                screenX,
                screenY,
                TILE_SIZE,
                TILE_SIZE,
              );
            } else {
              ctx.fillStyle = "#FFD700"; // Fallback color for gold if spritesheet not loaded
              ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            }
            break;
          case TILE_TYPES.DIAMOND:
            // Draw dirt background first
            ctx.fillStyle = "#654321"; // Darker Dirt color
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            // Then draw the diamond color (this acts as a fallback like other ores)
            ctx.fillStyle = "#B9F2FF";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.AIR_POCKET:
            ctx.fillStyle = "#000";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
          case TILE_TYPES.TREASURE:
            ctx.fillStyle = "#FFD700";
            ctx.fillRect(screenX, screenY, TILE_SIZE, TILE_SIZE);
            break;
        }
      }
    }
  }

  // Draw player
  const playerScreenX = gameState.player.x - gameState.world.camera.x;
  const playerScreenY = gameState.player.y - gameState.world.camera.y;
  if (spritesheet.complete) {
    ctx.drawImage(
      spritesheet,
      0,
      0,
      TILE_SIZE,
      TILE_SIZE,
      playerScreenX - TILE_SIZE / 2,
      playerScreenY - TILE_SIZE / 2,
      TILE_SIZE,
      TILE_SIZE,
    );
  } else {
    ctx.fillStyle = "#FF0000"; // Fallback color
    ctx.fillRect(
      playerScreenX - TILE_SIZE / 2,
      playerScreenY - TILE_SIZE / 2,
      TILE_SIZE,
      TILE_SIZE,
    );
  }
}

// Update UI elements
function updateUI() {
  // Update fuel bar
  const fuelFill = document.getElementById("fuel-fill");
  const fuelText = document.querySelector("#fuel-bar .bar-text");
  const fuelPercentage = (gameState.player.fuel / MAX_FUEL) * 100;
  fuelFill.style.width = `${fuelPercentage}%`;
  fuelText.textContent = `${Math.floor(gameState.player.fuel)}/${MAX_FUEL}`;

  // Update money display
  const moneyText = document.querySelector("#money-bar .bar-text");
  moneyText.textContent = `$${gameState.player.money}`;

  // Update level display
  const levelText = document.getElementById("level");
  if (levelText) {
    levelText.textContent = gameState.player.drillLevel;
  }
}

// Collect ore
function collectOre(tileType) {
  const oreValues = {
    [TILE_TYPES.BRONZE]: 10,
    [TILE_TYPES.TIN]: 20,
    [TILE_TYPES.IRON]: 50,
    [TILE_TYPES.SILVER]: 100,
    [TILE_TYPES.GOLD]: 200,
    [TILE_TYPES.DIAMOND]: 500,
  };

  gameState.player.money += oreValues[tileType];
}

// Collect treasure
function collectTreasure() {
  const treasureValue = Math.floor(Math.random() * 1000) + 500;
  gameState.player.money += treasureValue;
}
