const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const handleCard = require('./src/template');

let team = []

function start() {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "Please select from following options to begin this application.",
            choices: ["manager", "engineer", "intern", "exit", "build team"]
        }
    ).then(data => {
        switch (data.role) {
            case "manager": buildManager();
                break;
            case "engineer": buildEngineer();
                break;
            case "intern": buildIntern();
                break;
            case "build team": bulidTeam();
                break;

            case "exit": process.exit();
        }
    })
}

function buildManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "what is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "what is the manager's email?",
        },
        {
            type: "input",
            name: "number",
            message: "what is the manager's office number?",
        }
    ]).then(data => {
        console.log(data.name)
        let manager = new Manager(data.name, data.id, data.email, data.number);
        team.push(manager);
        console.log(manager)
        start();
    })
};

function buildEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "what is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "what is the engineer's email?",
        },
        {
            type: "input",
            name: "Github",
            message: "what is the engineer's GitHub username?",
        }
    ]).then(data => {
        console.log(data.name)
        let engineer = new Engineer(data.name, data.id, data.email, data.Github);
        team.push(engineer);
        console.log(engineer)
        start();
    })
};
function buildIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "what is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "what is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "what is the intern's school name?",
        }
    ]).then(data => {
        console.log(data.name)
        let intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        console.log(intern)
        start();
    })
};

function bulidTeam() {
    fs.writeFileSync(path.join("output", "index.html"), handleCard(team))
}
start();