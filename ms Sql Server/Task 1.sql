--Create a table with identity insertion containing 
--at least 8 to 9 columns using all types of constraints. 
--Also, create a sub-table with a foreign key relationship to the main table.


--Creating Main Table:

CREATE TABLE Companies(
Company_ID int identity(1001,1) primary key,
Company_Name varchar(200) not null,
Company_Email varchar(255) unique,
Company_Type varchar(100) default 'Not MNC',
Total_Employees int check(total_employees>10),
Location varchar(200),
Company_Income money,
Active bit default 0
)

insert into Companies values('Tech Mahendra','techm@gmail.com','MNC',10000,'Hyderabad',900000.00,1),
('Virtusa','vitusa@gmail.com','MNC',70000,'banglore',980000.00,1),
('Accenture','accenture@gmail.com','MNC',85000,'banglore',1500000.00,1),
('InteQ','inteq@gmail.com', 'Not MNC',1500,'Hyderabad',2000000.00,1),
('pariTech','paritech@gmail.com','Not MNC',500,'Banglore',4500000.00,0),
('InferTech','infer@gmail.com','Not MNC',1000,'Chennai',230000.00, 0),
('HCL','hcl@gmail.com','MNC',60000,'Delhi',75600000.00,1)

select * from Companies


--Creating Sub Table with a foreign key relationship to the main table.
create table Employes(
Sno int identity(200,1) primary key, Emp_Name varchar(200) not null,Company_ID int foreign key(company_id) references Companies(company_id),
Salary money default 20000
);
select * from Employes
insert into Employes values('Ranjith', 1001, 100000),
('Rajkumar',1001,120000),
('Tony',1002,70000),('Sidu',1005,70000),('Raju',1006,65000),('Aravind',1004,68000)