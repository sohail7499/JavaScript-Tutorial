// Lesson 1: console.log()
// console.log ka use output dikhane ke liye hota hai

console.log("Sohail");


// Lesson 2: let
// let ki value ko hum baad me change kar sakte hain

let name = "Sohail Khan";
let age = 20;

console.log(`This is my full name ${name} and my age is ${age}`);


name = "Sohail";
age = 21;    // value change (let allow karta hai)

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

//STRING'S
const gameName = "marvel";

console.log(gameName.length);             //output: 6
console.log(gameName.charAt(3));          //output: v
console.log(gameName.indexOf('v'));       //output: 3
console.log(gameName.toUpperCase());      //output: MARVEL


//🔹combination operator  =, +, *, +=, *=

let prices = 20;
prices += 10;

console.log(prices * 3);


//🔹Comparison Operators = Compare Karna   >, <, >=, <=, ==, ===


console.log(10 > 8);        //output: true
console.log(5 <= 5 );       //output: true
console.log(10 == "10");    //output: true
console.log(10 === "10");   //output: false


//NUMBERS---ye hamesha Output string me deta hai 
// > 5 → upar badhao
// < 5 → waise ka waise chhod do

const runs = 200;
console.log(runs);

const balanse = new Number (100)
console.log(balanse);
console.log(balanse.toString().length);
console.log(balanse.toFixed(2));

let xx = 0.0456;
console.log(xx.toPrecision(1));

const zz = 1000000;
console.log(zz.toLocaleString('en-IN'));
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

console.log(
  Math.floor(Math.random() * (max - min + 1)) + min);

// 7️⃣ Sirf EVEN numbers (0, 2, 4, 6, 8)
console.log(Math.floor(Math.random() * 10) * 2);

//+++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY +++++++++++++++++++++++++++++++++++++++++++++++

const arr = [0, 1, 2, 3, 4, 5];
// arr.push(70)    //last me elemant add karta hai
// arr.pop()       //last element remove karta hai
// arr.unshift(-1) //start me element add karta hai 
// arr.shift()     //start se element remove karta hai

console.log( 'A', arr);

//splice , slice

const myn1 = arr.slice(1, 4);   // original array change nahi hota

console.log(myn1);    //output: [1, 2, 3]

console.log( 'B', arr);  //output: [ 0, 1, 2, 3, 4, 5] original array me kuch change nhi hota hai

const myn2 = arr.splice(1, 4);  //original array change hota hai 

console.log( 'C', arr);   //output: [0 , 5]
console.log(myn2);       //output: [1, 2, 3, 4]


const newArr = ["Sohail Khan"]

console.log(Array.isArray(newArr));
console.log(Array.from("Sohail"));


const marvel_heros = ["Thor", "Iron-Man", "Captain-America"]
const dc_heros = ["Super-man", "Bat-man", "Flash"]
console.log("A-", marvel_heros);
console.log("B-", dc_heros);


const all_heros = [...marvel_heros, ...dc_heros]

console.log("C-", all_heros);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
