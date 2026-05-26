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

/** Standalone apps and tools (not games). */
export const HUB_APPS_ENTRIES: HubEntry[] = [
  {
    id: 'osrs-mmg',
    title: 'OSRS MMG Calculator',
    kind: 'react',
    path: '/osrs-mmg',
  },
  {
    id: 'osrs-character',
    title: 'OSRS Character',
    kind: 'react',
    path: '/osrs-mmg/c',
  },
]

/** Original work and experiments (not from Chris Courses tutorials). */
export const HUB_PERSONAL_ENTRIES: HubEntry[] = [
  {
    id: 'motherload',
    title: 'Motherload',
    kind: 'react',
    path: '/motherload',
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
    title: 'Minesweeper',
    kind: 'iframe',
    href: '/games/minesweeper/index.html',
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

/** Hub cards for multiplayer — all open the lobby; game filters are set only in the lobby. */
export const HUB_MULTIPLAYER_ENTRIES: { id: string; title: string }[] = [
  { id: 'mp-snake', title: 'Snake' },
  { id: 'mp-chess', title: 'Chess' },
  { id: 'mp-checkers', title: 'Checkers' },
  { id: 'mp-fighter', title: 'Fighter' },
]

/** Canvas / JS game demos built from Chris Courses tutorials on YouTube. */
export const HUB_CHRIS_COURSES_ENTRIES: HubEntry[] = [
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
]

export const HUB_ENTRIES: HubEntry[] = [
  ...HUB_APPS_ENTRIES,
  ...HUB_PERSONAL_ENTRIES,
  ...HUB_CHRIS_COURSES_ENTRIES,
]
