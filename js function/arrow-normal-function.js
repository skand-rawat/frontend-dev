const user = {
  name: "John",
  showName: () => {
    console.log(this.name);
  }
};

user.showName(); // ❌ undefined

// FIX: use normal function
const userFixed = {
  name: "John",
  showName: function() {
    console.log(this.name);
  }
};

userFixed.showName(); // ✅ "John"