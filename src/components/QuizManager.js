import { birdsData } from "../../assets/db/data.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { UIUpdater } from "./UIUpdater.js";

export class QuizManager {
    constructor() {
        // this.audioPlayer = new AudioPlayer();
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
        this.givenCorrectAnswer = false;
        this.score = 0;
        this.attemps = 0;
    }

    startQuiz() {
        this.initQuestion();
        this.uiUpdater.startQuizUi();
    }

    initQuestion() {
        this.attemps = 0;
        this.givenCorrectAnswer = false;

        const audioButton = document.querySelector('.play-button');
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber];

        audioButton.dataset.audio = this.currentBird.audio;

        new AudioPlayer(audioButton); // yangi

        this.uiUpdater.updateBirdList(categoryBird);
        this.uiUpdater.activeList(this.currentCategory);
    }

    handleBirdSelection(element) {
        if(this.givenCorrectAnswer) return;
        const choosen = birdsData[this.currentCategory].filter((bird) => bird.name ===  element.dataset.bird);
        
        this.uiUpdater.showBirdDetail(choosen[0]);

        const detailAudioButton = document.querySelector('#detailAudioButton'); // yangi

        new AudioPlayer(detailAudioButton); // yangi

        if(element.dataset.bird === this.currentBird.name) {
            this.score = this.score + 5 - this.attemps;
            this.uiUpdater.updateScore(this.score);
            this.givenCorrectAnswer = true;
            element.classList.add('correct');
            this.correctSoundFn();
            this.uiUpdater.showMysteryBird(this.currentBird);
            this.uiUpdater.enableNextQuestion();
            this.currentCategory++;
            if(this.currentCategory > 5) {
                this.uiUpdater.showResult(this.score);
            }
        } else {
            this.attemps++;
            element.classList.add('incorrect');
            this.incorrectSoundFn();
        }
    }

    correctSoundFn() {
        const correctSound = new Audio('../../assets/sounds/rightanswer-95219.mp3');
        correctSound.play();
    }

    incorrectSoundFn() {
        const incorrectSound = new Audio('../../assets/sounds/wrong-answer-21-199825.mp3');
        incorrectSound.play();
    }
}