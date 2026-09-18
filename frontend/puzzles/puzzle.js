// Challenge 2 – Solve Security Puzzle

function startChallenge2() {
    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>🔢 Challenge 2 – Security Puzzle</h3>

        <p>Solve the number sequence to find the second digit.</p>

        <div class="clue-box">
            <p><strong>3 → 6 → 12 → 24 → ?</strong></p>
            <p>What number comes next?</p>
        </div>

        <input
            type="number"
            id="puzzle-answer"
            placeholder="Enter your answer"
        >

        <button class="game-button" onclick="checkPuzzleAnswer()">
            SUBMIT ANSWER
        </button>

        <button class="game-button" onclick="showPuzzleHint()">
            💡 HINT
        </button>

        <p id="puzzle-message"></p>
    `;
}

function checkPuzzleAnswer() {
    const answer = document.getElementById("puzzle-answer").value;
    const message = document.getElementById("puzzle-message");

    if (answer === "48") {
        window.clue2 = 8;

        message.innerHTML =
            "✅ Correct! The answer is 48. Your second digit is 8.";

        const challenge2 = document.getElementById("challenge2-status");

        if (challenge2) {
            challenge2.classList.remove("active");
            challenge2.textContent = "✅ Challenge 2";
        }

        const challenge3 = document.getElementById("challenge3-status");

        if (challenge3) {
            challenge3.classList.add("active");
        }

        setTimeout(function () {
            startChallenge3();
        }, 1000);

    } else {
        message.innerHTML =
            "❌ Wrong answer. Try again.";
    }
}

function showPuzzleHint() {
    const message = document.getElementById("puzzle-message");

    message.innerHTML =
        "💡 Hint: Each number is multiplied by 2.";
}
