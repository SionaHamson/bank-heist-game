// Challenge 3 - The Manager's Safe

const managerSafe = {

    title: "🔐 The Manager's Safe",

    story:
        "You find a small safe inside the bank manager's office.",

    clue:
        "My code has 3 numbers.\n" +
        "The first is 2 more than the second.\n" +
        "The second is 3.\n" +
        "The third is the difference between the first and second.",

    correctCode: "532",

    maxAttempts: 3,

    vaultDigit: 2,

    hint:
        "Start with the second number. It is 3."
};


// Check the safe code
function checkSafeCode(code) {

    const playerCode = String(code).trim();

    if (playerCode === managerSafe.correctCode) {

        return {
            correct: true,
            message: "🔓 Safe unlocked!",
            safeCode: "532",
            vaultDigit: managerSafe.vaultDigit
        };

    } else {

        return {
            correct: false,
            message: "❌ Incorrect code. The safe remains locked."
        };
    }
}


// Get the hint
function getSafeHint() {
    return managerSafe.hint;
}
