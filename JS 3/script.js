// №1 
let numb = 0;
   while (numb <= 100) {
       let check = true;
       for (let i = 2; i < numb; i++){
           if (numb%i === 0) {
               check = false;
               break;
           }
       }
       if (check) console.log(numb);
       numb++;
   } 

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

// console.log('Все в товары корзине стоят: ' + basketPrice + ' руб.'); - одно и тоже с №3

// №3

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log('Все в товары корзине стоят: ' + countBasketPrice(basket) +  ' руб.');
