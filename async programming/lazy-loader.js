function loadProfile() { return new Promise((res, rej) => setTimeout(() => Math.random()>0.3?res("Profile Loaded"):rej("Profile Failed"), 2000)); }
function loadPosts() { return new Promise((res, rej) => setTimeout(() => Math.random()>0.3?res("Posts Loaded"):rej("Posts Failed"), 1500)); }
function loadMessages() { return new Promise((res, rej) => setTimeout(() => Math.random()>0.3?res("Messages Loaded"):rej("Messages Failed"), 1000)); }

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(results => {
    results.forEach(r => console.log(r.status === "fulfilled" ? "Success:" + r.value : "Failed:" + r.reason));
    console.log("Total time:", (Date.now() - start) + "ms");
  });