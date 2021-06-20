//import Employee
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email); //calling employee constructor
    this.github = github;
  }

  getGithub() {
    console.log(`${this.name} has ${this.github} as an GITHUB user name.`);
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;