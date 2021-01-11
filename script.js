// №1
let a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  ++ перед переменной добавляет единицу и возвращает новое значение
d = b++; alert(d);           // 1  ++ после переменной добавляет единицу и возвращает старое значение (до увеличения числа).
c = (2+ ++a); alert(c);      // 5  2+3=5
d = (2+ b++); alert(d);      // 4  2+2=4
alert(a);                    // 3  1+1+1=3 
alert(b);                    // 3  1+1+1=3 


// №2
let f = 2;
let x = 1 + (f *= 2); // x = 5, т.к *= умножение, в котором получившееся число сразу же присваивается
alert(x);

// №3
let g = 8;
let h = 2;
if (g >= 0 && h >= 0){
	z = g - h;
	alert(z);
} else if (g < 0 && h < 0){
	z = g * h;
	alert (z);

} else if (g > 0 && h < 0 || g < 0 && h > 0){
	z = g + h;
	alert (z);
}

// №4
let v = +prompt ('Введите число от 1 до 15');
	switch (v) {
	case 1:
		alert ( 'Ваше число 1');
		break;
	case 2:
		alert ( 'Ваше число 2');
		break;
	case 3:
		alert ( 'Ваше число 3');
		break;
	case 4:
		alert ( 'Ваше число 4');
		break;
	case 5:
		alert ( 'Ваше число 5');
		break;
	case 6:
		alert ( 'Ваше число 6');
		break;
	case 7:
		alert ( 'Ваше число 7');
		break;
	case 8:
		alert ( 'Ваше число 8');
		break;
	case 9:
		alert ( 'Ваше число 9');
		break;
	case 10:
		alert ( 'Ваше число 10');
		break;
	case 11:
		alert ( 'Ваше число 11');
		break;
	case 12:
		alert ( 'Ваше число 12');
		break;
	case 13:
		alert ( 'Ваше число 13');
		break;
	case 14:
		alert ( 'Ваше число 14');
		break;
	case 15:
		alert ( 'Ваше число 15');
		break;	
	}	

// №5
let k = 6;
let j = 4;
		
	function plus(k, j) {
    	return k + j;
	}

	function minus(k, j) {
    	return k - j;
	}

	function div (k, j) {
    	return k / j;
	}

	function mult (k, j) {
    	return k * j;
	}

// №6
function mathOperation(arg1, arg2, operation){
    switch(operation){
       	case 'сложение':
        	return arg1 + arg2;
           	break;
       	case 'вычитание':
           	return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
           	 return arg1 * arg2;
             break;
   	}
}
