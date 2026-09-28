const keys = document.querySelectorAll(".key");
const  audios = document.querySelectorAll("audio"); 

function playSound() {
    let appui = this.dataset.key;
    audios.forEach((audio) => {
        if(audio.dataset.key == appui){
            audio.play()
        }
    })
}
