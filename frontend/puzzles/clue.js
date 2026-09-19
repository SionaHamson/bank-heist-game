// Challenge 1 - Find the Hidden Clue

function showClueChallenge() {
    return {
        title: "Find the Hidden Clue",
        message: "Find the object that contains the first vault clue.",
        objects: [
            {
                name: "Security Camera",
                correct: true,
                clue: "The first digit is equal to the number of active security cameras.",
                value: 4
            },
            {
                name: "Office Chair",
                correct: false
            },
            {
                name: "Desk Lamp",
                correct: false
            },
            {
                name: "Plant",
                correct: false
            }
        ]
    };
}

function checkClue(object) {
    if (object.correct) {
        return {
            correct: true,
            message: object.clue,
            digit: object.value
        };
    }

    return {
        correct: false,
        message: "Nothing useful here. Keep searching!"
    };
}
