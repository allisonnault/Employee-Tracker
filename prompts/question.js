const initialQuestion = [
{
    type: "list",
    message: "What would you like to do?",
    choices: ['View All Employees', "View all roles", "View all Employees", "Add Department", "Add a Role", "Add an Employee", "Update an Employee Role"],
    name: 'options'
}];

const addDepartmentQuestion = [
{
    type: "Input",
    message: "Enter the Department you would like to add",
    name: 'newDepartment'
}];



module.exports = { initialQuestion, addDepartmentQuestion };