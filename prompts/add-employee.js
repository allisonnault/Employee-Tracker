const addEmployeeQuestion = [
    {
        type: "Input",
        message: "What is the new employee's fist name?",
        name: 'employeeFirstName'
    
    },
    {
        type: "Input",
        message: "What is the new employee's last name?",
        name: 'employeeLastName'
    },
    {
        type: "list",
        message: "What is the new employee's role?",
        choices: [ // function to collect options from db 
            ],
        name: 'EmployeeRole'
    },
    {
        type: "list",
        message: "Who is the manager for the new employee?",
        choices: [ // function to collect options from db 
            ],
        name: 'employeeManager'
    }]

    module.exports = addEmployeeQuestion;