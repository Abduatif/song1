export class UIUpdater {
    startQuizUi() {
        const quizPage = document.querySelector('.quiz-page');
        const startPage = document.querySelector('.start-page');

        startPage.classList.remove('active');
        quizPage.classList.add('active');
    }

    updateBirdList(categoryBird) {
        const birdList = document.querySelector('#birdList');

        birdList.innerHTML = '';

        categoryBird.forEach((bird) => {
            const li = document.createElement('li');
            li.classList.add('bird-option');
            li.textContent = bird.name;
            li.dataset.bird = bird.name;

            birdList.appendChild(li);
        })
    }

    updateScore(score) {
        const scoreElement = document.querySelector('#score');

        scoreElement.textContent = score;
    }

    showBirdDetail(bird) {
        const birdDetail = document.querySelector('.bird-details');

        birdDetail.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}" />
            <h2 class="bird-name">${bird.name}</h2>
            <p class="bird-species">${bird.species}</p>
            <div class="audio-player">
                <button class="play-button" data-audio="${bird.audio}" id="detailAudioButton" aria-label="Play">▶</button>
                <div class="progress-bar">
                    <div class="progress" id="mysteryProgress"></div>
                </div>
                <span class="time" id="mysteryTime">00:00 / 00:00</span>
            </div>
            <p class="bird-description">${bird.description}</p>
        `
    }

    showMysteryBird(bird) {
        const mysteryBirdName = document.querySelector('#mysteryBirdName');
        const mysteryBirdImage = document.querySelector('#mysteryBirdImage');
        const species = document.querySelector('#specis');

        mysteryBirdImage.src = bird.image;
        mysteryBirdName.textContent = bird.name;
        species.textContent = bird.species;
    }

    enableNextQuestion() {
        const nextButton = document.querySelector('#nextButton');

        nextButton.disabled = false;
    }

    activeList(currentCategory) {
        const questionList = document.querySelectorAll('#questionList li');

        questionList.forEach((element, i) => {
            element.classList.remove('active');

            if (i === currentCategory) {
                element.classList.add('active');
            }
        })
    }

    showResult(score) {
        alert(score + ': ball to`pladiz');
    }

    clear() {
        const birdDetail = document.querySelector('.bird-details');
        const mysteryBird = document.querySelector('.mystery-bird');

        mysteryBird.innerHTML = `
                 <img id="mysteryBirdImage" src="./assets/images/bird.jpg" alt="Mystery Bird" />
                    <div class="mystery-bottom">
                        <h2 id="mysteryBirdName">******</h2>
                        <p class="species">*****</p>
                        <div class="audio-player">
                            <button class="play-button" id="mysteryAudioButton" aria-label="Play">▶</button>
                            <div class="progress-bar">
                                <div class="progress" id="mysteryProgress"></div>
                            </div>
                            <span class="time" id="mysteryTime">00:00 / 00:00</span>
                        </div>
                        <input type="range" name="volume" id="volume"> 
                    </div>
        
        `
        birdDetail.innerHTML = `
            <p>Послушайте плеер.<br>Выберите птицу из списка.</p>
        `
    }
}