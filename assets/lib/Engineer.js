// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email, "Engineer");
        this.username = username;
    }
    getGithub() {
        console.log("Github:", this.username);
        return this.username;
    }
    getRole() {
        console.log("Role:", this.role);
        return this.role;
    }
}

module.exports = Engineer;