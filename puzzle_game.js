let games = ['У него четыре ножки, Он не ходит по дорожке,\nОн не прыгает, не скачет, Не смеётся и не плачет.',
    'У него огромный рот,\nОн зовется...',
    'Ёжик вырос в десять раз,\nПолучился...'];
let answers = [
    ['стул', 'табуретка', 'стульчик'],
    ['бегемот', 'бегемотик', 'бегемотек'],
    ['дикобраз', 'дикобразик', 'дикобразек']
];

let rightAnswerCount = 0;

for (let i = 0; i < games.length; i++) {
    let userAnswer = prompt(games[i]);

    if (userAnswer) {
        if (answers[i].includes(userAnswer.toLowerCase())) {
            rightAnswerCount++;
            alert('Шокец, ты угадал!');
        } else {
            alert('Увы, но нет!');
        }
    } else{
        break;
    }
}

alert(`Игра окончена!\nКоличество правильных ответов: ${rightAnswerCount}`);
