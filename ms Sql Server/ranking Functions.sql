select * from C_Employee

select  * , DENSE_RANK() over (order by experience) from C_Employee;

select *, Rank() over (order by Experience) from C_Employee;

select * , ROW_NUMBER() over (order by Experience) as RowNumber from C_Employee;

select *, NTILE(3) over (order by Experience) from C_Employee;