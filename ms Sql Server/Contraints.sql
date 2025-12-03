use RANJITH;
--Contraints(Primary key, Foreign key, unique, Default and Check)
--usage of Primary Key and Not Null 
CREATE TABLE movies(MovieID INT Primary key,Movie_Name varchar(100) not null,Hero_Name varchar(50),
Budget money);
select * from Movies;

insert into Movies(MovieID, Movie_Name) values(1,'baahubali'),(2,'RRR'),(3,'Chatrapathi'),(4,'Kaleja')

update movies set 
Hero_Name='NTR & Ram Charan',
Budget=650000.00 where MovieID=2;

update movies set 
Budget=1000000.00 where MovieID in(3,4);

update movies set
Hero_Name='Prabhas' where MovieID=3;

update movies set
Hero_Name='Mahesh Babu' where Movie_Name='kaleja'

select * from movies where Hero_Name='Prabhas';

alter table movies add Rating int;

select * from Movies;
--Usage of TCl (Transaction Control Language) i.e., BEGIN TRANS, COMMMIT, ROLLBACK
begin tran
update movies set
Rating=5 where MovieID in(1,2,3,4)

commit
rollback

-- usage of Unique Contrains 
create table Songs(Song_Id int primary Key, Song_Name varchar(200) not null unique);
Alter table Songs
Alter column Song_name varchar(200) not null;

insert into songs values(1001, 'titleSong');
insert into songs values(1002, 'titleSong'); --here we got error because song_name must be unique

--Using default Constrain as
alter table Songs 
add Release_date DATE default '2025-11-01';

alter table Songs drop Column Release_date;

update Songs set Release_date=default where Song_Id=1001

alter table Songs add time_stamp timestamp; 
select * from Songs

alter table Songs drop column time_stamp;


-- Using 'Check' Constraint
 
 create table Personal_details (Id int primary key, name varchar(100), Age int check(Age>1))
 
 insert into Personal_details values(1, 'Hiddy',10)

 select * from  Personal_details;

 insert into Personal_details values(2,'majnu',2);

 -- Foreign key usage

 create table Country_Locations(id int, name varchar(50), Location_PIN int Primary key);
 insert into Country_Locations values(200, 'india', 456765),(201, 'America',65432);
 select * from Country_Locations;

 Create table locations(Location_ID int Primary key, Location_Name varchar(100) not null,
	Location_PIN int default 505102 , Foreign key(Location_PIN) references Country_Locations(Location_PIN));

	select * from locations;

	insert into locations values
	(103,'jjhh', 456765);

	insert into locations values
	(107,'jjhh', 456765);

	delete from locations where Location_ID=107