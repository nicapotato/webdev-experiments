import { Suspense, lazy } from "react";

const Game = lazy(() =>
  import("./components/Game").then((mod) => ({ default: mod.Game })),
);

export default function MotherloadPage() {
  return (
    <div className="w-full h-full min-h-0 flex-1 bg-black flex flex-col">
      <Suspense
        fallback={
          <div className="w-full flex-1 bg-black flex items-center justify-center text-white">
            Loading game...
          </div>
        }
      >
        <Game />
      </Suspense>
    </div>
  );
}

