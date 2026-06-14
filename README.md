# SUS Calc

Calculadora do questionário **System Usability Scale (SUS)** desenvolvida em React.

Atividade prática da disciplina Modelagem de Interfaces — UI/UX  
Bloco IV — Avaliação de Usabilidade | PUC Goiás — ADS

## Funcionalidades

- Formulário com os 10 itens SUS em escala Likert de 1 a 5
- Validação para impedir envio com perguntas sem resposta
- Cálculo automático do escore SUS de 0 a 100
- Classificação qualitativa com cor correspondente
- Histórico de respondentes com escore e classificação
- Cálculo da média geral das avaliações
- Botão para limpar o histórico

## Tecnologias

- React
- Vite
- CSS puro
- Hooks nativos do React

## Instalação e execução

```bash
npm install
npm run dev
```

Depois acesse:

```text
http://localhost:5173
```

## Estrutura principal

```text
src/
├── components/
│   ├── SUSForm.jsx
│   ├── ScoreCard.jsx
│   └── ScoreHistory.jsx
├── data/
│   └── susQuestions.js
├── utils/
│   └── calculateSUS.js
├── App.jsx
├── App.css
└── main.jsx
```

## Discente

Nome: Pedro Henrique de Araujo Pereira
Matrícula: 2025.1.0120.0114-3

