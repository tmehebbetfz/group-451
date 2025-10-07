//! ### Управляющие конструкции
//! - Условные операторы (if/else, switch)

// let age = 17;

// if (age >= 18) {
// 	console.log("Adult");
// } else {
// 	console.log("Child");
// }

// let weekDay = 3;
// let rlt = ""; 

// if (weekDay == 1) {
// 	rlt = "Понедельник";
// } 
// else if (weekDay == 2) {
// 	rlt = "Вторник";
// }
// else if (weekDay == 3) {
// 	rlt = "Среда";
// }
// else {
// 	rlt = "Не знаю";
// }

// console.log(rlt);

// > < >= <=

// let weekDay = 1;

// switch(weekDay) {
// 	case 1:
// 		console.log("Понедельник");
// 		break;
// 	case 2:
// 		console.log("Вторник");
// 		break;
// 	default:
// 		console.log("Не знаю");
// }

// - Циклы (for, while, do...while)

							//   0        1         2
// const fruits = ["apple", "mango", "banana"]

// for (let i = 0; i < 3; i++) {
// 	console.log(i + ": " + fruits[i]);
// }

// for (let i in fruits) { // 3
// 	console.log(i + ": " + fruits[i]);
// }

// for (let f of fruits) { // 3
// 	if (f == "apple") {
// 		console.log("I found apple");
// 	}
// }

// while

// let count = 0;

// while(count < 50) {
// 	console.log("Hello: " + count);
// 	count++
// }

// do {
// 	console.log("Hello");
// } while(10 < 5);

// const apples = [1, 0, 0, 0, 1, 1, 1];

// // break continue

// for (let apple of apples) {
// 	if (apple == 0) {
// 		continue
// 	}

// 	console.log(apple);
// }

//! - Тернарный оператор

let r = 5;

// if (r == 6) {
// 	console.log("Good");
// } else {Понял 👍 Ты хочешь задание в стиле учебной практики, чтобы студент потренировался с функциями, условиями и строками. Вот пример формулировки:

---

### ✍️ Задание для студента

Напиши функцию `suarez(name, age, isSubscribed)`, которая будет возвращать приветственное сообщение для пользователя.

#### Условия:

1. Функция принимает три аргумента:

   * `name` (**строка**) — имя пользователя,
   * `age` (**число**) — возраст пользователя,
   * `isSubscribed` (**логическое значение**) — подписан ли пользователь.

2. В начале сообщение должно содержать:

   ```
   Привет, <имя>!
   ```

3. Если возраст меньше 18, добавь к сообщению текст:

   ```
   (несовершеннолетний)
   ```

4. Если пользователь подписан (`isSubscribed === true`), добавь:

   ```
   Спасибо за подписку!
   ```

5. Функция должна вернуть итоговую строку.

---

### 🔹 Пример работы функции:

```js
suarez("Анна", 16, false);  
// "Привет, Анна! (несовершеннолетний)"

suarez("Иван", 20, true);  
// "Привет, Иван! Спасибо за подписку!"

suarez("Олег", 15, true);  
// "Привет, Олег! (несовершеннолетний) Спасибо за подписку!"
```

---

Хочешь, я сделаю ещё **вариант посложнее** (например, с использованием шаблонных строк и тернарных операторов), чтобы студент сравнил два подхода?

// 	console.log("Bad");
// }

console.log(r == 6 ? "Good" : "Bad");