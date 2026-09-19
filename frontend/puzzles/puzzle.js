// Challenge 2 - Guard's Locker

const lockerPuzzle = {
    title: "🔐 Guard's Locker",

    story:
        "The guard never writes his password directly.",

    clue:
        "I only need the letter that comes after G.",

    alphabetHint: {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8
    },

    correctAnswer: 8,

    maxAttempts: 3,

    hint:
        "Look at the alphabet. What letter comes immediately after G?"
};


// Check the player's answer
function checkLockerAnswer(answer) {

    const playerAnswer = Number(answer);

    if (playerAnswer === lockerPuzzle.correctAnswer) {

        return {
            correct: true,
            message: "🔓 Locker unlocked!",
            digit: 8
        };

    } else {

        return {
            correct: false,
            message: "❌ Incorrect. The locker remains locked."
        };
    }
}


// Get the hint
function getLockerHint() {
    return lockerPuzzle.hint;
}
