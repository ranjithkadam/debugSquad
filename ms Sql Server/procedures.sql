use PracticeDB;

CREATE PROCEDURE Emp_Details
as 
begin

select * from dbo.Employ
end

exec Emp_Details

create procedure Emp_Insert @id int as begin 
select * from Employ where id=@id
end

exec Emp_Insert 1;

create procedure Multi_Parameters 
@empId int ,
@empName varchar(100),
@income money
as begin
insert into Employ values (@empId, @empName, @income)
end;

exec Multi_Parameters 4, 'Krishna', 15000;

create procedure Delete_Procedure
@emiId int
as
begin 
delete from Employ where id = @emiId
end

exec Delete_Procedure 5