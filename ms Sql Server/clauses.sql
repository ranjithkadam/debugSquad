CREATE TABLE Sales (
    SaleID INT PRIMARY KEY IDENTITY(1,1),
    ProductName VARCHAR(100) NOT NULL,
    Category VARCHAR(50),
    Quantity INT,
    Price DECIMAL(10,2),
    SaleDate DATE
);

INSERT INTO Sales (ProductName, Category, Quantity, Price, SaleDate)
VALUES
('Laptop', 'Electronics', 5, 900.00, '2025-10-01'),
('Smartphone', 'Electronics', 10, 600.00, '2025-10-03'),
('Tablet', 'Electronics', 8, 300.00, '2025-10-05'),
('Headphones', 'Accessories', 15, 50.00, '2025-10-07'),
('Keyboard', 'Accessories', 20, 70.00, '2025-10-08'),
('Office Chair', 'Furniture', 4, 150.00, '2025-10-10'),
('Desk', 'Furniture', 3, 250.00, '2025-10-12'),
('Monitor', 'Electronics', 7, 200.00, '2025-10-15'),
('Mouse', 'Accessories', 25, 25.00, '2025-10-17'),
('Bookshelf', 'Furniture', 2, 180.00, '2025-10-20');


select * from Sales
select count(Quantity) from Sales group by Category having Quantity=5

select sum(quantity) from Sales

select Quantity,* from Sales order by SaleDate desc

select  Category from Sales group by Category

select  sum(Quantity) sumOfQuantity,count(*) totalrecords from Sales 
group by Category

select  Category,max(Quantity) sumOfQuantity,count(*) totalrecords from Sales 
group by Category