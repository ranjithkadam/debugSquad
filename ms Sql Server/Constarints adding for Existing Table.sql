use ranjith;

select * from laptop;

alter table laptop alter column Sno int not null;

-- Adding Primary Key for an existing table Column
alter table laptop
add constraint Pk_Laptop_SNo primary key(SNo);

insert into Laptop values (7,'MSN','i7 13th Gen',1);
insert into laptop values(6,'Xiamo','i5 10th Gen',0);


-- Adding Unique Key for an existing table Column

select * from Colleges;

alter table colleges
add constraint Uk_College_Name Unique(College_name);

update Colleges set				
College_Name='CVR' where SNo=5;  --Here we cant add same college again because college Unique

--Adding Foreign key for an Existing Column

Alter table Faculty add College_Name varchar(100)

select * from Faculty

Alter table faculty
add Constraint Fk_College_Name Foreign Key(College_Name) references Colleges(College_name);

Update faculty set
College_Name='CVR' where ID=101;

update faculty set College_Name=
case when id=102 then 'Gokaraju Rangaraju'
		when id=103 then 'Srinidhi'
		when id=104 then 'BVRIT'
		when id=105 then 'JNTUH'

		end where id in (102,103,104,105);
	
	---Adding Not Null, check and Default Constraints for Existing data in table
	select * from Cars;

	alter table cars
	alter column Company varchar(100) not null;
	 
	alter table cars
	add constraint Ck_Sno check(Sno>0)

	alter table cars add constraint Uk_Sno unique(Sno)

	alter table cars 
	add constraint DF_yearOfModel Default '2010-10-10' for yearOfModel;

	insert into Cars(Sno, Company, Price) values (6,'KIA', 3000020.00)
	--Here the default date(i.e. 2010-10-10) will added to KIA Company

	select * from Cars
