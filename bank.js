let money = prompt('Введите сумму вклада');
let percent = 1 + prompt('Введите процент по вкладу') / 100;

for (let i = 1; i <= 5; i++) {
    money *= percent;
    alert(`В ${i} год у вас будет ${money.toFixed(2)} рублей`);
}
