/**
 * Componente de exibição do escore SUS de um respondente.
 *
 * Props:
 *  - score      {number} — escore calculado (0–100)
 *  - label      {string} — classificação qualitativa
 *  - color      {string} — cor hexadecimal sem #
 *  - systemName {string} — nome do sistema avaliado
 */
export default function ScoreCard({ score, label, color, systemName }) {
  return (
    <div
      className="score-card"
      style={{ backgroundColor: `#${color}` }}
      role="status"
      aria-live="polite"
    >
      <p className="score-card__system">{systemName}</p>
      <strong className="score-card__score">{score.toFixed(1)}</strong>
      <span className="score-card__label">{label}</span>
    </div>
  );
}
