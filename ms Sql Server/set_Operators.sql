use PracticeDB

create table students_2024(
id int primary key,
student_name varchar(100),
student_marks int
)

insert into students_2024 values(101,'Ram',90),(102,'Sita',85),(103,'Krish',80),(104,'vamsi',75),(105,'mahesh',65);

create table students_2025(
id int primary key,
student_name varchar(100),
student_marks int
)

insert into students_2025 values(106,'Meera',90),(102,'Sita',85),(108,'Prabhu',85),(104,'vamsi',75),(110,'Vikas',60);

select * from students_2024
union 
select * from students_2025

select * from students_2024
union all
select * from students_2025;

select * from students_2024
intersect
select * from students_2025;

(select * from students_2025
except
select * from students_2024)
union
(select * from students_2024
except
select * from students_2025);