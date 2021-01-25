'use strict';

const vowelsLetters = 'aeiouAEIOU';
function countVowels(text) {
    let vowels = [];
    for (let char of text) {
        // If the char is a vowel, we push it to `vowels` array
        if (vowelsLetters.includes(char)) {
            vowels.push(char);
        }
    }
    return vowels;
}

window.addEventListener('load', () => {
    const inputText = document.getElementById('input-text');
    const counter = document.getElementById('counter');
    const vowels = document.getElementById('vowels');

    inputText.addEventListener('keyup', event => {
        let countedVowels = countVowels(inputText.value);
        // If there are no vowels, we show a `No vowels to show` message.
        if (!countedVowels.length) {
            vowels.innerHTML = 'No vowels to show';
        } else {
            // if there are vowels, we parse the array to string using
            //  the `join` method.
            vowels.innerHTML = countedVowels.join('-');
        }

        counter.innerHTML = `${countedVowels.length} vowels found`;
    });
});
