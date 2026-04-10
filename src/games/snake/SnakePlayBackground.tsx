import { SNAKE_PLAY_BACKGROUND_TILE } from "@/games/multiplayer-games/snake/snake-game-multiplayer";

/**
 * Faded, large-scale repeating tile behind the snake canvas (single + multiplayer).
 */
export function SnakePlayBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Tile: keep visible; previous full-black gradients hid the art entirely */}
      <div
        className="absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage: `url('${SNAKE_PLAY_BACKGROUND_TILE}')`,
          backgroundRepeat: "repeat",
          backgroundSize: "clamp(280px, 48vmin, 560px)",
        }}
      />
      {/* Light vignette so UI stays readable without painting over the pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_50%,transparent_20%,rgba(0,0,0,0.45)_100%)]" />
    </div>
  );
}
