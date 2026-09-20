let timeRemaining = 300;
let score = 1000;
let timerInterval;

const missionScreen = document.getElementById("mission-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const completeScreen = document.getElementById("complete-screen");

const startButton = document.getElementById("start-btn");
const continueButton = document.getElementById("continue-btn");

const restartButton = document.getElementById("restart-btn");
const playAgainButton = document.getElementById("play-again-btn");

const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");

const gameOverScore = document.getElementById("game-over-score");
const finalScore = document.getElementById("final-score");
const finalTime = document.getElementById("final-time");


startButton.addEventListener("click", function () {

    missionScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    timeRemaining = 300;
    score = 1000;

    updateTimer();
    updateScore();

    startTimer();
});


function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {

            clearInterval(timerInterval);

            timeRemaining = 0;

            updateTimer();

            showGameOver();
        }

    }, 1000);
}


function updateTimer() {

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");

    timerDisplay.textContent =
        `${formattedMinutes}:${formattedSeconds}`;
}


function updateScore() {

    scoreDisplay.textContent = score;
}


function showGameOver() {

    clearInterval(timerInterval);

    gameScreen.classList.add("hidden");

    gameOverScreen.classList.remove("hidden");

    gameOverScore.textContent = score;
}


function showLevelComplete() {

    clearInterval(timerInterval);

    gameScreen.classList.add("hidden");

    completeScreen.classList.remove("hidden");

    finalScore.textContent = score;

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    finalTime.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function resetGame() {

    clearInterval(timerInterval);

    timeRemaining = 300;
    score = 1000;

    updateTimer();
    updateScore();

    gameOverScreen.classList.add("hidden");
    completeScreen.classList.add("hidden");

    missionScreen.classList.remove("hidden");
}


restartButton.addEventListener("click", function () {

    resetGame();

});


playAgainButton.addEventListener("click", function () {

    resetGame();

});


continueButton.addEventListener("click", function () {

    startChallenge1();

});
