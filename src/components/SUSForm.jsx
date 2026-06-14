import { useState } from 'react';
import { SUS_QUESTIONS } from '../data/susQuestions.js';
import { calculateSUS, interpretSUS } from '../utils/calculateSUS.js';
import ScoreCard from './ScoreCard.jsx';

/**
 * Componente do formulário SUS.
 *
 * Props:
 *  - systemName {string}           — nome do sistema sendo avaliado
 *  - onSystemNameChange {function} — atualiza o nome no componente pai
 *  - onSubmit {function}           — chamado após uma submissão válida
 */
export default function SUSForm({ systemName, onSystemNameChange, onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [lastResult, setLastResult] = useState(null);

  function handleAnswer(questionId, value) {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value,
    }));

    if (error) {
      setError('');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const hasMissingAnswer = SUS_QUESTIONS.some(question => !answers[question.id]);

    if (hasMissingAnswer) {
      setError('Responda todos os 10 itens antes de calcular o escore SUS.');
      return;
    }

    const answersArray = SUS_QUESTIONS.map(question => answers[question.id]);
    const score = calculateSUS(answersArray);
    const { label, color } = interpretSUS(score);
    const evaluatedSystem = systemName.trim() || 'Sistema não informado';

    const result = {
      score,
      label,
      color,
      systemName: evaluatedSystem,
    };

    setLastResult(result);
    onSubmit(score, label, color, evaluatedSystem);

    setAnswers({});
    onSystemNameChange('');
    setError('');
  }

  return (
    <section className="sus-form-section">
      <form onSubmit={handleSubmit} noValidate>

        <div className="form-group">
          <label htmlFor="system-name">Sistema avaliado</label>
          <input
            id="system-name"
            type="text"
            value={systemName}
            onChange={e => onSystemNameChange(e.target.value)}
            placeholder="Ex.: Portal Acadêmico"
          />
        </div>

        <ol className="sus-questions">
          {SUS_QUESTIONS.map(question => (
            <li key={question.id} className="sus-question">
              <span className="question-text">{question.text}</span>

              <div className="likert-scale" role="group" aria-label={`Item ${question.id}`}>
                {[1, 2, 3, 4, 5].map(value => (
                  <label key={value} className="likert-option">
                    <input
                      type="radio"
                      name={`q${question.id}`}
                      value={value}
                      checked={answers[question.id] === value}
                      onChange={() => handleAnswer(question.id, value)}
                    />
                    <span>{value}</span>
                  </label>
                ))}
              </div>

              <div className="likert-labels">
                <span>Discordo totalmente</span>
                <span>Concordo totalmente</span>
              </div>
            </li>
          ))}
        </ol>

        {error && <p className="error-message" role="alert">{error}</p>}

        <button type="submit" className="btn-submit">Calcular Escore</button>
      </form>

      {lastResult && (
        <ScoreCard
          score={lastResult.score}
          label={lastResult.label}
          color={lastResult.color}
          systemName={lastResult.systemName}
        />
      )}
    </section>
  );
}
