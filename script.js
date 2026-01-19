// Lesson 1: console.log()
// console.log ka use output dikhane ke liye hota hai

console.log("Sohail");

// Lesson 2: let
// let ki value ko hum baad me change kar sakte hain

let name = "Sohail Khan";
let age = 20;

console.log(`This is my full name ${name} and my age is ${age}`);

name = "Sohail";
age = 21; // value change (let allow karta hai)

console.log(`This is my full name ${name} and my age is ${age}`);

// Lesson 3: const
// const ki value ko hum change nahi kar sakte
// =======================

// const city = "Bhiwandi";
// console.log(city);

// Lesson 4: Data Type - String
// String hamesha quotes me hoti hai "" ya ''

let course = "JavaScript";
console.log(course);

// string change
course = "React";
console.log(course);

// Lesson 4: Data Type - Number
// Number ka matlab hota hai digits

let price = 99.5;
console.log(price);

// number change
price = 120;
console.log(price);

// Lesson 4: Data Type - Boolean
// Boolean me sirf true ya false hota hai
let isStudent = true;
let isAdult = false;

console.log(isStudent);
console.log(isAdult);

// 🔹 typeof undefined aur null ka output
// undefined ka type "undefined" hota hai
console.log(typeof undefined); // output: undefined

// null ka type "object" aata hai (JS ka old bug)
console.log(typeof null); // output: object

// 🔹 Variables + Data Types Practice
// 🟢 Level 1 – Easy (Warm-up)

// Q1: Basic variables declaration
let fullName = "Sohail khan"; // string type
let currentAge = 19; // number type
let isLogin = true; // boolean type

// console.table multiple values ko table format me print karta hai
console.table([
  "My full name is " + fullName,
  "My current age is " + currentAge,
  isLogin,
]);

// Q2: Variable without value
let city; // value assign nahi ki, isliye undefined
console.log(city); // output: undefined
console.log(typeof city); // output: undefined

// Q3: null value
let score = null; // null ka matlab intentionally empty
console.log(score); // output: null
console.log(typeof score); // output: object (JS bug)

// 🟡 Level 2 – Variables + Data Types

// Q4: String vs Number
let a = "10"; // string
let b = 10; // number

console.log(a); // output: 10
console.log(b); // output: 10
console.log(typeof a); // output: string
console.log(typeof b); // output: number

// Q5: String to Number conversion
let x = "10"; // string value
let num = Number(x); // string → number conversion

console.log(num); // output: 10
console.log(typeof num); // output: number

// Q6: Number to String conversion
let y = 10; // number value
let str = String(y); // number → string conversion

console.log(str); // output: "10"
console.log(typeof str); // output: string

// Q7: "true" as a string
let isActive = "true"; // yeh boolean nahi, string hai
console.log(isActive); // output: true
console.log(typeof isActive); // output: string

//Data => conversion confusion
let scores = undefined;
let valueInNumber = Number(scores);

console.log(typeof scores);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 jab bhi ham ek string ko convert karte hai
// "33abc" => NaN
// true => 1; => false => 0;

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);

// true => 1; => false => 0;
// "" => false
// "sohail" => true

/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ |OPERATOR QUESTION'SSSS| ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log("2" === 2); strict equal | output: false    === is me type bhi check hogi aur value bhi
console.log("2" == 2);  equal        | output: true     == is me sirf value check hogi
console.log("2" !== 2); not equal    | output: true 
console.log("2" >= 2);               | output: true 
console.log(null == 0);              | output: false
console.log(null !== 0);             | output: true
console.log(null == undefined);      | output: true
console.log(undefined == 0);         | output: false

let rait = 800;
discount = rait * 25 / 100;

console.log(discount)


let count = 5;
addCount = count + 2;

console.log(addCount);


let q = 10;
let r = "10";

console.log(q == r);
console.log(q === r);
*/

//STRING'S
const gameName = "marvel";

console.log(gameName.length); //output: 6
console.log(gameName.charAt(3)); //output: v
console.log(gameName.indexOf("v")); //output: 3
console.log(gameName.toUpperCase()); //output: MARVEL

//🔹combination operator  =, +, *, +=, *=

let prices = 20;
prices += 10;

console.log(prices * 3);

//🔹Comparison Operators = Compare Karna   >, <, >=, <=, ==, ===

console.log(10 > 8); //output: true
console.log(5 <= 5); //output: true
console.log(10 == "10"); //output: true
console.log(10 === "10"); //output: false

//NUMBERS---ye hamesha Output string me deta hai
// > 5 → upar badhao
// < 5 → waise ka waise chhod do

const runs = 200;
console.log(runs);

const balanse = new Number(100);
console.log(balanse);
console.log(balanse.toString().length);
console.log(balanse.toFixed(2)); //  100:00

let xx = 0.0456;
console.log(xx.toPrecision(1));

const zz = 1000000;
console.log(zz.toLocaleString("en-IN"));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Math.random ka formala-----Math.floor(Math.random() * (max - min + 1)) + min

// console.log(Math.abs(-410));
// console.log(Math.ceil(9.3));
// console.log(Math.floor(10.9));
// console.log(Math.round(10.5));
// console.log(Math.min(1, 2, 3, 4, 5,));
// console.log(Math.max(1, 2, 3, 4, 5,));

// +++++++++++++++++++++++++++++++++++++++++++++++++++ Math.random()-----------QUESTIONS +++++++++++++++++++++++++++++++++++++++++++

// 1️⃣ Math.random()
// 0 se 1 ke beech random number deta hai (1 include nahi hota)
console.log(Math.random());

// 2️⃣ 0 se 10 ke beech random number (decimal)
console.log(Math.random() * 10);

// 3️⃣ 1 se 10 ke beech random number (decimal)
console.log(Math.random() * 10 + 1);

// 4️⃣ 0 se 3 ke beech random number (decimal)
console.log(Math.random() * 4);

// 5️⃣ 1 se 6 ke beech random INTEGER (dice example)
console.log(Math.floor(Math.random() * 6) + 1);

// 6️⃣ 5 se 15 ke beech random INTEGER
let min = 5;
let max = 15;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// 7️⃣ Sirf EVEN numbers (0, 2, 4, 6, 8)
console.log(Math.floor(Math.random() * 10) * 2);

//+++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY +++++++++++++++++++++++++++++++++++++++++++++++

const arr = [0, 1, 2, 3, 4, 5];
// arr.push(70)    //last me elemant add karta hai
// arr.pop()       //last element remove karta hai
// arr.unshift(-1) //start me element add karta hai
// arr.shift()     //start se element remove karta hai

console.log("A", arr);

//splice , slice

const myn1 = arr.slice(1, 4); // original array change nahi hota

console.log(myn1); //output: [1, 2, 3]

console.log("B", arr); //output: [ 0, 1, 2, 3, 4, 5] original array me kuch change nhi hota hai

const myn2 = arr.splice(1, 4); //original array change hota hai

console.log("C", arr); //output: [0 , 5]
console.log(myn2); //output: [1, 2, 3, 4]

const newArr = ["Sohail Khan"];

console.log(Array.isArray(newArr));
console.log(Array.from("Sohail"));

const marvel_heros = ["Thor", "Iron-Man", "Captain-America"];
const dc_heros = ["Super-man", "Bat-man", "Flash"];
console.log("A-", marvel_heros);
console.log("B-", dc_heros);

const all_heros = [...marvel_heros, ...dc_heros];

console.log("C-", all_heros);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

//++++++++++++++++++++++++++++++++++++++++++++++++ OBJECT ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Update → object.key = value
// Add    → object.newKey = value
// Delete → delete object.key

//🔸Object = key : value pairs

let student_1 = {
  firstName: "sohail",
  lastName: "khan",
  city: "bhiwandi",
  age: 19,
  marks: 55
};

student_1.age = 200;                  //value update
student_1.course = "javascript";      //property add
delete student_1.marks;               //property delete

//value kaise nikaale
console.log(student_1["firstName"]);  //Bracket Nation
console.log(student_1.lastName);      //most common: Dot Nation

console.log(student_1);

//🔸Part 1: Object ke ander object (nested object)

let student_2 = {
  fullName: 'Sohail Khan',
  age: 19,
  address: {
    city: 'bhiwandi',
    pincode: 421302
  }
};

console.log(student_2);
console.log(student_2.address.city);   //value access

//🔸Part 2: Object ke ander array

let student_3 = {
  fullName: 'Sohail Khan',
  age:19,
  skilss: ["HTML", "CSS", "JS"]
};

console.log(student_3);
console.log(student_3.skilss[2]);   //access array values


//🔸Part 3: Mix Example
let student_4 = {
  name: 'Sohail',
  age: 19,
  address: {
    state: 'MH',
    city: 'bhiwandi',
    pincode: 421302,
  },
  skils: ["HTML", "CSS", "JS"]
};

console.log(student_4);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ FUNCTIONS++++++++++++++++++++++++++++++

function sayHello() {
  console.log("Hello Javascript");
}
sayHello()

//🔹Parameters & Arguments

function great(name){
  console.log("Hello " + name);

}

great("Sohail");
great("sahil");

function calulatePrice(price, tax) {
  console.log(price + tax);

}

calulatePrice(999, 18)

//🔹 return keyword

function calulateTotal(price, tax){
  return price * tax
}

let total = calulateTotal(799 , 18)
console.log(`Total Price ${total}`);

//function me object pass karna (basic)
let user = {
  username: "Sohail",
  age: 20
}

function handleObject(anyobject) {
  console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
  
}
handleObject(user)

//function me array pass karna (basic)
const myNewArray = [100, 200, 300, 400]

function returnArrayValue(getArray){
  return getArray[2]
}
console.log(returnArrayValue(myNewArray));

//Arrow function
const add =  () => {
  let username = "Sohail"
  console.log(this.username);
  
}
add()

// // const addtwo = (num1, num2) => {          //ham ise aise bhi likh sakte hai
// //   return num1 * num2
// }

// const addtwo = (num1, num2) => num1 + num2   //aur aise bhi
const addtwo = (num1, num2) => (num1 + num2)    // react me aisa tarika zyada use hota hai 

console.log(addtwo(10, 19));


//Immediately Invoked Function Expression (IIFE Function's)
(function chaiCode (){
  console.log(`DB conneted`);
  
}) ();

//Arrow IIFE function
((name) => {
  console.log(`DB conneted two ${name}`);
  
}) ('sohail');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Control's +++++++++++++++++++++++++++++++++++++++++++++++++ 

const temperature = 29
if (temperature >= 30) {
  console.log(`temperature is less than 41`);
  
} else{
  console.log(`temperature is greater than 41`);
  
}

const marks = 34.9
if (marks >= 90) {
  console.log(`A: Grade`);
  
} else if (marks >= 60) {
  console.log(`B: Grade`);  

} else if (marks >= 35) {
  console.log(`C: Grade`);
  
}else {
  console.log(`Fail`);
  
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Switch +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let month = 4

switch (month) {
  case 1:
    console.log(`jenu`);
    
    break;
  case 2:
    console.log(`feb`);
    
    break;
  case 3:
    console.log(`march`);
    
    break;
  case 4:
    console.log(`april`);
    
    break;

  default:
    console.log(`default month's`);
    
    break;
}

//++++++++++++++++++++++++++++++++++++++++++++++++++ Falsy Value & Thruthy Value ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*                                                           falsy value 
                                              0 , -0, BigInt 0n, "", null, undifined, NaN

=========================================================================================================================================

                                                             thruthy values
                                              "0", "false", " ", [], {}, function(){}
*/

let userEmail = ""
if (userEmail) {
  console.log('Got user Email');
  
} else {
  console.log("Don't have user Email");
}

if (userEmail.length === 0) {
  console.log("Email is emty");
  
}


// if (Object.keys(emtyObj).length === 0) {
//   console.log("Object is emty");
  
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Loop's +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let i = 0; i <= 15; i++) {
  const elemant = i
  console.log(elemant);
  
}

//+++++++++++++++++++++++ break & continue +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

for (let i = 0; i <= 15; i++) {
  
  if (i == 5) {
    console.log(`detected 5`);
    break
  }
  console.log(`value of i ${i}`);
}

//continue
for (let i = 0; i <= 15; i++) {
  
  if (i == 5) {
    console.log(`detected 5`);
    continue
  }
  console.log(`value of i ${i}`);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Do While loop +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
let i = 1
while (i <= 10) {
  console.log(`js ${i}`);
  i++  // i = i + 1   
}

// Do-while loop

let score4 = 1
do {
  console.log(`Score is ${score4}`);
  score4++
} while (score4 <= 15);

//for-of loop
const arrr = [1, 2, 3, 4, 5]

for (const num of arrr) {
  console.log(num);
  
}

const greating = "Hello world!"
for (const great of greating) {
  if (great == " ") {
    // console.log(" ");
    continue
  }

  console.log(`Each chart ${great}`);
  
}


//for-in loop
const myObj = {
  js: 'javascript',
  cpp: 'c++',
  rb: 'ruby'
}
for (const key in myObj) {
 console.log(`${key} -> ${myObj[key]}`);
 
}

/*forEach
🔹forEach sirf array par chalta hai
🔹forEach loop nahi, method hai
🔹Ye value return nahi karta

1️⃣ value → current element
2️⃣ index → position
3️⃣ array → poora array
*/

let fruits = ['apple', 'banana', 'mango', 'orange'];

fruits.forEach( (value, index) => {
  console.log((index + 1)+ ". " + value + " ✓");
  
})

// filter
const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = num5.filter( (num) => {
  return num > 4
})
console.log(newNum);

const num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum1 = num6.filter( (num) => (num > 4))
console.log(newNum1);

//aur agar hame forEach se return karvana hai to

const num7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum2 = []
num7.forEach ( (num) => {
  if (num > 4) {
    newNum2.push(num)
  }
})
console.log(newNum2);

//Map's

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnums = mynums.map( (num) => num + 10 )
console.log(newnums);


const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newnum = mynum
.map( (num) => num * 10)        //pahle 10 se multiply hoga
.map( (num) => num + 1)         //fir os value's me 1+ hoga 
.filter( (num) => num >= 40 )   //fir 40 se bade number print hoge
console.log(newnum);