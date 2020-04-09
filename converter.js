let eur = 82.53;
let usd = 76.46;

let rub = prompt('Сколько рублей необходимо перевести?');
alert(`${rub} RUB это ${(rub / usd).toFixed(2)} USD
     \n${rub} RUB это ${(rub / eur).toFixed(2)} EUR`);
