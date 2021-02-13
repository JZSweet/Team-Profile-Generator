const Employee = require("./employee.js");
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.schoolName = school;
        this.role = "Intern";
    };
    getSchool() {return this.schoolName};
    getRole() {return "Intern"};
};
module.exports = Intern;