# 0. Introduction

## 0.1 Understanding SQL & Course Overview

- Goal is to understand and use SQL effectively in any DB environment. We will start with basics, how databases are organized, how relational databases work. We will see how to use `SELECT` statement and how to create, update and delete data from tables.

- We will see how to effectively format our code and how the basic structure of SQL works. We will go over creating and deleting tables, data types, aggregate queries, joins, transactions, sub selects, views and other features of SQL.

- Finally we will go over creation of a CRUD application. Understanding SQL will help you understand and work with relational database applications.

- Course allows you to use standard SQL in your applications. Since, most modern database systems were developed before SQL was standardized, each system tends to use variations of the language. Some of these variations deviate from the standard. This course uses SQLite for all the code and demonstrations.

- SQLite is likely different from your database system, and that's expected, as every DB has their own variations of SQL. SQLite follows the standard more closely than most other database systems. SQLite comes pre-installed on most platforms, including most web servers, mobile devices, and even desktop OS environments. Entire DB is stored in a single cross-platform file.

- Other database systems will be different. Most DBMS predate the standard by many years, they may need to support a lot of non standard legacy code. Syntax used by your system may vary from the standard and some standard features may be missing, and other non standard features may be common practice. This course is focused on providing a solid foundation in standard SQL.

---

# 1. Installation

- Install SQLite Studio from [here](https://sqlitestudio.pl/). Import the database files from [db](db) directory.

- Open SQL Editor in SQLite Studio. `Alt+E`. You can execute query by pressing F9.

---

# 2. SQL Overview

## 02.01 About SQL

- We will be introduced to basic elements of SQL in this section, so that we can navigate the concepts and exercises in rest of the course. These are just bare minimum details related to syntax and terminologies, more details will follow up.

- SQL is designed for a specific task, to operate and manage a relational database. While capable of complex operations, SQL is a simple language with a simple syntax.

- A statement is the unitive execution in SQL. Below we see a statement, which extracts rows from DB where Continent is equal to Europe.

![](https://i.imgur.com/lRou8Ze.png)

- A SQL statement is terminated with a `;`. Semicolon may not be required in all contexts and implementations but it is usually a good idea to include it. A SQL statement often includes one or more clauses. Above we have used a `FROM` clause, this specifies which table to select from the given database, likewise, `WHERE` clause is used to specify which rows to select and on what basis, here we select on basis of Continent's value being Europe.

- Clauses together constitute a statement. A statement may be simple or complex. Four fundamental functions of a database system are create, read, update and delete. `CRUD`

- In standard SQL, the SELECT statement is used for all queries that return values. Some database engines have non-standard statements, that can also be used to retrieve information from the databse, often metadata about the data itself.

- In standard SQL, the SELECT statement is how you get data from the database. The `INSERT` statement is used to add a row to a table, this is the `C` in `CRUD`. E.g. can be as follows:

```SQL
INSERT INTO Customer (name,city,state) VALUES ('Chris Evans','Washington','DC');
```

- With INSERT, we may specify the table and the columns and the data that will be filled in those columns.

- `UPDATE` statement is used to change data, this is the U in CRUD. `WHERE` clause selects which rows to be updated, and `SET` clause to specify the data to update the values with. We have done indentation here, for better readability.

```SQL
UPDATE Customer
  SET
    Address = '123 Test Address',
    Zip = '492098'
  WHERE id = 5;
```

- `DELETE` is used to remove rows, this is D in CRUD. WHERE clause is used to select which row or rows are deleted. We will go into details later on in the course about these statements.

## 02_02 Database organization

- The purpose of a database is to organize our data and to make it available in convenient forms. SQL is a language for managing a relational database. A relational DB is organized in 2-D tables comprised of rows and columns. A relational DB has tables, can be one or multiple for that matter.

- Below we see a database with 3 tables, entries of one of the tables:

![](https://i.imgur.com/mPq85Rf.png)

![](https://i.imgur.com/y7fs40M.png)

- A row is like an individual record wrt a particular customer or entity. A column is like a field. Each row in a table has a unique key to identify the row specifically. The table's unique key may or may not correspond with a column in the table. Sometimes the unique key is hidden, but table must have one, regardless. When a column is used as an unique key, it is often called primary key. The primary key simply means it is a column that is used as the unique key to identify rows for that table.

- Table's keys are used to create relationships between tables. In the example below, sale table has columns for `item_id` and `cust_id` from `item` and` customer` tables, these are called foreign keys because they refer to the keys of other tables. The `item_id` column in sale table refers to the id column of item table. `id` is the primary key for the `item` table, this allows for a row in the sale table to refer to a particular row in the item table. Similarly, `cust_id` is the primary key of the customer table as foreign key in sale table, this allows a row in sale table to refer to a particular row in the customer table. These relationships make it possible to use joined queries, to treat rows in several tables as joined units.

![](https://i.imgur.com/b4cASgP.png)

## 02_03 SELECT Statement

- SELECT statement returns results, or a set of results from a query. We have chosen the world database. SELECT statement is the very core of SQL, it's how you retrieve data in SQL.

- SQL statements are written in all CAPS as a standard practice, literal strings are placed in single quotes `''`, and semicolon is generally included as a good practice at the end of your query, you can give a name to a query result by using the `AS` keyword. AS clause can be used to name a column. It creates an alias identifier for the column, more examples of this later in course. SELECT is used to return results of a query.

```SQL
SELECT 'Hello, World' AS Result;
```

- Most queries are going to be from a database, and here we have selected the world database. To get all rows and columns from country table of world database we can do following:

```SQL
SELECT * FROM Country;

-- If you want columns arranged in a different order we could use ORDER BY
SELECT * FROM Country ORDER BY Name; -- Alphabetical order

-- If you want only a few columns, you can give comma delimited list as follows:
SELECT Name, Continent, Population, LifeExpectancy AS "Life Expectancy" FROM Country ORDER BY Name;
```

## 02_04 Selecting Rows

- We can use `WHERE` clause to specify a condition to select rows.

```SQL
-- Use AS to rename a column that's returned from SELECT, AS is used to create Alias name for a column Double quotes used for anything other than literal strings
SELECT Name, Continent, Population, LifeExpectancy AS "Life Expectancy" FROM Country WHERE Name='United States';
-- To select countries that are from Asia only and arrange by Name in alphabetical order we can do
SELECT Name, Region, GovernmentForm, HeadOfState FROM Country WHERE Continent='Asia' ORDER BY Name;

-- If you want to limit orders say you want to receive only top 5 entries you could do LIMIT 5
SELECT Name, Region, GovernmentForm, HeadOfState FROM Country WHERE Continent='Asia' ORDER BY Name LIMIT 5;

-- If you want next 5 after skipping first 10 you can use OFFSET
SELECT Name, Region, GovernmentForm, HeadOfState FROM Country WHERE Continent='Asia' ORDER BY Name LIMIT 5 OFFSET 10;
```

- This is a quirk in SQL that clauses needs to be in a particular order. `ORDER BY` has to be after any `WHERE` clause, `LIMIT` and `OFFSET` needs to be last, and `FROM` the name of the table has to be first. So the sequence has to be FROM, WHERE, ORDER BY, LIMIT, OFFSET.

## 02_05 Selecting Columns

- We can choose which columns to return by listing columns in our select statement. We will use world database for this. We can just write columns names separated by comma.

```SQL
SELECT Name, Region, GovernmentForm, HeadOfState FROM Country;
```

## 02_06 Counting Rows

- We can use the count function to count rows instead of listing them. We use the world database.

```SQL
SELECT COUNT(*) FROM Country; -- Gives us number of rows in country table

-- Use a where Clause to count countries with population greater than 100 Million
SELECT COUNT(*) FROM Country WHERE Population > 100000000;

-- Add another condition using AND
SELECT COUNT(*) FROM Country WHERE Population > 100000000 AND Continent = 'Asia';

-- To count entries in LifeExpectancy Column
SELECT COUNT(LifeExpectancy) FROM Country;
```

## 02_07 Inserting Data

- We use test db here. We can insert data into a table using `INSERT` statement.

```SQL
INSERT INTO customer (name,address,city,state,zip)
    VALUES ('Fred Flintstone', '123 Cobblestone Way','Bedrock','CA','91234');

-- Populate only some of the columns
INSERT INTO customer (name,city,state)
    VALUES ('Jimi Hendrix', 'Renton','WA');
SELECT * FROM customer;
```

## 02_08 Updating Data

- We use the `UPDATE` statement to update particular values in a row in following manner:

```SQL
UPDATE customer SET address = '123 Music Avenue', zip='98056' WHERE id = 5;
UPDATE customer SET address = NULL, zip=NULL WHERE id = 5;
```

## 02_09 Deleting Data

- We use the `DELETE FROM` statement to delete rows from a table.

```SQL
SELECT * FROM customer WHERE id = 4;

DELETE FROM customer WHERE id = 4;
SELECT * FROM customer;

DELETE FROM customer WHERE id = 5;
SELECT * FROM customer;
```

---
