// Lesson 1: console.log()
// console.log ka use output dikhane ke liye hota hai

console.log("Sohail");


// Lesson 2: let
// let ki value ko hum baad me change kar sakte hain

let name = "Sohail Khan";
let age = 20;

console.log("My name is " + name);
console.log(age);

name = "Sohail";
age = 21;    // value change (let allow karta hai)

console.log(name);
console.log(age);


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
console.log(typeof undefined);  // output: undefined

// null ka type "object" aata hai (JS ka old bug)
console.log(typeof null);       // output: object


// 🔹 Variables + Data Types Practice
// 🟢 Level 1 – Easy (Warm-up)

// Q1: Basic variables declaration
let fullName = "Sohail khan";   // string type
let currentAge = 19;           // number type
let isLogin = true;            // boolean type

// console.table multiple values ko table format me print karta hai
console.table([
  "My full name is " + fullName,
  "My current age is " + currentAge,
  isLogin
]);


// Q2: Variable without value
let city;                      // value assign nahi ki, isliye undefined
console.log(city);             // output: undefined
console.log(typeof city);      // output: undefined


// Q3: null value
let score = null;              // null ka matlab intentionally empty
console.log(score);            // output: null
console.log(typeof score);     // output: object (JS bug)


// 🟡 Level 2 – Variables + Data Types

// Q4: String vs Number
let a = "10";                  // string
let b = 10;                    // number

console.log(a);                // output: 10
console.log(b);                // output: 10
console.log(typeof a);         // output: string
console.log(typeof b);         // output: number


// Q5: String to Number conversion
let x = "10";                  // string value
let num = Number(x);           // string → number conversion

console.log(num);              // output: 10
console.log(typeof num);       // output: number



// Q6: Number to String conversion
let y = 10;                    // number value
let str = String(y);           // number → string conversion

console.log(str);              // output: "10"
console.log(typeof str);       // output: string


// Q7: "true" as a string
let isActive = "true";         // yeh boolean nahi, string hai
console.log(isActive);         // output: true
console.log(typeof isActive);  // output: string


//Data => conversion confusion
let scores = undefined;
let valueInNumber = Number(scores)

console.log(typeof scores);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33 jab bhi ham ek string ko convert karte hai 
// "33abc" => NaN 
// true => 1; => false => 0;

let isLoggedIn = ""
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
