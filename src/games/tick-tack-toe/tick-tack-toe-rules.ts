export type Player = "X" | "O";
export type Cell = Player | null;
export type Board = Cell[][];
export type GameStatus = "playing" | "x_wins" | "o_wins" | "draw";

export type Position = { row: number; col: number };

export type GameState = {
  board: Board;
  currentPlayer: Player;
  gameStatus: GameStatus;
  winningLine: Position[] | null;
};

const WIN_LINES: Position[][] = [
  [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
  ],
  [
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
  ],
  [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 0 },
    { row: 2, col: 0 },
  ],
  [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 2 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 0 },
    { row: 1, col: 1 },
    { row: 2, col: 2 },
  ],
  [
    { row: 0, col: 2 },
    { row: 1, col: 1 },
    { row: 2, col: 0 },
  ],
];

export function createEmptyBoard(): Board {
  return Array.from({ length: 3 }, () => Array<Cell>(3).fill(null));
}

export function createInitialState(humanPlayer: Player = "X"): GameState {
  return {
    board: createEmptyBoard(),
    currentPlayer: humanPlayer,
    gameStatus: "playing",
    winningLine: null,
  };
}

export function getWinningLine(board: Board): Position[] | null {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    const v = board[a.row][a.col];
    if (v && v === board[b.row][b.col] && v === board[c.row][c.col]) {
      return line;
    }
  }
  return null;
}

export function getGameStatus(board: Board): GameStatus {
  const line = getWinningLine(board);
  if (line) {
    const winner = board[line[0].row][line[0].col];
    return winner === "X" ? "x_wins" : "o_wins";
  }
  if (board.every((row) => row.every((cell) => cell !== null))) {
    return "draw";
  }
  return "playing";
}

export function getEmptyCells(board: Board): Position[] {
  const cells: Position[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (board[row][col] === null) cells.push({ row, col });
    }
  }
  return cells;
}

export function applyMove(
  state: GameState,
  row: number,
  col: number,
): GameState | null {
  if (state.gameStatus !== "playing") return null;
  if (state.board[row][col] !== null) return null;

  const board = state.board.map((r) => [...r]);
  board[row][col] = state.currentPlayer;
  const winningLine = getWinningLine(board);
  const gameStatus = getGameStatus(board);

  return {
    board,
    currentPlayer: state.currentPlayer === "X" ? "O" : "X",
    gameStatus,
    winningLine,
  };
}

function evaluateBoard(board: Board, cpu: Player): number {
  const status = getGameStatus(board);
  if (status === "playing") return 0;
  if (status === "draw") return 0;
  const cpuWins = (status === "x_wins" && cpu === "X") || (status === "o_wins" && cpu === "O");
  return cpuWins ? 10 : -10;
}

function minimax(
  board: Board,
  depth: number,
  isMaximizing: boolean,
  cpu: Player,
): number {
  const status = getGameStatus(board);
  if (status !== "playing") return evaluateBoard(board, cpu);

  const human: Player = cpu === "X" ? "O" : "X";
  const player = isMaximizing ? cpu : human;

  if (isMaximizing) {
    let best = -Infinity;
    for (const { row, col } of getEmptyCells(board)) {
      board[row][col] = player;
      best = Math.max(best, minimax(board, depth + 1, false, cpu));
      board[row][col] = null;
    }
    return best;
  }

  let best = Infinity;
  for (const { row, col } of getEmptyCells(board)) {
    board[row][col] = player;
    best = Math.min(best, minimax(board, depth + 1, true, cpu));
    board[row][col] = null;
  }
  return best;
}

/** Best move for the CPU using minimax (unbeatable on 3×3). */
export function getCpuMove(board: Board, cpu: Player): Position | null {
  const empty = getEmptyCells(board);
  if (empty.length === 0) return null;

  let bestScore = -Infinity;
  let bestMove: Position | null = null;

  for (const move of empty) {
    board[move.row][move.col] = cpu;
    const score = minimax(board, 0, false, cpu);
    board[move.row][move.col] = null;
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
}

export function isWinningCell(
  winningLine: Position[] | null,
  row: number,
  col: number,
): boolean {
  if (!winningLine) return false;
  return winningLine.some((p) => p.row === row && p.col === col);
}
