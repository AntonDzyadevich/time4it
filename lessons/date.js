let now = new Date();

console.log(now);

let jan01_1970 = new Date(0);
console.log(jan01_1970);

//new Date (milliseconds)
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

//new Date(datestring)
let date = new Date("2017-01-26");
console.log(date);

//new Date(year, month, hours, minutes, seconds, ms)
console.log(new Date(2011, 0, 1, 0, 0, 0, 0));

//Получение компонентов даты

let date2 = new Date();

//Получение года xxxx
date2.getFullYear();


//Автоисправление даты

//let date3 = new Date(2013, 0, 32);
//
////Date.now()
//let start = Date.now();
//
//for(let i = 0; i < 100000; i++){
//  let doSomething = i * i * i;
//}
//let end = Date.now();
//console.log(`Цикл обработал за ${end - start}`);


function diffSubstract(date1, date2) {
  return date2 - date1;
}
function diffGetTime(date1, date2) {
  return date2.getTime() - date.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();


let start = Date.now();
for (let i = 0; i < 100000; i++) {
  f(date1, date2); 
}
return Date.now() - start;
}

console.log(`Время diffSubstract: ${bench(diffSubstract)} мс;`);
console.log(`Время diffGetTime: ${bench(diffGetTime)} мс;`);


//Задача 1
//2012-02-20
let d = new Date(2012, 01, 20, 3, 12);
console.log(d);

//Задача 2
function getWeekDay(date) {
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  return days[date.getDay()];
}
let date5 = new Date();
console.log(getWeekDay(date5));

//Задача 3
function getLastDayofMonth(year, month) {
  let date = new Date(year, month+1, 0);
  return date.getDate();
}
 










