generateRandomStep();
generateRandomEvent();

function showStep() {
    // Generate a random number from 1 to 8
    const RandomNum = Math.floor(Math.random() * 8) + 1;

    // images/dice_1.png upto images/dice_8.png
    const DiceImage = `assets/dice_${RandomNum}.png`;

    document.querySelectorAll("img")[0].setAttribute("src", DiceImage);
}

function generateRandomStep() {
    for (let i=1; i<=20; i++) {
        setTimeout(showStep, 100*i);
    }
}

function showEvent() {
    // Generate a random number from 1 to 4
    const RandomNum = Math.floor(Math.random() * 4) + 1;

    // images/dice_1.png upto images/dice_6.png
    const DiceImage = `assets/event_${RandomNum}.png`;

    document.querySelectorAll("img")[1].setAttribute("src", DiceImage);
}

function generateRandomEvent() {
    for (let i=1; i<=20; i++) {
        setTimeout(showEvent, 50 * i);
    }
}
