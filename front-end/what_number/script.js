let answer = Math.floor(Math.random() * 100);
console.log(answer);

function start() {
    let infoElement = document.getElementById('info');

    let userAnswer = document.getElementById("userAnswer").value;

    if (userAnswer) {
        userAnswer = +userAnswer;
        if (userAnswer === answer) {
            infoElement.innerText = 'Вы победили!\nИгра окончена!'
        } else if (userAnswer > answer) {
            infoElement.innerText = 'Число слишком большое. Вы не угадали :('
        } else if (userAnswer < answer) {
            infoElement.innerText = 'Число слишком маленькое. Вы не угадали :('
        }
        isFirstPlayer = !isFirstPlayer;
    }
}
