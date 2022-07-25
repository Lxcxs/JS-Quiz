async function initQuiz() {
    const jsonData = await fetch('../scripts/question.json').then(res => res.json());
    const label = document.querySelectorAll('#js-label');
    const title = document.getElementById('title');
    const box = document.querySelectorAll('.js-box');
    const quizLength = jsonData.questions;
    const startBtn = document.getElementById('submit');
    const restart = document.getElementById('restart');
    const welcome = document.querySelector('.welcome');
    const quiz = document.querySelector('.quiz');
    const finish = document.querySelector('.finish');
    const note = document.querySelector('#note');
    const questionBox = document.querySelector('.question-box');
    let cont;
    let progress;

    welcome.classList.add('activeQuiz');
    startBtn.addEventListener('click', start);
    restart.addEventListener('click', () => {
        window.location.reload();
    });

    function start() {
        cont = 0;
        progress = 0
        
        let rightAlternative = quizLength[cont].rightAlternative;

        welcome.classList.remove('activeQuiz');
        finish.classList.remove('activeQuiz');
        quiz.classList.add('activeQuiz');
        questionBox.classList.add('activeQuiz');

        function changeQuestion() {
            box[cont].classList.add('active');
            title.innerHTML = quizLength[cont].title;
            for (i = 0; i < label.length; i++) {
                label[i].innerHTML = quizLength[cont].alternatives[i];
            }
        }
        changeQuestion();
    
        label.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.innerHTML === rightAlternative) {
                    progress ++
                }
                cont++
                console.log(cont, progress)
                if (cont < quizLength.length) {
                    changeQuestion();
                    rightAlternative = quizLength[cont].rightAlternative;
                } else {
                    quiz.classList.remove('activeQuiz');
                    finish.classList.add('activeQuiz');
                    note.innerHTML = `${progress}/10!`;
                }
            })
        });
    }
}
initQuiz();
