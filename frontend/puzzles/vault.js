// Challenge 3 – Crack the Vault

function startChallenge3() {
    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>🔐 Challenge 3 – Crack the Vault</h3>

        <p>Find the final clue and enter the 3-digit vault code.</p>

        <div class="clue-box">
            <p>📄 FINAL SECURITY NOTE</p>

            <p>
                "The third digit is equal to the number of files
                marked CONFIDENTIAL."
            </p>

            <p>
                📁 CONFIDENTIAL files: <strong>7</strong>
            </p>
        </div>

        <input
            type="number"
            id="vault-answer"
            placeholder="Enter 3-digit code"
        >

        <button class="game-button" onclick="unlockVault()">
            🔓 UNLOCK VAULT
        </button>

        <p id="vault-message"></p>
    `;
}

function unlockVault() {
    const answer = document.getElementById("vault-answer").value;
    const message = document.getElementById("vault-message");

    const clue1 = window.clue1 || 4;
    const clue2 = window.clue2 || 8;
    const clue3 = 7;

    const correctCode = `${clue1}${clue2}${clue3}`;

    if (answer === correctCode) {
        score += 100;

        updateScore();

        message.innerHTML =
            "🔓 Correct! The vault is unlocked!";

        const challenge3 =
            document.getElementById("challenge3-status");

        if (challenge3) {
            challenge3.classList.remove("active");
            challenge3.textContent = "✅ Challenge 3";
        }

        setTimeout(function () {
            showLevelComplete();
        }, 1000);

    } else {
        score -= 50;

        if (score < 0) {
            score = 0;
        }

        updateScore();

        message.innerHTML =
            "❌ Incorrect code. Try again. 50 points deducted.";
    }
}
