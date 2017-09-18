SELECT drinks.id, drinks.table_name, drinks.name, drinks.price, drinks.type, 
drink_flavors.chocolate, drink_flavors.vanilla, drink_flavors.strawberry, drink_flavors.blackberry, drink_flavors.raspberry, drink_flavors.cherry, drink_flavors.orange
FROM drink_flavors
JOIN drinks ON drinks.id = drink_flavors.id;
