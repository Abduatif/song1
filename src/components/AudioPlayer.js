export class AudioPlayer {
    constructor(button) {
        this.audio = new Audio(button.dataset.audio); // yangi
        this.button = button;
        this.init();
        this.sound(); //yangi
    }

    init() {
        this.button.addEventListener('click', (e) => {
            this.toggleAudio(e.target);
        })
    }

    toggleAudio(button) {
        if (this.audio && !this.audio.paused) {
            this.audio.pause();
            button.textContent = '▶';
        } else {
            this.playAudio(button);
        }
    }

    playAudio(button) {
        if (!this.audio) this.audio = new Audio(button.dataset.audio);
        const progressElement = button.nextElementSibling.querySelector('.progress');
        const timeElement = button.nextElementSibling.nextElementSibling;

        this.audio.addEventListener('timeupdate', () => {
            const progress = (this.audio.currentTime / this.audio.duration) * 100;
            timeElement.textContent = `${this.formatTime(this.audio.currentTime)}/${this.formatTime(this.audio.duration)}`
            progressElement.style.width = `${progress}%`;
        });

        this.audio.addEventListener('ended', () => {
            progressElement.style.width = `0%`;
            button.textContent = '▶';
        })

        this.audio.play();
        button.textContent = '❚❚';
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    sound() {
        const volumeInput = document.querySelector('#volume');

        volumeInput.addEventListener('input', (e) => {
            this.audio.volume = e.target.value / 100;

            
        })
    }




}