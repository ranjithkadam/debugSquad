select * from C_Employee;


--creating a view
create view employee_details as (select * from C_Employee);

select * from employee_details;

--we cant use alter and truncate cammand on views
alter table employee_details drop column experience

truncate table employee_details

--we can use delete cammand on view table

delete from employee_details  where empID=7;

--we can insert the new records in to table using view

insert into employee_details values ('vishwantha','Sales',23000,3);
alter table C_employee alter column empID int;

--we can update the table using view
update employee_details set
name='Vishwanadh' where name='vishwantha';
select * from employee_details_view;


--we can rename the view table 
sp_rename '[dbo].[employee_details]','employee_details_view'
select * from [dbo].[employee_details_view];


-- dropping Contraints
alter table c_employee drop
constraint [PK__C_Employ__AFB3EC6D245103F2];

--adding Contraints for existing column

alter table C_Employee add
constraint Pk_empID__C_Employee primary key(empid);

--creating view using where clause

create view sort_emp as
(select * from C_Employee where emp_Salary>=30000);
select * from sort_emp;