const Employee = require("./employee.js");
class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.officeNumber = number;
        this.role = "Manager";
    };
    getNumber() {return this.officeNumber};
    getRole() {return "Manager"};
};
module.exports = Manager;






