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

        The security monitor is displaying the status
        of the bank's surveillance cameras.<br><br>

        Camera 1 — 🟢 ACTIVE<br>
        Camera 2 — 🟢 ACTIVE<br>
        Camera 3 — 🔴 OFFLINE<br>
        Camera 4 — 🟢 ACTIVE<br>
        Camera 5 — 🟢 ACTIVE<br><br>

        <em>Something about the active cameras seems important...</em>
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
        "The vault security code is based on
        information recorded by the security system."
        </em><br><br>

        <em>
        The report may contain a useful piece of the
        vault code...
        </em><br><br>

        <button class="game-button" onclick="finishChallenge1()">
            ✅ CONTINUE
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