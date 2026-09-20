// Challenge 2 – Security Terminal Logic
// Member 2 – Puzzle/Game Logic

const securityTerminal = {

    title: "🔢 Security Terminal",

    story:
        "A security terminal displays an encrypted number sequence.",

    clue:
        "Find the missing number in the sequence.",

    sequence: [
        3,
        6,
        12,
        24,
        "?"
    ],

    correctAnswer: 48,

    secondDigit: 8,

    hint:
        "Each number is multiplied by 2."
};


// Check Challenge 2 answer
function checkTerminalAnswer(answer) {

    const playerAnswer = Number(answer);

    if (playerAnswer === securityTerminal.correctAnswer) {

        return {
            correct: true,

            message:
                "✅ Correct! The missing number is 48.",

            digit: securityTerminal.secondDigit
        };

    } else {

        return {
            correct: false,

            message:
                "❌ Incorrect. Look at the pattern carefully."
        };
    }
}


// Get Challenge 2 hint
function getTerminalHint() {

    return securityTerminal.hint;
}


// Get the sequence
function getSecuritySequence() {

    return securityTerminal.sequence;
}
