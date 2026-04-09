import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const SAMPLE_PARAGRAPHS = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once.",
  "Programming is the process of creating instructions that tell a computer how to perform a task.",
  "Artificial intelligence is intelligence demonstrated by machines, as opposed to natural intelligence.",
];

type TypedEntry = { correct: boolean };

export default function TypingPage() {
  const [custom, setCustom] = useState("");
  const [targetText, setTargetText] = useState(() => SAMPLE_PARAGRAPHS[0]!);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedStates, setTypedStates] = useState<TypedEntry[]>([]);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const text = useMemo(() => targetText, [targetText]);

  const reset = useCallback((nextText: string) => {
    setTargetText(nextText);
    setCurrentIndex(0);
    setTypedStates([]);
    setStartedAt(null);
    setDone(false);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => boxRef.current?.focus());
  }, [text]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (done) return;
      if (e.key === "Backspace") {
        e.preventDefault();
        if (currentIndex === 0) return;
        setCurrentIndex((i) => Math.max(0, i - 1));
        setTypedStates((s) => s.slice(0, -1));
        return;
      }
      if (e.key.length !== 1) return;
      e.preventDefault();
      if (startedAt === null) setStartedAt(Date.now());
      const expected = text[currentIndex];
      if (expected === undefined) return;
      const ok = e.key === expected;
      setTypedStates((s) => [...s, { correct: ok }]);
      const next = currentIndex + 1;
      setCurrentIndex(next);
      if (next >= text.length) setDone(true);
    },
    [currentIndex, done, startedAt, text],
  );

  const elapsedSec =
    startedAt != null ? Math.max(0, (Date.now() - startedAt) / 1000) : 0;
  const wordsTyped = text.slice(0, currentIndex).split(/\s+/).filter(Boolean).length;
  const wpm =
    elapsedSec > 0 ? Math.round((wordsTyped / elapsedSec) * 60) : 0;

  return (
    <div className="min-h-[100svh] w-full px-4 py-6 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-sm text-muted-foreground">
          Client-only typing practice — pick a sample or paste your own text,
          then type. Backspace to undo a character.
        </p>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_PARAGRAPHS.map((p) => (
            <Button
              key={p.slice(0, 20)}
              type="button"
              variant="outline"
              size="sm"
              onClick={() => reset(p)}
            >
              Sample {SAMPLE_PARAGRAPHS.indexOf(p) + 1}
            </Button>
          ))}
        </div>
        <textarea
          className="w-full min-h-[88px] rounded-md border border-input bg-transparent px-3 py-2 text-sm"
          placeholder="Paste custom text, then click Load"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
        />
        <Button
          type="button"
          variant="secondary"
          onClick={() => custom.trim() && reset(custom.trim())}
          disabled={!custom.trim()}
        >
          Load custom text
        </Button>

        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>WPM (rough): {wpm}</span>
          <span>Progress: {currentIndex} / {text.length}</span>
          {done ? <span className="text-green-600 font-medium">Complete</span> : null}
        </div>

        <div
          ref={boxRef}
          tabIndex={0}
          role="textbox"
          aria-label="Typing area"
          className="typewriter-text rounded-lg border border-border p-4 min-h-[160px] text-lg leading-relaxed outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onKeyDown={onKeyDown}
        >
          {text.split("").map((ch, i) => {
            const showCaret = i === currentIndex;
            const entry = typedStates[i];
            let cls = "text-muted-foreground";
            if (entry) cls = entry.correct ? "text-green-600" : "text-red-600";
            return (
              <span key={i}>
                {showCaret ? (
                  <span
                    className="typewriter-caret align-middle"
                    aria-hidden
                  />
                ) : null}
                <span className={cls}>{ch}</span>
              </span>
            );
          })}
          {currentIndex >= text.length ? (
            <span className="typewriter-caret align-middle" aria-hidden />
          ) : null}
        </div>
      </div>
    </div>
  );
}
