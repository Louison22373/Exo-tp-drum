const keys = document.querySelectorAll(".key");
const  audios = document.querySelectorAll("audio"); 

function playSound() {
    const appui = this.dataset.key;
    this.classList.add('playing')
    setTimeout(() => this.classList.remove('playing'), 150)
   
    //Selection et début de l'audio
    audios.forEach((audio) => {
        if(audio.dataset.key == appui){
            audio.currentTime = 0;
            audio.play();
           
            
        }
    })
    return;
}

keys.forEach((key) => {
    key.addEventListener('click', playSound);
})

document.addEventListener('keypress', (k) => {
    keys.forEach((key) => {
        const kbd = key.querySelector('kbd');
        if(k.key.toUpperCase() === kbd.textContent.toUpperCase()){
            playSound.call(key);
        }
    })
})