const inquirer = require('inquirer');
const fs = require('fs');
const cTable = require('console.table');
const { initialQuestion, addDepartmentQuestion } = require('./prompts/question');
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
};

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
                    addRolePrompt();
                    break;

                case "Add an Employee":
                    addEmployeePrompt();
                    break;

                case "Update an Employee Role":
                    updatePrompt();
                    break;
                    
                case "Quit":
                    break;

            } 
        })
};

function viewDepartments() {
    db.query('SELECT * from department', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        initialQ();
    })
};

function viewEmployees() {
    db.query('SELECT employee.id AS ID, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS job_title, role.salary AS salary, employee.manager_id AS manager_id, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;', (err, result) => {
        if (err) {
            console.log(err);
        }
        console.table(result);
        initialQ();
    })
};

function viewRoles() {
    db.query('SELECT role.id AS ID, role.title AS job_title, department.name AS deptartment, role.salary AS salary FROM role JOIN department ON role.department_id = department.id', (err, result) => {
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
   let departmentId; 
   let salary = parseFloat(answer.salary);
    db.query(`Select id from department where name = '${answer.department}'`, (err, result)=> {
        if (err) {
            console.log(err);
        }
        departmentId = result[0].id
        db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answer.role}', ${salary}, ${departmentId})`, (err)=> {
            if (err) {
                console.log(err);
            }
            console.log(`${answer.role} had been added to employee_db!`);
            viewRoles();
            initialQ();
        })
    });
    
};

function addEmployee(answer) {
    let roleID;
    let managerID;
    db.query(`SELECT id from role where title in ('${answer.EmployeeRole}', '${answer.employeeManager}')`, (err, result)=>{
        if (err) {
            console.log(err);
        }
        roleID = result[0].id;
        managerID = result[1].id;
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.employeeFirstName}', '${answer.employeeLastName}', ${roleID}, ${managerID})`, (err)=> {
            if (err) {
                console.log(err);
            }
            console.log(`${answer.employeeFirstName} had been added`);
            viewEmployees();
            initialQ();
        })
    })
};

function addRolePrompt() {
    let departments = [];
    db.query('SELECT name from department', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            departments.push(result[i].name)
        }
        inquirer.prompt([
            {
                type: "input",
                message: "Enter the role you would like to add",
                name: "role"
            },
            {
                type: "input",
                message: "Enter the salary for this role",
                name: "salary"
            },
            {
                type: "list",
                message: "Enter the department for this role",
                name: "department",
                choices: departments
            }]
        )
        .then(roleAns => {
            addRole(roleAns);
        })
    })
};

function addEmployeePrompt() {
    let roles = [];
    db.query('SELECT title FROM role', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            roles.push(result[i].title)
        }
    })
    let managers = [];
    db.query('select title from role where department_id = 1', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            managers.push(result[i].title)
        }
    })
    inquirer.prompt([
        {
            type: "input",
            message: "What is the new employee's fist name?",
            name: 'employeeFirstName'
        
        },
        {
            type: "input",
            message: "What is the new employee's last name?",
            name: 'employeeLastName'
        },
        {
            type: "list",
            message: "What is the new employee's role?",
            name: 'EmployeeRole',
            choices: roles
        },
        {
            type: "list",
            message: "Who is the manager for the new employee?",
            name: 'employeeManager',
            choices: managers
        }
    ]) 
    .then(employeeAns => {
        addEmployee(employeeAns);
    })
};

function updatePrompt() {
    let roles = [];
    db.query('SELECT title FROM role', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            roles.push(result[i].title)
        }
    })
    let employees = [];
    db.query('SELECT * FROM employee', (err, result) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < result.length; i++) {
            employees.push(result[i].first_name +" "+ result[i].last_name)
        }
        inquirer.prompt([
            {
                type: "list",
                message: "Select an employee to update:",
                name: 'employee',
                choices: employees
            },
            {
                type: "list",
                message: "Select the employee's new role",
                name: 'newRole',
                choices: roles
            }
        ]) 
        .then(updateAns => {
            updateEmployee(updateAns);
        })
    })
    
};

function updateEmployee(answer) {
    let newRoleID;
    let name = answer.employee.split(' ');
    let firstName = name[0];
    let lastName = name[1];
    db.query(`SELECT id FROM role WHERE title = "${answer.role}"`, (err, result) => {
        if (err) {
            console.log(err);
        }
        newRoleID = result[0].id;
        db.query(`UPDATE employee SET role_id = ${newRoleID}
        WHERE first_name = '${firstName}' AND last_name = '${lastName}'`, (err)=> {
            if (err) {
                console.log(err);
            }
            console.log(`${answer.name} has been updated!`);
            viewEmployees();
            initialQ();
        })
    })
}

init();
