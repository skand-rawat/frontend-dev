// Prediction:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
Explanation:
- Synchronous logs run first.
- Microtasks (Promise.then) run immediately after sync code.
- Macrotasks (setTimeout) run in the next tick.
*/