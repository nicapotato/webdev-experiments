/**
 * Canvas drawing for snake-spritesheet-ii.png: 3×3 grid of 64×64 px tiles (sheet 192×192).
 * Source rects are fixed per tile so adjacent art does not bleed into draws.
 *
 * Tiles: 0 head, 1 head eating (neck down), 2 corner (top + right connections),
 * 3 straight (horizontal L→R), 4 tail (body connect bottom), 8 food.
 * Rotations align neck/tail/corner edges to grid neighbors (stepDelta + offset).
 */

/** Matches `Position` in snake-game-multiplayer (avoid circular imports). */
export interface SpritePosition {
  X: number;
  Y: number;
}

/** One sprite cell in the sheet (and nominal art size). */
export const SNAKE_TILE_PX = 64;

const SNAKE_SHEET_COLS = 3;

export const SNAKE_TILE_HEAD = 0;
export const SNAKE_TILE_HEAD_EATING = 1;
export const SNAKE_TILE_CORNER = 2;
export const SNAKE_TILE_STRAIGHT = 3;
export const SNAKE_TILE_TAIL = 4;
export const SNAKE_TILE_FOOD = 8;

/**
 * Row-major index → source rect in the sheet bitmap.
 * `sx`/`sy` are 0-based pixel offsets from the **top-left** of the image (HTML Canvas
 * `drawImage` source space). Tile 0 is the top-left cell (sx=0, sy=0).
 */
export function spriteSourceRect(tileIndex: number): {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
} {
  const col = tileIndex % SNAKE_SHEET_COLS;
  const row = Math.floor(tileIndex / SNAKE_SHEET_COLS);
  const sx = col * SNAKE_TILE_PX;
  const sy = row * SNAKE_TILE_PX;
  return { sx, sy, sw: SNAKE_TILE_PX, sh: SNAKE_TILE_PX };
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
 * Bitmap: head/tail “open” edge is bottom of sprite; map grid step toward neighbor to rotation.
 * Same π offset as prior sheet so neck-down art lines up with the grid on horizontal segments.
 * Vertical steps need an extra π so up/down head and tail face along the body (straight tile
 * uses separate logic and is unchanged).
 */
const NECK_ATTACH_ROTATION_OFFSET = Math.PI;

/** Map grid step to canvas rotation (radians, clockwise). */
export function rotationNeckDownToGrid(dx: number, dy: number): number {
  let base = 0;
  if (dx === 1 && dy === 0) base = Math.PI / 2;
  else if (dx === -1 && dy === 0) base = (3 * Math.PI) / 2;
  else if (dx === 0 && dy === 1) base = 0;
  else if (dx === 0 && dy === -1) base = Math.PI;
  const vertical = dx === 0 && dy !== 0;
  return base + NECK_ATTACH_ROTATION_OFFSET + (vertical ? Math.PI : 0);
}

/**
 * Tile 2: corner art connects along **top** and **right** of the cell (neighbors at (0,-1) and (1,0)).
 * Match unordered {toPrev, toNext} to rotation index.
 *
 * Do **not** add `NECK_ATTACH_ROTATION_OFFSET` here — that π is only for head/tail “neck down” alignment.
 * Applying it to corners rotated bends 90° off (e.g. right→up bend needs left+up, but showed down+right).
 */
function rotationForCorner(
  a: { dx: number; dy: number },
  b: { dx: number; dy: number },
): number {
  const k = (x: number, y: number) => `${x},${y}`;
  const want = new Set([k(a.dx, a.dy), k(b.dx, b.dy)]);
  const pairs: [number, number][][] = [
    [
      [0, -1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
    [
      [0, 1],
      [-1, 0],
    ],
    [
      [-1, 0],
      [0, -1],
    ],
  ];
  for (let i = 0; i < 4; i++) {
    const s = new Set(pairs[i].map(([x, y]) => k(x, y)));
    if (want.size === 2 && [...want].every((e) => s.has(e))) {
      return (i * Math.PI) / 2;
    }
  }
  return 0;
}

export interface SegmentSpriteSpec {
  tileIndex: number;
  rotation: number;
}

export interface GetSegmentSpriteOptions {
  /** When set and the head sits on this cell, use eating head tile (1). */
  food?: SpritePosition | null;
}

/** Direction enum values match snake-game-multiplayer / Go. */
export function getSegmentSpriteSpec(
  body: SpritePosition[],
  segmentIndex: number,
  headDirection: number,
  boardWidth: number,
  boardHeight: number,
  opts?: GetSegmentSpriteOptions,
): SegmentSpriteSpec {
  const n = body.length;
  if (n === 0) return { tileIndex: SNAKE_TILE_HEAD, rotation: 0 };

  const food = opts?.food ?? null;

  // Head
  if (segmentIndex === 0) {
    let neckDx = 0;
    let neckDy = 0;
    if (n >= 2) {
      const s = stepDelta(body[0], body[1], boardWidth, boardHeight);
      neckDx = s.dx;
      neckDy = s.dy;
    } else {
      const d = headDirection;
      neckDx = d === 3 ? 1 : d === 2 ? -1 : 0;
      neckDy = d === 1 ? 1 : d === 0 ? -1 : 0;
    }
    const eating =
      food !== null &&
      body[0].X === food.X &&
      body[0].Y === food.Y;
    const tileIndex = eating ? SNAKE_TILE_HEAD_EATING : SNAKE_TILE_HEAD;
    return {
      tileIndex,
      rotation: rotationNeckDownToGrid(neckDx, neckDy),
    };
  }

  // Tail
  if (segmentIndex === n - 1) {
    const inward = stepDelta(
      body[n - 1],
      body[n - 2],
      boardWidth,
      boardHeight,
    );
    return {
      tileIndex: SNAKE_TILE_TAIL,
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
      return { tileIndex: SNAKE_TILE_STRAIGHT, rotation: Math.PI / 2 };
    }
    return { tileIndex: SNAKE_TILE_STRAIGHT, rotation: 0 };
  }
  return {
    tileIndex: SNAKE_TILE_CORNER,
    rotation: rotationForCorner(toPrev, toNext),
  };
}

/** Blit one sheet tile; source `(sx,sy)` is top-left in image pixels (0-based). */
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
  ctx.drawImage(
    img,
    sx,
    sy,
    sw,
    sh,
    -cellSize / 2,
    -cellSize / 2,
    cellSize,
    cellSize,
  );
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
