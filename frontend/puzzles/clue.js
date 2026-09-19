// Challenge 1 - The Security Desk

const securityDesk = {

    title: "🔎 The Security Desk",

    story:
        "You enter the bank's security room. " +
        "A security log is left open on the desk.",

    clue:
        "The first vault digit is the number of cameras that are still watching.",

    cameraLog: [
        {
            camera: "Camera 1",
            status: "ACTIVE"
        },
        {
            camera: "Camera 2",
            status: "ACTIVE"
        },
        {
            camera: "Camera 3",
            status: "OFFLINE"
        },
        {
            camera: "Camera 4",
            status: "ACTIVE"
        },
        {
            camera: "Camera 5",
            status: "ACTIVE"
        }
    ],

    correctAnswer: 4,

    hint:
        "Count only the cameras marked ACTIVE."
};


// Check the player's answer
function checkSecurityAnswer(answer) {

    const playerAnswer = Number(answer);

    if (playerAnswer === securityDesk.correctAnswer) {

        return {
            correct: true,
            message: "✅ Security log decoded.",
            digit: securityDesk.correctAnswer
        };

    } else {

        return {
            correct: false,
            message: "❌ Incorrect. Check the camera statuses carefully."
        };
    }
}


// Get the hint
function getSecurityHint() {

    return securityDesk.hint;
}
