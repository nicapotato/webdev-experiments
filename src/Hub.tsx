import { Link } from "react-router-dom";
import { HUB_ENTRIES } from "./catalog";

/** Distinct card backgrounds (cycles if list grows). */
const HUB_CARD_COLOR_CLASSES = [
  "hub-card--c0",
  "hub-card--c1",
  "hub-card--c2",
  "hub-card--c3",
  "hub-card--c4",
  "hub-card--c5",
  "hub-card--c6",
  "hub-card--c7",
  "hub-card--c8",
  "hub-card--c9",
  "hub-card--c10",
] as const;

export function Hub() {
  return (
    <div className="app-root app-root--home hub-page">
      <div className="hub">
        <header className="hub__header">
          <h1 className="hub__title hub__title--pixel">WEB DEV EXPERIMENTS</h1>
          <p className="hub__subtitle hub__subtitle--pixel">
            CLIENT ONLY, STATIC WEBPAGE FOR HTML, JS, REACT IDEAS
          </p>
        </header>

        <div className="hub__grid">
          {HUB_ENTRIES.map((e, i) => (
            <Link
              key={e.id}
              to={e.kind === "iframe" ? `/play/${e.id}` : e.path}
              className={`hub-card ${
                HUB_CARD_COLOR_CLASSES[i % HUB_CARD_COLOR_CLASSES.length]
              }`}
            >
              <span className="hub-card__title">{e.title.toUpperCase()}</span>
            </Link>
          ))}
        </div>

        <p className="hub__repo hub__repo--pixel">
          PUBLIC REPO —{" "}
          <a
            href="https://github.com/nicapotato/webdev-experiments"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/nicapotato/webdev-experiments
          </a>
        </p>
      </div>
    </div>
  );
}
