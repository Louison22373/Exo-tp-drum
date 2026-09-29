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

function beatbox(){
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

    async function beat() {
        await playBeat(87,400)
        await playBeat(65,400)
        await playBeat(90,500)
        await playBeat(81,500)

    }
    
    return beat();
}

document.getElementById('beatBtn').addEventListener('click', beatbox)