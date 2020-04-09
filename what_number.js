let answer = Math.floor(Math.random() * 100);
alert(answer);

let isFirstPlayer = true;

for (; ;) {
    let userAnswer = prompt(`${isFirstPlayer ? 'Первый' : 'Второй'} игрок угадывает число от 0 до 100`);

    if (userAnswer) {
        userAnswer = +userAnswer;
        if (userAnswer === answer) {
            alert(`${isFirstPlayer ? 'Первый' : 'Второй'} игрок победил!\nИгра окончена!`);
            break
        } else if (userAnswer > answer) {
            alert('Вы ввели слишком большое число.');
        } else if (userAnswer < answer) {
            alert('Вы ввели слишком маленькое число.');
        }
        isFirstPlayer = !isFirstPlayer;
    } else {
        alert('Игра окончена!');
        break;
    }
}
