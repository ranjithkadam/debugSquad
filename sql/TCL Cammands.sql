use Ranjith;

select * from Emp;
alter table Emp add Phone BigInt;

update Emp set
Phone=789765 where id=2 or id=4;

insert into Emp values(6, null,null, null,null);


--TCL(Transactional Control Language) cammands BEGIN TRAN, ROLLBACK, COMMIT
begin tran
update Emp Set 
Phone=987656 where id=6;

rollback;
commit;

delete from Emp where name is null;
select * from Emp;

