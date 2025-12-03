
--Creating Functions 

--1. Scalar Function

create function dbo.fullname(@Fname varchar(50), @Lname varchar(50))
returns varchar(100)
as 
begin
return @fname+ ' '+ @lname
end;

select dbo.fullname('Ranjith','Kumar') as FullName;

CREATE FUNCTION dbo.Full_Salary(@salary int, @bonus int)
returns money
as begin
return (@salary+@bonus)
end;

select dbo.Full_Salary(20000,2500) as FullSalary;


--Inline Table-Valued Function
drop function dbo.Empname

CREATE TABLE Employe
(
    EmployeeID     INT IDENTITY(1,1) PRIMARY KEY,
    FullName       VARCHAR(100)      NOT NULL,
    DepartmentId   INT               NOT NULL,
    Salary         MONEY             NOT NULL,
    HireDate       DATE              NOT NULL
);

INSERT INTO Employe (FullName, DepartmentId, Salary, HireDate) 
VALUES
('John Doe',            1, 55000, '2018-03-12'),
('Emily Carter',        1, 72000, '2019-07-01'),
('Michael Smith',       2, 63000, '2020-01-15'),
('Sarah Johnson',       2, 82000, '2021-05-20'),
('David Brown',         3, 47000, '2017-11-05'),
('Sophia Williams',     3, 91000, '2022-09-14'),
('James Thompson',      1, 51000, '2016-02-28'),
('Olivia Martinez',     2, 76000, '2019-12-22');

select * from Employe

CREATE FUNCTION dbo.EmpDeptID(@deptID int)
returns table
as 
return(select * from dbo.Employe where  departmentId=@deptID);

select * from dbo.EmpDeptID(2)
--------

select *  from employee;

CREATE FUNCTION dbo.EmpName(@empName varchar(100))
returns table
as 
return(select * from dbo.Employee where  empName=@empName);

select * from dbo.EmpName('ranjith')

---------------------------------------------
create function dbo.ComapnyId(@CId int)
returns table
as 
return(select * from dbo.Employee where CompanyId=@CId);

select * from dbo.ComapnyId(102)

--multi-statement Table valued Function

create function dbo.HighSalary()
returns @result table (id int, name varchar(100),salary money)
as
begin
insert into @result
select EmployeeID, FullName, salary from Employe where salary>50000;
return;
end;

select * from dbo.HighSalary()
