/**
 * Componente de exibição do escore SUS de um respondente.
 *
 * Props:
 *  - score      {number} — escore calculado (0–100)
 *  - label      {string} — classificação qualitativa (ex.: "Bom")
 *  - color      {string} — cor hexadecimal sem # (ex.: "1E8449")
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
      {/* TODO: exibir o nome do sistema (se informado), o escore numérico e a classificação. */}
      {/* Dica: use score.toFixed(1) para exibir uma casa decimal. */}
      <p>Score Card — implemente este componente</p>
    </div>
  );
}
