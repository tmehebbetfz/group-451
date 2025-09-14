// ### Управляющие конструкции
// - Условные операторы (if/else, switch)

// let age = 18;

// if (age > 18) {
// 	console.log("Adult");
// } else {
// 	console.log("Child");
// }


// let weekDay = 2;
// let rlt = '';

// if (weekDay == 1) {
// 	rlt = "Monday";
// }
// if (weekDay == 2) {
// 	rlt = "Tuesday";
// }
// if (weekDay == 3) {
// 	rlt = "-";
// }
// if (weekDay > 7 || weekDay < 0) {
// 	rlt = "DOnt know";
// }

// console.log(rlt);

// let weekDay = 1;

// switch(weekDay) {
// 	case 1:
// 		console.log("Monday");
// 		break;
// 	case 2:
// 		console.log("Tuesday");
// 		break;
// 	default:
// 		console.log("Dont know");
// }


// - Циклы (for, while, do...while)

// const fruits = ["apple", "mango", "banana"]

// for (let fruit of fruits) { // 3
// 	console.log(fruit);
// }

							//   0        1         2
// const fruits = ["apple", "mango", "banana"]

// for (let index in fruits) { // 3
// 	console.log(index + ": " + fruits[index]);
// }

// const fruits = ["apple", "mango", "banana"]

// for (let i = 0; i < 67; i++) {
// 	console.log(i + ": " + fruits[i]);
// }

// const fruits = ["apple", "mango", "banana"]

// let i = 0;

// while(i < 67) {
// 	console.log(i + ": " + fruits[i]);
// 	i++
// }

// do {
// 	console.log("Hello");
// } while(10 > 5)

// - Операторы break и continue

// const fruits = [1, 0, 1, 0, 1, 1, 1];

// for (let f of fruits) {
// 	if (f == 0) {
// 		continue
// 	}
// 	console.log("Apple");
// }

// - Тернарный оператор

let r = 5;

// if (r == 6) {
// 	console.log("Good");
// } else {
// 	console.log("Bad");
// }


// console.log(r == 6 ? "Good" : "Bad");