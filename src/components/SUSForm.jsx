import { useState } from 'react';
import { SUS_QUESTIONS } from '../data/susQuestions.js';
import { calculateSUS, interpretSUS } from '../utils/calculateSUS.js';
import ScoreCard from './ScoreCard.jsx';

/**
 * Componente do formulário SUS.
 *
 * Props:
 *  - systemName {string}          — nome do sistema sendo avaliado
 *  - onSystemNameChange {function} — atualiza o nome no componente pai
 *  - onSubmit {function}           — chamado com (score, label, color) após submissão válida
 */
export default function SUSForm({ systemName, onSystemNameChange, onSubmit }) {
  /**
   * Estado das respostas: objeto com chaves "1" a "10" e valores 1–5.
   * Inicialmente vazio — nenhum item respondido.
   */
  const [answers, setAnswers]     = useState({});
  const [error, setError]         = useState('');
  const [lastResult, setLastResult] = useState(null); // { score, label, color }

  /**
   * Atualiza a resposta de um item específico.
   * @param {number} questionId - ID do item (1–10).
   * @param {number} value      - Valor selecionado (1–5).
   */
  function handleAnswer(questionId, value) {
    // TODO: atualizar o estado `answers`.
    // Dica: setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  /**
   * Processa a submissão do formulário.
   * Bloqueia se algum item não tiver resposta.
   * Calcula o escore, exibe o resultado e notifica o pai.
   */
  function handleSubmit(e) {
    e.preventDefault();

    // TODO: validar se todos os 10 itens foram respondidos.
    // Se não: exibir mensagem de erro em `error` e retornar.

    // TODO: montar o array de respostas na ordem correta (ids 1–10).
    // Dica: SUS_QUESTIONS.map(q => answers[q.id])

    // TODO: calcular o escore e obter a interpretação.
    // Dica: const score = calculateSUS(answersArray);
    //       const { label, color } = interpretSUS(score);

    // TODO: salvar o resultado em `lastResult` e chamar `onSubmit(score, label, color)`.

    // TODO: redefinir `answers` para {} e limpar `error`.
  }

  return (
    <section className="sus-form-section">
      <form onSubmit={handleSubmit} noValidate>

        {/* Campo: nome do sistema */}
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

        {/* Questões SUS */}
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

        {/* Mensagem de erro de validação */}
        {error && <p className="error-message" role="alert">{error}</p>}

        <button type="submit" className="btn-submit">Calcular Escore</button>
      </form>

      {/* Resultado da última submissão */}
      {lastResult && (
        <ScoreCard
          score={lastResult.score}
          label={lastResult.label}
          color={lastResult.color}
          systemName={systemName}
        />
      )}
    </section>
  );
}
