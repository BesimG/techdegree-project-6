const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const btn_reset = document.querySelector('.btn__reset');

const phrases = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter"
];

btn_reset.addEventListener("click", () => {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr){
    // generates a random number
    const RandomArr = Math.floor( Math.random() * phrases.length);
    return arr[RandomArr];
};

// console.log(phrases[getRandomPhraseAsArray]);
console.log(getRandomPhraseAsArray(phrases));
// getRandomPhraseAsArray(phrases[RandomArrlength]);

function checkLetter(clicked) {
const lis = document.getElementsByTagName('li');

if (clicked == li) {
   for(let i = 0; i < lis.length; i ++)
   let lis[i] = li;
   (null);
};

};