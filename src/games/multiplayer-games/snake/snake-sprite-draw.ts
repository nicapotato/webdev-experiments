/**
 * Canvas drawing for snake-spritesheet.png: 3×3 grid, 62×62 px per tile.
 * Head/tail rotations align the body-connection edge to the neighbor using stepDelta + NECK_ATTACH_ROTATION_OFFSET.
 * Corner (7): `rotationForCorner` matches edge directions to neighbors; pair table matches sheet (down+left base).
 */

/** Matches `Position` in snake-game-multiplayer (avoid circular imports). */
export interface SpritePosition {
  X: number;
  Y: number;
}

export const SNAKE_TILE_PX = 62;
export const SNAKE_SHEET_COLS = 3;

/** Row-major index → source rect in the sheet image. */
export function spriteSourceRect(tileIndex: number): {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
} {
  const col = tileIndex % SNAKE_SHEET_COLS;
  const row = Math.floor(tileIndex / SNAKE_SHEET_COLS);
  return {
    sx: col * SNAKE_TILE_PX,
    sy: row * SNAKE_TILE_PX,
    sw: SNAKE_TILE_PX,
    sh: SNAKE_TILE_PX,
  };
}

/** Shortest toroidal step from `from` toward `to` (single cell, unit vector). */
export function stepDelta(
  from: SpritePosition,
  to: SpritePosition,
  boardWidth: number,
  boardHeight: number,
): { dx: number; dy: number } {
  let dx = to.X - from.X;
  let dy = to.Y - from.Y;
  if (dx > boardWidth / 2) dx -= boardWidth;
  else if (dx < -boardWidth / 2) dx += boardWidth;
  if (dy > boardHeight / 2) dy -= boardHeight;
  else if (dy < -boardHeight / 2) dy += boardHeight;
  return { dx, dy };
}

/**
 * Bitmap convention: body attaches along one edge; map the grid step (from this cell toward
 * the connected segment) to rotation so that edge meets the neighbor.
 * `dx,dy` is a unit step on the board (torus-aware from stepDelta).
 * The sheet art is 180° from a naive “neck at bottom” assumption — one global π fixes head/tail/curved-tail.
 */
const NECK_ATTACH_ROTATION_OFFSET = Math.PI;

/** Map grid step to canvas rotation (radians, clockwise). */
export function rotationNeckDownToGrid(dx: number, dy: number): number {
  let base = 0;
  if (dx === 1 && dy === 0) base = Math.PI / 2;
  else if (dx === -1 && dy === 0) base = (3 * Math.PI) / 2;
  else if (dx === 0 && dy === 1) base = 0;
  else if (dx === 0 && dy === -1) base = Math.PI;
  return base + NECK_ATTACH_ROTATION_OFFSET;
}

/**
 * Tile 7: L-corner; art connects along two perpendicular edges. The sheet is authored with the
 * bend opening toward **down + left** (not down + right). Use the mirror of the old “down+right”
 * cycle so the horizontal attachment matches the PNG.
 */
function rotationForCorner(
  a: { dx: number; dy: number },
  b: { dx: number; dy: number },
): number {
  const k = (x: number, y: number) => `${x},${y}`;
  const want = new Set([k(a.dx, a.dy), k(b.dx, b.dy)]);
  const pairs: [number, number][][] = [
    [
      [0, 1],
      [-1, 0],
    ],
    [
      [-1, 0],
      [0, -1],
    ],
    [
      [0, -1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ];
  for (let i = 0; i < 4; i++) {
    const s = new Set(pairs[i].map(([x, y]) => k(x, y)));
    if (want.size === 2 && [...want].every((e) => s.has(e))) {
      return (i * Math.PI) / 2 + NECK_ATTACH_ROTATION_OFFSET;
    }
  }
  return NECK_ATTACH_ROTATION_OFFSET;
}

export interface SegmentSpriteSpec {
  tileIndex: number;
  rotation: number;
}

/** Direction enum values match snake-game-multiplayer / Go. */
export function getSegmentSpriteSpec(
  body: SpritePosition[],
  segmentIndex: number,
  headDirection: number,
  boardWidth: number,
  boardHeight: number,
): SegmentSpriteSpec {
  const n = body.length;
  if (n === 0) return { tileIndex: 0, rotation: 0 };

  // Head
  if (segmentIndex === 0) {
    if (n >= 2) {
      const { dx, dy } = stepDelta(body[0], body[1], boardWidth, boardHeight);
      return { tileIndex: 0, rotation: rotationNeckDownToGrid(dx, dy) };
    }
    const d = headDirection;
    const dx = d === 3 ? 1 : d === 2 ? -1 : 0;
    const dy = d === 1 ? 1 : d === 0 ? -1 : 0;
    return { tileIndex: 0, rotation: rotationNeckDownToGrid(dx, dy) };
  }

  // Tail
  if (segmentIndex === n - 1) {
    const inward = stepDelta(
      body[n - 1],
      body[n - 2],
      boardWidth,
      boardHeight,
    );
    if (n >= 3) {
      const vIntoTail = stepDelta(
        body[n - 2],
        body[n - 1],
        boardWidth,
        boardHeight,
      );
      const vPrevSeg = stepDelta(
        body[n - 3],
        body[n - 2],
        boardWidth,
        boardHeight,
      );
      const straight =
        vIntoTail.dx === vPrevSeg.dx && vIntoTail.dy === vPrevSeg.dy;
      if (!straight) {
        const cross =
          vPrevSeg.dx * vIntoTail.dy - vPrevSeg.dy * vIntoTail.dx;
        const tileIndex = cross > 0 ? 5 : 6;
        return {
          tileIndex,
          rotation: rotationNeckDownToGrid(inward.dx, inward.dy),
        };
      }
    }
    return {
      tileIndex: 1,
      rotation: rotationNeckDownToGrid(inward.dx, inward.dy),
    };
  }

  // Body
  const toPrev = stepDelta(
    body[segmentIndex],
    body[segmentIndex - 1],
    boardWidth,
    boardHeight,
  );
  const toNext = stepDelta(
    body[segmentIndex],
    body[segmentIndex + 1],
    boardWidth,
    boardHeight,
  );
  if (toPrev.dx === -toNext.dx && toPrev.dy === -toNext.dy) {
    if (toPrev.dx === 0) {
      return { tileIndex: 4, rotation: 0 };
    }
    return { tileIndex: 3, rotation: 0 };
  }
  return {
    tileIndex: 7,
    rotation: rotationForCorner(toPrev, toNext),
  };
}

export function drawSpriteTile(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  destX: number,
  destY: number,
  cellSize: number,
  tileIndex: number,
  rotation: number,
): void {
  const { sx, sy, sw, sh } = spriteSourceRect(tileIndex);
  const cx = destX + cellSize / 2;
  const cy = destY + cellSize / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotation);
  ctx.drawImage(img, sx, sy, sw, sh, -cellSize / 2, -cellSize / 2, cellSize, cellSize);
  ctx.restore();
}

/** Tint pixel-art snake for second player: multiply blend. */
export function applySnakeTint(
  ctx: CanvasRenderingContext2D,
  destX: number,
  destY: number,
  cellSize: number,
  hexColor: string,
): void {
  ctx.save();
  ctx.globalCompositeOperation = "multiply";
  ctx.fillStyle = hexColor;
  ctx.globalAlpha = 0.45;
  ctx.fillRect(destX, destY, cellSize, cellSize);
  ctx.restore();
}
