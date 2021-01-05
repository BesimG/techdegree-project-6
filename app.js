const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const btn_reset = document.querySelector('.btn__reset');
const button = document.getElementsByTagName('button');

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

function addPhraseToDisplay(arr){
    for(let i = 0; i < arr.length; i ++){
        let li = document.createElement('li');
        li.textContent = arr[i];
        let ul = document.getElementsByTagName('ul');
        ul.appendChild(li);
        if () {
            li.className = 'letter';
        } else {
            li.className = 'space';
        } 
    }

};

function checkLetter(button) {
const lis = document.getElementsByTagName('li');

    let match = null;
    for(let i = 0; i < lis.length; i ++){
        if(li.textcontent == button){
            li.classList.add('show');
            match = button.textcontent;
            return match;
        };
    };
};

