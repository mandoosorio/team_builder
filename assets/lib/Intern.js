// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school;
    }
    getSchool() {
        console.log(this.school);
        return this.school;
    }
    getRole() {
        console.log("Role:", this.role);
        return this.role;
    }
}

module.exports = Intern;