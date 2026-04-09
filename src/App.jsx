import { useState } from 'react'
import './App.css'
import { HUB_ITEMS, TUTORIAL_CREDIT } from './catalog.js'

function HubCard({ title, href, accent, credit, onSelect }) {
  return (
    <button
      type="button"
      className={`hub-card hub-card--${accent}`}
      onClick={() => onSelect({ title, href, credit })}
    >
      <span className="hub-card__title">{title}</span>
    </button>
  )
}

export function App() {
  const [activeGame, setActiveGame] = useState(null)

  if (activeGame) {
    return (
      <div className="app-root app-root--game">
        <header className="game-header">
          <button
            type="button"
            className="game-back"
            onClick={() => setActiveGame(null)}
            aria-label="Back to hub"
          >
            ←
          </button>
          <div className="game-header__main">
            <span className="game-header__title">{activeGame.title}</span>
            {activeGame.credit && (
              <a
                className="game-header__credit"
                href={activeGame.credit.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tutorial: {activeGame.credit.name}
              </a>
            )}
          </div>
        </header>
        <div className="iframe-stage">
          <iframe
            className="game-frame"
            src={activeGame.href}
            title={activeGame.title}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="app-root app-root--home">
      <div className="hub">
        <header className="hub__header">
          <h1 className="hub__title">webdev-experiments</h1>
        </header>

        <div className="hub__grid">
          {HUB_ITEMS.map((item) => (
            <HubCard
              key={item.href}
              title={item.title}
              href={item.href}
              accent={item.accent}
              credit={item.credit}
              onSelect={setActiveGame}
            />
          ))}
        </div>

        <p className="hub__credit">
          Demos follow tutorials by{' '}
          <a
            href={TUTORIAL_CREDIT.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {TUTORIAL_CREDIT.name}
          </a>{' '}
          on YouTube.
        </p>
      </div>
    </div>
  )
}
