// Callback Hell
function design(cb){ setTimeout(() => { console.log("Design"); cb(); }, 1000); }
function build(cb){ setTimeout(() => { console.log("Build"); cb(); }, 1000); }
function test(cb){ setTimeout(() => { console.log("Test"); cb(); }, 1000); }
function deploy(cb){ setTimeout(() => { console.log("Deploy"); cb(); }, 1000); }
function celebrate(cb){ setTimeout(() => { console.log("Celebrate"); cb(); }, 1000); }

design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate(() => console.log("Pipeline finished!"));
      });
    });
  });
});

// Async/Await version
function delayLog(msg) {
  return new Promise(res => setTimeout(() => { console.log(msg); res(); }, 1000));
}

async function pipeline() {
  await delayLog("Design");
  await delayLog("Build");
  await delayLog("Test");
  await delayLog("Deploy");
  await delayLog("Celebrate");
  console.log("Pipeline finished!");
}

pipeline();

/*
Async/await improves readability because it looks like synchronous code,
avoiding deeply nested callbacks.
*/