// ## 🔤 Функции
//! - Объявление функций (function declaration/expression)

// const show = function() {
// 	console.log("Hello world!");
// }

// show();

// - Стрелочные функции

// () => {}

;(() => {
	console.log('Hola')
})()

const show = () => {
	console.log('Bro')
}

show()

// - Параметры и аргументы

function math(a = 1, b = 1, action) {
	if (action == 'plus') {
		console.log(a + b)
	}

	if (action == 'minus') {
		console.log(a - b)
	}

	if (action == 'product') {
		console.log(a * b)
	}
}

math(5, 10, 'plus')
math()
math(5, 10, 'product')

// - Возврат значений

function plus(a, b) {
	if (a > 5) {
		return a + b
	} else {
		return
	}
}

console.log(plus(6, 10))

//? objects
//  0         1        2
const array = ['apple', 'banana', 'kiwi']

const user1 = {
	name: 'Alex',
	surname: 'Brown',
	age: 24,
	isMarried: true,
	isHungry: true,
	cars: ['BMW', 'Audi'],
	children: ['John', 'Lara'],
	country: 'USA',
	address: 'Los angles, street 21 appartment 23',
	balance: {
		amount: 400,
		currency: '$',
	},
}

user1.name = "Jonatan";
user1.isHungry = false;
user1.cars.pop();
user1.cars.push("Mersedes");
user1.balance.amount -= 100;
user1.balance.amount += 10000;
delete user1.balance.currency;
delete user1.name;


console.log(user1);


//? arrays


const fruits = ["appple", "banana"];
const numbers = [12, 32, 234];
const activities  = [true, false, true];

// push, pop, shift, unshift, join, slice, reverse, includes, indexof

//! push

// const names = [];

// names.push("Maxim");
// names.push("Alex");

// console.log(names);

//! pop

// const names = ["Maxim", "Alex"];

// names.pop();

// console.log(names);

//! shift

// const names = ["Maxim", "Alex"];

// names.shift();

// console.log(names);

//! unshift

// const names = ["Maxim", "Alex"];

// names.unshift("Bro");

// console.log(names);

//! join

// const names = ["Maxim", "Alex", "Murad"];

// const result =  names.join("");

// console.log(result);

//! slice

// const names = ["Maxim", "Alex", "Murad"];

// const namesClone = names.slice(1);

// names.push("Raul")

// console.log(names);
// console.log(namesClone);

//! reverse

// const names = ["Maxim", "Alex", "Murad"];

// console.log(names.reverse());

//! includes

// const names = ["Maxim", "Alex", "Murad"];

// console.log(names.includes("Jane"));

//! indexof

// const names = ["Maxim", "Alex", "Murad"];

// console.log(names.indexOf("Jane"));


//TODO map, filter, reduce, find, some, every