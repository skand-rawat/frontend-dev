class Person {
  constructor(name) {
    this.name = name;
  }
  showName() {
    console.log("Name:", this.name);
  }
}

class Student extends Person {
  constructor(name, branch) {
    super(name); // call parent constructor
    this.branch = branch;
  }
  showBranch() {
    console.log("Branch:", this.branch);
  }
}

const s2 = new Student("Mayank", "IT");
s2.showName();   // Name: Mayank
s2.showBranch(); // Branch: IT