const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const { initialQuestion, addDepartmentQuestion } = require('./prompts/question');
const addEmployeeQuestion = require('./prompts/add-employee');
const addRoleQuestion = require('./prompts/add-role');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'rootroot',
        database: 'employee_db'
    }
);

function init() {
    initialQ()
}

init()

function initialQ() {
    inquirer.prompt(initialQuestion)
        .then(ans => {
            switch (ans.options) {
                case "View all departments":
                    viewDepartments();
                    break;

                case "View all employees":
                    viewEmployees();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "Add Department":
                    inquirer.prompt(addDepartmentQuestion)
                        .then(deptAns => {
                            addDepart(deptAns);
                        })
                    break;

                case "Add a Role":
                    inquirer.prompt(addRoleQuestion)
                        // .then(roleAns => {
                        //     addRole(roleAns);
                        // })
                    break;

                // case "Add an Employee":
                //     inquirer.prompt(addEmployeeQuestion)
                //     break;

            } 
        })
}

function viewDepartments() {
    db.query('SELECT * from department', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
}

function viewEmployees() {
    db.query('SELECT * from employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        
    })
};

function viewRoles() {
    db.query('SELECT * from role', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
    })
};

function addDepart(answer) {
    db.query(`INSERT INTO department (name)
VALUES ('${answer.newDepartment}')`, (err)=> {
    if (err) {
        console.log(err);
    }
    console.log(`${answer.newDepartment} had been added`);
})
};


// function deptChoices() {
//     db.query('SELECT name from department', (err, result) => {
//         let departments = [];
//         if (err) {
//             console.log(err);
//         }
//         for (let i = 0; i < result.length; i++) {
//             let department = result[i].name;
//             departments.push(department);
//         }
//         return departments;
//     })
 
// }


// function addRole() {}

