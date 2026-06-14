import { useState } from 'react';
import SUSForm from './components/SUSForm.jsx';
import ScoreHistory from './components/ScoreHistory.jsx';

/**
 * Componente raiz da aplicação SUS Calc.
 *
 * Responsabilidades:
 *  - Manter o estado do histórico de respondentes.
 *  - Passar callbacks para SUSForm e ScoreHistory.
 */
export default function App() {
  const [systemName, setSystemName] = useState('');
  const [history, setHistory] = useState([]);

  function handleSubmit(score, label, color, evaluatedSystem) {
    setHistory(prev => [
      ...prev,
      {
        id: prev.length + 1,
        systemName: evaluatedSystem,
        score,
        label,
        color,
      },
    ]);
  }

  function handleClear() {
    setHistory([]);
  }

  return (
    <main className="app">
      <header className="app-header">
        <h1>SUS Calc</h1>
        <p className="app-subtitle">System Usability Scale Calculator</p>
      </header>

      <SUSForm
        systemName={systemName}
        onSystemNameChange={setSystemName}
        onSubmit={handleSubmit}
      />

      <ScoreHistory history={history} onClear={handleClear} />
    </main>
  );
}
