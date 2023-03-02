# Employee-Tracker
Challenge 12 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Video Demo](https://drive.google.com/file/d/1oqMPiUTxN7DrKlTdbKWBQdwSfM_wVwSD/view)
    
## Description
    
I created a content management system command-line application for an employer to track and manage their employees, departments and roles. 
This application uses the Inquirer, MySQL2, and console.table packages. 
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
    
    
<a name="installation"></a>
## Installation
    
How to install dependancies: run 'npm i' to install the packages Inquirer, MySQL2, and console.table

In the MySQL2 shell run 'source schema.sql' and 'source seeds.sql'


<a name="usage"></a>
## Usage
    
GIVEN a command-line application that accepts user input

WHEN I start the application

THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

WHEN I choose to view all departments

THEN I am presented with a formatted table showing department names and department ids

WHEN I choose to view all roles

THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

WHEN I choose to view all employees

THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

WHEN I choose to add a department

THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role

THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee

THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

WHEN I choose to update an employee role

THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
    

<a name="license"></a>
## License
            
This repo has the MIT license.
    

<a name="how-to-contribute"></a>
## How to Contribute
    
Contributor Covenant v2.1
    

<a name="tests"></a>
## Tests
    
NA


<a name="questions"></a>
## Questions
    
For questions check out my GitHub profile [allisonnault](https://www.github.com/allisonnault)

Or you can email me at [allisonrnault@gmail.com](mailto:allisonrnault@gmail.com)
