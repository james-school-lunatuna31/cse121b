let currentQuestionIndex = 0;
let quizData = [];
let userChoices = [];

const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-input');
const prevBtn = document.getElementById('prev-input');
const submitBtn = document.getElementById('submit-input');
const quizForm = document.getElementById('quiz-form');
const inputs = document.getElementsByTagName('input');

nextBtn.addEventListener('click', handleNextQuestion);
prevBtn.addEventListener('click', handlePrevQuestion);
submitBtn.addEventListener('click', handleSubmitQuiz);
quizForm.addEventListener('submit', function (event) {
    event.preventDefault();
});

fetchQuizData().then(data => {
    quizData = data.map(question => {
        const shuffledOptions = shuffleArray([...question.options]); // This was a clever trick I found online. Spreads the properties of question across a new object. Thats cool and every language should have that.
        return { ...question, shuffledOptions };
    });
    userChoices = new Array(quizData.length).fill(null); // ensures that every answer starts as "Not Answered"
    displayQuestion(currentQuestionIndex);
});

function displayQuestion(index) {
    quizContainer.innerHTML = '';
    const questionData = quizData[index];
    const questionElement = createQuestionElement(questionData.question, questionData.shuffledOptions, index);
    quizContainer.appendChild(questionElement);
    const userChoice = userChoices[index];
    if (userChoice) {
        const optionElements = document.querySelectorAll('.option');
        optionElements.forEach(optionElement => {
            if (optionElement.textContent === userChoice) {
                optionElement.classList.add('selected');
            }
        });
    }
    updateButtonStates();
}

function handleNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        const selectedOption = document.querySelector('.option.selected');
        userChoices[currentQuestionIndex] = selectedOption ? selectedOption.textContent : null;
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        const selectedOption = document.querySelector('.option.selected');
        userChoices[currentQuestionIndex] = selectedOption ? selectedOption.textContent : null;
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function handleSubmitQuiz() {
    const selectedOption = document.querySelector('.option.selected');
    userChoices[currentQuestionIndex] = selectedOption ? selectedOption.textContent : null;
    let score = 0;
    quizData.forEach((question, index) => {
        if (userChoices[index] === question.answer) {
            score++;
        }
    });
    const percentageScore = ((score / quizData.length) * 100).toFixed(2);
    localStorage.setItem('quizData', JSON.stringify(quizData));
    localStorage.setItem('userChoices', JSON.stringify(userChoices));
    localStorage.setItem('score', percentageScore);

    const unansweredQuestions = userChoices.includes(null); //A major benefit for not using a dictionary is that we can easily check if a question is not answered.

    let confirmSubmit;

    if (unansweredQuestions) {
        confirmSubmit = window.confirm("There are unanswered questions. Are you sure you want to submit the quiz?");
    } else {
        confirmSubmit = window.confirm("Are you sure you want to submit the quiz?");
    }

    if (confirmSubmit) {
        window.location.href = 'graded.html';
    }
}

function updateButtonStates() {
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === quizData.length - 1;
}
