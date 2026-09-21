// Challenge 1 – Realistic Security Room

function startChallenge1() {
    const gameContent = document.getElementById("game-content");

    gameContent.innerHTML = `
        <h3>🔎 SEARCH THE SECURITY ROOM</h3>

        <p>Click the objects in the room to search for clues.</p>

        <div class="room-container">

            <img
                src="../assets/images/security-room.png"
                alt="Realistic bank security room"
                class="security-room"
            >

            <button class="room-object cctv-object"
                    onclick="inspectCCTV()">
                📹
            </button>

            <button class="room-object computer-object"
                    onclick="inspectComputer()">
                💻
            </button>

            <button class="room-object files-object"
                    onclick="inspectFiles()">
                📁
            </button>

        </div>

        <p id="room-message">
            🔎 Search the room carefully.
        </p>
    `;
}

function inspectCCTV() {

    const message = document.getElementById("room-message");

    message.innerHTML = `
        📹 <strong>CCTV MONITOR</strong><br><br>
        The security monitor shows that
        <strong>4 cameras are currently active.</strong><br><br>
        🔢 This gives you the first digit: <strong>4</strong>
    `;

    window.clue1 = 4;
}

function inspectComputer() {

    const message = document.getElementById("room-message");

    message.innerHTML = `
        💻 <strong>SECURITY COMPUTER</strong><br><br>
        The computer is locked.<br>
        A message on the screen says:<br><br>
        <em>"Check the CCTV system for active camera information."</em>
    `;
}

function inspectFiles() {

    const message = document.getElementById("room-message");

    window.clue1 = 4;

    message.innerHTML = `
        📁 <strong>SECURITY FILE FOUND!</strong><br><br>

        The file contains a security report:<br><br>

        <em>
        "The first digit of the vault code is equal
        to the number of active security cameras."
        </em><br><br>

        📹 Active cameras: <strong>4</strong><br><br>

        🔢 First digit discovered: <strong>4</strong><br><br>

        <button class="game-button" onclick="finishChallenge1()">
            ✅ CLUE FOUND — CONTINUE
        </button>
    `;
}

function finishChallenge1() {

    const challenge1 =
        document.getElementById("challenge1-status");

    if (challenge1) {
        challenge1.classList.remove("active");
        challenge1.textContent = "✅ Challenge 1";
    }

    const challenge2 =
        document.getElementById("challenge2-status");

    if (challenge2) {
        challenge2.classList.add("active");
    }

    startChallenge2();
}
