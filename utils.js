async function fetchQuizData() {
    try {
        const response = await fetch('https://run.mocky.io/v3/aaf77d74-32cc-4824-9696-1ab415067b09');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const quizData = await response.json();
            return shuffleArray(quizData);
        }
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function fetchUserChoices() {
    let userChoices;
    try {
        userChoices = JSON.parse(localStorage.getItem('userChoices'));
        if (!userChoices) {
            throw new Error('No user choices found in local storage');
        }
    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
    }
    return userChoices;
}

function createQuestionElement(question, options, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('quiz-question');
    questionElement.dataset.questionIndex = index;

    const questionNumber = document.createElement('h3');
    questionNumber.textContent = `Question ${index + 1}`;
    questionElement.appendChild(questionNumber);

    const questionText = document.createElement('h2');
    questionText.textContent = question;
    questionElement.appendChild(questionText);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    questionElement.appendChild(optionsContainer);

    options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);

        optionElement.addEventListener('click', function () {
            const allButtons = document.querySelectorAll('.option');
            allButtons.forEach(btn => btn.classList.remove('selected'));

            this.classList.add('selected');
        });
    });

    return questionElement;
}

function createGradedQuestionElement(questionData, userChoice, shuffledOptions, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('quiz-question');

    const questionNumber = document.createElement('h3');
    questionNumber.textContent = `Question ${index + 1}`;
    questionElement.appendChild(questionNumber);

    const questionText = document.createElement('h2');
    questionText.textContent = questionData.question;
    questionElement.appendChild(questionText);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('options-container');
    questionElement.appendChild(optionsContainer);

    if (!userChoice) {
        shuffledOptions.push("No Option Selected");
    }

    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionsContainer.appendChild(optionElement);

        optionElement.style.pointerEvents = 'none';

        optionElement.style.backgroundColor = 'rgb(176, 224, 230)';

        if (userChoice) {
            if (option === questionData.answer) {
                optionElement.style.backgroundColor = 'green';
            }
            if (option === userChoice && userChoice !== questionData.answer) {
                optionElement.style.backgroundColor = 'coral';
            }
        } else {
            if (option === questionData.answer) {
                optionElement.style.backgroundColor = 'green';
            }
            if (option === "No Option Selected") {
                optionElement.style.backgroundColor = 'coral';
            }
        }
        if (optionElement.style.backgroundColor === 'rgb(176, 224, 230)') {
            optionElement.style.color = `rgb(0,0,0)`;
        }
    });

    if (userChoice && userChoice !== questionData.answer) {
        questionElement.style.border = '2px solid red';
    } else if (!userChoice) {
        questionElement.style.border = '2px solid red';
    } else {
        questionElement.style.border = '1px solid black';
    }

    return questionElement;
}