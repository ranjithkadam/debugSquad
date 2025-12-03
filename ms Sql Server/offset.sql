use ranjith;

select * from cars where sno desc

use practice1
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    grade FLOAT
);
INSERT INTO students (student_id, first_name, last_name, age, grade)
VALUES
(1, 'Alice', 'Johnson', 20, 88.5),
(2, 'Bob', 'Smith', 22, 91.2),
(3, 'Charlie', 'Brown', 19, 76.8),
(4, 'Diana', 'Evans', 21, 85.0),
(5, 'Ethan', 'Williams', 20, 91.2),
(6, 'Fiona', 'Taylor', 23, 79.4);

select count(*),grade from students group by grade

select top (3+2) * from students

select * from students order by student_id offset 3 rows

select * from students where student_id%2!=0

alter table Students add marks int identity(30, 22 )

select * from Students

alter table students drop column marks

 