function playSound(keyCode) {
    let audio = document.querySelector('audio[data-key="' + keyCode + '"]')
    audio.play()
    let key = document.querySelector('div[data-key="' + keyCode + '"]')
    key.classList.add("playing")
}

window.addEventListener("keydown", (e) => {
    playSound(e.keyCode)
})

let keys = document.querySelectorAll(".key")

for (const key of keys) {
    key.addEventListener("transitionend", (e) => {
        key.classList.remove("playing")
    })
}

const simulateKey = (keyCode) => {
    const event = new KeyboardEvent('keydown', {
        keyCode,
        bubbles: true,
    });
    document.dispatchEvent(event);
}

const playBeat = (keyCode, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            simulateKey(keyCode);
            resolve();
        }, delay)
    })
}

function beatbox() {


    async function beat() {
        await playBeat(87, 400)
        await playBeat(65, 400)
        await playBeat(90, 500)
        await playBeat(81, 500)
        await playBeat(83, 600)
        await playBeat(68, 400)
        await playBeat(87, 500)
        await playBeat(88, 700)
        await playBeat(67, 500)
        await playBeat(81, 600)
        await playBeat(90, 700)
        await playBeat(87, 500)
    }

    return beat();
}

document.getElementById('beatBtn').addEventListener('click', beatbox);

const recordBtn = document.getElementById('recordBtn');
const playRecord = document.getElementById('playRecord');

let tableau = [];
let timer = 0;
let isRecording = false;

function onKeyDown(a) {
    tableau.push({
        code: a.keyCode,
        time: Date.now() - timer
    });
    timer = Date.now();
    console.log(tableau);
}

recordBtn.addEventListener('click', () => {
    isRecording = !isRecording;
    recordBtn.textContent = isRecording ? "Stop recording" : "Start recording";

    if (isRecording) {
        tableau = [];
        timer = Date.now();
        window.addEventListener('keydown', onKeyDown);
    } else {
        window.removeEventListener('keydown', onKeyDown);
    }
});

playRecord.addEventListener('click', () => {

    async function box(){
        for (const val of tableau) {
            await playBeat(val.code, val.time);
        }
    }
    return box();
});
