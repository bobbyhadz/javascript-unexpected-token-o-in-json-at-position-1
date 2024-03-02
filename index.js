// SyntaxError: "[object Object]" is not valid JSON

// EXAMPLE 1 - If the value is already a JS object, you don't have to parse it

// ✅ remove the call to the JSON.parse method
const obj = {
  name: 'Bobby Hadz',
  age: 30,
};

console.log(obj.name); // 👉️ Bobby Hadz
console.log(obj.age); // 👉️ 30

// -----------------------------------------------------------------------

// // EXAMPLE 2 - Use `JSON.stringify()` to convert a value to JSON

// // ✅ is now valid JSON string
// const json = JSON.stringify({name: 'Bobby'});

// console.log(json); // 👉️ {"name":"Bobby"}
// console.log(typeof json); // 👉️ string

// -----------------------------------------------------------------------

// // EXAMPLE 3 - All JSON values have a type of string

// console.log(typeof {}); // 👉️ "object"
// console.log(typeof JSON.stringify([1])); // 👉️ "string"

// -----------------------------------------------------------------------

// // EXAMPLE 4 - Using a `try/catch` statement to handle a possible error

// try {
//   const parsed = JSON.parse({});
// } catch (err) {
//   // ⛔️ SyntaxError: "[object Object]" is not valid JSON
//   console.log(err.message);
// }

// -----------------------------------------------------------------------

// // EXAMPLE 5 - Awaiting a Promise before you parse the JSON

// async function fetchData() {
//   // Awaiting the fetch() Promise ✅
//   const res = await fetch(
//     'https://jsonplaceholder.typicode.com/posts',
//   );

//   // Parsing the JSON data (must await again) ✅
//   const json = await res.json();
//   console.log(json);
// }

// fetchData();

// -----------------------------------------------------------------------

// // EXAMPLE 6 - Parsing a JSON string

// const jsonStr = `
// {
//   "id": 1,
//   "name": "Alice"
// }
// `;

// // ✅ parse JSON string into JS value
// const result = JSON.parse(jsonStr);
// console.log(result); // 👉️ { id: 1, name: 'Alice' }
// console.log(typeof result); // 👉️ object

// // -------------------------------------------------

// // ✅ convert JS value to JSON string
// const jsonStr2 = JSON.stringify({id: 1, name: 'Bobby'});
// console.log(jsonStr2); // 👉️ '{"id":1,"name":"Bobby"}'
// console.log(typeof jsonStr2); // 👉️ string
