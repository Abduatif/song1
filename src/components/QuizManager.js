import { birdsData } from "../../assets/db/data.js";
import { AudioPlayer } from "./AudioPlayer.js";
import { UIUpdater } from "./UIUpdater.js";

export class QuizManager {
    constructor() {
        this.audioPlayer = new AudioPlayer();
        this.uiUpdater = new UIUpdater();
        this.currentCategory = 0;
        this.currentBird = null;
        this.givenCorrectAnswer = false;
        this.score = 0; 
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
        if (this.givenCorrectAnswer) return; // Agar to'g'ri javob berilgan bo'lsa, hech narsa qilmaydi.
    
        // Tanlangan javobni tekshirish
        if (element.dataset.bird === this.currentBird.name) {
            this.givenCorrectAnswer = true; // Javob to'g'ri ekanligini belgilash
            element.classList.add('correct');
            this.score += 5; // To'g'ri javob uchun 5 ball qo'shish
        } else {
            element.classList.add('incorrect');
            this.score -= 1; // Noto'g'ri javob uchun 1 ball ayirish
        }
    
        // Ballar UI-ni yangilash
        document.getElementById('score').textContent = this.score;
        console.log( this.score); // Konsolga chiqazish
    }
    
}