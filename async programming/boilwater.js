function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Water boiled") : reject("Failed to boil water");
    }, 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Coffee brewed") : reject("Failed to brew coffee");
    }, 1500);
  });
}

function pourCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2 ? resolve("Coffee poured") : reject("Failed to pour coffee");
    }, 1000);
  });
}

// Promise chaining
boilWater()
  .then(msg => { console.log(msg); return brewCoffee(); })
  .then(msg => { console.log(msg); return pourCup(); })
  .then(msg => { console.log(msg); console.log("Coffee ready for the team!"); })
  .catch(err => console.error("Process failed:", err));