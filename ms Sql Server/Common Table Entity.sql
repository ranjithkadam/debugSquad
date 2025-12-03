use practiceDB;

-- Common table Entity:

with shortcut as (select * from Employee)

select * from shortcut;

----------------------------

with shortcut as (select * from Employee)

select EmpId from shortcut group by EmpId;
