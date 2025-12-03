select Student_name from My_Schema.Students group by Student_name ;

select max(marks) from My_Schema.Students ;

select * from My_Schema.Students;

alter table My_Schema.Students
alter column Student_name varchar(100) not null;

alter table My_schema.Students

add constraint Pk_stuId primary key(id)

alter table My_Schema.Students
add constraint Uk_id unique(id)

alter table My_schema.students
add constraint Df_marks Default 36 for marks

alter table My_schema.Students
add constraint Ch_marks check(marks>1)


create table #Emp(ID int primary key, name varchar(100) not null, salary  float not null)

insert into #Emp values(1,'apple',547483),(2,'apple',5432.543),(3,'ball',40000.3),(4,'king',9000.00)

insert into #emp values(5,'raj',800.00)

select * from #Emp right join Emp on #emp.name= emp.name left join Cars on Emp.id= cars.SNo order by emp.id desc;

