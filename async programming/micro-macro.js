console.log("Start");

setTimeout(() => console.log("setTimeout callback (macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise callback (microtask)"));

console.log("Synchronous log");

console.log("End");

/*
Expected Output:
Start
Synchronous log
End
Promise callback (microtask)
setTimeout callback (macrotask)

Explanation:
- Microtasks (Promise callbacks) run immediately after the current synchronous code finishes.
- Macrotasks (setTimeout) are scheduled for the next event loop tick.
*/