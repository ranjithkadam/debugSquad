create table C_Employee(
empID int primary key identity(1,1),
Name varchar(100),
emp_Dept varchar(20),
emp_Salary money,
emp_DeptID int
);

alter table C_employee alter column emp_Dept varchar(100)
sp_rename 'C_Employee.emp_DeptID','Experience';

insert into C_Employee 
values('Ajay', 'Manager', 30000,3),
('Prashanth','HR',35000,2),
('Sumanth','Sales',20000,4),
('Pragathi','Director',70000,1);


---Checking Only One Condition----------------
select *,
case 
when emp_Salary>50000 then 'high Salary'
else 'low Salary'
end as Salarycategories
from C_employee;
 

------------------Checking multiply Conditions------------------------------
 select *,
case 
when emp_Salary>50000 then 'high Salary'
when emp_Salary between 30000 and 49000 then 'medium Salary'
when emp_Salary<29000 then 'low salary'
else 'others'
end as Salarycategories
from C_employee order by emp_Salary desc;

-------------Adding New Column----------
select * ,
case
when experience>=3 then emp_Salary*0.1+ emp_Salary
else emp_Salary*0.05 + emp_Salary
end as Bonus
from C_Employee

-----------adding messege for each team-------
select * ,
case 
when emp_dept='HR' then 'HR team'
when emp_Dept='manager' then 'Management Team'
when emp_Dept='sales' then 'Hey Sales Team..'
when emp_Dept='director' then 'Hello Director'
end as Messagess
from C_Employee