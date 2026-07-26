// ======================================================================================
// 📌 map() Method
// ======================================================================================

// ✅ Definition (Interview)
// map() is an array method that creates a NEW array by applying a callback
// function to every element of the original array.

// ✅ Simple Hinglish
// - map() array ke har element par function chalata hai.
// - Ye hamesha NEW array return karta hai.
// - Original array ko modify/change nahi karta.

// ======================================================================================
// Syntax
// ======================================================================================

// array.map((element, index, array) => {
//     return something;
// });

// Note:
// Mostly hum sirf "element" ya "element + index" use karte hain.

// ======================================================================================
// Example 1
// ======================================================================================

const number = [1, 2, 3, 4];

const resultOne = number.map((num) => {
  return num * 3;
});

console.log(resultOne); // [3, 6, 9, 12]
console.log(number);    // [1, 2, 3, 4] (Original array unchanged)

// ======================================================================================
// React Example
// ======================================================================================

// const users = ["Ali", "Ahmed", "John"];

// return (
//   <>
//     {users.map((user) => (
//       <h1 key={user}>{user}</h1>
//     ))}
//   </>
// );

// Why map() in React?
// Because React needs a NEW array of JSX elements.

// ======================================================================================
// ⭐ Interview Questions
// ======================================================================================

// Q1. What does map() return?
// ✅ Answer:
// It returns a NEW array.

// -------------------------------------------------------------

// Q2. Does map() modify the original array?
// ✅ Answer:
// No. map() does not modify the original array.
// It always returns a NEW array.

// -------------------------------------------------------------

// Q3. Can we use map() without return?

// Example:

// const arr = [1, 2, 3];

// arr.map((item) => {
//   item * 2;
// });

// Output:
// [undefined, undefined, undefined]

// Why?
// Because callback function me koi value return nahi hui.

// Rule:
// {} use kiya hai to "return" likhna padega.

// Correct:

// arr.map((item) => {
//   return item * 2;
// });

// OR

// arr.map(item => item * 2);

// -------------------------------------------------------------

// Q4. Difference between map() and forEach()?

// map()
// ✔ Returns a NEW array.
// ✔ Used to transform data.

// forEach()
// ✔ Returns undefined.
// ✔ Used for side effects (logging, API call, updating variable, etc.)

// ======================================================================================
// 🎯 Coding Questions
// ======================================================================================

// Question 1
// Double every number.

const nums = [10, 20, 30, 40];

const resultTwo = nums.map((num) => num * 2);

console.log(resultTwo);

// -------------------------------------------------------------

// Question 2
// Return only user names.

const users = [
  { id: 1, name: "sohail" },
  { id: 2, name: "sahil" },
  { id: 3, name: "sameer" },
];

const student = users.map((user) => {
  return user.name;
});

console.log(student);

// -------------------------------------------------------------

// Question 3
// Increase every product price by 10%

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Watch", price: 5000 },
];

const fixedPrice = products.map((product) => {
  return {
    ...product, // Copy all existing properties
    price: product.price * 1.1, // Increase price by 10%
  };
});

console.log(fixedPrice);

// ======================================================================================
// ⭐ Tricky Question
// ======================================================================================

// Rule:
// map() callback should return a value for EVERY iteration.

// If no value is returned,
// JavaScript automatically returns undefined.

const arr = [2, 4, 6];

const resultThree = arr.map((num) => {
  if (num > 4) {
    return num * 2;
  }

  return num;
});

console.log(resultThree); // [2, 4, 12]

// If "return num" is removed,
// Output:
// [undefined, undefined, 12]

// ======================================================================================
// ⭐⭐⭐ map() Golden Rules (Must Remember)
// ======================================================================================

// ✅ map() always returns a NEW array.
// ✅ Original array never changes.
// ✅ Always return a value from callback.
// ✅ If no return -> undefined.
// ✅ Use map() when you want transformed data.
// ✅ React uses map() to render lists.  