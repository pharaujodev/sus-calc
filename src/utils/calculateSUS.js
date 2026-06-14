/**
 * Calcula o escore SUS a partir de um array de respostas.
 *
 * @param {number[]} answers - Array de 10 inteiros (1–5), na ordem dos itens SUS.
 * @returns {number} Escore SUS no intervalo [0, 100].
 *
 * Regras de cálculo:
 *   - Itens ímpares (positivos, índices 0,2,4,6,8): valor ajustado = resposta − 1
 *   - Itens pares  (negativos, índices 1,3,5,7,9): valor ajustado = 5 − resposta
 *   - Escore = (soma dos 10 valores ajustados) × 2,5
 */
export function calculateSUS(answers) {
  // TODO: implementar o cálculo conforme as regras acima.
  // Dica: use o índice i para determinar se o item é positivo (i % 2 === 0) ou negativo.
  // Exemplo de estrutura esperada:
  //   const adjustedSum = answers.reduce((sum, value, i) => { ... }, 0);
  //   return adjustedSum * 2.5;
}

/**
 * Retorna a classificação qualitativa e a cor correspondente para um escore SUS.
 *
 * @param {number} score - Escore SUS (0–100).
 * @returns {{ label: string, color: string }} Objeto com rótulo e cor hexadecimal (sem #).
 *
 * Faixas:
 *   ≥ 90  → Excelente  (#0E6655)
 *   ≥ 80  → Bom        (#1E8449)
 *   ≥ 70  → Regular    (#F0A500)
 *   ≥ 51  → OK         (#E67E22)
 *   < 51  → Ruim       (#C0392B)
 */
export function interpretSUS(score) {
  // TODO: implementar a tabela de faixas conforme a especificação acima.
  // Dica: encadeie condicionais if/else ou use um array de faixas em ordem decrescente.
}
