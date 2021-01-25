'use strict';

const vowelsLetters = 'aeiouAEIOU';
function countVowels(text) {
    let vowels = [];
    for (let char of text) {
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
        vowels.innerHTML = countedVowels.join('');
        counter.innerHTML = `${countedVowels.length} vowels found`;
    });
});