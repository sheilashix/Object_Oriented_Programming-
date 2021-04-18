const Employee = require("./Employee");


class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email); //calling employee constructor
    this.school = school;
  }

  getSchool() {
    console.log(`${this.name} attends ${this.school} .`);
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}
module.exports = Intern;