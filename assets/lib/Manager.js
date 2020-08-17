// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, "Manager");
        this.office = office;
    }
    getOfficeNumber() {
        console.log(this.office);
    }
    getRole() {
        console.log(this.role);
        return this.role;
    }
}

module.exports = Manager;