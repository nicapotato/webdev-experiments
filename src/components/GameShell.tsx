import type { ReactNode } from "react";

import { FloatingBackButton } from "./FloatingBackButton";

export function GameShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="app-root app-root--game">
      <FloatingBackButton label={`Back to hub — ${title}`} />
      <div className="iframe-stage iframe-stage--react">{children}</div>
    </div>
  );
}
