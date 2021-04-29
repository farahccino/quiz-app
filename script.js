const buttons = document.querySelectorAll('.card__button');
const answerTexts = document.querySelectorAll('.card__answer'); 


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
   answerTexts[index].classList.toggle('hidden')
 })
}) 


/*
function toggleAnswer(button) {
  button.addEventListener('click', () => {
    const answer = quizCard.querySelector(.'card__answer')
  }
}
*/

/*
buttons.addEventListener('click', () => {
    answerTexts.classList.toggle('hidden');
  }) */