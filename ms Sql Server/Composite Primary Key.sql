
---Composite Primary Key

create table Banks
(
Bank_ID int identity(1,1),
Bank_Name varchar(50),
Bank_Location varchar(50),  primary key(Bank_ID, Bank_Name)
);

insert into Banks values ('SBI', 'Hyderabad'),
('ICICI', 'Banglore'),('HDFC','Mumbai');

select * from Banks


--dropping constraint i.e composite primary key
alter table banks drop constraint [PK__Banks__5953B6F0FE13A675] ;


--adding Composite Primary Key for Existing Table
alter table banks add constraint CPK_Banks primary key(bank_ID, BAnk_name);

SET IDENTITY_INSERT Banks ON;

insert into Banks(Bank_ID,Bank_Name,Bank_Location) values(5,'KDCC','Mysore');

select * from Banks;

SET IDENTITY_INSERT banks OFF;

insert into Banks values('Kotak','Mysore');

select @@IDENTITY

dbcc checkIdent('Banks','reseed',7);
insert into Banks values('Union Bank','Warangal');

select top 1 * from banks order by Bank_ID;
