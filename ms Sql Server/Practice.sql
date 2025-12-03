create database Practice2;

use Practice2;

-- Create Department table
CREATE TABLE Departments (
    DepartmentID INT IDENTITY(1,1) PRIMARY KEY,
    DepartmentName VARCHAR(100) NOT NULL
);

-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    EmployeeName VARCHAR(100) NOT NULL,
    DepartmentID INT NULL,
    CONSTRAINT FK_Employees_Departments
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

-- Create Projects table
CREATE TABLE Projects (
    ProjectID INT IDENTITY(1,1) PRIMARY KEY,
    ProjectName VARCHAR(100) NOT NULL,
    EmployeeID INT NULL,
    CONSTRAINT FK_Projects_Employees
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID)
);

INSERT INTO Departments (DepartmentName) VALUES
('HR'),
('Finance'),
('IT');

INSERT INTO Employees (EmployeeName, DepartmentID) VALUES
('Alice', 1),
('Bob', 1),
('Charlie', 2),
('David', 3),
('Eve', NULL);  -- Employee with no department

INSERT INTO Projects (ProjectName, EmployeeID) VALUES
('Recruitment System', 1),
('Payroll Upgrade', 3),
('Network Audit', 4),
('Security Review', NULL); -- Project with no assigned employee

select * from Departments;
select * from Employees;

select * from Projects

select * from Departments join Employees on Departments.DepartmentID = Employees.DepartmentID;

select * from Departments inner join Employees on Departments.DepartmentID = Employees.DepartmentID;

select * from Departments left join Employees on Departments.DepartmentID = Employees.DepartmentID;

select * from Projects right join Employees on Projects.EmployeeID = Employees.EmployeeID;

select * from Projects full join Employees on Projects.EmployeeID = Employees.EmployeeID;

select * from Projects join  Employees on Projects.EmployeeID < Employees.EmployeeID

 