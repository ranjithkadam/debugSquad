use Ranjith;

-- String Functions():

-- 1.Len() : to find the length of Tuple.
select * from [dbo].[Employees]
select len(name) as lengthOfName, len(Email_ID) as LengthOfEmail from [dbo].[Employees];

-- 2.Upper(): To Convert into Upper case:
select UPPER(name) as names from [dbo].[Employees]

--3.Lower(): To convert into Lower case:
select Lower(name) as names from Employees

--4. ltrim(): to Trim the left Spaces in the String:
select ltrim('     Rk    ')

--5. rTrim(): to Trim the right spaces from the String:
select Rtrim('ranjith     ');

-- 6. Charindex('char','TotalString'): to find the index value.
select CHARINDEX('a',name)  from Employees -- Index values starts from 1 in sql.

--7. substring('string',startvalue , endvalue): It finds the substring in the main String.

select subString('welcome to sql',3,10);

--8. space(): used to add the space in the string .
select 'welcome'+space(3)+'sql';

--9. left(value): Returns the left values only.
select left(name,2) from Employees

--10. left(value): Returns the right values only.
select right(name,2) from Employees;

--11. reverse(): it reverse the string.
select reverse(name) from Employees ;

--12. stuff('string',startsvalue,endvalue,'Newstr')
select STUFF('welcome to Javascript',11,25,'sql');

--13. cancat('str1',' ','str2'): used to add string;
select concat(name,' fromEmployeeTable') as concateColumn from Employees

