// Challenge 3 – Final Vault Logic
// Member 2 – Puzzle/Game Logic

const finalVault = {

    title: "🔐 Final Security Vault",

    story:
        "The final vault requires the third digit " +
        "before the security code can be completed.",

    clue:
        "The third digit of the vault code is equal to " +
        "the number of files marked CONFIDENTIAL.",

    confidentialFiles: 7,

    correctAnswer: 7,

    thirdDigit: 7,

    hint:
        "Count the files marked CONFIDENTIAL."
};


// Check Challenge 3 answer
function checkVaultClue(answer) {

    const playerAnswer = Number(answer);

    if (playerAnswer === finalVault.correctAnswer) {

        return {
            correct: true,

            message:
                "✅ Correct! You found the third digit.",

            digit: finalVault.thirdDigit
        };

    } else {

        return {
            correct: false,

            message:
                "❌ Incorrect. Count the CONFIDENTIAL files carefully."
        };
    }
}


// Get the vault hint
function getVaultHint() {

    return finalVault.hint;
}


// Get the number of confidential files
function getConfidentialFileCount() {

    return finalVault.confidentialFiles;
}
