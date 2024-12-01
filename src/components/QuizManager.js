import { birdsData } from "../../assets/db/data.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { UIUpdater } from "./UIUpdater.js";

export class QuizManager {
    constructor() {
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
        const audioButton = document.querySelector('.play-button');
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird[randomNumber];

        audioButton.dataset.audio = this.currentBird.audio;

        this.uiUpdater.updateBirdList(categoryBird);
    }

    handleBirdSelection(element) {
        if (this.givenCorrectAnswer) return; 
  const choosen = birdsData[this.currentCategory].filter((bird)  => bird.name === element.dataset.bird) 
  this.uiUpdater.showBirdDetail(choosen[0]) 

  const detailAudioButton = document.querySelector('#de')


        if (element.dataset.bird === this.currentBird.name) {
            this.score = this.score + 5 - this.attemps
            this.uiUpdater.updateScore(this.score)
            this.givenCorrectAnswer = true; 
            element.classList.add('correct');
            this.correctSounds()
            this.uiUpdater.showMystery(this.currentBird);
            this.uiUpdater.enableNextQuestion();
            this.currentBird++;
        } else {
            this.attemps++
            element.classList.add('incorrect');
            this.incorrectSounds();
        }

    

      
    }

    correctSounds() {
        const correctSounds = new Audio('./assets/sounds/rightanswer-95219.mp3');
        correctSounds.play();
    }
    
    incorrectSounds() {
        const incorrectSounds = new Audio('./assets/sounds/wrong-answer-21-199825.mp3');
        incorrectSounds.play();
    }
}


