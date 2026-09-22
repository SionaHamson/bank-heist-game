// ==========================================
// BANK HEIST - BACKEND VALIDATION
// ==========================================


// ------------------------------------------
// Challenge 1 Validation
// ------------------------------------------

function validateChallenge1(answer) {

    const playerAnswer = String(answer).trim();

    if (playerAnswer === "4") {

        return {
            valid: true,
            challenge: 1,
            digit: 4,
            message: "Challenge 1 completed."
        };

    }

    return {
        valid: false,
        challenge: 1,
        message: "Incorrect answer for Challenge 1."
    };
}


// ------------------------------------------
// Challenge 2 Validation
// ------------------------------------------

function validateChallenge2(answer) {

    const playerAnswer = String(answer).trim();

    if (playerAnswer === "48") {

        return {
            valid: true,
            challenge: 2,
            digit: 8,
            message: "Challenge 2 completed."
        };

    }

    return {
        valid: false,
        challenge: 2,
        message: "Incorrect answer for Challenge 2."
    };
}


// ------------------------------------------
// Challenge 3 / Final Vault Validation
// ------------------------------------------

function validateVault(code) {

    const playerCode = String(code).trim();

    if (playerCode === "487") {

        return {
            valid: true,
            challenge: 3,
            digit: 7,
            code: "487",
            message: "Vault unlocked."
        };

    }

    return {
        valid: false,
        challenge: 3,
        message: "Incorrect vault code."
    };
}


// ------------------------------------------
// General Challenge Validator
// ------------------------------------------

function validateChallenge(challengeNumber, answer) {

    switch (Number(challengeNumber)) {

        case 1:
            return validateChallenge1(answer);

        case 2:
            return validateChallenge2(answer);

        case 3:
            return validateVault(answer);

        default:

            return {
                valid: false,
                message: "Invalid challenge."
            };
    }
}


// ------------------------------------------
// Export functions
// ------------------------------------------

module.exports = {
    validateChallenge1,
    validateChallenge2,
    validateVault,
    validateChallenge
};
