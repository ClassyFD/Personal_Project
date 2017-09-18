CREATE TABLE sandwiches
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15)
);

INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'French Dip', '3.49');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Club', '3.49');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Philly Cheesesteak', '3.49');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Grilled Chicken', '2.99');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'BLT', '2.99');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Ham and Cheese', '1.99');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Crispy Chicken', '1.99');
INSERT INTO sandwiches (table_name, name, price) VALUES ('Sandwiches', 'Grilled Cheese', '1.49');

CREATE TABLE sauces
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER
);

-- sweet
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Chocolate', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Vanilla', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Peanut Butter', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Strawberry', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Blueberry', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Blackberry', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Raspberry', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Cherry', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Hot Fudge', '0.49', 2);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Caramel', '0.49', 2);

-- salty
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Ketchup', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Mustard', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Mayo', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Ranch', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'BBQ', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Honey Mustard', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Buffalo', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Sweet & Spicy', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Sweet & Sour', '0.49', 1);
INSERT INTO sauces (table_name, name, price, type) VALUES ('Sauces', 'Garlic', '0.49', 1);

CREATE TABLE sides
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15)
);

INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Fries', '1.99');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Onion Rings', '1.99');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Tater Tots', '1.99');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Cookies', '1.99');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Chips', '1.99');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Curly Fries', '2.49');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Waffle Fries', '2.49');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Sweet Potato Fries', '2.49');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Cheese Tots', '2.49');
INSERT INTO sides (table_name, name, price) VALUES ('Sides', 'Cheese Fries', '2.49');

CREATE TABLE drinks
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER
);

-- fountain
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Coke', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Sprite', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Fanta', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Root Beer', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Mountain Dew', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Dr. Pepper', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Hi-C', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Green Tea', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Sweet Tea', '.99', 1);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Unsweet Tea', '.99', 1);

-- hot
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Roast Coffee', '.99', 2);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Cappuccino', '.99', 2);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Latte', '.99', 2);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Hot Chocolate', '1.99', 2);

-- cold
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Milk', '1.99', 3);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Frappe', '2.99', 3);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Iced Coffee', '2.99', 3);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Iced Tea', '2.99', 3);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Bubble Tea', '2.99', 3);
INSERT INTO drinks (table_name, name, price, type) VALUES ('Drinks', 'Float', '2.99', 3);

CREATE TABLE drink_flavors
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  chocolate VARCHAR(15),
  vanilla VARCHAR(15),
  strawberry VARCHAR(15),
  raspberry VARCHAR(15),
  blackberry VARCHAR(15),
  cherry VARCHAR(15),
  orange VARCHAR(15)
);

INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'available', 'available', 'available', 'available', 'available', 'available', 'available');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'available', 'available', 'available', 'available', 'available', 'available', 'available');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'available', 'unavailable', 'available', 'available', 'available', 'available', 'available');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'available', 'available', 'unavailable', 'unavailable', 'unavailable', 'available', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'available', 'available', 'available', 'available', 'available');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'available', 'available', 'unavailable', 'unavailable', 'unavailable', 'available', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');
INSERT INTO drink_flavors (table_name, chocolate, vanilla, strawberry, raspberry, blackberry, cherry, orange) VALUES ('Drink_Flavors', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable', 'unavailable');


CREATE TABLE drink_toppings
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER
);

--jelly
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Lychee Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Rainbow Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Mango Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Pineapple Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Coconut Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Passion Fruit Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Green Tea Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Coffee Jelly', '.79', 1);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Grass Jelly', '.79', 1);

--bursting
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Strawberry', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Mango', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Passion Fruit', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Orange', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Blueberry', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Green Apple', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Kiwi', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Peach', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Cherry', '.79', 2);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Honey', '.79', 2);

--other
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Tapioca Large', '.79', 3);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Tapioca Small', '.79', 3);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Crystal Red Boba', '.79', 3);
INSERT INTO drink_toppings (table_name, name, price, type) VALUES ('Drink_Toppings', 'Diamond Blue Boba', '.79', 3);

CREATE TABLE bread
(
  id SERIAL PRIMARY KEY,
  table_name VARCHAR(20),
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER 
);

-- hispanic
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Concha', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Cuerno', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Elotito', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Empanada', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Galleta', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Ojo de Buey', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Oreja', '.99', 1);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Polvoron', '.99', 1);

--vietnamese
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Red Bean Bun', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Coconut Tart', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Vanilla Buttercream', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Chocolate Buttercream', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Spring Onion Hotdog', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Spring Onion Bun', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Custard Bun', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Lotus Pastry', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Pineapple Pastry', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Red Bean Pastry', '.99', 2);
INSERT INTO bread (table_name, name, price, type) VALUES ('Bread', 'Taro Pastry', '.99', 2);