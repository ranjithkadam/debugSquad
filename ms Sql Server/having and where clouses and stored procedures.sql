use practice1
CREATE TABLE Employees (
    empid INT PRIMARY KEY,
    empname VARCHAR(50),
    age INT,
    city VARCHAR(50),
    country VARCHAR(50),
    email VARCHAR(100),
    salary INT
);
INSERT INTO Employees (empid, empname, age, city, country, email, salary)
VALUES
(1, 'John', 25, 'London', 'UK', 'john@uk.com', 5000),
(2, 'Smith', 31, 'New York', 'US', 'smith@us.com', 15000),
(3, 'Rambabu', 28, 'Hyderabad', 'INDIA', 'rambabu@india.com', 7000),
(4, 'Nicholas', 36, 'San Diego', 'US', 'nicholas@us.com', 28000),
(5, 'Mary', 22, 'London', 'UK', 'mary@uk.com', 6000),
(6, 'Sophia', 26, 'New York', 'US', 'sophia@us.com', 18000),
(7, 'Wolski', 37, 'Walla', 'Poland', 'wolski@us.com', 24000),
(8, 'Joseph', 32, 'Toronto', 'Canada', 'joseph@canada.com', 20000),
(9, 'Suresh', 42, 'Banglore', 'INDIA', 'suresh@india.com', 32000),
(1002, 'Priya', 29, 'Hyderabad', 'INDIA', 'priya@india.com', 26000);


select country, sum(salary) as [min salary]  from Employees group by country,city

 
 select country, sum(salary) from Employees group by country having sum(salary)>15000 and sum(salary)<50000

select city, sum(salary) from Employees group by city having sum(salary)>20000 or sum(salary)<30000

sp_rename 'Account','Accounts'

select * from accounts

sp_rename 'Accounts.Bank Name','Bank Name'

sp_renamedb 'practice1','PracticeDB'