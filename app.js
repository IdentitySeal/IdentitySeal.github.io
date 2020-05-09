// Assigning the html class and Id to JavaScript variables
const container = document.querySelector('.container'),
    currentQuestion = document.getElementById('currentquestion'),
    allAvailableQuestions = document.getElementById('allquestions'),
    question = document.getElementById('questionbank'),
    optionOne = document.querySelector('.option-1'),
    optionTwo = document.querySelector('.option-2'),
    optionThree = document.querySelector('.option-3'),
    optionFour = document.querySelector('.option-4'),
    options = document.querySelectorAll('li'),
    btn = document.getElementById('btn');

let currentScore = document.querySelector('.current-score'),
    activeQuestion = 1;
score = 0;


// Question and answer data
const myQuestions = [{
        question: 'Which of the following is true about variable naming conventions in JavaScript?,
        options: [
            'You should not use any of the JavaScript reserved keyword as variable name.',
            'JavaScript variable names should not start with a numeral (0-9).',
            "Both of the above",
            'None of the above',
        ],
        answer: "Both of the above"
    },
    {
        question: 'Which built-in method combines the text of two strings and returns a new string?',
        options: [
            'attach()',
            'concat()',
            'join()',
            'append()',
        ],
        answer: 'concat()',
    },
    {
        question: 'Which of the following function of Array object returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found?',
        options: [
            'indexOf()',
            'join()',
            'lastIndexOf()',
            'map()',
        ],
        answer: 'Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.'
    },
    {
        question: 'What is Callback?',
        options: [
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed after another function has finished executing',
            'A callback is a plain JavaScript error function',
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed before another function finish executing',
            'A callback is a plain JavaScript function passed to some method as an argument or option, executed for debugging another function',
        ],
        answer: 'A callback is a plain JavaScript function passed to some method as an argument or option, executed after another function has finished executing',
    },

    {
        question: 'Which of the following function of Boolean object returns the primitive value of the Boolean object?',
        options: [
            'toSource()',
            'valueOf()',
            'changeCase(case)',
            'toString()',
        ],
        answer: 'valueOf()',
    },
];


// Change text content
const showContent = () => {
    currentQuestion.textContent = activeQuestion;
    allAvailableQuestions.textContent = myQuestions.length;
    currentScore.textContent = score;
    question.textContent = myQuestions[activeQuestion - 1].question;
    optionOne.textContent = myQuestions[activeQuestion - 1].options[0];
    optionTwo.textContent = myQuestions[activeQuestion - 1].options[1];
    optionThree.textContent = myQuestions[activeQuestion - 1].options[2];
    optionFour.textContent = myQuestions[activeQuestion - 1].options[3];
}

showContent();

// Displaying final result after completing the quiz
const showResult = () => {
    container.classList.add('result', 'blue');
    const result = (score / myQuestions.length) * 100;
    let remark;
    if (result < 50) {
        result = 'Fair , work on yourself';
    } else if (result <= 75) {
        remark = 'Good';
    } else if (result <= 90) {
        remark = 'Very Good'
    } else {
        remark = 'Excellent';
    }
    container.innerHTML = `
   <h1>${result}%</h1> 
   <h3 class="center mb">${remark}</h3>
   <a href="index.html" class="btn">RETRY?</a>
   `;
}

const disableBtn = () => {
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === myQuestions[activeQuestion - 1].answer) {
            option.classList.add('correct');
        }
    })
}

const checkOptionOne = () => {

    if (optionOne.textContent === myQuestions[activeQuestion - 1].answer) {
        optionOne.classList.add('correct');
        score++;
        showContent();

    } else {
        optionOne.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionTwo = () => {
    if (optionTwo.textContent === myQuestions[activeQuestion - 1].answer) {
        optionTwo.classList.add('correct');
        score++;
        showContent();

    } else {
        optionTwo.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const checkOptionThree = () => {

    if (optionThree.textContent === myQuestions[activeQuestion - 1].answer) {
        optionThree.classList.add('correct');
        score++;
        showContent();

    } else {
        optionThree.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }

}

const checkOptionFour = () => {

    if (optionFour.textContent === myQuestions[activeQuestion - 1].answer) {
        optionFour.classList.add('correct');
        score++;
        showContent();

    } else {
        optionFour.classList.add('wrong');
    }
    disableBtn();
    btn.classList.add('show');

    if (activeQuestion === myQuestions.length) {
        btn.textContent = 'Submit';
    }
}

const nextQuestion = () => {
    if (activeQuestion < myQuestions.length) {
        activeQuestion = activeQuestion + 1;
        showContent();
        btn.classList.remove('show');
        options.forEach(option => {
            option.classList.remove('wrong', 'correct', 'disabled');
        })
    } else {
        showResult();
    }
}

// Calling all EventListener
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);
