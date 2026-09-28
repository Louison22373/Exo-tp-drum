const keys = document.querySelectorAll(".key");
const  audios = document.querySelectorAll("audio"); 

function playSound() {
    const appui = this.dataset.key;
    const span = this.querySelector('span');
    span.classList.add('playing');

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
