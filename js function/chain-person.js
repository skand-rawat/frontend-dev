function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log("Hello, I am " + this.name);
};

function Faculty(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showSubject = function() {
  console.log("Subject:", this.subject);
};

function Professor(name, subject, level) {
  Faculty.call(this, name, subject);
  this.level = level;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.showLevel = function() {
  console.log("Level:", this.level);
};

const prof = new Professor("Dr. Smith", "Physics", "Senior");
prof.sayHello();     // from Person
prof.showSubject();  // from Faculty
prof.showLevel();    // from Professorch