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
        });
    }

    updateScore(score) {
        const scoreElement = document.querySelector('#score');
        scoreElement.textContent = score;
    }

    addBirdSelectionEvent(categoryBird) {
        const birdOptions = document.querySelectorAll('.bird-option');
        birdOptions.forEach((option) => {
            option.addEventListener('click', (e) => {
                if (this.isAnswered) return;

                const selectedBirdName = e.target.dataset.bird;
                const selectedBird = categoryBird.find((bird) => bird.name === selectedBirdName);

                if (selectedBird) {
                    this.showBirdDetail(selectedBird);
                }
            });
        });
    }

    showBirdDetail(selectedBird) {
        const birdDetails = document.querySelector('.bird-details');
        const mysteryBirdImage = document.getElementById('mysteryBirdImage');
        const mysteryAudioButton = document.getElementById('mysteryAudioButton');
        const mysteryProgress = document.getElementById('mysteryProgress');
        const mysteryTime = document.getElementById('mysteryTime');

        birdDetails.innerHTML = `
                  <img src="${selectedBird.image}" alt="${selectedBird.name}" />
                        <h2 class="bird-name">${selectedBird.name}</h2>
                        <p class="bird-species">${selectedBird.species}</p>
                        <div class="audio-player">
                            <button class="play-btn" data-audio="${selectedBird.audio}" id="mysteryAudioButton" aria-label="Play">▶️</button>
                            <div class="progress-bar">
                                <div class="progress" id="mysteryProgress"></div>
                            </div>
                            <span class="time" id="mysteryTime">00:00 / 00:00</span>
                        </div>
                        <p class="bird-description">${selectedBird.description}</p>
                  `

                mysteryBirdImage.src = selectedBird.image;
                 mysteryAudioButton.dataset.audio = selectedBird.audio;
                 mysteryAudioButton.addEventListener('click', () => { 
                    this.audioPlayer.toggleAudio( mysteryAudioButton,
                     mysteryProgress,
                      mysteryTime);});
                     } } 
  
