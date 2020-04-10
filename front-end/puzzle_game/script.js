function start() {
    let answers = [
        ['стул', 'табуретка', 'стульчик'],
        ['бегемот', 'бегемотик', 'бегемотек'],
        ['дикобраз', 'дикобразик', 'дикобразек']
    ];

    let rightAnswerCount = 0;

    for (let i = 0; i < 3; i++) {
        let userAnswer = document.getElementById(`userAnswer${i + 1}`)

        if (userAnswer) {
            if (answers[i].includes(userAnswer.value.toLowerCase())) {
                rightAnswerCount++;
            }
        }
    }

    alert(`Количество правильных ответов: ${rightAnswerCount}`);
}
