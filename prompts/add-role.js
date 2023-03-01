// const { mysql, db } = require('../index');
const fs = require('fs');

let departments = [];
fs.readFile('./db/department_list.json', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        departments.push(JSON.parse(data));
    }
});


const addRoleQuestion = [
    {
        type: "Input",
        message: "Enter the role you would like to add",
        name: 'newRole'
    },
    {
        type: "Input",
        message: "Enter the salary for this role",
        name: 'newSalary'
    },
    {
        type: "list",
        message: "Enter the department for this role",
        choices: departments,
        name: 'newRole'
    }];

    module.exports = addRoleQuestion


