CREATE database bamazon;
USE bamazon;
CREATE TABLE products (
  item_id int primary key not null auto_increment,
  product_name VARCHAR(20) NOT NULL,
  department_name VARCHAR(5) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INT,
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("821091", "Toshiba 50LF621U19 50-inch 4K Ultra HD Smart LED TV HDR - Fire TV Edition", "Electronics", 299.99, 100);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("891029", "Samsung QN55Q6F Flat 55” QLED 4K UHD 6 Series Smart TV 2018", "Electronics", 399.99, 120);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("802931", "LG Electronics (22LJ4540) 22-Inch Class Full HD 1080p LED TV (2017 Model)", "Electronics", 116.99, 75);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("711903", "Clorox Disinfecting Wipes Value Pack, Bleach Free Cleaning Wipes - 75 Count Each (Pack of 3)", "Health and Household", 10.99, 600);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("782098", "Eye Cream Moisturizer (1.7oz) 94% Natural Anti Aging Skin Care", "Health and Household", 19.99, 200);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("901212", "Norton Security Premium – 10 Devices – 1 Year Subscription - Product Key Card - 2019 Ready", "Software", 39.99, 300);
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ("912904", "Microsoft Office Home and Student 2019 Activation Card by Mail | 1 person, Compatible on Windows 10 and Apple macOS", "Software", 149.99, 100);

SELECT * FROM products;