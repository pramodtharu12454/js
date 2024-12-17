// ? array methods using loop
// ? foreach, map , filter , find , reduce

// let collegeName = [`asian`, `KEC`, `NCIT`, `ACHS`];
// collegeName.map((item, index, array) => {
//   console.log(item, index, array);
// });

// let collegeName = [`asian`, `KEC`, `NCIT`, `ACHS`];
// collegeName.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// ? forEach => it does not change array
// ? it does not return anything (undefined)
// ? Purely loop only

// let phones = [`samsung`, `apple`, `xiomi`, `oppo`, `vivo`];
// phones.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// ? map
// ? it may/maynot changes array
// ? return new array
// ? original array length === returned array length

// let numlist = [1, 2, 3, 4, 5, 6, 7];
// const newArray = numlist.map((item, index, array) => {
//   let newItem = item + 5;
//   return newItem;
// });
// console.log(newArray);

// reduce 10 from each score and return new array

// let numlist = [10, 20, 30, 40, 50];
// const newArray = numlist.map((item, index, array) => {
//   let newItem = item - 10;
//   return newItem;
// });
// console.log(newArray);

// let numlist = [10, 20, 30, 40, 50];
// numlist.map((item, index, array) => {
//   let newItem = item - 10;
//   console.log(newItem);
// });
