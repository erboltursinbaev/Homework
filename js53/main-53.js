// Задание 1.
// Дан массив пользователей:
 const users = [
   { name: 'Alex', age: 24, isAdmin: false },
   { name: 'Bob', age: 13, isAdmin: false },
   { name: 'John', age: 31, isAdmin: true },
   { name: 'Jane', age: 20, isAdmin: false },
]
users.push(

 { name: 'Ann', age: 19, isAdmin: false },
 { name: 'Jack', age: 43, isAdmin: true }
);
console.log(users)
// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
function getUserAverageAge(array, prop){
  return array.reduce((acc, obj) => acc + obj[prop]/6, 0);
}
const middleAge = getUserAverageAge(users, 'age');
console.log(middleAge)
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users){
  const admins = [];
  for(const user of users){
  if(user.isAdmin === true){
  admins.push(user);
}
  }
return admins;
}
console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, тогда мы возвращаем массив одним элементом.
function first(arr, n) {
  const result = [];

  if (n === 0) return [];
  if (n === undefined) return [arr[0]];

  arr.forEach((el, i) => {
    if (i < n) result.push(el);
  });

  return result;
}

const arr = [1, 2, 3, 4, 5];

console.log(first(arr, 0));   
console.log(first(arr));      
console.log(first(arr, 2));   
console.log(first(arr, 10));  