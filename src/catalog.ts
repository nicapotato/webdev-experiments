/** Hub entries: iframe games use `public/games/<folder>/index.html`. */
export type HubEntry =
  | {
      id: string
      title: string
      kind: 'iframe'
      /** iframe src under public, e.g. /games/fighting-game/index.html */
      href: string
    }
  | {
      id: string
      title: string
      kind: 'react'
      /** client route path */
      path: string
    }

export const HUB_ENTRIES: HubEntry[] = [
  {
    id: 'fighting-game',
    title: 'Fighting game',
    kind: 'iframe',
    href: '/games/fighting-game/index.html',
  },
  {
    id: 'kings-and-pigs',
    title: 'Kings and pigs',
    kind: 'iframe',
    href: '/games/kings-and-pigs/index.html',
  },
  {
    id: 'motherload',
    title: 'Motherload',
    kind: 'react',
    path: '/motherload',
  },
  {
    id: 'sunnyland',
    title: 'Sunnyland platformer',
    kind: 'iframe',
    href: '/games/sunnyland-platformer/index.html',
  },
  {
    id: 'tower-defense',
    title: 'Tower defense',
    kind: 'iframe',
    href: '/games/tower-defense/index.html',
  },
  {
    id: 'checkers',
    title: 'Checkers',
    kind: 'react',
    path: '/checkers',
  },
  {
    id: 'chess',
    title: 'Chess',
    kind: 'react',
    path: '/chess',
  },
  {
    id: 'minesweeper',
    title: 'MindSweeper',
    kind: 'iframe',
    href: '/games/minesweeper/index.html',
  },
  {
    id: 'multiplayer',
    title: 'Multiplayer games',
    kind: 'react',
    path: '/multiplayer',
  },
  {
    id: 'snake',
    title: 'Snake',
    kind: 'react',
    path: '/snake',
  },
  {
    id: 'typing',
    title: 'Typing',
    kind: 'react',
    path: '/typing',
  },
]
