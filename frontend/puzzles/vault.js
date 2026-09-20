// Challenge 3 – Crack the Vault

function startChallenge3() {

    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `

        <h3>🔐 FINAL SECURITY VAULT</h3>

        <p>
            The vault is locked.
            Find the final clue and enter the correct security code.
        </p>

        <div class="vault-room">

            <div class="vault-door">

                <div class="vault-top">
                    BANK SECURITY VAULT
                </div>

                <div class="vault-circle">

                    <div class="vault-lock">
                        🔒
                    </div>

                </div>

                <div class="vault-panel">

                    <div class="vault-display">
                        ENTER CODE
                    </div>

                    <input
                        type="number"
                        id="vault-answer"
                        maxlength="3"
                        placeholder="___"
                    >

                    <button
                        class="vault-button"
                        onclick="unlockVault()">
                        🔓 UNLOCK
                    </button>

                </div>

            </div>

        </div>

        <div class="final-clue">

            <h3>📄 FINAL SECURITY NOTE</h3>

            <p>
                The third digit of the vault code is equal to
                the number of files marked
                <strong>CONFIDENTIAL</strong>.
            </p>

            <p>
                📁 Confidential files found:
                <strong>7</strong>
            </p>

            <p>
                The third digit is:
                <strong>7</strong>
            </p>

        </div>

        <p id="vault-message"></p>
    `;
}


function unlockVault() {

    const answer =
        document.getElementById("vault-answer").value;

    const message =
        document.getElementById("vault-message");

    const clue1 = window.clue1 || 4;
    const clue2 = window.clue2 || 8;
    const clue3 = 7;

    const correctCode =
        `${clue1}${clue2}${clue3}`;


    if (answer === correctCode) {

        score += 100;

        updateScore();

        message.innerHTML = `
            <strong>🔓 VAULT UNLOCKED!</strong><br><br>
            Security code accepted.
        `;

        const challenge3 =
            document.getElementById("challenge3-status");

        if (challenge3) {

            challenge3.classList.remove("active");

            challenge3.textContent =
                "✅ Challenge 3";
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
            "❌ ACCESS DENIED — Incorrect vault code. 50 points deducted.";
    }
}
