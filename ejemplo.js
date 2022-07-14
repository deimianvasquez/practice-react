// //for
// //for of
// //for in
// //while


// let listNum = [34,67,7,4,8,999,4]

// // se usan dentro de jsx
// //forEach --> ejecuta cada iitereacion
// list.forEach((bubulala) => {
//   console.log(`Hola que tal ${bubulala}`);
// });

// //filter --> retorna un nuevo array
// let newList = list.filter((name, indice, arr) => {
//   return name !== "María";
// });
// console.log(newList);

// //map --> nuevo array resultado de la funcion

// let result = list.map((item, index, arr) => {
//   return `<li>${item}</li>`;
// });
// console.log(result);

// listNum.forEach((num)=>{
//   console.log(Math.sqrt(num))
// })
// console.log("*****************************************")

// //reducer
// let res = listNum.reduce((acc, current)=>{
//   return acc+current
// }, 0)
// console.log(res)

// let saludar = list.reduce((acc, currentValue)=>{
//   return `${acc}, ${currentValue}`
// }, `Hola que tal, `)
// console.log(saludar)

// function suma(num1, num2) {
//   return num1 + num2;
// }

// function multiplicar(num1, num2) {
//   return num1 * num2;
// }

// function calc(num1, num2, callback) {
//   return callback(num1, num2);
// }


// console.log(calc(52,6,suma))
// console.log(calc(52,6,multiplicar))

let list = [
  {
    id:1,
    cedula:10,
    name:"Deimian",
    lastName: "Vásquez"
  },
  {
    id:2,
    name:"Octavio",
    lastName:"Lara"
  }
];
list[0]["email"] = "deimianvasquez@gmail"

// console.log(list[0]  )

let person = list.map((item)=>{
  return item
})

console.log(person)

console.log(list[0].email)


