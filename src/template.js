const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

function managerCard(employee) {
    return `
<div class="row">
  <div class="column">        
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Name: ${employee.name}</h1>
          <h1>Position: ${employee.role}</h3>
          <h1>ID number: ${employee.id}</h1>
          <h1>Email: <a href="pleaseEmailMe:${employee.email}"> ${employee.email}</h1>
          <h1>Offic number: ${employee.officeNumber}</h1>
        </div>
      </div>
    </div>  
  </div>
</div>`
};

function engineerCard(employee) {
    return `
<div class="row">    
  <div class="column">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Name: ${employee.name}</h1>
          <h1>Position: ${employee.role}</h3>
          <h1>ID number: ${employee.id}</h1>
          <h1>Email: <a href="pleaseEmailMe:${employee.email}"> ${employee.email}</h1>
          <h1>Github: <a href="https://www.github.com/${employee.github}" target="_blank"> ${employee.GithubUsername}</h1>
        </div>
      </div>  
    </div>  
  </div>
</div>`
};

function internCard(employee) {
    return `
<div class="row">    
  <div class="column">   
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h1>Name: ${employee.name}</h1>
          <h1>Position: ${employee.role}</h3>
          <h1>ID number: ${employee.id}</h1>
          <h1>Email: <a href="pleaseEmailMe:${employee.email}"> ${employee.email}</h1>
          <h1>School name: ${employee.schoolName}</h1>
        </div>
      </div>
    </div> 
  </div>
</div>`
};

function buildHTML(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>Team-Profile-Generator</title>
</head>
<body>

<section class="hero is-info">
  <div class="hero-body">
    <p class="title" style="text-align:center; font-weight: bold">
      My Team Profile
    </p>
    <p class="subtitle" style="text-align:center">
      Team members
    </p>
  </div>
</section>

<main class="container">
  <div class="row">
    <div class="columns">
     ${cards}
    </div>
  </div>
</div>

</body>
</html>`
};

function handleCard(employees) {
    let cards = [];
    employees.forEach(employee => {
        if (employee.role === "Manager") {
            let manangerC = managerCard(employee)
            cards.push(manangerC)
        }
        else if (employee.role === "Engineer") {
            let engineerC = engineerCard(employee)
            cards.push(engineerC)
        }
        else if (employee.role === "Intern") {
            let internC = internCard(employee)
            cards.push(internC)
        }
    });
    cards = cards.join("");
    const markup = buildHTML(cards)
    return markup
};

module.exports = handleCard
