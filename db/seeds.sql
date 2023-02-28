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
        ('Head Route Setter', 50000, 006),
        ("Route Setting Manager", 64000, 006),
        ("Youth Programs Manager", 60000, 003),
        ("Climbing and Fitness Manager", 50000, 005),
        ("Sales Manager", 65000, 001);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('Emma', 'Hope', 9, 1),
        ('Page', 'Thomas', 10, 1),
        ('Emma', 'Nathans', 3, 8),
        ('Maxx', 'Luck', 6, 7),
        ('Adam', 'Hanson', 4, 1);

