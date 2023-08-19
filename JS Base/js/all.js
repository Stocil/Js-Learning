// ---------------------------- Перевод строки в число ----------------------------------

// let value = "5";
// let value2 = "10";

// let c = +value + +value2;

// console.log(typeof c, c); // number 15

// ---------------------------- Перевод в строку------------------------------------------

// let value1 = 5;
// let value2 = 10;

// let c = " " + 5 + 10;

// console.log(typeof c, c);

// ---------------------------- Перевод в булевое-------------------------------------------

// value1 = "hrwhwhrcjh";

// console.log(typeof !!value1); // boolean

// ---------------------------------- Обекты -----------------------------------------------

// const obj = {
//   name: "Stas",
//   age: 20,
//   city: "Kzn",
// };
// let objSec = {};

// for (key in obj) {
//   objSec["stas"] = obj["key"] = obj["age"]; // Создание нового ключа в objSec под именем Stas и присваивание ему значения нусуществующего ключа key (такой ключа создается в ориге obj)
// }

// console.log(obj);
// console.log(objSec);

// let abs = "name" // Способы вывода свойства ключа
// console.log(obj.name)
// console.log(obj["name"]) // Все выведет "Stas"
// console.log(obj[abs])

//                      ---------- Клонирование объекта ---------

// let user = {
//   name: "John",
//   sizes: "200px",
//   age: 30,
// };

// let clone = Object.assign({}, user); // Клонирование объекта user (не углубленное клонирование)
// // для углубленного клонирования надо сделать цикл с рекурсией где будет проверяться тип ключа
// // либо использовать метод снизу
// let test = structuredClone(user);

// console.log(clone);
// console.log(test);

// ------------------------ Вход в личный кабинет по паролю ----------------------------------

// let login = prompt("Введите логин: ");

// if (login == "Админ") {
//   let password = prompt("Введите пароль: ");

//   if (password == "Я главный") {
//     alert("Здравствуйте!");
//   } else if (password == null) {
//     alert("Отменено");
//   } else {
//     alert("Неверный пароль");
//   }
// } else if (login == null || login == "") {
//   alert("Отменено");
// } else {
//   alert("Я вас не знаю");
// }

// ------------------------------ Работа нового ИЛИ (И) ------------------------------------ //

// let value = 0;

// while (value < 100 && value !== null) {
//   // While работает пока true, то есть если вводим
//   //30, то левая часть будет true, права тоже, общее получается true. Если вводим 102 или null, то
//   //одно из условий становится false ==> оператор && выбирает первый false и заканчивает цикл

//   value = prompt("Введите число больше 100: ", 0);
//   console.log(typeof value, value);
// }

// ------------------------------ Поиск простых чисел ------------------------------------ //

// let kol = 0;

// let value = prompt("Введите число: ");
// for (let number = 2; number <= value; number++) {
//   kol = 0;
//   for (let del = 2; del < number; del++) {
//     if (number % del == 0) {
//       kol++;
//     }
//   }
//   if (kol == 0) {
//     console.log(number);
//   }
// }

// ---------------- Базовый колбек и использлвание стрелочной функци в виде колбека ----------

// function SayHi(firstName) {
//   let result;
//   return (result = (secondName) => {
//     let final_result = `${firstName}, привет, твоя фамилия ${secondName}?`;
//     return final_result;
//   });
// }

// let test = SayHi("Stas");
// let final_test = test("Vahurov");

// console.log(final_test);

// ------------------ Полный колбек средней тяжести с стрелочными функциями --------------------

// function masMap(mas, func) {
//   let mas_copy = [];

//   for (let i = 0; i < mas.length; i++) {
//     mas_copy.push(func(mas[i]));
//   }

//   return function (name) {
//     return `Измененный масив для ${name}: ${mas_copy}!`;
//   };
// }

// let stringLength = (str) => str.length;

// let testToUpperCase = (str) => str.toUpperCase();

// let mas = ["Stas", "Vashur", "Ven", "Stlckkcwdjhiw"];
// let testMap = masMap(mas, stringLength);
// let testMap2 = masMap(mas, testToUpperCase);

// console.log(testMap("мамы"));
// console.log(testMap2("деда"));

// ---------------------------------------- This ----------------------------------------------

// let user = {
//   name: "stas",
//   age: 23,
//   sizes: {
//     weith: 230,
//     hight: 140,
//   },
// };

// function saySize() {
//   console.log(this.weith + this.hight);
// }

// user.sizes.saySize = saySize; // Добавление метода saySize в user.sizes

// user.sizes.saySize();  // Вызов

//                    -------------- This калькулятор ----------------

// let calculator = {
//   read() {
//     this.firstNumb = prompt("Введите первое число: ");
//     this.secondNumb = prompt("Введите второе число: ");
//   },

//   sum() {
//     return +this.firstNumb + +this.secondNumb;
//   },

//   mul() {
//     return this.firstNumb * this.secondNumb;
//   },
// };

// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());

// console.log(calculator);

//                  --------- This работа цепочки методов ------------

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep(); // Работает, т.к каждый
// // метод возвращает ссылку на объект

// ---------------------------------- Конструктор ---------------------------------------------------

// function Calculator() {
//   this.read = function () {
//     this.firstNumber = +prompt("Введите первое число: ");
//     this.SecondNumber = +prompt("Введите второе число: ");
//   };

//   this.sum = function () {
//     alert("Sum=" + (this.firstNumber + this.SecondNumber));
//   };

//   this.mul = function () {
//     alert("Mul=" + this.firstNumber * this.SecondNumber);
//   };
// }

// let test = new Calculator();
// test.read();
// test.sum();
// test.mul();
// console.log(test);

// --------------------------------- arr.sort() с минусами -------------------------------------------

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr);

// -------------- Расширяемый калькулятор, дохуя ths, создание методов внутри метожов ----------------

// function Calculator() {
//   this.calculate = function (str) {
//     let answer;
//     sign = str.split(" ")[1];
//     if (sign == "+") {
//       return +str.split(" ")[0] + +str.split(" ")[2];
//     } else if (sign == "-") {
//       return +str.split(" ")[0] - +str.split(" ")[2];
//     } else {
//       return this.calculate[sign](+str.split(" ")[0], +str.split(" ")[2]);
//     }
//   };

//   this.addMethod = function (addSign, func) {
//     this.calculate[addSign] = func;
//   };
// }

// let calc = new Calculator();
// let powerCalc = new Calculator();

// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 5");

// console.log(powerCalc);
// console.log(result);

//                     --------------------- map ------------------------

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((element) => element.name);

// console.log(names);

// ----------------------------------- Деструктуризация (пример)--------------------------------------

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ["Cake", "Donut"],
//   extra: true,
// };

// // деструктуризация разбита на несколько строк для ясности
// let {
//   size: { width, height },
//   items: [item1, item2], // добавим элементы к items
//   title = "Menu", // отсутствует в объекте (используется значение по умолчанию)
// } = options;

// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200
// alert(item1); // Cake
// console.log(size);

// --------------- Деструктуризация (пример) + entries, преобразования в объекты и обратно ---------------

// function topSalary(salaries) {
//   if (Object.entries(salaries).length > 0) {
//     let newMas = Object.entries(salaries);
//     let maxSel = 0;
//     let nameOfWorker;

//     for (let [name, value] of newMas) {
//       if (value > maxSel) {
//         maxSel = value;
//         nameOfWorker = name;
//       }
//     }
//     return nameOfWorker;
//   }
//   return null;
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(topSalary(salaries));

// -------------------------------------------- Date ------------------------------------------------

// function formatDate(date) {
//   let nowDate = new Date();
//   let millisecDifferent = Math.abs(
//     nowDate.getMilliseconds() - date.getMilliseconds()
//   );
//   let secDifferent = Math.abs(nowDate.getSeconds() - date.getSeconds());
//   let minDefferent = Math.abs(nowDate.getMinutes() - date.getMinutes());

//   if (millisecDifferent > 0 && millisecDifferent < 1000) {
//     return "прямо сейчас";
//   } else if (secDifferent >= 1 && secDifferent < 60) {
//     return `${secDifferent} сек назад`;
//   } else if (minDefferent >= 1 && minDefferent < 60) {
//     return `${minDefferent} мин. назад`;
//   } else {
//     if (date.getMinutes() > 9) {
//       return `${date.getDate()}.${
//         date.getMonth() + 1
//       }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
//     }

//     return `${date.getDate()}.${
//       date.getMonth() + 1
//     }.${date.getFullYear()}, ${date.getHours()}:0${date.getMinutes()}`;
//   }
// }

// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
// console.log(formatDate(new Date(new Date() - 35 * 1000))); // "30 сек. назад"
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// console.log(formatDate(new Date(new Date() - 86400 * 1000))); // вчерашняя дата вроде 31.12.2016, 20:00

// ----------------------------------------- JSON --------------------------------------------------

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//   place: room,
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(
//     meetup,
//     function replacer(key, value) {
//       if ((key == "occupiedBy" && value == meetup) || key == "self") {
//         return undefined;
//       }
//       return value;
//     },
//     2
//   )
// );

// -------------------------------- Числа фибоначи --------------------------------

// function fib(n) {
//   if (n == 0) {
//     return 0;
//   } else if (n > 0 && n < 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13

// ------------------------- Связанный список и рекурсия ------------------------------

// function printList(list) {
//   let current = list;
//   if (current.next == null) {
//     return current.value;
//   }
//   console.log(current.value);
//   return printList(current.next);
// }

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// console.log(printList(list));

// ------------------------------- Базовый декоратор ---------------------------------

// function work(a, b) {
//   console.log(a + b);
// }

// function spy(func) {
//   wrapper.calls = [];

//   function wrapper(firstNumb, secondNumb) {
//     wrapper.calls.push([firstNumb, secondNumb]);
//     return func.call(this, firstNumb, secondNumb);
//   }

//   return wrapper;
// }

// work = spy(work);

// work(1, 2);
// work(4, 5);

// for (let args of work.calls) {
//   console.log("call:" + args.join());
// }

// -------------- 2 ---------------

// function f(x) {
//   console.log(x);
// }

// function delay(func, ms) {
//   function wrapper(...args) {
//     setTimeout(() => func.apply(this, args), ms);
//   }

//   return wrapper;
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// ------------- 3 ----------------

// function debounce(f, ms) {
//   let coolDown = false;

//   return function (number) {
//     if (coolDown == true) {
//       return;
//     }
//     // f(number) тоже работает
//     f.apply(this, arguments); // так правильнее
//     coolDown = true;
//     setTimeout(coolDownToFalse, ms);
//   };

//   function coolDownToFalse() {
//     coolDown = false;
//   }
// }

// let f = debounce(console.log, 1000);

// f(1); // выполняется немедленно
// f(2); // проигнорирован

// setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout(() => f(4), 1100); // выполняется
// setTimeout(() => f(5), 1500); // проигнорирован

// ----------------- Декоратор с запоминанием this, изменение встроенного прототипа -----------------

// Function.prototype.defer = function defer(ms) {
//   rmbThis = this;
//   function mainFunc(...args) {
//     return setTimeout(() => rmbThis.apply(this, args), ms);
//   }

//   return mainFunc;
// };

// function f(a, b) {
//   alert(a + b);
// }

// f.defer(5000)(1, 2);

// ---------------------------------- Классы, наследование -------------------------------------------

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision = 1000 } = options;
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let lowResolutionClock = new ExtendedClock({
//   template: "h:m:s",
// });

// lowResolutionClock.start();

// ----------------------------------- Промисы --------------------------------

// function delay(ms) {
//   return new Promise((resolve, reject) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

//                -------------------- База --------------------

// function GetName(names) {
//   return new Promise(function (resolve, reject) {
//     let random = Math.random() * names.length;
//     random = Math.ceil(random);
//     resolve(names[random - 1]);
//   });
// }

// const names = ["Sasha", "Stas", "Hasan"];

// promise = GetName(names);

// promise.then((result) => sayHi(result));

// promise.then((result) => study(result));

// function sayHi(name) {
//   console.log(`Привет ${name}!`);
// }

// function study(name) {
//   console.log(`${name} учится в КАИ`);
// }

// ------------------------------- async/ await --------------------------------------

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("готово!"), 1000);
//   });

//   let result = await promise; // будет ждать, пока промис не выполнится (*)

//   alert(result); // "готово!"
// }

// f();

// ----------------- 2 ----------------------

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = response.json();
//     // Можно было бы просто вернуть промис во внешний код return response.json()
//     //Тогда внешнему коду пришлось бы получать результат промиса самостоятельно
//     //(через .then или await). В нашем варианте это не обязательно.
//     return json;
//   }

//   throw new Error(response.status);
// }

// loadJson("no-such-user.json") // (3)
//   .catch(alert); // Error: 404

// ------------------- 3 --------------------

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = "HttpError";
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let responseJson = response.json();
//     return responseJson;
//   }
//   throw new HttpError(response);
// }

// async function demoGithubUser() {
//   let name = prompt("Введите логин?", "iliakan");

//   try {
//     let user = await loadJson(`https://api.github.com/users/${name}`);
//     alert(`Полное имя: ${user.name}.`);
//     return user;
//   } catch (err) {
//     if (err instanceof HttpError && err.response.status == 404) {
//       alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//       return demoGithubUser();
//     } else {
//       throw err;
//     }
//   }
// }

// demoGithubUser();

// ------------------------ Proxy и Reflect ----------------------------------

// let array = [1, 2, 3];

// array = new Proxy(array, {
//   get(target, prop, receiver) {
//     if (prop >= 0) {
//       return Reflect.get(target, prop, receiver);
//     } else {
//       prop = target.length + +prop;
//       return Reflect.get(target, prop, receiver);
//     }
//   },
// });

// alert(array[-1]); // 3
// alert(array[-2]); // 2

// --------------------------------- DOM --------------------------------------

//  1) Количество детей и название во вложенных списках --------------------------

// let uls = document.querySelectorAll("ul");

// for (let ul = 0; ul < uls.length; ul++) {
//   for (
//     let countOfChild = 0;
//     countOfChild < uls[ul].childElementCount;
//     countOfChild++
//   ) {
//     let name = uls[ul].children[countOfChild].innerText.split("\n")[0];

//     let childCount =
//       uls[ul].children[countOfChild].querySelectorAll("li").length;
//     console.log(`${name}: ${childCount}`);
//   }
// }

//  2) Поиск атрибута через dataset

// let dataWidget = document.querySelector("[data-widget-name]");

// console.log(dataWidget.dataset.widgetName);

// 3) Сделать определнные ссылки другим цветом ----------------------------------

// const links = document.querySelectorAll("a");

// for (let link of links) {
//   let href = link.getAttribute("href");

//   if (
//     href.includes("http://internal.com") == false &&
//     href.includes("://") == true
//   ) {
//     link.style.color = "orange";
//   }
// }

// 4) Изменение документа, создание елементов и их изменение--------------------------

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение0.";

// let div1 = document.createElement("div");
// div1.className = "alert";
// div1.innerHTML =
//   "<strong>Всем привет!</strong> Вы прочитали важное сообщение1.";

// let div2 = document.createElement("div");
// div2.className = "alert";
// div2.innerHTML =
//   "<strong>Всем привет!</strong> Вы прочитали важное сообщение2.";

// let mas = [];
// mas.push(div);
// mas.push(div1);
// mas.push(div2);

// document.body.append(...mas);
// console.log(...mas);

// 5) Создание списка пользователем --------------------------------------------------

// let ul = document.createElement("ul");
// ul.append("Ваш список");

// let answer = "wkjfjk";
// while ((answer = prompt("Введите элемент списка: ")) != null) {
//   let li = document.createElement("li");
//   li.append(answer);
//   ul.append(li);
// }

// document.body.append(ul);

// 6) Создание списка из готового объекта (пиздец)--------------------------------------------

// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//     щука: {},
//     окунь: {},
//   },
//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };

// let uls = document.createElement("ul");
// document.body.append(uls);

// // Объект и Ul, в который надо добавить li
// function createThree(obj, ul) {
//   if (Object.entries(obj).length == 0) return;

//   for (let key in obj) {
//     let li = document.createElement("li");
//     ul.append(li);
//     li.append(key);

//     if (Object.entries(obj[key]).length != 0) {
//       let newUl = document.createElement("ul");
//       li.append(newUl);

//       createThree(obj[key], newUl);
//     }
//   }
// }

// createThree(data, uls);

// 7) Вывести список потомков в дереве ----------------------------------------------------------

// let mainUl = document.body.querySelector("ul");
// let lis = mainUl.querySelectorAll("li");

// for (let li of lis) {
//   let childCount = li.querySelectorAll("li").length;

//   if (childCount != 0) {
//     li.firstChild.data += `[${childCount}]`;
//   }
// }

// 8) Часы нахуй ----------------------------------------------------------------------------------

// let div = document.createElement("div");
// let spanHours = document.createElement("span");
// let spanMinutes = document.createElement("span");
// let spanSeconds = document.createElement("span");

// div.className = "clock";
// spanHours.className = "clock__hours";
// spanMinutes.className = "clock__minutes";
// spanSeconds.className = "clock__seconds";

// spanHours.style.color = "red";
// spanMinutes.style.color = "green";
// spanSeconds.style.color = "blue";

// spanHours.innerHTML = "hh:";
// spanMinutes.innerHTML = "mm";
// spanSeconds.innerHTML = ":ss";

// let buttonStart = document.createElement("button");
// let buttonStop = document.createElement("button");

// buttonStart.className = "button__start button";
// buttonStop.className = "button__stop button";

// buttonStart.innerHTML = "Start";
// buttonStop.innerHTML = "Stop";

// div.append(spanHours, spanMinutes, spanSeconds);
// document.body.append(div);
// document.body.append(buttonStart, buttonStop);

// buttonStart.style.margin = "5px";

// buttonStart.setAttribute("onclick", "ClockStart()");
// buttonStop.setAttribute("onclick", "clearInterval(StartInterval)");

// let StartInterval;

// function ClockStart() {
//   StartInterval = setInterval(function () {
//     let date = new Date();

//     spanHours.innerHTML =
//       (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
//     spanMinutes.innerHTML =
//       date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//     spanSeconds.innerHTML =
//       ":" +
//       (date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds());
//   }, 1000);
// }

// 9) Уведомление в углу страницы --------------------------------------------------------------------

// function showNotification({
//   top = 0,
//   right = 0,
//   html = "text",
//   className = "none",
// }) {
//   let div = document.createElement("div");
//   div.textContent = html;
//   div.className = "notification";

//   if (className != "none") {
//     div.classList.add(className);
//   }

//   div.style.cssText = `
//     top: ${top}px;
//     right: ${right}px;

//     background-color: rgb(${Math.ceil(Math.random() * 255)}, ${Math.ceil(
//     Math.random() * 255
//   )}, ${Math.ceil(Math.random() * 255)});
//   `;
//   document.body.append(div);
//   setTimeout(() => div.remove(), 1500);
// }

// let i = 1;
// setInterval(() => {
//   showNotification({
//     top: 10,
//     right: 10,
//     html: "Hello " + i++,
//     className: "welcome",
//   });
// }, 2000);

// 10) Ширина скролл бара ----------------------------------------------------------------------

// const div = document.createElement("div");
// div.style.overflowY = "scroll";
// div.style.width = "50px";
// div.style.height = "50px";

// const divStyle = getComputedStyle(div);
// const border = +divStyle.borderWidth.slice(0, -2);

// document.body.append(div);

// const scrollWidth = div.offsetWidth - (div.clientWidth + border * 2);

// div.remove();

// console.log(scrollWidth);

// 11) Помещение мяча в центр поля---------------------------------------------------------------

// const field = document.body.querySelector("#field");
// const ball = document.body.querySelector("#ball");

// // ball.style.width = "10px";
// // ball.style.width = "20px";
// // ball.style.width = "30px";

// const ballSize = ball.clientWidth;
// const fieldCenterHeight = field.clientHeight / 2 - ballSize / 2;
// const fieldCenterWidth = field.clientWidth / 2 - ballSize / 2;

// ball.style.top = `${fieldCenterHeight}px`;
// ball.style.left = `${fieldCenterWidth}px`;

// console.log(fieldCenterHeight, fieldCenterWidth);

// 12) Нахождение координат -------------------------------------------------------------------

// let field = document.body.querySelector("#field");
// let triangles = document.body.querySelectorAll(".triangle-right");
// let first;
// let second;
// let third;
// let fourth;

// for (let triangle of triangles) {
//   let cord = triangle.getBoundingClientRect();

//   if (triangle.innerText == "1") {
//     first = `1) ${cord.left + triangle.getBoundingClientRect().width}:${
//       cord.top + triangle.getBoundingClientRect().height / 2
//     }`;
//   }

//   if (triangle.innerText == "2") {
//     second = `2) ${cord.right}:${
//       cord.bottom - triangle.getBoundingClientRect().height / 2
//     }`;
//   }

//   if (triangle.innerText == "3") {
//     third = `3) ${cord.left + triangle.getBoundingClientRect().width}:${
//       cord.top + triangle.getBoundingClientRect().height / 2
//     }`;
//   }

//   if (triangle.innerText == "4") {
//     fourth = `4) ${cord.right}:${
//       cord.bottom - triangle.getBoundingClientRect().height / 2
//     }`;
//   }
// }
// console.log(first, second, third, fourth);

// 13) Позиционирование (1/3) ------------------------------------------------------------------

// function positionAt(anchor, position, elem) {
//   let cord = anchor.getBoundingClientRect();
//   let cordPosition = cord[position];

//   if (position == "top" || position == "bottom") {
//     if (position == "top") {
//       elem.style.top = cordPosition - elem.offsetHeight + "px";
//     } else {
//       elem.style.top = cordPosition + "px";
//     }

//     elem.style.left = cord.left + "px";
//   }

//   if (position == "left" || position == "right") {
//     if (position == "left") {
//       elem.style.left = cordPosition - elem.offsetWidth + "px";
//     } else {
//       elem.style.left = cordPosition + "px";
//     }

//     elem.style.top = cord.top + "px";
//   }
// }

// function showNote(anchor, position, html) {
//   let note = document.createElement("div");
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector("blockquote");

// showNote(blockquote, "top", "note above");
// showNote(blockquote, "bottom", "note below");
// showNote(blockquote, "right", "note at the right");
// showNote(blockquote, "left", "note at the left");

// 14) Позиционирование (3/3) ------------------------------------------------------------------

// // Учитывает прокрутку
// function getCords(elem) {
//   let newCords = elem.getBoundingClientRect();
//   console.log(scrollY);
//   return {
//     top: newCords.top + scrollY,
//     bottom: newCords.bottom + scrollY,
//     left: newCords.left,
//     right: newCords.right,
//   };
// }

// function positionAt(anchor, position, elem) {
//   let cord = getCords(anchor);
//   let cordPosition = position.split("-");
//   let cordPositionMain = cord[cordPosition[0]];
//   let cordPositionSide = cordPosition[1];

//   if (cordPosition[0] == "top" || cordPosition[0] == "bottom") {
//     if (cordPosition[0] == "top") {
//       elem.style.top = cordPositionMain + "px";

//       if (cordPositionSide == "out") {
//         elem.style.top =
//           +getComputedStyle(elem).top.slice(0, -2) - elem.offsetHeight + "px";
//       }
//     } else {
//       elem.style.top = cordPositionMain + "px";

//       if (cordPositionSide == "in") {
//         elem.style.top =
//           +getComputedStyle(elem).top.slice(0, -2) - elem.offsetHeight + "px";
//       }
//     }

//     elem.style.left = cord.left + "px";
//   }

//   if (cordPosition[0] == "left" || cordPosition[0] == "right") {
//     if (cordPosition[0] == "left") {
//       elem.style.left = cordPositionMain + "px";

//       if (cordPositionSide == "out") {
//         elem.style.left =
//           +getComputedStyle(elem).left.slice(0, -2) - elem.offsetWidth + "px";
//       }
//     } else {
//       elem.style.left = cordPositionMain + "px";

//       if (cordPositionSide == "in") {
//         elem.style.left =
//           +getComputedStyle(elem).left.slice(0, -2) - elem.offsetWidth + "px";
//       }
//     }

//     elem.style.top = cord.top + "px";
//   }
// }

// function showNote(anchor, position, html) {
//   let note = document.createElement("div");
//   note.className = "note";
//   note.innerHTML = html;
//   document.body.append(note);

//   positionAt(anchor, position, note);
// }

// // test it
// let blockquote = document.querySelector("blockquote");

// showNote(blockquote, "top-out", "note top-out");
// showNote(blockquote, "top-in", "note top-in");

// showNote(blockquote, "bottom-out", "note bottom-out");
// showNote(blockquote, "bottom-in", "note bottom-in");

// showNote(blockquote, "left-out", "note left-out");
// showNote(blockquote, "left-in", "note left-in");

// showNote(blockquote, "right-out", "note right-out");
// showNote(blockquote, "right-in", "note right-in");

// Браузерные события -------------------------------------------------------------------------

// 15) Перемещение объекта в место клика ------------------------------------------------------

// let ball = document.body.querySelector("#ball");
// let field = document.body.querySelector("#field");
// let cordText = document.body.querySelector(".coordinate__text");

// // Будущие координаты курсора
// let cordX;
// let cordY;

// field.addEventListener("click", getСoordinates);
// field.addEventListener("click", TranslateBall);

// function getСoordinates(event) {
//   let _border = +getComputedStyle(field).borderWidth.slice(0, -2);
//   let _left = Math.round(field.getBoundingClientRect().left + _border);
//   let _top = Math.round(field.getBoundingClientRect().top + _border);

//   // Координаты с учетом пространства слева или сверху + рамок
//   cordX = event.clientX - _left;
//   cordY = event.clientY - _top;

//   cordText.innerText = `${cordX}:${cordY}`;
// }

// function TranslateBall() {
//   // Ширина и длина поля
//   let rightMax = field.clientWidth;
//   let bottomMax = field.clientHeight;

//   // Присваиваем центру мячу координаты, равные месту клика
//   let ballX = cordX - ball.clientWidth / 2;
//   let ballY = cordY - ball.clientHeight / 2;

//   // Проверки на границы
//   if (cordX <= ball.clientWidth / 2) {
//     ballX = 0;
//   }

//   if (cordX >= rightMax - ball.clientWidth / 2) {
//     ballX = rightMax - ball.clientWidth;
//   }

//   if (cordY <= ball.clientHeight / 2) {
//     ballY = 0;
//   }

//   if (cordY >= bottomMax - ball.clientWidth / 2) {
//     ballY = bottomMax - ball.clientHeight;
//   }

//   // Финальное присваивание
//   ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
//   console.log(ballX, ballY);
// }

// 16) Спрятать текст с помощью делегирования ----------------------------------------------

// const inner = document.body.querySelector(".container");

// inner.addEventListener("click", function (event) {
//   let button;
//   if (event.target.classList.contains("remove-button")) {
//     button = event.target;
//   } else {
//     return;
//   }

//   const pane = button.closest(".pane");

//   if (!pane) return;

//   remove(pane);
// });

// function remove(element) {
//   element.remove();
// }

// 17)  -----------------------------
