alert('Вас приветствует программа по обучению слепой печати');

let level = +prompt('Выберите уровень (1, 2 или 3)');

startLevel(level);

function startLevel(level) {
    switch (level) {
        case 1:
            alert(`Положите 4 пальца левой руки - мезинец, безымянный, средний и указательный на клавиши ф, ы, в, а.\n
                   Запомните, что буква А находится подвашим указательным пальцем, а Ф под мизинцем.\n
                   Теперь неспеша набирайте текст. Постарайтесь не смотреть на клавиатуру.`);
            initiateLevel(['ф', 'а']);
            break;
        case 2:
            alert(`Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А.\n
                   Мизинец правой руки на букву Ж, безымянный палец — на Д, средний — на Л, указательный — на О. Запомните расположение пальцев.`);
            initiateLevel(['ы', 'в']);
            break;
        case 3:
            alert(`Поставьте мизинец левой руки на букву Ф, безымянный палец — на Ы, средний — на В, указательный — на А.\n
                   Мизинец правой руки на букву Ж, безымянный палец — на Д, средний -— на Л, указательный — на О. Запомните расположение пальцев.`);
            initiateLevel(['о', 'ж']);
            break;
    }
}

function initiateLevel(letters) {
    while (true) {
        let text = generateText(letters, 10);

        let userText = prompt(text);

        if (userText === text) {
            alert('Верно!');
            break;
        } else alert('Вы ошиблись!')
    }
}

function generateText(letters, length) {
    let text = '';

    for (let i = 0; i < length; i++) {
        let charIndex = getRandomNumber(letters.length - 1);
        text += letters[charIndex];
    }
    return text;
}

function getRandomNumber(max) {
    return Math.round(Math.random() * max)
}
