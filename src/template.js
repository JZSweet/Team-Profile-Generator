const Employee = require("../lib/employee");
const Manager = require("../lib/manager");

function managerCard(employee){
    return`<h1>${employee.name}</h1>
    <h1>${employee.id}</h1>
    <h1>${employee.email}</h1>
    <h1>${employee.officeNumber}</h1>`
};

function buildHTML(cards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${cards}
</body>
</html>`
}
function handleCard(employees){
    let cards =[];
    employees.forEach(employee => {
        if (employee.role === "Manager"){
            let manangerC = managerCard(employee)
            cards.push(manangerC)
            console.log("handlecard")
        }
    });
    cards = cards.join("");
    const markup = buildHTML(cards)
    return markup
}
module.exports=handleCard
