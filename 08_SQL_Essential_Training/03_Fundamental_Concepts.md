# 3. Fundamental Concepts

## 03_01. Creating a Table

- Tables are created with the `CREATE TABLE` statement. Here we use the test database.

```SQL
-- CREATE Table test with column a of int type and column b of text type
CREATE TABLE test(
  a INTEGER,
  b TEXT
);

-- INSERT values into test
INSERT INTO test VALUES(1,'a');
INSERT INTO test VALUES(2,'b');
INSERT INTO test VALUES(3,'c');
-- Display entries in test table
SELECT * FROM test;
```

## 03_02 Deleting a table

- We use `DROP TABLE` statement to delete a table. And we may use `IF EXISTS` clause to delete table when we are not sure if it exists or not, so we check before dropping the table.

```SQL
DROP TABLE IF EXISTS test;
CREATE TABLE test(
  a TEXT,
  b TEXT
);

-- INSERT values into test
INSERT INTO test VALUES('one','a');
INSERT INTO test VALUES('two','b');
INSERT INTO test VALUES('three','c');
-- Display entries in test table
SELECT * FROM test;
DROP TABLE test;
```

- Be sure before deleting a table, keep backups of your data.

## 03_03 Inserting Rows

- We add row(s) into a table using the `INSERT INTO` statement. Examples are as follows:

```SQL
CREATE TABLE test(a INTEGER, b TEXT, c TEXT);

-- INSERT INTO without specifying column names, essentially you want to enter data into each column and supply it in comma separated form
INSERT INTO test VALUES(1,'This','Right Here!');

-- INSERT INTO but insert only in specified b and c columns specific String Literal values
INSERT INTO test (b,c) VALUES('That','Over there!');

-- To insert null, default values in table
INSERT INTO test DEFAULT VALUES;

-- Use the result of SELECT statement to add rows to a table, we use SELECT clause instead of values clause here
INSERT INTO test(a,b,c) SELECT id, name, description from ITEM;

-- Display updated table
SELECT * FROM test;
```

## 03_04 Deleting Rows

- We use `DELETE FROM` statement to delete rows from a table. Deleting rows is destructive, i.e. once deleted, rows cannot be recovered easily. It's better to audition your `WHERE` clause with a `SELECT` statement before you delete as shown below:

```SQL
-- Audition your WHERE clause with SELECT before deletion
SELECT * FROM test WHERE a = 1; -- Returns 2 rows

-- If you want to delete both rows you could do, more on filtering techniques later on
DELETE FROM test WHERE a = 1;

-- DELETE Row based on a particular value in a given column, mostly its the value of primary key column to identify a row uniquely
DELETE FROM test WHERE a = 3;
```

## 03_05 The NULL Value

- Null is a special state for a result with no value, it's the state that represents lack of value.. This is necessary because it's often important to distinguish between a zero value or an empty string or a non value result. WHERE clause with A = NULL doesn't satisfy the expression, NULL isn't equal to anything, so we can't test for NULL with a normal equality condition.

- To test for NULL values, we need to use a special condition `IS NULL`.

```SQL
-- Select all rows where a IS NULL
SELECT * FROM test WHERE a IS NULL;

-- Select all rows where a IS NOT NULL
SELECT * FROM test WHERE a IS NOT NULL;

INSERT INTO test VALUES (0, NULL, '');
-- SELECT from b column where value is NULL
SELECT * FROM test WHERE b IS NULL;

-- Create New table with NOT NULL constraint
DROP TABLE IF EXISTS test;

-- CREATE TABLE with NOT NULL
CREATE TABLE test (
 a INTEGER NOT NULL,
 b TEXT NOT NULL,
 c TEXT
);

INSERT INTO test VALUES (1,'this','that');

-- INSERT in b and c but not in a, notice that a is NOT NULL
INSERT INTO test (b,c) VALUES ('one','two'); -- Error while executing query, NOT NULL constraint failed
SELECT * FROM test;
INSERT INTO test (a,b) VALUES (1,'two'); -- No errors as c doesn't have NOT NULL constraint
```

- We may create rows with `NOT NULL` constraint, this will prevent rows from being inserted without a value. NULL is lack of value, and not a value.

## 03_06 Constraining Columns

- When defining our schema, we may want to define specific rules and behaviors for some of our columns. This is done by using constraints.

```SQL
DROP TABLE IF EXISTS test;

-- Give default value to a column instead of NOT NULL
CREATE TABLE test (a TEXT, b TEXT, c TEXT DEFAULT 'panda');
INSERT INTO test (a,b) VALUES ('one','two');
SELECT * FROM test;

-- Another constraint is that keeping values unique in a column. This is done for columns that hold primary keys in general
-- To create a column with unique values and default value in another column we can do following:
CREATE TABLE test (a TEXT UNIQUE, b TEXT, c TEXT DEFAULT 'panda');

-- Depending on DB, NULL values may be exempted from the unique constraint. Below might work in some systems and not work in others.
INSERT INTO test (a,b) VALUES (NULL,'two');
INSERT INTO test (a,b) VALUES (NULL,'two');
-- The above works on SQLite, on some DBMS NULL is part of unique constraint and on others it is not, depends on DB you are using.

-- Better way is to combine constraints by using UNIQUE and NOT NULL together for primary key column
CREATE TABLE test (a TEXT UNIQUE NOT NULL, b TEXT, c TEXT DEFAULT 'panda');
```

- These were some of the most common constraints. Most database systems also have additional constraints that work in a particular environment. Constraints creates rules governing the behaviors of columns in our tables. Remember, most database systems have other constraints available. You will have to check the documentation of your database to verify these additional constraints supported by your DB.

## 03_07 Changing a schema

- Soemtimes we may need to change a table's schema after it's already been defined and populated with data. We can do this with ALTER table statement.

```SQL
DROP TABLE IF EXISTS test;

CREATE TABLE test (a TEXT, b TEXT, c TEXT);
INSERT INTO test VALUES ('one','two','three');
INSERT INTO test VALUES ('two','three','four');
INSERT INTO test VALUES ('three','four','five');
SELECT * FROM test;
-- Gives us 3 rows with entries, now if we want to alter the data we use the ALTER statement as follows:
ALTER TABLE test ADD d TEXT DEFAULT 'added later';
```

- Depending on database system, you might be able to insert and even delete columns, you'll have to refer documentation to know what capabilities are available. The capabilities and the syntax of the system vary widely between systems.

- Alter table command is a powerful tool, and as such it should be used with care and uttermost caution. You have to be careful about tracking and updating any code that may depend on existing schema, before you alter the table.

## 03_08 ID Columns

- An ID column is a column that holds an unique value for each row in a table. Typically ID columns are automatically populated. The method for creating an ID column is not standardized. How you create an ID column is different for every database system. What we have here is for SQLite specifically. Specific syntax will vary for different systems and you might want to refer documentation for this.

```SQL
DROP TABLE IF EXISTS test;

-- INTEGER PRIMARY KEY constraint is followed for id column, the system will automatically generate unique, sequential number, and will enforce unique value constraint
CREATE TABLE test (id INTEGER PRIMARY KEY, a INTEGER, b TEXT);
INSERT INTO test (a,b) VALUES (10,'a')
INSERT INTO test (a,b) VALUES (11,'b')
INSERT INTO test (a,b) VALUES (12,'c')

SELECT * FROM test;
```

- Name of the column can be anything, we have taken it as id, just for consistency. When we have `PRIMARY KEY` constraint applied to a column, we have to insert values only into non ID columns, ID column will populate itself.

- A table may have only one ID column. Internally the database system creates some sort of sequence generator that's keyed to each table. Every time a row or rows are inserted into the table, the system generates a new unique value for ID column of the row we are inserting. DBMS does this whether you have id column or not. The primary key constraint in this case simply binds that value to the ID column.

- All relational databases have a primary key system for creating an ID column, though syntax may differ but functionality remains the same. ID / Primary Key or Foreign Key columns are very common in relational databases. They make it easy to create relationships between rows and different tables. Method to create these ID columns vary from system to system. Syntax we have used is for SQLite databases and isn't portable with some other database system.

## 03_09 Filtering Data

- When we query a database we are often looking for specific data. Data that fits a specific criteria. The `WHERE` clause allows us to get just the rows we are looking for instead of the entire table.

```SQL
-- Order by population in descending order the countries with population less than 100k
SELECT Name, Continent, Population From Country
  WHERE Population < 100000 ORDER BY Population DESC;
```

- WHERE clause takes a boolean logical expression. Rows are returned only if the expression evaluates as TRUE for that row. So that means in query above we are missing countries where population is unknown or have null in their population column, we expand our expression to include `OR Population IS NULL`

```SQL
-- Order by population in descending order the countries with population less than 100k or if population is null
SELECT Name, Continent, Population From Country
  WHERE Population < 100000 OR Population IS NULL
  ORDER BY Population DESC;
```

- OR gives results when either of the 2 or more conditions is true, AND returns rows when all the criterias are satisfied. E.g. of AND

```SQL
-- Order by population in descending order the countries with population less than 100k AND Continent is Oceania
SELECT Name, Continent, Population From Country
  WHERE Population < 100000 OR Continent = 'Oceania'
  ORDER BY Population DESC;
```

- There are also two notable operators that are unique to SQL for filtering results, `LIKE` operator is one of them. LIKE operator is used to filter by wildcard of literal string. E.g. includes:

```SQL
-- %island% wildcard means anything that has letters island somewhere in the string will be selected and we order the results by Name alphabetically
SELECT Name, Continent, Population From Country
  WHERE Name LIKE '%island%' ORDER BY Name;
```

- Some more regex examples, to get the countries that starts with island we will do `island%`, `%island` will only include results that have specifically island in the end, results with islands will not qualify. `_nd%` will include results whose first letter can be anything but seconds and third letters are nd followed by any letters, and the output will be Andorra, India, Indonesia of following query:

```SQL
SELECT Name, Continent, Population From Country
  WHERE Name LIKE '_nd%' ORDER BY Name;
```

- `IN` Operator: Used to select results that match values in a list. Following query matches any countries where the continent is Asia or Europe:

```SQL
SELECT Name, Continent, Population From Country
  WHERE Continent IN ('Europe','Asia') ORDER BY Name;
```

- WHERE clause allows us to filter our results, to get just the rows we are looking for. SQL provides the powerful LINK and IN operators, which further allows us to refine our searches, beyond the normal Boolean operators.

## 03_10 Removing Duplicates

- There are times when we may want to know all the different values of a column in our result without duplication. For this purpose, SQL provides the `SELECT DISTINCT` statement.

```SQL
-- Gives us only unique entries from a column
SELECT DISTINCT Continent FROM Country;

-- test.db
DROP TABLE IF EXISTS test;
CREATE TABLE test ( a int, b int );
INSERT INTO test VALUES ( 1, 1 );
INSERT INTO test VALUES ( 2, 1 );
INSERT INTO test VALUES ( 3, 1 );
INSERT INTO test VALUES ( 4, 1 );
INSERT INTO test VALUES ( 5, 1 );
INSERT INTO test VALUES ( 1, 2 );
INSERT INTO test VALUES ( 1, 2 );
INSERT INTO test VALUES ( 1, 2 );
INSERT INTO test VALUES ( 1, 2 );
INSERT INTO test VALUES ( 1, 2 );
SELECT * FROM test;
SELECT DISTINCT a FROM test;
SELECT DISTINCT b FROM test;
SELECT DISTINCT a, b FROM test;

DROP TABLE IF EXISTS test;
```

- `SELECT DISTINCT` is a powerful tool to find distinct results. Commonly used to find distinct values from a single column, but it can also be used to find distinct values from any query or expression.

## 03_11 Ordering Output

- We use `ORDER BY` clause to sort the result of queries.

```SQL
SELECT Name FROM Country;
SELECT Name FROM Country ORDER BY Name;
-- Sort in Descending Order
SELECT Name FROM Country ORDER BY Name DESC;
SELECT Name FROM Country ORDER BY Name ASC;
-- Sort by multiple columns, here we order by Continent and Name Nations of Africa in A - Z order then Nations of Asia in A-Z order
SELECT Name, Continent FROM Country ORDER BY Continent, Name;
-- Sort by continent in descending order and then Region and Name in Ascending Order.
SELECT Name, Continent, Region FROM Country ORDER BY Continent DESC, Region, Name;
```

- ORDER BY clause is used to sort the results of your queries. We can sort on multiple columns, and we can choose ascending or descending collations as per our requirements.

## 03_12 Conditional Expressions

- SQL provides a form of conditional expression. It's a bit cumbersome but it works as follows:

```SQL
DROP TABLE IF EXISTS booltest;
CREATE TABLE booltest (a INTEGER, b INTEGER);
INSERT INTO booltest VALUES (1,0);
SELECT * FROM booltest;

-- Conditional expressions
SELECT
    CASE WHEN a THEN 'true' ELSE 'false' END as boolA,
    CASE WHEN b THEN 'true' ELSE 'false' END as boolb,
```
