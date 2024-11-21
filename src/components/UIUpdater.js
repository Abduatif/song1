export class UIUpdater {
    startQuizUi() {
        const quizPage = document.querySelector('.quiz-page');
        const startPage = document.querySelector('.start-page');

        startPage.classList.remove('active');
        quizPage.classList.add('active');
    }


updateBirdList(categoryBird){
const birdList = document.querySelector('#birdList');

categoryBird.forEach((bird) => {
    const li = document.createElement('li');
    li.classList.add('bird-option');
    li.textContent = bird.name;
    li.dataset.brid = bird.name;

    birdList.appendChild(li)
   })
  }
}
