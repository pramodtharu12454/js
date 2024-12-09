// function
// ? dry => do not repeat

// function sayhi() {
//   console.log(`hi`);
// }
// sayhi();
// sayhi();
// sayhi();

// function greatUser(userName) {
//   console.log(`hello ${userName}`);
// }
// greatUser(`rohan`);
// greatUser(`ramesh`);
// greatUser(`umesh`);

// ? arrow function
// ES6

//syntax
//const functionName=()=>{}

// const addNum = () => {
//   console.log(`adding.....`);
// };
// addNum();

// const addNumber = (num1, num2) => {
//   console.log(num1 + num2);
// };
// addNumber(2, 3);

// const addNumber = (num1, num2) => {
//   num1 = 10;
//   console.log(num1 + num2);
// };
// addNumber(2, 3);

// const addNumber = (num1, num2) => {
//   let sum = num1 + num2;
//   return sum;
// };
// const result = addNumber(10, 20);
// console.log(result);

// const productNumber = (num1, num2) => {
//   let product = num1 * num2;
//   return product;
// };
// const result = productNumber(2, 3);
// console.log(result);

// ? create a function which determine whether a number is odd or even

// const number = (num1) => {
//   let x = num1 % 2;
//   if (x === 0) {
//     return ` is even`;
//   } else {
//     return ` is odd`;
//   }
// };
// const result = number(25);
// console.log(result);

// ? one liner
// const divideNumber = (x, y) => x / y;
// const result = divideNumber(10, 5);
// console.log(result);

// ? WAF that converts dollars into cents.

// const dollor = (dollor1) => {
//   let cent = dollor1 * 100;
//   return cent;
// };
// const result = dollor(3);
// console.log(result);

// let dollar = 3;
// let cent = dollar * 100;
// console.log(cent);

// ? Write a function that takes 5 numbers and calculates the average of the provided numbers.

// const fiveNumber = (a, b, c, d, e) => {
//   let Number = (a + b + c + d + e) / 5;
//   return Number;
// };
// const result = fiveNumber(11, 2, 3, 4, 5);
// console.log(result);

//   todo : difference normal function and arrow function

// ? WAF that converts temperature in Celsius into Fahrenheit.

// const celsius = (num1) => {
//   const faahr = num1 * (9 / 5) + 32;
//   return faahr;
// };
// const result = celsius(3);
// console.log(result);

// ? WAF that calculates the factorial of a number.

// const factorial = (num1) => {
//   let fact = 1;
//   for (let i = 1; i <= num1; i++) {
//     fact *= i;
//   }
//   return fact;
// };
// const result = factorial(5);
// console.log(result);

// ? WAF that calculates the given number is prime or not.

const Prime = (num1) => {
  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      return `is not prime`;
    } else {
      return `is  prime`;
    }
  }
};
const result = Prime(8);
console.log(result);
