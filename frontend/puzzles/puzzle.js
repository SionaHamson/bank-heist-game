// Challenge 2 - The Guard's Locker

const guardLocker = {

    title: "🔐 The Guard's Locker",

    story:
        "You enter the guard room and find a locked locker. " +
        "Several patrol records are kept nearby.",

    clue:
        "The second digit of the final vault code is the number " +
        "of checkpoints on the guard's patrol route that passes the vault.",

    patrolRoutes: [
        {
            route: "Route A",
            checkpoints: 5
        },
        {
            route: "Route B",
            checkpoints: 6
        },
        {
            route: "Route C",
            checkpoints: 8
        }
    ],

    vaultRoute: "Route C",

    correctAnswer: 8,

    hint:
        "First find which patrol route passes the vault. " +
        "Then check how many checkpoints are on that route."
};


// Check the player's answer
function checkLockerAnswer(answer) {

    const playerAnswer = Number(answer);

    if (playerAnswer === guardLocker.correctAnswer) {

        return {
            correct: true,
            message:
                "✅ Correct! You found the second digit of the vault code.",
            digit: guardLocker.correctAnswer
        };

    } else {

        return {
            correct: false,
            message:
                "❌ Incorrect. Check the patrol routes and checkpoints."
        };
    }
}


// Get the hint
function getLockerHint() {

    return guardLocker.hint;
}
