create database Practice;
use Practice;

Create table Movies(id int identity(1,1), Movie varchar(100), Director varchar(100) not null);
alter table Movies add constraint Pk_id primary key(id);

