export class EventHanderler {
    constructor(quizManager) {
        this.quizManager = quizManager;
    }

    init() {
        const startQuiz = document.querySelector('.start-button')
        const playButton = document.querySelector('.play-button')

        startQuiz.addEventListener('click', () =>{
            this.quizManager.startQuiz();
        })

        playButton.addEventListener('click', (e) => {
        this.quizManager.audioPlayer.toggleAudio(e.target)
        })
    }
}