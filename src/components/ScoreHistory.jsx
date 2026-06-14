/**
 * Componente de histórico de respondentes.
 *
 * Props:
 *  - history {Array<{ id: number, systemName: string, score: number, label: string, color: string }>}
 *  - onClear {function} — chamado ao clicar em "Limpar Histórico"
 */
export default function ScoreHistory({ history, onClear }) {
  if (history.length === 0) {
    return (
      <section className="score-history empty">
        <p>Nenhuma avaliação registrada ainda.</p>
      </section>
    );
  }

  const average = history.reduce((sum, entry) => sum + entry.score, 0) / history.length;

  return (
    <section className="score-history">
      <h2>Histórico de Respondentes</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Sistema</th>
            <th>Escore</th>
            <th>Classificação</th>
          </tr>
        </thead>

        <tbody>
          {history.map(entry => (
            <tr key={entry.id} style={{ borderLeft: `4px solid #${entry.color}` }}>
              <td>{entry.id}</td>
              <td>{entry.systemName}</td>
              <td>{entry.score.toFixed(1)}</td>
              <td>
                <span className="history-badge" style={{ backgroundColor: `#${entry.color}` }}>
                  {entry.label}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="history-average">
        <strong>Média geral:</strong> {average.toFixed(1)}
      </div>

      <button className="btn-clear" onClick={onClear}>
        Limpar Histórico
      </button>
    </section>
  );
}
