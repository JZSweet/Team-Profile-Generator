const Employee = require("./employee.js");
class Engineer extends Employee {
    constructor(name, id, email, Github) {
        super(name, id, email);
        this.GithubUsername = Github;
        this.role = "Engineer";
    };
    getGithub() {return this.GithubUsername};
    getRole() {return "Engineer"};
};
module.exports = Engineer;