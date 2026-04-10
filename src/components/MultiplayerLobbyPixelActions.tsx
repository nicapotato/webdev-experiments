import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type MultiplayerLobbyPixelActionsProps = {
  /** Shown after “JOIN GAME”, e.g. ` (3)` or ` (2 / 7)`. */
  joinSuffix: string;
  iconSrc: string;
  onCreateClick: () => void;
  onRefreshClick: () => void;
  isRefreshing: boolean;
  refreshTimeText: string;
  /** Staleness / tone (fresh, stale, very-stale). */
  refreshToneClass: string;
  className?: string;
};

/**
 * One row: JOIN GAME (blue) + CREATE GAME (green +) + REFRESH (slate), same pixel thickness.
 */
export function MultiplayerLobbyPixelActions({
  joinSuffix,
  iconSrc,
  onCreateClick,
  onRefreshClick,
  isRefreshing,
  refreshTimeText,
  refreshToneClass,
  className,
}: MultiplayerLobbyPixelActionsProps) {
  return (
    <div className={cn("multiplayer-lobby__pixel-action-row", className)}>
      <h2
        id="join-game-heading"
        className="multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--join"
      >
        <img src={iconSrc} alt="" className="multiplayer-lobby__pixel-action-icon" />
        <span className="multiplayer-lobby__pixel-action-label">
          JOIN GAME{joinSuffix}
        </span>
      </h2>
      <button
        type="button"
        onClick={onCreateClick}
        className="multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--create"
      >
        <span className="multiplayer-lobby__pixel-action-plus" aria-hidden>
          +
        </span>
        <span className="multiplayer-lobby__pixel-action-label">
          CREATE GAME
        </span>
      </button>
      <button
        type="button"
        onClick={onRefreshClick}
        disabled={isRefreshing}
        className={cn(
          "multiplayer-lobby__pixel-action multiplayer-lobby__pixel-action--refresh",
          refreshToneClass,
        )}
        aria-label={
          refreshTimeText === "—"
            ? "Refresh room list"
            : `Refresh room list. ${refreshTimeText} since last refresh.`
        }
      >
        <RefreshCw
          className={cn(
            "multiplayer-lobby__pixel-action-icon",
            isRefreshing && "animate-spin",
          )}
          aria-hidden
        />
        <span className="multiplayer-lobby__pixel-action-refresh-inner">
          <span className="multiplayer-lobby__pixel-action-refresh-word">
            Refresh
          </span>
          <span className="multiplayer-lobby__pixel-action-refresh-time" aria-live="polite">
            {refreshTimeText}
          </span>
        </span>
      </button>
    </div>
  );
}
