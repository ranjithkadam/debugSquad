use ranjith;
select * from Company;
insert into Company values (4, 'Reddy Labs','Pharma',1232112332.00),(5,'Birla','Ciment',876543234.00);

Create table Faculty(ID int, Name varchar(50), EmailID varchar(50), DOJ Date);
select * from Faculty;
Insert into Faculty values(101, 'John','john@gmail.com','2015/02/12'),(102,'Marsh','marsh@gmail.com','2022/11/02'),
(103,'lucky','lucky@gmail.com','2024/02/21'),(104,'kaira','kaira@gmail.com','2023/09/10'),
(105,'lokhi','lokhi@gmail.com','2018/10/23');
alter table Faculty add Salary money;
update Faculty set Salary=85000 where id=105;


CREATE TABLE Voters(VoterID int, Voter_Name varchar(100), Voter_Location varchar(100), Voter_Age int);

Insert Into Voters values(1234, 'Vikram', 'Hyderabad', 23),(2343, 'Ramcharan','Warangal',34),(3456,'Ravi','Khammam',29),
(4567,'Kushi','Patancharuvu',28),(5671,'BhagyaSri','L B nagar', 18);
select * from Voters;
update Voters set Voter_Location = 'Hanamkonda' where VoterID=4567;
update Voters set Voter_Location='Kamalapur' where VoterID=5671

Create Table Employees(ID int, Name varchar(100), Gender Char(2));
Alter table Employees add Email_ID varchar(100), Salary money, Department varchar(50), DOJ date;
select * from Employees

Insert into Employees values(101, 'Ramesh','M', 'ramesh@gmail.com',80000,'Developer','2010/10/23'),
(102, 'Vamsee','M','vamsee@gmail.com',130000,'Manager','2019/03/14'),
(103, 'Sri','F','sri@gmail.com',75000,'Marketing','2020/08/24'),
(104, 'Kiran','M','kiran@gmail.com',130000,'HR','2010/03/22'),
(105, 'Malvika','F','malvika@gmail.com',65000,'Web Developer','2017/11/04')