const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Rembrandt"],
      answer: "Leonardo da Vinci"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("nextBtn");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    feedbackEl.textContent = "";
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
  
    optionsEl.innerHTML = "";
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");
      button.addEventListener("click", () => checkAnswer(option));
      optionsEl.appendChild(button);
    });
  }
  
  function checkAnswer(selected) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selected === correctAnswer) {
      feedbackEl.textContent = "✅ Correct!";
      feedbackEl.style.color = "green";
      score++;
    } else {
      feedbackEl.textContent = "❌ Wrong!";
      feedbackEl.style.color = "red";
    }
  
    // Disable all option buttons after answer
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach(btn => btn.disabled = true);
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Quiz Completed!";
      optionsEl.innerHTML = "";
      feedbackEl.textContent = "";
      scoreEl.textContent = `Your Score: ${score} / ${quizData.length}`;
      nextBtn.disabled = true;
    }
  });
  
  // Load first question on page load
  loadQuestion();
  