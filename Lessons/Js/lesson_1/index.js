// ### Базовые концепции
// - Переменные (var, let, const)

function showMessage() {
    let a = 5;

    if (5 > 1) {
        let a = 6;
        console.log(a); // 6
    }

    console.log(a); // 5
}

showMessage();


let b = 10;
b = 20;

const n = 10;
n = 80;

// - Типы данных (примитивы и объекты)

// number, string, boolean, undefined, bigint, symbol, null

// array, object, function

console.log([]); // []
console.log(typeof ""); // string

// - Операторы (арифметические, сравнения, логические)

// +, -, /, *, %, ++, --, **

console.log(10 / 3); // 3.33
console.log(10 % 3); // 1

let x = 10;
x--; // -1
console.log(x); // 9

console.log(2**100); // 2 * 2 ... * 2

// ==, ===, !=, !==, >, >=, <=, <

console.log(100 == 100); // true
console.log(100 == "100"); // true 

console.log(100 === "100"); // false

console.log(true); // true
console.log(!true); // false <- не true

console.log(100 != 50); // true
console.log(100 !== "100"); // true

// &&, ||, !

// && - и, он дружит с false
// || - или, он дружит с true

           // true     false      true
console.log(10 > 5 && (2 < 0 || 50 == 50)); // true


// - Преобразование типов


let y = 5; // '5'

console.log(`${y}`); // '5'
console.log(String(y)); // '5'
console.log(y+''); // '5'

let t = '55.66'; // 5

console.log(parseInt(t)); // 5
console.log(parseFloat(t)); // 5.0
console.log(Number(t)); // 5
console.log(+t); // 5

let r = 100;

console.log(Boolean(r)); // true

// - Комментарии

// CTRL + /

function huckPentagonAndDtx() {
    // code
}

//! Важно доработать, Не трогать
//* Эта функция для работы
//? Я не понял как это работает? Есть вопрос
// TODO: Доработать функционал