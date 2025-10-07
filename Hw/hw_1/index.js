// 🛑 Домашнее задание
//! ### 1. Условные операторы (if/else, switch, тернарный оператор)

//? 1. Напиши программу, которая спрашивает возраст пользователя и выводит:

//     `"Младше 18"` — если возраст меньше 18,
//     `"Совершеннолетний"` — если 18 или больше.

//* ---

// const age = 18;

// if (age < 18) {
// 	console.log("Младше 18");
// } else {
// 	console.log("Совершеннолетний");
// }

//* ---

//? 2. По номеру месяца (1–12) с помощью `switch` выведи название месяца. Если 	число не подходит, выведи `"Такого месяца нет"`.

//* ---

// const monthNumber = 3;

// switch(monthNumber) {
// 	case 1:
// 		console.log("January");
// 		break;
// 	case 2:
// 		console.log("February");
// 		break;
// 	default:
// 		console.log("Такого месяца нет");
// }

//* ---

//? 3. Перепиши задание №1, используя тернарный оператор вместо `if/else`.

//* ---


// const age = 18;

// if (age < 18) {
// 	console.log("Младше 18");
// } else {
// 	console.log("Совершеннолетний");
// }

console.log(age < 18 ? "Младше 18" : "Совершеннолетний");


//* ---

//! ### 2. Циклы (for, while, do...while)

//? 1. Выведи в консоль числа от 1 до 20:

//     сначала через `for`,
//     потом через `while`,
//     потом через `do...while`.

//* ---


// for (let i = 1; i <= 20; i++) {
// 	console.log(i);
// }

// let count = 1;

// do {
// 	console.log(count);
// 	count++;
// } while(count <= 20)


// while(count <= 20) {
// 	console.log(count);
// 	count++;
// }

//* ---


//? 2. Создай массив из 5 любых фруктов. Выведи их:

//     с помощью `for`,
//     с помощью `for...in`,
//     с помощью `for...of`.

//* ---

// const fruits = ["apple", "mango", "banana", "orange", "kiwi"];

// for (let f of fruits) {
// 	console.log(f);
// }

// for (let i in fruits) {
// 	console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
// 	console.log(fruits[i]);
// }

//* ---


//? 3. Напиши цикл от 1 до 50. Но:

//     если число делится на 3 → напечатай `"Fizz"`,
//     если делится на 5 → `"Buzz"`,
//     если делится и на 3 и на 5 → `"FizzBuzz"`,
//     иначе напечатай само число.

//* ---

// for (let i = 0; i < 50; i++) {
// 	if (i % 3 == 0) {
// 		console.log("Fizz");
// 	}else if (i % 5 == 0) {
// 		console.log("Buzz");
// 	}else if (i % 5 == 0 && i % 3 == 0) {
// 		console.log("FizzBuzz");
// 	} else {
// 		console.log(i);
// 	}
// }

//* ---

//! ### 3. Break и continue

//? 1. Есть массив:

//    ```js
//    const nums = [2, 7, 0, 4, 5, 0, 9];
//    ```

//     Пропускай числа, равные 0 (используй `continue`), остальные выведи.
//     Останови цикл (`break`), если встретишь число `5`.

//* ---

// const nums = [2, 7, 0, 4, 5, 0, 9];

// for (let n of nums) {

// 	if (n === 5) {
// 		break;
// 	}

// 	if (n === 0) {
// 		continue;
// 	}

// 	console.log(n);
// }


//* ---


//! ### 4. ⭐ Дополнительное (на подумать)

//? 1. Пользователь вводит число. Если оно чётное → вывести `"Even"`, если нечётное → `"Odd"`.

//* ---

// const userNum = 5;

// if (userNum % 2 == 0) {
// 	console.log("Even");
// } else {
// 	console.log("Odd");
// }

//* ---


//? 2. Создай массив с 10 случайными числами от 1 до 100. Выведи только те, которые больше 50.

//* ---


// const nums = [3, 22, 56, 43, 67, 7, 89, 55, 63, 1];

// for (let n of nums) {
// 	if (n > 50) {
// 		console.log(n);
// 	}
// }


//* ---


//? 3. Посчитай количество нулей в массиве:

//    ```js
//    const data = [1, 0, 2, 0, 3, 0, 4, 5];
//    ```

//* ---

// const data = [1, 0, 2, 0, 3, 0, 4, 5];

// let zeroCount = 0;

// for (let n of data) {
// 	if (n == 0) {
// 		zeroCount++;
// 	}
// }

// console.log(zeroCount);


//* ---