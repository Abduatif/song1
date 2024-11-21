export class AudioPlayer {
    constructor() {
        this.audio = null;
    }

    toggleAudio(button) {
        console.log(button);
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            button.textContent = '▶️';
        } else {
            this.playAudio(button);
        }
    }

    playAudio(button) {
        if (!this.audio) this.audio = new Audio(button.dataset.audio);

        this.audio.play();
        button.textContent = '❚❚';
    }
}
