// Challenge 1 – Find the Hidden Clue

function startChallenge1() {
    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>🔎 Challenge 1 – Find the Clue</h3>

        <p>
            Search the security report carefully.
        </p>

        <div class="clue-box">
            <p>
                📄 SECURITY REPORT
            </p>

            <p>
                "The first digit of the vault code is equal
                to the number of active security cameras."
            </p>

            <p>
                📹 Active cameras: <strong>4</strong>
            </p>
        </div>

        <button class="game-button" onclick="collectClue()">
            COLLECT CLUE
        </button>
    `;
}

function collectClue() {
    window.clue1 = 4;

    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>✅ Clue Found!</h3>

        <p>
            First digit discovered: <strong>4</strong>
        </p>

        <button class="game-button" onclick="startChallenge2()">
            NEXT CHALLENGE
        </button>
    `;

    const challenge1 = document.getElementById("challenge1-status");

    if (challenge1) {
        challenge1.classList.remove("active");
        challenge1.textContent = "✅ Challenge 1";
    }

    const challenge2 = document.getElementById("challenge2-status");

    if (challenge2) {
        challenge2.classList.add("active");
    }
}
