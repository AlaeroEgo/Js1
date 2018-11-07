//Задание 3 
function evaluation(var_1, var_2) {
	if ((var_1 >= 0) && (var_2 >= 0)) {
		alert(var_1 - var_2);
	}
	else if ((var_1 < 0) && (var_2 < 0)) {
		alert(var_1 * var_2);
	}
	else if ((var_1 >= 0) && (var_2 < 0) || (var_1 < 0) && (var_2 >= 0)) {
		alert(var_1 + var_2);
	}
}
//
//Задание 2
//Результат = 5



//Задание 4
//let a = +prompt('enter num from 0 to 15');
switch (true) {
case a > 15:
	alert('try less');
	break;
case a < 0:
	alert('try bigger');
	break;
case a == 15:
	alert(a);
	break;
	default: do {
	alert(a);
	++a;
}
while (a <= 15);
}

//Задание 5
function sum(a, b) {
	return (a + b);
}

function sub(a, b) {
	return (a - b);
}

function mult(a, b) {
	return (a * b);
}

function div(a, b) {
	return (a / b);
}

//Задание 6
function mathOperation(a, b, operation) {
	switch (operation) {
	case '+':
		alert(sum(a, b));
		break;
	case '-':
		alert(sub(a, b));
		break;
		case '*':
			alert(mult(a,b));
			break;
		case '/': 
			alert(div(a,b));
			break;
		default:
			alert('Такая операции не предусмотрена')
			}
}
