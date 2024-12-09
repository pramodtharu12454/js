// ? object
// ? key- value pair
// primary  data type = boolean ,null, string, number, undefined
// non- primary datatype = object

// ? non primary data type can hold one or more primary data type

// const student1 = {
//   Name: `pramod`,
//   Age: 23,
// };
// const student2 = {
//   Name: `ram`,
//   Age: 19,
// };
// console.log(student1, typeof student1);
// console.log(student2, typeof student2);

// ? crud
// ? create/add
//? read/retrive
// ? update/edit
// ? delete/ remove

// ? read
// const movie = {
//   name: "Interstellar",
//   collection: `1 billion`,
//   genre: `sci-fi`,
//   rating: 9.1,
//   isBlockbaster: true,
//   leadActor: `Mattew`,
// };
// ? dot operator
// console.log(movie.name);
// console.log(movie);

// ? square operator
// console.log(movie[`genre`]);
// console.log(movie[`isBlockbaster`]);

// console.log(movie.leadActor);
// console.log(movie[`leadActor`]);

// ? add

// const carDetail = {
//   brand: `Tesla`,
//   model: `x`,
// };
// console.log(carDetail);
// carDetail.year = 2024;
// carDetail[`color`] = ` white`;
// console.log(carDetail);

// ? update field inside

// let laptopDetail = {
//   name: `dell`,
//   brand: `inspire`,
//   ram: 16,
//   ssd: 512,
//   color: `white`,
//   price: 1000,
// };
// laptopDetail.ram = 32;
// laptopDetail.color = `blue`;
// console.log(laptopDetail);

// laptopDetail.price = 2000;
// console.log(laptopDetail);

// laptopDetail.price += 500;
// console.log(laptopDetail);

// ? delete

// let watchDetail = {
//   Name: `DW-5000`,
//   price: 5000,
//   color: `black`,
//   hasLightingFeature: true,
// };
// delete watchDetail.price;
// delete watchDetail[`color`];
// console.log(watchDetail);

// delete watchDetail.Name;
// console.log(watchDetail);

// ? nested object
// ? object inside an object

// const studentDetail = {
//   firstName: `Biraj`,
//   lastName: `Acharya`,
//   addrestss: {
//     permanent: `tanahu`,
//     temporary: `dallu`,
//   },
// };
// console.log(studentDetail);
// console.log(studentDetail.addrestss);
// console.log(studentDetail.addrestss.temporary);

// ? object copy

// let helmetDetail = {
//   brand: `Axor`,
//   color: `green`,
// };
// console.log(
//   `I have a ${helmetDetail.color}. helmet from ${helmetDetail.brand}`
// );

const myHouseDetails = {
  numberOfRooms: 10,
  numberOfMembers: 20,
  colorOfHouse: "white",
  builtYear: 2024,
  numberOfStorey: 4,
};
// delete numberOfMembers;
// console.log(myHouseDetails);
// myHouseDetails.numberOfRooms += 10;
// console.log(myHouseDetails);
// myHouseDetails.priceofHouse = `2 cores`;
// console.log(myHouseDetails);
console.log(
  `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers}people are  living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of 2 crores.`
);
