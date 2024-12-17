// high order function
// 1.function passed as an argument from another function

// closure => variable + lexical environment
// ? also called function factory

// const calculateProduct = (num1) => {
//   const doMultiply = (num2) => {
//     return num1 * num2;
//   };
//   return doMultiply;
// };
// const res = calculateProduct(10)(5);
// console.log(res);

// ? callback function
// ? function passed as an parameter/argument to another function

const getSum = (num1, num2, printNumber) => {
  const sum = num1 + num2;
  printNumber(sum);
};
getSum(100, 20, (result) => {
  console.log(result);
});
