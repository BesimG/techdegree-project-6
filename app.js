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
        let ul = document.getElementsByTagName('ul')[0];
        ul.appendChild(li);
        if (arr[i] != ' ') {
            li.className = 'letter';
        } else {
            li.className = 'space';
        } 
    }
};

const myRandomPhrase = getRandomPhraseAsArray(phrases)
// addPhraseToDisplay(myRandomPhrase);
addPhraseToDisplay(myRandomPhrase.toLowerCase());

function checkLetter(btn){
    let lis = document.querySelectorAll('li');
    let match = null;
    for(let i = 0; i < lis.length; i ++)
    {
       if(btn == lis[i].textContent){
           lis.classList.add("show");
       } else {
           btn.textContent = match;
       }
    }
    return match;
};

qwerty.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
            e.target.classList.add("chosen");
            e.target.setAttribute("disabled" , " ");
    }
    const letterFound = checkLetter(e.target.textContent);
    if (letterFound == null) {
        ol.removeChild('li');
        missed +=1;
    }
});



