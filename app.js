const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;
const btn_reset = document.querySelectorAll('.btn_reset');

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