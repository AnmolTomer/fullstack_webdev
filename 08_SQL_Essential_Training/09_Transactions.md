# 9. Transactions

## 09_01 What are transactions?

- In database terminology, a transaction is a group of operations that are handled as one unit of work. In practice, this means that we may have many operations and if any of the operations fails, then the entire group / batch of operations is treates as fail, and the database is restored to its state before the group of operations or transaction was started.

- Say there is a financial application, where several tables needs to be updated for a given transaction, if any of these operations fails, corresponding data in other table would be out of sync and invalid. By combining all these actions into a single transaction, the state of the database will be automatically rolled back to a valid state, if any of the individual operations fails.

- Transactions are also used to ensure that concurrent operations result in a state as if they were handled separately and sequentially. If your database is used by many clients at the same time, and they are all conducting complex operations, grouped into transactions, those transactions will affect the database as if each transaction were completed separately.

- Transactions can also improve performance, sometimes by a lot. E.g. if you have a lot of rows to insert into a table or a set of tables, each of these inserts takes time to write to the storage device, when making individual writes the database system uses resources to ensure that each row has been successfully committed to storage before the next write begins.

- When we make a group of inserts to our table as a transaction, the database system can perform many write operations together, significantly reducing the overhead associated with writing to physical media. Generally transactional operations could improve reliability and performance for larger or more complex operations.

## 09_02 Data Integrity

- Syntax for using transactions in SQL is pretty simple. We create widgetInventory and widgetSales table.

```SQL

-- Create tables
CREATE TABLE widgetInventory (
  id INTEGER PRIMARY KEY,
  description TEXT,
  onhand INTEGER NOT NULL
);

CREATE TABLE widgetSales (
  id INTEGER PRIMARY KEY,
  inv_id INTEGER,
  quan INTEGER,
  price INTEGER
);

-- Insert into widgetInventory
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'rock', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'paper', 25 );
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'scissors', 25 );

SELECT * FROM widgetInventory; -- Returns entries inserted above
SELECT * FROM widgetSales; -- Still empty, as no insertion so far in widgetSales table

-- We use transaction to insert in widgetSales and update in widgetInventory
--Begin transaction, we insert into widgetSales and we update widgetInventory to reduce item with id = 1 by 5.
BEGIN TRANSACTION;
INSERT INTO widgetSales ( inv_id, quan, price ) VALUES ( 1, 5, 500 );
UPDATE widgetInventory SET onhand = ( onhand - 5 ) WHERE id = 1;
END TRANSACTION;

--rollback to go to the state before we made changes into widgetInventory
BEGIN TRANSACTION;
INSERT INTO widgetInventory ( description, onhand ) VALUES ( 'toy', 25 );
ROLLBACK;
SELECT * FROM widgetInventory;

-- restore database
DROP TABLE IF EXISTS widgetInventory;
DROP TABLE IF EXISTS widgetSales;
```

- You have `BEGIN TRANSACTION` followed by your statements and then `END TRANSACTION`, and all the SQL statements in between will be performed as one unit. However, syntax may vary from one database management system to another, but you can refer documentation and sample to figure that out, basics remains the same. Some might have START TRANSACTION, and COMMIT instead of END TRANSACTION and so on.

- If something wrong happens, say you started a transaction but received an error code from an intermediary payment verification API which says account doesn't have enough balance to transfer the amount, in that case you would want to abort the transaction, and all the changes that are done to the DB would have to be restored back to the state the database was in before the transaction began, in that case you would go for ROLLBACK.

- Transactions are valuable database tools and have lots of applications, and using them in SQL is fairly simple. Though, exact names to be used in syntax might differ and you would have to refer documentation for specific SQL based database system.

## 09_03 Performance

- Transactions are commonly used to increasae performance. If a long list of inserts or updates are performed as a unit, they can be performed much faster than as individual statements.

- We inserted 1000 queries into a database without using transactions and it took `99.013` seconds to finish. When using transactions for same 10000 queries time taken came out to be `0.103` seconds. That's like 961 times faster. Now this may depends on your HDD and machine specs, but this is just an example to illustrate the point that transactions are better when it comes to performance compared to raw insertions and update.

```SQL
DROP TABLE IF EXISTS test;
CREATE TABLE test(id INTEGER PRIMARY KEY, data TEXT);

BEGIN TRANSACTION;
-- COPY THE BELOW INSERT STATEMENT THOUSAND TIMES THEN RUN THE COMPARISON
INSERT INTO TEST (data) VALUES('this is a good sized line of text.');

END TRANSACTION;

SELECT COUNT(*) FROM test;
```

- Transactions are a valuable tool for increasing the performance of a database system. Keep in mind that exact names in the statements differ for syntax, and again referring documentation is the way to go.
