INSERT INTO department (name)
VALUES ('MGMT'),
        ('Sales'),
        ('Youth'),
        ('Operations'),
        ('Climbing and Fitness'),
        ('Route Setting');
       
INSERT INTO role (title, salary, department_id)
VALUES ("Operations Manager", 65000, 001),
        ("Community Advisor", 20, 002),
        ("Belay Staff", 16.40, 003),
        ("Facility Maintenance", 16.40, 004),
        ('Climbing Instructor', 16.40, 005),
        ('Head Route Setter', 50000, 001),
        ("Route Setting Manager", 64000, 001),
        ("Youth Programs Manager", 60000, 001),
        ("Climbing and Fitness Manager", 50000, 001),
        ("Sales Manager", 65000, 001);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('Emma', 'Hope', 9, 1),
        ('Page', 'Thomas', 10, 1),
        ('Emma', 'Nathans', 3, 8),
        ('Maxx', 'Luck', 6, 7),
        ('Adam', 'Hanson', 4, 1);


SELECT role.id AS ID, role.title AS job_title, department.name AS deptartment, role.salary AS salary FROM role JOIN department ON role.department_id = department.id;

SELECT employee.id AS employee_ID, employee.first_name AS first_name, employee.last_name AS last_name, role.title AS job_title, role.salary AS salary, employee.manager_id AS manager_id, department.name AS department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id;