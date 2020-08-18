// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        role = "Employee";
    }

    getName() {
        console.log("Name:", this.name);
        return this.name;
    }
    getId() {
        console.log("ID:", this.id);
        return this.id;
    }
    getEmail() {
        console.log("Email:", this.email);
        return this.email;
    }
    getRole() {
        console.log("Role:", this.role);
        return "Employee";
    }
}
module.exports = Employee;