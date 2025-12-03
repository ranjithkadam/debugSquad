select * from C_Employee

---If Condition------

if (select count(*) from C_Employee)>5
begin
print 'table full'
end;

else
begin
insert into C_Employee values('Arya','Sales', 22000, 2)
end