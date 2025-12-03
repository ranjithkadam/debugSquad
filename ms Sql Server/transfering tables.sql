use ranjith

select * into bk_cars from Cars

select * from bk_cars

select * into bk_emp_schema from My_Schema.Students

select * from bk_emp_schema

select * into practice1.dbo.backup_company from [practice1].dbo.Company;

--adding constraints to backup_company table:

use practice1

select * from backup_company;

alter table backup_company alter column companyId int not null;

alter table [dbo].[backup_company] add constraint Pk_companyId primary key(companyId);

alter table backup_company add constraint Uk_company_Id unique(companyId);

alter table backup_company add constraint Df_companyName default 'abc' for CompanyName;

alter table backup_company add constraint Ck_check check(companyid>1)

--transfering only structure of table to another table

select * into bk_heroStruct from heros where 1=2;

select * from bk_heroStruct

