// Challenge 3 - The Manager's Office

const managerOffice = {

    title: "🔐 The Manager's Office",

    story:
        "You enter the bank manager's office. " +
        "A locked digital safe sits on the desk. " +
        "Nearby, you find an incident report and a transaction ledger.",

    clue:
        "Find the transaction that happened at the same time as the " +
        "security incident. Its transaction code opens the safe.",

    incidentTime: "02:17 AM",

    transactions: [
        {
            time: "01:42 AM",
            transactionCode: "417"
        },
        {
            time: "02:17 AM",
            transactionCode: "532"
        },
        {
            time: "03:05 AM",
            transactionCode: "816"
        }
    ],

    correctSafeCode: "532",

    finalClue:
        "The third digit of the final vault code is the digit " +
        "in the safe code that matches the hour of the incident.",

    vaultDigit: 2,

    hint:
        "Compare the incident time with the transaction times. " +
        "The matching transaction gives you the safe code."
};


// Check the manager's safe code
function checkSafeCode(code) {

    const playerCode = String(code).trim();

    if (playerCode === managerOffice.correctSafeCode) {

        return {
            correct: true,

            message:
                "🔓 Safe unlocked! " +
                "Now examine the incident hour to find the third vault digit.",

            finalClue: managerOffice.finalClue,

            vaultDigit: managerOffice.vaultDigit
        };

    } else {

        return {
            correct: false,

            message:
                "❌ Incorrect code. Compare the incident time " +
                "with the transaction ledger."
        };
    }
}


// Get the manager's office information
function getManagerOffice() {

    return managerOffice;
}


// Get the hint
function getSafeHint() {

    return managerOffice.hint;
}
