const errorSound = new Audio("../assets/sounds/error.mp3");
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
successSound.currentTime = 0;
successSound.play();
        window.clue2 = 8;

       message.innerHTML = `
    <strong>✅ SECURITY RECORD ACCESSED</strong><br><br>

    🔐 <strong>VAULT ACCESS RECORD</strong><br><br>

    Access code fragment: <strong>48</strong><br><br>

    <em>
    The vault security digits are recorded separately.<br>
    Remember the final digit of this access fragment.
    </em><br><br>

    <button class="game-button" onclick="finishChallenge2()">
        ✅ CONTINUE
    </button>
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

       

  } else {

    errorSound.currentTime = 0;
    errorSound.play();

    score = Math.max(0, score - 50);

    updateScore();

    message.innerHTML =
        "❌ ACCESS DENIED — Incorrect number.<br><br>" +
        "⚠️ <strong>-50 points</strong><br><br>" +
        "Try again.";
}
}
function finishChallenge2() {

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

    startChallenge3();
}

function showPuzzleHint() {

    score = Math.max(0, score - 100);

    updateScore();

    const message =
        document.getElementById("puzzle-message");

    message.innerHTML =
        "💡 HINT: Each number is multiplied by 2.<br><br>" +
        "⚠️ <strong>-100 points</strong>";
}
