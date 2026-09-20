// Challenge 2 – Security Terminal Puzzle

function startChallenge2() {

    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>🔢 SECURITY TERMINAL</h3>

        <p>
            The security system requires the missing number
            to continue.
        </p>

        <div class="terminal-box">

            <div class="terminal-header">
                🔒 SECURITY ACCESS SYSTEM
            </div>

            <div class="terminal-screen">

                <p>ENCRYPTED NUMBER SEQUENCE:</p>

                <h2>3 → 6 → 12 → 24 → ?</h2>

                <p>
                    Enter the next number.
                </p>

                <input
                    type="number"
                    id="puzzle-answer"
                    placeholder="Enter answer"
                >

                <button
                    class="game-button"
                    onclick="checkPuzzleAnswer()">
                    SUBMIT
                </button>

                <button
                    class="game-button"
                    onclick="showPuzzleHint()">
                    💡 HINT
                </button>

                <p id="puzzle-message"></p>

            </div>

        </div>
    `;
}

function checkPuzzleAnswer() {

    const answer =
        document.getElementById("puzzle-answer").value;

    const message =
        document.getElementById("puzzle-message");

    if (answer === "48") {

        window.clue2 = 8;

        message.innerHTML = `
            ✅ ACCESS GRANTED!<br><br>
            The answer is <strong>48</strong>.<br>
            Your second digit is <strong>8</strong>.
        `;

        const challenge2 =
            document.getElementById("challenge2-status");

        if (challenge2) {
            challenge2.classList.remove("active");
            challenge2.textContent = "✅ Challenge 2";
        }

        const challenge3 =
            document.getElementById("challenge3-status");

        if (challenge3) {
            challenge3.classList.add("active");
        }

        setTimeout(function () {
            startChallenge3();
        }, 1200);

    } else {

    score = Math.max(0, score - 50);

    updateScore();

    message.innerHTML =
        "❌ ACCESS DENIED — Incorrect number.<br><br>" +
        "⚠️ <strong>-50 points</strong><br><br>" +
        "Try again.";
}

function showPuzzleHint() {

    const message =
        document.getElementById("puzzle-message");

    message.innerHTML =
        "💡 HINT: Each number is multiplied by 2.";
}
