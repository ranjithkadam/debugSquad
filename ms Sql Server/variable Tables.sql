
use ranjith;

declare @EmpId int
declare @Empname varchar(100)
declare @EmpSalry money

set @EmpId=101
set @Empname='ram'
set @EmpSalry=123

select @EmpId, @Empname, @EmpSalry

declare @emp table (empname varchar(10), empId int, empsalary money)
insert into @emp values ('ranjith',12,87654),('ram',98,098);


update @emp set empname='ramu' where empid=12;
select * from @emp

declare @empId int=29, @empname varchar(100)='rajkumar' ,@empSalary money=987654 
select @empid as id, @empname as name,  @empsalary as salaryinRupees