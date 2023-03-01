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
                    // call on dept list
                    departmentChoice()
                        // .then(roleAns => {
                        //     addRole(roleAns);
                        // })
                    break;

                case "Quit":
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
        initialQ();
    })
}

function viewEmployees() {
    db.query('SELECT * from employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        initialQ();
    })
};

function viewRoles() {
    db.query('SELECT * from role', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        initialQ();
    })
};

function addDepart(answer) {
    db.query(`INSERT INTO department (name)
VALUES ('${answer.newDepartment}')`, (err)=> {
    if (err) {
        console.log(err);
    }
    console.log(`${answer.newDepartment} had been added`);
    viewDepartments();
    initialQ();
})
};

function addRole(answer) {
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answer.role}', ${answer.salary}, ${answer.department})`, (err)=> {
        if (err) {
            console.log(err);
        }
        console.log(`${answer.newRole} had been added`);
        viewRoles();
        initialQ();
    })
}


function departmentChoice() {
    let departments = [];
    db.query('SELECT name from department', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            departments.push(result[i].name)
        }
        // console.log(departments);
        inquirer.prompt([
            {
                type: "Input",
                message: "Enter the role you would like to add",
                name: 'role'
            },
            {
                type: "Input",
                message: "Enter the salary for this role",
                name: 'salary'
            },
            {
                type: "list",
                message: "Enter the department for this role",
                choices: departments,
                name: 'department'
            }]
        )
        .then(roleAns => {
            console.log(roleAns);
        })
    })
}

// departmentChoice();   


// console.log(departmentList());

// function addRole() {}

