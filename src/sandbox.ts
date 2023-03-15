// let character = "luigi";

// let number = 1987;

// let isSapa = false;

// character = "2000";
// number = 2000;
// isSapa = true;

// console.log(character);
// console.log(number);
// console.log(isSapa);

// const calc = (diameter: number) => {
//     return diameter * Math.PI;
// }

// console.log(calc(3));

console.log('OBJECTS AND ARRAYS') // tutorial 4 - objects and arrays
// let family = ['seyi', 'pelumi', 'toluwanimi', 'simi'];
// // family.push(21);
// family[4] = "anjola";

// const mixed = ["ken", 4, true, "simi"]
// mixed[1] = "5";

// console.log(mixed);

// let individual = {
//     name: "Toluwanimi",
//     techie: false,
//     age: 25,
//     chicks: ['']

// }

// individual = {
//     techie: true,
//     name: 'praise',
//     age: 20,
//     chicks: []
// }

// console.log(individual);

console.log("EXPLICIT TYPES") // tutorial 5 - explicit types

// // explicit types
// let username : string;
// let age: number;
// let isLoggedIn: boolean;

// username = "code_combo";
// age = 20;
// isLoggedIn = false;

// // arrays
// let ninjas: (string|object|number|boolean)[] = [];
// ninjas = ["Alaye", {townHall: "bala blue"}, 4];

// let matricNo: string;
// matricNo = "ift/" + 20 + "/" + 5031; 

// let object: {};
// object = {
//     username: "Lizzy Baby",
//     thick: true,
//     age: 19,
//     isGraduate: true
// }

// let ninjaPro: {
//     name: string,
//     belt: string,
//     age: string | number
// }

// ninjaPro = {
//     name: "Tinubu",
//     belt: "colourless",
//     age: "unknown!"
// }

// console.log(username, age, isLoggedIn, matricNo, object, ninjaPro);

console.log("DYNAMIC TYPES, ANY") //tutorial 6 - dynamic types, any

console.log('FUNCTION BASIC'); // tutorial 8 - function basics
// let greet: Function;

// greet = () => {
//     console.log("hello there!");
// }
// greet();

// const add = (a:number, b:number, c: number | string = 10) => {
//     console.log(a + b);
//     console.log(c);
// }
// add(1, 3);

// const minus = (a:number, b:number) => {
//     return a + b;
// }

// let result = minus(1, 3);
// console.log(typeof result);

console.log("ALIASES") // tutorial 9 - Aliases

type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum}

const loginDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}