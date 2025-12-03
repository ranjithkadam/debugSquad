use ranjith
select * from Employees

--Arthmetic Operators(+,-,*,/,%):

select salary+200 from Employees
select salary-200 from Employees

select id*2 from Employees

select id%2 from Employees

select salary/10 from Employees

--Comparision Operators( <, >, <=, >=, !=, is null, like, in, between)
select * from Faculty

select * from Faculty  where Salary<40000;
select * from Faculty where salary >50000;
select * from Faculty where salary >=50000;
select * from Faculty where salary <=50000;
select * from Faculty where name != 'John';		--here we can use (!=)
select * from Faculty where salary is null;
select * from Faculty where salary != null;
select * from Faculty where Salary between 40000 and 80000;

select * from Faculty where name like '%a%';
select * from Faculty where name like '_a___';
select * from Faculty where name like '____';
select * from Faculty where name like '%h';
select * from Faculty where name like 'k%';

select * from Faculty
select name,salary from Faculty where Salary in (50000);


--Logical operators
select * from Faculty where Name='John' or salary=50000;
select * from Faculty where Name='John' and salary=45000;
select * from Faculty where not name='John';

select (name+EmailID)  from Faculty;
select distinct(EmailID)  from Faculty;





