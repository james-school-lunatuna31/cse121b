const quizContainer = document.getElementById('quiz-container');
const scoreDisplay = document.getElementById('score-display');
const homeButton = document.getElementById('home-button');

const quizData = JSON.parse(localStorage.getItem('quizData'));
const userChoices = JSON.parse(localStorage.getItem('userChoices'));
const score = localStorage.getItem('score');

quizData.forEach((question, index) => {
    const questionElement = createGradedQuestionElement(question, userChoices[index], question.shuffledOptions, index);
    quizContainer.appendChild(questionElement);
});

scoreDisplay.textContent = `Score: ${score}% (${score / 100 * quizData.length}/${quizData.length})`;

homeButton.addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'index.html';
});