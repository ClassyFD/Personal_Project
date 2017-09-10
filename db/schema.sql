CREATE TABLE sandwiches
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
);

INSERT INTO sandwiches (name, price) VALUES ('French Dip', '3.49');
INSERT INTO sandwiches (name, price) VALUES ('Club', '3.49');
INSERT INTO sandwiches (name, price) VALUES ('Philly Cheesesteak', '3.49');
INSERT INTO sandwiches (name, price) VALUES ('Grilled Chicken', '2.99');
INSERT INTO sandwiches (name, price) VALUES ('BLT', '2.99');
INSERT INTO sandwiches (name, price) VALUES ('Ham and Cheese', '1.99');
INSERT INTO sandwiches (name, price) VALUES ('Crispy Chicken', '1.99');
INSERT INTO sandwiches (name, price) VALUES ('Grilled Cheese', '1.49');

CREATE TABLE sauces
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
  category INTEGER,
  -- 1 : unsweet, 
  -- 2 : sweet
);

-- sweet
INSERT INTO sauces (name, price, category) VALUES ('Chocolate', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Vanilla', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Peanut Butter', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Strawberry', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Blueberry', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Blackberry', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Raspberry', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Cherry', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Hot Fudge', '0.49', 2);
INSERT INTO sauces (name, price, category) VALUES ('Caramel', '0.49', 2);

-- salty
INSERT INTO sauces (name, price, category) VALUES ('Ketchup', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Mustard', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Mayo', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Ranch', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('BBQ', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Honey Mustard', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Buffalo', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Sweet & Spicy', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Sweet & Sour', '0.49', 1);
INSERT INTO sauces (name, price, category) VALUES ('Garlic', '0.49', 1);

CREATE TABLE sides
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
);

INSERT INTO sides (name, price) VALUES ('Fries', '1.99');
INSERT INTO sides (name, price) VALUES ('Onion Rings', '1.99');
INSERT INTO sides (name, price) VALUES ('Tater Tots', '1.99');
INSERT INTO sides (name, price) VALUES ('Cookies', '1.99');
INSERT INTO sides (name, price) VALUES ('Chips', '1.99');
INSERT INTO sides (name, price) VALUES ('Curly Fries', '2.49');
INSERT INTO sides (name, price) VALUES ('Waffle Fries', '2.49');
INSERT INTO sides (name, price) VALUES ('Sweet Potato Fries', '2.49');
INSERT INTO sides (name, price) VALUES ('Cheese Tots', '2.49');
INSERT INTO sides (name, price) VALUES ('Cheese Fries', '2.49');

CREATE TABLE drinks
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER,
);

-- fountain
INSERT INTO drinks (name, price, type) VALUES ('Coke', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Sprite', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Fanta', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Root Beer', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Mountain Dew', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Dr. Pepper', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Hi-C', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Green Tea', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Sweet Tea', '.99', 1);
INSERT INTO drinks (name, price, type) VALUES ('Unsweet Tea', '.99', 1);

-- hot
INSERT INTO drinks (name, price, type) VALUES ('Roast Coffee', '.99', 2);
INSERT INTO drinks (name, price, type) VALUES ('Cappuccino', '.99', 2);
INSERT INTO drinks (name, price, type) VALUES ('Latte', '.99', 2);
INSERT INTO drinks (name, price, type) VALUES ('Hot Chocolate', '1.99', 2);

-- cold
INSERT INTO drinks (name, price, type) VALUES ('Milk', '1.99', 3);
INSERT INTO drinks (name, price, type) VALUES ('Frappe', '2.99', 3);
INSERT INTO drinks (name, price, type) VALUES ('Iced Coffee', '2.99', 3);
INSERT INTO drinks (name, price, type) VALUES ('Iced Tea', '2.99', 3);
INSERT INTO drinks (name, price, type) VALUES ('Bubble Tea', '2.99', 3);
INSERT INTO drinks (name, price, type) VALUES ('Float', '2.99', 3);

CREATE TABLE drink_flavors
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
)

INSERT INTO drink_flavors (name, price) VALUES ('Vanilla', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Chocolate', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Strawberry', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Blackberry', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Raspberry', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Orange', '.39');
INSERT INTO drink_flavors (name, price) VALUES ('Cherry', '.39');

CREATE TABLE drink_toppings
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER,
)

--jelly
INSERT INTO drink_toppings (name, price, type) VALUES ('Lychee Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Rainbow Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Mango Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Pineapple Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Coconut Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Passion Fruit Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Green Tea Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Coffee Jelly', '.79', 1);
INSERT INTO drink_toppings (name, price, type) VALUES ('Grass Jelly', '.79', 1);

--bursting
INSERT INTO drink_toppings (name, price, type) VALUES ('Strawberry', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Mango', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Passion Fruit', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Orange', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Blueberry', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Green Apple', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Kiwi', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Peach', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Cherry', '.79', 2);
INSERT INTO drink_toppings (name, price, type) VALUES ('Honey', '.79', 2);

--other
INSERT INTO drink_toppings (name, price, type) VALUES ('Tapioca Large', '.79', 3);
INSERT INTO drink_toppings (name, price, type) VALUES ('Tapioca Small', '.79', 3);
INSERT INTO drink_toppings (name, price, type) VALUES ('Crystal Red Boba', '.79', 3);
INSERT INTO drink_toppings (name, price, type) VALUES ('Diamond Blue Boba', '.79', 3);

CREATE TABLE bread
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price VARCHAR(15),
  type INTEGER, 
);

-- hispanic
INSERT INTO bread (name, price, type) VALUES ('Concha', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Cuerno', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Elotito', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Empanada', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Galleta', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Ojo de Buey', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Oreja', '.99', 1);
INSERT INTO bread (name, price, type) VALUES ('Polvoron', '.99', 1);

--vietnamese
INSERT INTO bread (name, price, type) VALUES ('Red Bean Bun', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Coconut Tart', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Vanilla Buttercream', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Chocolate Buttercream', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Spring Onion Hotdog', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Spring Onion Bun', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Custard Bun', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Lotus Pastry', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Pineapple Pastry', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Red Bean Pastry', '', 2);
INSERT INTO bread (name, price, type) VALUES ('Taro Pastry', '', 2);