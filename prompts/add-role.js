// const { mysql, db } = require('../index');
const fs = require('fs');
const list = require('../index');

// function listDepartments() {
 
//         let departments = [];
//         fs.readFile('./db/department_list.json', 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 departments.push(JSON.parse(data));
//                 resolve(departments);
//             }

//         });
//     }




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
        choices: list,
        name: 'newRole'
    }];

    module.exports = addRoleQuestion


