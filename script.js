const questions = [
  {
    question: "Where did Tuna and Hoda first meet?",
    choices: ["Hospital", "Through Friends", "Social Media", "Hinge", "Tinder"],
    correct: "Hinge"
  },
  {
    question: "When was our first date?",
    choices: ["18/04/2024", "16/04/2025", "16/05/2024", "16/04/2024"],
    correct: "16/04/2024"
  },
  {
    question: "Which was their first travel destination together?",
    choices: ["Phuket", "Ankara", "Sapanca", "Tehran"],
    correct: "Sapanca"
  },
  {
    question: "When did Tuna first say 'I love you' to Hoda?",
    choices: ["First week", "First month", "Third week", "Sixth month"],
    correct: "Third week"
  },
  {
    question: "What do they enjoy doing together the most?",
    choices: ["Walking", "Watching movies", "Drinking coffee", "Dancing", "Everything"],
    correct: "Everything"
  }
];

let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startBtn.style.display = "none";
  showQuestion();
}

function showQuestion() {
  quizContainer.innerHTML = "";

  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];

    const questionEl = document.createElement("div");
    questionEl.className = "quiz-question";
    questionEl.innerHTML = `<h3>${q.question}</h3>`;

    const choicesEl = document.createElement("div");
    choicesEl.className = "choices";

    q.choices.forEach(choice => {
      const btn = document.createElement("div");
      btn.className = "choice";
      btn.innerText = choice;
      btn.onclick = () => checkAnswer(choice);
      choicesEl.appendChild(btn);
    });

    quizContainer.appendChild(questionEl);
    quizContainer.appendChild(choicesEl);
  } else {
    showResult();
  }
}

function checkAnswer(choice) {
  if (choice === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  showQuestion();
}

function showResult() {
  quizContainer.innerHTML = "";

  if (score === questions.length) {
    quizContainer.innerHTML = `
      <h2>Congratulations! You answered all questions correctly! 🎉</h2>
      <p>Now you can access the surprise page:</p>
      <a href="surprise.html" class="btn-link" target="_blank">View Our Story</a>
    `;
  } else {
    quizContainer.innerHTML = `
      <h2>Hmm... You got ${score} out of ${questions.length} right.</h2>
      <p>Please try again 💫</p>
      <button onclick="restartQuiz()">Try Again</button>
    `;
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  startQuiz();
}
