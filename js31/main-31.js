// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108

function calculateFinalPrice(price, discountPercent, taxRate) {
  const discount = price * (discountPercent / 100);
  const priceAfterDiscount = price - discount;
  const tax = priceAfterDiscount * taxRate;
  return priceAfterDiscount + tax;
}
console.log(calculateFinalPrice(100, 10, 0.2));
console.log(calculateFinalPrice(100, 10, 0));
// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
let a = prompt("Введите имя пользователя");
let b = prompt("Введите пароль", 0);
function CheckAccess(a,b){
  if(a === "admin" && b === "123456"){
    return"Доступ разрешен";
  }
    else{
      return"Доступ запрещён";
    
  }
}
console.log(CheckAccess(a,b));
// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.
let hour = prompt("Введите время", 0);
function getTimeOfDay(hour, min, max){
  switch(true){
    case  0<=hour && hour<=5:
    console.log("Ночь");
    break;
    case 6<=hour && hour<=11:
    console.log("Утро");
    break;
    case 12<=hour && hour<=17:
    console.log("День");
    break;
    case 18<=hour && hour<=23:
    console.log("Вечер");
    break;
    default:
      console,log("Некоректное аремя");
  }
  return (min<=hour && hour<=max)
}
console.log(getTimeOfDay(hour, 0, 23));
// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end){
for(let i = start; end>=i; i++){
if(i % 2 ===0){
  return i;
}
}
  return "Чётных чисел нет"
}
console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9))