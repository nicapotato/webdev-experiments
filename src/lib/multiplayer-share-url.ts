/** Canonical public origin for “copy link” sharing (custom domain on GitHub Pages). */
export const MULTIPLAYER_PUBLIC_ORIGIN =
  "https://webdev-experiments.nicapotato.com";

export type MultiplayerGameSlug = "snake" | "chess" | "checkers" | "fighter";

export function multiplayerShareUrl(
  roomId: string,
  game: MultiplayerGameSlug,
): string {
  return `${MULTIPLAYER_PUBLIC_ORIGIN}/multiplayer/${roomId}/${game}`;
}
