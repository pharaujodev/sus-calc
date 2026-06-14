/**
 * Calcula o escore SUS a partir de um array de respostas.
 *
 * @param {number[]} answers - Array de 10 inteiros (1–5), na ordem dos itens SUS.
 * @returns {number} Escore SUS no intervalo [0, 100].
 */
export function calculateSUS(answers) {
  if (!Array.isArray(answers) || answers.length !== 10) {
    throw new Error('O cálculo SUS exige exatamente 10 respostas.');
  }

  const adjustedSum = answers.reduce((sum, value, index) => {
    const answer = Number(value);

    if (answer < 1 || answer > 5) {
      throw new Error('Cada resposta SUS deve estar entre 1 e 5.');
    }

    const isPositiveItem = index % 2 === 0;
    const adjustedValue = isPositiveItem ? answer - 1 : 5 - answer;

    return sum + adjustedValue;
  }, 0);

  return adjustedSum * 2.5;
}

/**
 * Retorna a classificação qualitativa e a cor correspondente para um escore SUS.
 *
 * @param {number} score - Escore SUS (0–100).
 * @returns {{ label: string, color: string }} Objeto com rótulo e cor hexadecimal sem #.
 */
export function interpretSUS(score) {
  if (score >= 90) {
    return { label: 'Excelente', color: '0E6655' };
  }

  if (score >= 80) {
    return { label: 'Bom', color: '1E8449' };
  }

  if (score >= 70) {
    return { label: 'Regular', color: 'F0A500' };
  }

  if (score >= 51) {
    return { label: 'OK', color: 'E67E22' };
  }

  return { label: 'Ruim', color: 'C0392B' };
}
