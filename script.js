// first
/*
Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):

function sum() {
const params = Array.prototype.slice.call(arguments);

if (!params.length) return 0;
return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0
*/
// const sum = (...arguments) => {
//   let value = [...arguments];
//   if (!value.length) return 0;
//   return value.reduce((prev, next) => {
//     return prev + next;
//   });
// };
// console.log(sum());

// second

/*
Переделать функцию с использованием функции-стрелки
function convertToObject(num) {
  const obj = {

      value: num,

      isOdd: Boolean(num % 2)

  }

  return obj;

}

*/
const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2),
});

console.log(convertToObject(5));
