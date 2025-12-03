select * from movies;
insert into Movies values ('baahubali', 'SS rajamouli'),('pushpa','sukumar'),('salaar','prashamthneel');

create table heros(id int identity(1,1), name varchar(100), age int, foreign key(id) references Movies(id));
insert into heros values('Prabhas',43),('Allu arjun', 38),('Prabhas',45)

select * from movies;
select * from heros;

select movies.Director, movies.Movie, heros.name from movies inner join heros on heros.id = movies.id

select heros.id, movies.Director, movies.Movie from heros right join movies on heros.id=Movies.id

delete from movies where id in(4,5,6)

sp_renamedb 'practice1','practice'

use practice1

sp_rename 'movies.movie','movie_name'

 