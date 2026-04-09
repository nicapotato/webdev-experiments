import { Link } from "react-router-dom";

type Props = {
  to?: string;
  /** Shown to screen readers (e.g. game name). */
  label?: string;
};

export function FloatingBackButton({ to = "/", label = "Back to hub" }: Props) {
  return (
    <Link
      to={to}
      className="floating-back"
      aria-label={label}
      title={label}
    >
      <span className="floating-back__glyph" aria-hidden>
        ←
      </span>
    </Link>
  );
}
