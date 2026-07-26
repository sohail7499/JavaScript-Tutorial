// =================================================================================================
// What is find()?

// 📖 Interview Definition

// find() is an array method that returns the first element
// that satisfies a given condition.

// 💡 Simple Hinglish

// find() array ke har element par condition check karta hai.

// ✔️ Agar condition true hui → pehla matching element return kar deta hai.
// ❌ Agar koi bhi element match nahi hua → undefined return karta hai.

// ⚠️ Original array change nahi hota.

// =================================================================================================
// 📝 Syntax

// array.find((element, index, array) => {
//     return condition;
// });

// Normally hum sirf element use karte hain:

// array.find((element) => {
//     return condition;
// });

// =================================================================================================
// ⭐ Golden Rule

// find() callback se Boolean (true / false) expect karta hai.

// ✔️ true  → first matching element return hoga.
// ❌ false → next element check hoga.

// Agar poora array check karne ke baad bhi match na mile,
// to find() undefined return karta hai.

// =================================================================================================
// 🎯 Basic Example

const numbers = [5, 10, 15, 20, 25];

const result = numbers.find((num) => num > 12);

console.log(result);

// Output

// 15

// Reason:
// find() sirf pehla matching element return karta hai.
// 15 condition satisfy karta hai,
// isliye uske baad 20 aur 25 ko check karne ki zarurat nahi padti.

// =================================================================================================
// 🎯 Example with Objects

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" },
];

const user = users.find((user) => user.id === 2);

console.log(user);

// Output

// { id: 2, name: "Ahmed" }

// =================================================================================================
// ⭐ Bonus Concept

// Difference

// map()    → Returns a new transformed array.
// filter() → Returns a new array with all matching elements.
// find()   → Returns only the first matching element.

// =================================================================================================