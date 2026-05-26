import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  applyMove,
  createInitialState,
  getCpuMove,
  isWinningCell,
  type GameState,
  type Player,
} from "./tick-tack-toe-rules";

const HUMAN: Player = "X";
const CPU: Player = "O";

function statusMessage(state: GameState): string {
  switch (state.gameStatus) {
    case "x_wins":
      return HUMAN === "X" ? "You win!" : "Computer wins.";
    case "o_wins":
      return HUMAN === "O" ? "You win!" : "Computer wins.";
    case "draw":
      return "Draw — no winner.";
    default:
      return state.currentPlayer === HUMAN
        ? "Your turn (X)"
        : "Computer is thinking…";
  }
}

export default function TickTackToePage() {
  const [gameState, setGameState] = useState(() => createInitialState(HUMAN));

  const reset = useCallback(() => {
    setGameState(createInitialState(HUMAN));
  }, []);

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (gameState.gameStatus !== "playing") return;
      if (gameState.currentPlayer !== HUMAN) return;

      const next = applyMove(gameState, row, col);
      if (next) setGameState(next);
    },
    [gameState],
  );

  useEffect(() => {
    if (gameState.gameStatus !== "playing") return;
    if (gameState.currentPlayer !== CPU) return;

    const id = window.setTimeout(() => {
      const move = getCpuMove(gameState.board, CPU);
      if (!move) return;
      const next = applyMove(gameState, move.row, move.col);
      if (next) setGameState(next);
    }, 400);

    return () => window.clearTimeout(id);
  }, [gameState]);

  const canPlay =
    gameState.gameStatus === "playing" && gameState.currentPlayer === HUMAN;

  return (
    <div className="min-h-[100svh] w-full px-4 py-6 bg-background text-foreground flex flex-col items-center">
      <div className="max-w-md w-full space-y-6 text-center">
        <p className="text-sm text-muted-foreground">
          Single-player tick-tack-toe. You are X; the computer plays O and
          cannot be beaten if you slip up.
        </p>

        <p className="text-lg font-medium" aria-live="polite">
          {statusMessage(gameState)}
        </p>

        <div
          className="inline-grid grid-cols-3 gap-2 mx-auto"
          role="grid"
          aria-label="Tick-tack-toe board"
        >
          {gameState.board.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
              const winning = isWinningCell(
                gameState.winningLine,
                rowIndex,
                colIndex,
              );
              return (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  type="button"
                  role="gridcell"
                  aria-label={`Row ${rowIndex + 1}, column ${colIndex + 1}${
                    cell ? `, ${cell}` : ", empty"
                  }`}
                  disabled={!canPlay || cell !== null}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  className={[
                    "size-24 sm:size-28 rounded-lg border-2 text-4xl font-bold transition-colors",
                    "border-border bg-card hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-100",
                    cell === "X" ? "text-blue-600" : "",
                    cell === "O" ? "text-rose-600" : "",
                    winning ? "ring-2 ring-amber-500 bg-amber-500/10" : "",
                    !cell && canPlay ? "cursor-pointer" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {cell ?? ""}
                </button>
              );
            }),
          )}
        </div>

        <Button type="button" variant="secondary" onClick={reset}>
          New game
        </Button>
      </div>
    </div>
  );
}
