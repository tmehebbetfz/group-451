// ## 🔤 Функции
//! - Объявление функций (function declaration/expression)

// declaration

// greet();

// function greet() {
// 	console.log("Hello bro");
// }

// greet();

// expression

//! error greet();

// const greet = function() {
// 	console.log("Heelo bro");
// }

// const user = {
// 	name: "Alex",
// 	drive: () => {
// 		console.log(this.name);
// 	}
// }

// user.drive();

//* ok greet();

//! - Стрелочные функции

// (() => {
// 	console.log("object");
// })()

// const summ = (a, b) => {
// 	console.log(a + b);
// }

// summ(5, 10);

// const hello = (a, b) => {
// 	console.log(arguments);
// }

// hello(5, 10, 55, 67, 66, 55);

// const Person = (name, surname, age) => {
// 	this.name = name;
// 	this.age = age;
// 	this.surname = surname;
// }

// let p1 = new Person("Alex", "Faridov", 45);
// console.log(p1.name);

//! - Параметры и аргументы

function greet(a, b) {

}

greet(5, 10)
// - Возврат значений
// - Замыкания
// - Рекурсия
// - IIFE (Immediately Invoked Function Expressions)