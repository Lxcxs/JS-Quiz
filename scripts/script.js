async function initQuiz() {
    const question = document.querySelector('#title');
    const alternative = document.querySelectorAll('.js-input');
    const button = document.querySelector('#submit');
    const json_data = await fetch('../scripts/question.json').then(res => res.json());
    let cont = 1

    function getQuizValues() {
        
    }

    button.addEventListener('click', getQuizValues)

    console.log(json_data)

}

initQuiz();
