use ranjith


--primary key is always unique and not null 
-- 'unique' always not equal to another column values(simply not repeat values ) 
create table users(id int primary key, name varchar(10) unique);
select * from users;
 insert into users values(22, 'ranjith');
 insert into users values (23,'rajkumar');
 