# 10. Triggers

## 10_01 Automating Data with Triggers

- Triggers are operations that are automatically performed when a specified database event occurs. Triggers were introduced in standard SQL in 2003. By that time most database systems had already implemented triggers, so each system still has their own non-standardized syntax for triggers. How triggers are implemented and used vary significantly from system to system.

- So here we try to get an idea of how triggers work.

```SQL
--Create widgetCustomer and widgetSale table
CREATE TABLE widgetCustomer ( id INTEGER PRIMARY KEY, name TEXT, last_order_id INT );
CREATE TABLE widgetSale ( id INTEGER PRIMARY KEY, item_id INT, customer_id INT, quan INT, price INT );

--Insert 3 rows into widgetCustomer table
INSERT INTO widgetCustomer (name) VALUES ('Bob');
INSERT INTO widgetCustomer (name) VALUES ('Sally');
INSERT INTO widgetCustomer (name) VALUES ('Fred');

SELECT * FROM widgetCustomer;

--CREATE TRIGGER syntax, triggers when INSERT happens on widgetSale table
CREATE TRIGGER newWidgetSale AFTER INSERT ON widgetSale
    BEGIN
--    What trigger does is it updates the widgetCustomer table, which sets last_order_id to the NEW.id
-- New represents a virtual row in widgetSale table, we refer to this row using dot syntax
        UPDATE widgetCustomer SET last_order_id = NEW.id WHERE widgetCustomer.id = NEW.customer_id;
    END
;

--Order placed by customer 3 for item with id 1
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (1, 3, 5, 1995);
--Order placed by customer 2 for item with id 2
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (2, 2, 3, 1495);
--Order placed by customer 1 for item with id 3
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (3, 1, 1, 2995);
SELECT * FROM widgetSale;
SELECT * FROM widgetCustomer;
```

- A trigger can be an excellent way to enforce business rules, to require a table to be updated whenever another table is updated.

## 10_02 Preventing Updates

- Triggers may also be used to prevent changes to rows that may have already been reconciled or should not be changed for other reasons.

```SQL
DROP TABLE IF EXISTS widgetSale;

--Create table widgetSale, here we have a reconciled flag, and we set it to 1 for only 1 out of 3 rows we insert into table
CREATE TABLE widgetSale ( id integer primary key, item_id INT, customer_id INTEGER, quan INT, price INT,
    reconciled INT );
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (1, 3, 5, 1995, 0);
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (2, 2, 3, 1495, 1);
INSERT INTO widgetSale (item_id, customer_id, quan, price, reconciled) VALUES (3, 1, 1, 2995, 0);
SELECT * FROM widgetSale;

-- Trigger creation: Goal of this trigger is to prevent update at places where the row is already reconciled or reconcile = 1
--This trigger occurs before the update happens on widgetSale table, and raises an exception, to prevent update.

CREATE TRIGGER updateWidgetSale BEFORE UPDATE ON widgetSale
    BEGIN
        SELECT RAISE(ROLLBACK, 'cannot update table "widgetSale"') FROM widgetSale
            WHERE id = NEW.id AND reconciled = 1;
    END
;

--Update happens without any issues, since reconciled = 0 for row with id = 3
BEGIN TRANSACTION;
UPDATE widgetSale SET quan = 9 WHERE id = 3;
END TRANSACTION;


-- Update gives issue since reconcile for row with id = 2 is set to 1
BEGIN TRANSACTION;
UPDATE widgetSale SET quan = 9 WHERE id = 2;
END TRANSACTION;

SELECT * FROM widgetSale;

```

## 10_03 Timestamps

- Triggers may also be used to create timestamps. Here we will see how to use triggers to create timestamps and to update a transaction log.

```SQL
DROP TABLE IF EXISTS widgetSale;
DROP TABLE IF EXISTS widgetCustomer;

CREATE TABLE widgetCustomer ( id integer primary key, name TEXT, last_order_id INT, stamp TEXT );
CREATE TABLE widgetSale ( id integer primary key, item_id INT, customer_id INTEGER, quan INT, price INT, stamp TEXT );
-- log table similar to what we keep in transaction log
CREATE TABLE widgetLog ( id integer primary key, stamp TEXT, event TEXT, username TEXT, tablename TEXT, table_id INT);

INSERT INTO widgetCustomer (name) VALUES ('Bob');
INSERT INTO widgetCustomer (name) VALUES ('Sally');
INSERT INTO widgetCustomer (name) VALUES ('Fred');
SELECT * FROM widgetCustomer;

--Trigger that runs after insert is done on widgetSale table
CREATE TRIGGER stampSale AFTER INSERT ON widgetSale
    BEGIN
--    Update the sale column of widgetSale column, specifically the row which has the id same as where we have inserted
        UPDATE widgetSale SET stamp = DATETIME('now') WHERE id = NEW.id;
-- Update the widgetCustomer table's last_order_id column as well, so that a user placed last order of which item that id is stored too
        UPDATE widgetCustomer SET last_order_id = NEW.id, stamp = DATETIME('now')
            WHERE widgetCustomer.id = NEW.customer_id;
-- INSERT INTO widgetLog table stamp, event, username, tablename and table_id as well
        INSERT INTO widgetLog (stamp, event, username, tablename, table_id)
            VALUES (DATETIME('now'), 'INSERT', 'TRIGGER', 'widgetSale', NEW.id);
    END
;

INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (1, 3, 5, 1995);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (2, 2, 3, 1495);
INSERT INTO widgetSale (item_id, customer_id, quan, price) VALUES (3, 1, 1, 2995);

SELECT * FROM widgetSale;
SELECT * FROM widgetCustomer;
SELECT * FROM widgetLog;

-- restore database
DROP TRIGGER IF EXISTS newWidgetSale;
DROP TRIGGER IF EXISTS updateWidgetSale;
DROP TRIGGER IF EXISTS stampSale;

DROP TABLE IF EXISTS widgetCustomer;
DROP TABLE IF EXISTS widgetSale;
DROP TABLE IF EXISTS widgetLog;
```
