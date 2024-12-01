export class EventHandler {
    constructor(quizManager) {
        this.quizManager = quizManager;
    }

    init() {
        const startQuiz = document.querySelector('.start-button');
        // const playButton = document.querySelector('.play-button');
        const birdList = document.querySelector('.bird-list');
        const nextButton = document.querySelector('#nextButton');

        birdList.addEventListener('click', (e) => {
            if(e.target.classList.contains('bird-option')) {
                this.quizManager.handleBirdSelection(e.target);
            }
        })

        startQuiz.addEventListener('click', () => {
            this.quizManager.startQuiz();
        })
        nextButton.addEventListener('click', () => {
            this.quizManager.uiUpdater.clear();
            this.quizManager.initQuestion();
            nextButton.disabled = true;
        })

        // playButton.addEventListener('click', (e) => {
        //     this.quizManager.audioPlayer.toggleAudio(e.target);
        // })

    }
}
