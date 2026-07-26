// =================================================================================================
// What is filter()?

// 📖 Interview Definition

// filter() is an array method that creates a new array
// containing only the elements that satisfy a given condition.

// 💡 Simple Hinglish

// filter() array ke har element par condition check karta hai.

// ✔️ Agar condition true hui  → element new array me aa jayega.
// ❌ Agar condition false hui → element ignore ho jayega.

// ⚠️ Original array kabhi change nahi hota.
// filter() hamesha ek new array return karta hai.

// =================================================================================================
// 📝 Syntax

// array.filter((element, index, array) => {
//     return condition;
// });

// Normally hum sirf element use karte hain:

// array.filter((element) => {
//     return condition;
// });

// =================================================================================================
// ⭐ Golden Rule

// filter() callback se Boolean (true / false) expect karta hai.

// ✔️ true  → element new array me save hoga.
// ❌ false → element new array me include nahi hoga.

// =================================================================================================
// 🎯 Interview Questions

// Q1. What does filter() return?

// ✅ Answer:
// filter() returns a new array containing only the elements
// that satisfy the given condition.

// -------------------------------------------------------------------------------------------------

// Q2. Does filter() modify the original array?

// ✅ Answer:
// No.
// filter() does not modify the original array.
// It always returns a new filtered array.

// -------------------------------------------------------------------------------------------------

// Q3. What happens if no element satisfies the condition?

// Example

// const arr = [1,2,3];

// const result = arr.filter(num => num > 10);

// console.log(result);

// Output:
// []

// ✅ Reason:
// No element satisfies the condition,
// so filter() returns an empty array.

// -------------------------------------------------------------------------------------------------

// Q4. Difference between map() and filter()?

// map()

// ✔️ Returns a new array.
// ✔️ Transforms every element.
// ✔️ Output array length is usually the same as the original.
// ✔️ Uses the returned value as the new element.

// filter()

// ✔️ Returns a new array.
// ✔️ Selects only matching elements.
// ✔️ Output array can be smaller or even empty.
// ✔️ Uses true/false to decide whether to keep an element.

// -------------------------------------------------------------------------------------------------

// ⭐ Interview Answer

// map() is used to transform every element of an array
// and returns a new array. 

// filter() is used to select elements based on a condition
// and returns a new array containing only the matching elements.

// =================================================================================================
// 🎯 Coding Questions

// Q1. Return only even numbers.

const arr = [1,2,3,4,5,6,7,8,9,10];

const result = arr.filter((num) => num % 2 === 0);

// console.log(result);

// -------------------------------------------------------------------------------------------------

// ⭐ Interview Question

// Why do we use (num % 2 === 0) to find even numbers?

// ✅ Answer

// Because even numbers leave a remainder of 0
// when divided by 2.

// The modulus (%) operator is used to check the remainder.

// =================================================================================================
// Q2. Return only active adults.

const users = [
  { name: "Ali", age: 16, isActive: true },
  { name: "Ahmed", age: 21, isActive: false },
  { name: "Sara", age: 25, isActive: true },
  { name: "John", age: 15, isActive: true },
];

// Beginner Way

const resultTwo = users.filter((user) => {

  if (user.age >= 18 && user.isActive === true) {
    return true;
  }

  return false;

});

// Professional Way

// const resultTwo = users.filter(
//   user => user.age >= 18 && user.isActive
// );

// console.log(resultTwo);

// -------------------------------------------------------------------------------------------------

// ⭐ Interview Question

// Why does filter() return true or false?

// ✅ Answer

// filter() uses the returned Boolean value
// to decide whether an element should be included
// in the new array.

// ✔️ true  → keep the element.
// ❌ false → remove the element.

// =================================================================================================
// Q3. Combine filter() and map()

// Return only the names of users whose age is 18 or above.

const usersTwo = [
  { name: "Ali", age: 16 },
  { name: "Ahmed", age: 21 },
  { name: "Sara", age: 25 },
  { name: "sameer", age: 15 },
];

const resultThree = usersTwo
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(resultThree);

// Output

// ["Ahmed", "Sara"]

// =================================================================================================
// ⭐ Bonus Concept

// Method Chaining

// filter() returns a new array.

// Since map() also works on arrays,
// we can directly chain methods.

// Example:

// users
//   .filter(...)
//   .map(...)

// This is called Method Chaining.

// =================================================================================================