import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import { GameShell } from "./components/GameShell";
import { Hub } from "./Hub";
import { IframeGamePage } from "./IframeGamePage";

import ChessPage from "./games/chess/page.jsx";
import CheckersPage from "./games/checkers/page.jsx";

const OsrsMmgRankingsPage = lazy(
  () => import("./games/osrs-mmg/OsrsMmgRankingsPage"),
);

const OsrsMmgCalculatorPage = lazy(
  () => import("./games/osrs-mmg/OsrsMmgCalculatorPage"),
);

const MotherloadPage = lazy(() => import("./games/motherload/page.jsx"));
const SnakeSinglePlayerPage = lazy(() =>
  import("./games/snake/SnakeSinglePlayerPage").then((m) => ({
    default: m.default,
  })),
);
const TypingPage = lazy(() => import("./games/typing/TypingPage"));
const MultiplayerGameLobbyPage = lazy(
  () => import("./games/multiplayer-games/page"),
);
const SnakeRoomPage = lazy(
  () => import("./games/multiplayer-games/room-pages/snake/page"),
);
const ChessRoomPage = lazy(
  () => import("./games/multiplayer-games/room-pages/chess/page"),
);
const CheckersRoomPage = lazy(
  () => import("./games/multiplayer-games/room-pages/checkers/page"),
);
const FighterRoomPage = lazy(
  () => import("./games/multiplayer-games/room-pages/fighter/page"),
);

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Hub />} />
            {/* /play/... avoids clashing with static /games/<id>/index.html on GitHub Pages */}
            <Route path="/play/:id" element={<IframeGamePage />} />

            <Route
              path="/osrs-mmg"
              element={
                <GameShell title="OSRS MMG Rankings">
                  <Suspense
                    fallback={
                      <div className="flex flex-1 items-center justify-center bg-black text-white">
                        Loading…
                      </div>
                    }
                  >
                    <OsrsMmgRankingsPage />
                  </Suspense>
                </GameShell>
              }
            />

            <Route
              path="/osrs-mmg/m/:methodId"
              element={
                <GameShell title="OSRS MMG Calculator">
                  <Suspense
                    fallback={
                      <div className="flex flex-1 items-center justify-center bg-black text-white">
                        Loading…
                      </div>
                    }
                  >
                    <OsrsMmgCalculatorPage />
                  </Suspense>
                </GameShell>
              }
            />

            <Route
              path="/motherload"
              element={
                <GameShell title="Motherload">
                  <Suspense
                    fallback={
                      <div className="flex flex-1 items-center justify-center bg-black text-white">
                        Loading…
                      </div>
                    }
                  >
                    <MotherloadPage />
                  </Suspense>
                </GameShell>
              }
            />

            <Route
              path="/chess"
              element={
                <GameShell title="Chess">
                  <ChessPage />
                </GameShell>
              }
            />
            <Route
              path="/checkers"
              element={
                <GameShell title="Checkers">
                  <CheckersPage />
                </GameShell>
              }
            />
            <Route
              path="/snake"
              element={
                <GameShell title="Snake">
                  <SnakeSinglePlayerPage />
                </GameShell>
              }
            />
            <Route
              path="/typing"
              element={
                <GameShell title="Typing">
                  <TypingPage />
                </GameShell>
              }
            />

            <Route
              path="/multiplayer"
              element={<MultiplayerGameLobbyPage />}
            />
            <Route
              path="/multiplayer/:roomId/snake"
              element={<SnakeRoomPage />}
            />
            <Route
              path="/multiplayer/:roomId/chess"
              element={<ChessRoomPage />}
            />
            <Route
              path="/multiplayer/:roomId/checkers"
              element={<CheckersRoomPage />}
            />
            <Route
              path="/multiplayer/:roomId/fighter"
              element={<FighterRoomPage />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Toaster richColors position="top-center" />
    </ThemeProvider>
  );
}
