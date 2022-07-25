async function initQuiz() {
    const questionTitle = document.querySelector('#title');
    const alternatives = document.querySelectorAll('.js-input');
    const label = document.querySelectorAll('#js-label');
    const form = document.querySelector('.form');
    const json_data = await fetch('../scripts/question.json').then(res => res.json());
    let currAnswer = '';
    let progress = '0/10';

    questionTitle.innerHTML = await json_data.questions[0].title;
    label[0].innerHTML = json_data.questions[0].alternatives[0];
    label[1].innerHTML = json_data.questions[0].alternatives[1];
    label[2].innerHTML = json_data.questions[0].alternatives[2];

    form.addEventListener('submit', (x) => {
        x.preventDefault();
        questionTitle.innerHTML = '';

        for (var i = 0; i < alternatives.length; i++) {

            if(alternatives[i].checked) {
                currAnswer = label[i].innerHTML;
                console.log(currAnswer)
            }
        }

    });

}

initQuiz();
