//constants

//json files
const QUESTION_JSON = "questions.json",
SCORE_MESSAGES_JSON = "scoreMessages.json";

//html ids
const QUIZ_QUESTIONS = 'quiz-questions',
QUIZ_ANSWERS = 'quiz-answers',
QUIZ_SCORE = 'quiz-score',
QUIZ_SCORE_MSG = 'quiz-score-message',
QUIZ_FACTS = 'quiz-facts',
QUIZ_NEXT = 'quiz-next';

//strings
const RESTART_QUIZ = "Quiz neu starten",
SCORE_MSG = "Ihre Puntkzahl ist: ";

//event types
const CLICK_EVENT = 'click';


//loaded from json
window.questions = [];
window.scores = [];

//local vars
window.facts = [];
window.question = 0;
window.score = 0;

/**
 * Displays the next quiz question
 * @param {Number} questionNum 
 */
function nextQuestion(questionNum) {
    let htmlQuestion = document.getElementById(QUIZ_QUESTIONS),
    htmlAnswer = document.getElementById(QUIZ_ANSWERS);
    htmlQuestion.innerHTML = window.questions[questionNum].question,
    answerChildrenList = htmlAnswer.children;
    for (let i = 0; i < 4; i++) {
        answerChildrenList[i].children[0].value = window.questions[questionNum].answers[i].score;
        console.log();
        answerChildrenList[i].children[1].children[1].innerHTML = window.questions[questionNum].answers[i].answer;
    }
}

/**
 * Gets a number and returns the coresponing score message
 * @param {Number} number 
 * @returns score message
 */
function numToScore(number) {
    if(number > 2){
        return window.scores.good;
    }
    else if(number >= -4){
        return window.scores.mediocre;
    }
    return window.scores.bad
}

/**
 * Checks whether to show results or got to the next question
 */
function checkNext() {
    let userScore = Number(document.querySelectorAll('input[name=answers]:checked')[0].value);
    collectFacts(userScore, window.question);
    window.score += userScore;
    window.question += 1;
    if(window.question > window.questions.length-1){
        showResults();
    }
    else{
        nextQuestion(window.question);
    }
    
}

/**
 * Collects facts if score of question is below 0
 * @param {Number} userScore 
 * @param {Number} questionNumber 
 */
function collectFacts(userScore, questionNumber) {
    if(userScore < 0){
        window.facts.push(window.questions[questionNumber].fact);
    }
}

/**
 * Shows the quiz results
 */
function showResults() {
    let htmlScore = document.getElementById(QUIZ_SCORE),
    htmlScoreMessage = document.getElementById(QUIZ_SCORE_MSG),
    htmlFacts = document.getElementById(QUIZ_FACTS),
    htmlQuestion = document.getElementById(QUIZ_QUESTIONS),
    htmlAnswer = document.getElementById(QUIZ_ANSWERS),
    quizNext = document.getElementById(QUIZ_NEXT);

    htmlQuestion.innerHTML = "";
    htmlAnswer.innerHTML = "";
    htmlScoreMessage.innerText = numToScore(window.score);
    htmlScore.innerText = String(SCORE_MSG+window.score);
    window.facts.forEach(element => {
        let factNode = document.createElement('p');
        factNode.innerText = element;
        htmlFacts.appendChild(factNode);
    });
    quizNext.innerText = RESTART_QUIZ;
    quizNext.removeEventListener(CLICK_EVENT, this);
    quizNext.addEventListener(CLICK_EVENT, function(){
        location.reload();
    });
}

/**
 * Loads the questions and score messages
 */
function loadResources(){
    Promise.all([
        fetch(QUESTION_JSON).then(quizQuestions => quizQuestions.json()),
        fetch(SCORE_MESSAGES_JSON).then(quizScores => quizScores.json())
    ])
    .then(([questions, scores]) => { 
        window.questions = questions;
        window.scores = scores;
    })
    .then(() => {
        nextQuestion(0);
    })
    .catch((error) => {
        console.log(error);
    });

    let quizNext = document.getElementById(QUIZ_NEXT);
    quizNext.addEventListener(CLICK_EVENT, function(){
        checkNext();
    });
}

window.addEventListener('load', function() {
    loadResources();
});