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
        choices: "departments",
        name: 'newRole'
    }];

    module.exports = addRoleQuestion

