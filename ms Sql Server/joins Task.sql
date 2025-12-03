use practice1

--Create 3 diffrent relational table, perform ANSI, NON- ANSI and Multiple joins on the created tables.

CREATE TABLE Company(CompanyId int, CompanyName varchar(100));

Insert into Company values(101,'Amazon'),(102,'Microsoft'),(103,'TechMahendra');
Insert into Company values(104,'Wipro')
 

create table Employee(EmpId int, EmpName varchar(100), CompanyId int);

insert into Employee values(201,'Rajkumar',101),(202,'Ranjith',102),(203, 'John', 103);

create table Account(AccountId int, Bank varchar(100),EmpId int);
insert into Account values(3001,'HDFC',201),(3002,'ICICI',202),(3003,'SBI',203);


select * from Company;
select * from Employee;
select * from Account;

--Inner Join company and Emplyee:

select * from Company c inner join Employee e on c.CompanyId=e.CompanyId;

--left out Join company and Emplyee:
select * from Company c left join Employee e on c.CompanyId=e.CompanyId;

--Right Outer Join company and Emplyee:
select * from Company c right join Employee e on c.CompanyId=e.CompanyId;

--Full outer Join company and Emplyee:
select * from Company c full join Employee e on c.CompanyId=e.CompanyId;

--Cross Join company and Emplyee:
select * from Company c cross join Employee e ;

--equi Join company and Emplyee:
select * from Company c join Employee e on c.CompanyId=e.CompanyId;

--Right Outer Join company and Emplyee:
select * from Company c join Employee e   on  c.CompanyId <> e.empId;


--Joining 3 tables Company, Employee and Account Tables

select * from Company c inner join Employee e on c.CompanyId=e.CompanyId inner join Account a on e.EmpIda.EmpId