import { Navigate, useParams } from "react-router-dom";

import { FloatingBackButton } from "./components/FloatingBackButton";
import { HUB_ENTRIES } from "./catalog";

export function IframeGamePage() {
  const { id } = useParams<{ id: string }>();
  const entry = HUB_ENTRIES.find((e) => e.id === id && e.kind === "iframe");
  if (!entry || entry.kind !== "iframe") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-root app-root--game">
      <FloatingBackButton label={`Back to hub — ${entry.title}`} />
      <div className="iframe-stage">
        <iframe className="game-frame" src={entry.href} title={entry.title} />
      </div>
    </div>
  );
}
