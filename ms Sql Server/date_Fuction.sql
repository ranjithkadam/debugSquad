use PracticeDB;


--Creating date Function using variable:

declare @Joining date =getdate();
select @Joining as [Joing date];

--[or]

select getdate();
select sysdatetime();	--to get system date and time.

select datepart(YY,getdate()); --to get year.

select datepart(mm,getdate()); --to get month.

select datepart(dd, getdate()); --to get date.

select datepart(dw,getdate());	--to get day.

select datepart(hh,getdate());	--to get hours.

select datepart(n,getdate());	--to get minutes.

select datepart(s,getdate());	--to get seconds.

-----------------------------------------------

select datename(dw,getdate());	--to get day name in a week
select datename(mm,getdate());	--to get Month Name in a year.

----------------------------------------------------------------------

select dateadd(dd,10,getdate());	--to add date to current date.

select dateadd(mm,12,getdate());	--to add month to current month.

---------------------------------------------------------------------




select * from [dbo].[Employee];

alter table Employee drop column DOJ
alter table [dbo].[Employee] add DOJ date;

update employee set DOJ= '12-02-2013' where empid =203; 


