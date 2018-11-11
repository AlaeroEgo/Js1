// let i = 0;
// let j = 100;
// while (i < j) {
//     i++;
//     if (i % 2 != 0) {
//         console.log(i);
//     } else continue;

// }


// С 1 заданием я не справился, т.к. не в представленном выше блоке выводятся нечетные, а не простые числа. 
// Проблемы возникли с циклами for, представленными ниже. По неизвестной мне причине в консоль выводятся 
// числа от 3 до 100, без проверки условия в if. Объясните, пожалуйста, почему так.
/*while (true) {
    for (let i = 0; i < 100; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j != 0) {
                console.log(i);
            }
            else continue;
        }
    }
    break;
}*/

// let num = 0
// do {

//     if (num == 0) {
//         console.log(num + ' Это ноль');
//         num++;
//     } else if (num % 2 != 0) {
//         console.log(num + ' Это нечетное число');
//         num++;
//     } else {
//         console.log(num + ' Это четное число');
//         num++;
//     }
    

// } while (num < 11);

// for(let i = 0; i<10;i++)
// console.log(i);


// let line = 'x';
// while(true) {
// 	for (let i = 0; i<21; i++) {
// 		console.log(line);
// 		line=line+'x';

// 	}
// 	break;
// }