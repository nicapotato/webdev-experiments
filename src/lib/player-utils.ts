// Player ID management utilities

const PLAYER_ID_KEY = "mindtricks_player_id";
const PLAYER_USERNAME_KEY = "mindtricks_player_username";

/**
 * Generate a consistent player ID in the format PlayerXXX
 * @returns A unique player ID
 */
export function generatePlayerId(): string {
  // Check if we already have a player ID stored
  const storedId = localStorage.getItem(PLAYER_ID_KEY);
  if (storedId) {
    return storedId;
  }

  // Generate a new player ID
  // Use timestamp + random number to ensure uniqueness
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  const combined = (timestamp + random) % 1000000; // Keep it manageable
  const playerNumber = combined.toString().padStart(6, "0").slice(-3); // Take last 3 digits, pad with zeros

  const playerId = `Player${playerNumber}`;

  // Store it for future use
  localStorage.setItem(PLAYER_ID_KEY, playerId);

  return playerId;
}

/**
 * Generate a consistent username for the player
 * @returns A username for the player
 */
export function generatePlayerUsername(): string {
  // Check if we already have a username stored
  const storedUsername = localStorage.getItem(PLAYER_USERNAME_KEY);
  if (storedUsername) {
    return storedUsername;
  }

  // Generate a new username based on the player ID
  const playerId = generatePlayerId();
  const playerNumber = playerId.replace("Player", "");

  // Create a more readable username
  const adjectives = [
    "Swift",
    "Bold",
    "Clever",
    "Brave",
    "Quick",
    "Smart",
    "Sharp",
    "Fast",
    "Cool",
    "Epic",
  ];
  const nouns = [
    "Tiger",
    "Eagle",
    "Wolf",
    "Bear",
    "Lion",
    "Hawk",
    "Dragon",
    "Falcon",
    "Shark",
    "Panda",
  ];

  const adjectiveIndex = parseInt(playerNumber) % adjectives.length;
  const nounIndex = (parseInt(playerNumber) * 7) % nouns.length; // Multiply by prime for better distribution

  const username = `${adjectives[adjectiveIndex]}${nouns[nounIndex]}${playerNumber}`;

  // Store it for future use
  localStorage.setItem(PLAYER_USERNAME_KEY, username);

  return username;
}

/**
 * Get the current player's ID and username
 * @returns Object containing playerId and username
 */
export function getCurrentPlayer(): { playerId: string; username: string } {
  return {
    playerId: generatePlayerId(),
    username: generatePlayerUsername(),
  };
}

/**
 * Clear stored player data (useful for testing or logout)
 */
export function clearPlayerData(): void {
  localStorage.removeItem(PLAYER_ID_KEY);
  localStorage.removeItem(PLAYER_USERNAME_KEY);
}

/**
 * Validate if a player ID follows the expected format
 * @param playerId The player ID to validate
 * @returns True if valid, false otherwise
 */
export function isValidPlayerId(playerId: string): boolean {
  const playerIdRegex = /^Player\d{3}$/;
  return playerIdRegex.test(playerId);
}
