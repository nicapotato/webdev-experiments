const LEVEL_UP_SRC = "/audio/level-up.mp3";

let audioEl: HTMLAudioElement | null = null;

export function playTurnNotificationSound(): void {
  if (typeof window === "undefined") return;
  if (!audioEl) {
    audioEl = new Audio(LEVEL_UP_SRC);
    audioEl.preload = "auto";
  }
  audioEl.currentTime = 0;
  void audioEl.play().catch(() => {});
}

export type TurnGameStatus = "waiting" | "playing" | "finished";

export interface TurnNotificationInput {
  status: TurnGameStatus;
  serverCurrentPlayer: number;
  myColor?: number;
}

/**
 * Call once per game session (e.g. inside the effect that creates the WebSocket client).
 * Plays level-up when the server's turn passes from the opponent to the local player.
 */
export function createTurnBecameMineNotifier() {
  let prevServerCurrent: number | undefined;

  return (input: TurnNotificationInput) => {
    const { status, serverCurrentPlayer, myColor } = input;
    if (status !== "playing") {
      prevServerCurrent = undefined;
      return;
    }
    if (
      myColor !== undefined &&
      serverCurrentPlayer === myColor &&
      prevServerCurrent !== undefined &&
      prevServerCurrent !== myColor
    ) {
      playTurnNotificationSound();
    }
    prevServerCurrent = serverCurrentPlayer;
  };
}
