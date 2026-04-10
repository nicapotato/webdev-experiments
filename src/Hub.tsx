import { Link } from "react-router-dom";
import {
  HUB_CHRIS_COURSES_ENTRIES,
  HUB_MULTIPLAYER_ENTRIES,
  HUB_PERSONAL_ENTRIES,
} from "./catalog";

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

        <section className="hub__section" aria-labelledby="hub-personal-heading">
          <h2
            id="hub-personal-heading"
            className="hub__section-heading hub__subtitle--pixel"
          >
            Single player gamers
          </h2>
          <div className="hub__grid">
            {HUB_PERSONAL_ENTRIES.map((e, i) => (
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
        </section>

        <section
          className="hub__section"
          aria-labelledby="hub-multiplayer-heading"
        >
          <h2
            id="hub-multiplayer-heading"
            className="hub__section-heading hub__subtitle--pixel"
          >
            Online Multiplayer
          </h2>
          <div className="hub__grid">
            {HUB_MULTIPLAYER_ENTRIES.map((e, i) => (
              <Link
                key={e.id}
                to="/multiplayer"
                className={`hub-card ${
                  HUB_CARD_COLOR_CLASSES[
                    (HUB_PERSONAL_ENTRIES.length + i) %
                      HUB_CARD_COLOR_CLASSES.length
                  ]
                }`}
              >
                <span className="hub-card__title">{e.title.toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="hub__section hub__section--tutorial"
          aria-labelledby="hub-chris-courses-heading"
        >
          <h2
            id="hub-chris-courses-heading"
            className="hub__section-heading hub__subtitle--pixel"
          >
            Chris Courses tutorials
          </h2>
          <p className="hub__credit">
            Fighting game, Kings and Pigs, Sunnyland platformer, and Tower
            defence follow tutorials by{" "}
            <a
              href="https://www.youtube.com/c/chriscourses"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chris Courses
            </a>{" "}
            on YouTube.
          </p>
          <div className="hub__grid">
            {HUB_CHRIS_COURSES_ENTRIES.map((e, i) => (
              <Link
                key={e.id}
                to={e.kind === "iframe" ? `/play/${e.id}` : e.path}
                className={`hub-card ${
                  HUB_CARD_COLOR_CLASSES[
                    (HUB_PERSONAL_ENTRIES.length +
                      HUB_MULTIPLAYER_ENTRIES.length +
                      i) %
                      HUB_CARD_COLOR_CLASSES.length
                  ]
                }`}
              >
                <span className="hub-card__title">{e.title.toUpperCase()}</span>
              </Link>
            ))}
          </div>
        </section>

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
