use ranjith;

--IDENTITY is DDL cammand 
create table persons(
SNO int identity(1,1),
name varchar(100),
tel bigInt
);

insert into persons values ('raj','956788765'),('mith','98765437'),('south','987654456')
select * from persons

delete from persons where SNO in(4,5,6)

select @@IDENTITY 

dbcc ind('ranjith','persons',1);  --returns the pageID
dbcc checkIdent('persons',reseed,11); --Reseed command.

insert into persons values ('king','7898765767')