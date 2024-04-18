const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const key = document.querySelector('#key');
const textArea = document.querySelector('#text');
const fileInput = document.querySelector('#fileInput');

const listLetters = 'abcdefghijklmnopqrstuvwxyz';

let newText = '';

btnEncrypt.addEventListener('click', () => {
    const keyValue = Number(key.value);
    const text = textArea.value.toLowerCase();

    for (const letter of text) {
        if (!listLetters.includes(letter)) {
            newText += letter;
            continue;
        }

        const indexLetters = listLetters.indexOf(letter);
        let indexNewLetter = (indexLetters + keyValue) % 26;

        if (indexNewLetter < 0) {
            indexNewLetter += 26;
        }

        newText += listLetters[indexNewLetter];
    }

    textArea.value = newText;
    newText = '';
});

btnDecrypt.addEventListener('click', () => {
    const keyValue = Number(key.value);
    const text = textArea.value.toLowerCase();

    for (const letter of text) {
        if (!listLetters.includes(letter)) {
            newText += letter;
            continue;
        }

        const indexLetters = listLetters.indexOf(letter);
        let indexNewLetter = (indexLetters - keyValue) % 26;

        if (indexNewLetter < 0) {
            indexNewLetter += 26;
        }

        newText += listLetters[indexNewLetter];
    }

    textArea.value = newText;
    newText = '';
});

// do not take input if number <0 && number>25
function validateKeyInput(input) {
if (input.value < 1) {
    input.value = 1;
} else if (input.value > 25) {
    input.value = 25;
}
}

