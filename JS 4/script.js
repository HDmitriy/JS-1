// №1

let digit = {
  number: +prompt('Введите число от 0 до 999'),
  units: 0,
  tens: 0,
  hundreds: 0,
};
if (digit.number <= 9){
  digit.units = digit.number;
} else if (digit.number <= 999){
  digit.units = Math.floor(digit.number % 10);
  digit.tens = Math.floor(digit.number / 10 % 10);
  digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}
console.log(digit);

// №2 

let basket = [
    {
      product: 'Тетрадь',
      price: 100
    },
    {
      product: 'Ручка',
      price: 25
    },
    {
      product: 'Карандаш',
      price: 10
    },
    {
      product: 'Линейка',
      price: 50
    }
];
let basketPrice = 0;
    for (let prod of basket){
        basketPrice += prod.price;
        console.log(prod.product + ' стоит: ' + prod.price + ' руб.');
    }

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log('Все в товары корзине стоят: ' + countBasketPrice(basket) +  ' руб.');
