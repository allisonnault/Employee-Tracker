const inquirer = require('inquirer');
const fs = require('fs');
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
    },
    console.log(`Connected to the employee_db database.`)
  );

  db.query('SELECT * from employee', (err, result)=> {
    if (err) {
        console.log(err);
    }
    console.log(result);
  })