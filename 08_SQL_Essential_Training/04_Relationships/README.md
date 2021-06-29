# 4. Relationships

## 04_01 Understanding JOIN

- It is the nature of a relational database that some tables contain information related to other tables. Using the join clause, SQL may easily perform queries on related data from multiple tables. Typically unique ID columns are used to create relationships. All modern database systems support automatic generation of these ID columns, and they work well for creating and managing complex relationships between tables.

- When we need a result, that includes related rows from multiple tables, we will need to use a joined query. The simplest and most common form of a join is the inner join. This is the default and it's the join you get when you use join keyword by itself.

![](https://i.imgur.com/nA7bpJz.png)

- The result of inner join will include rows from both the tables where the join condition is met. The outer join is less common, but still important to understand. A left outer join includes the rows where the condition is met plus all the rows from table on left, and right outer join contains the rows where conditions are met plus all rows from table on right.

![](https://i.imgur.com/cddeTp0.png)

- Right join is a special case, and many database systems do not support a right join. Generally a right join, can be re-written as a left join by simply changing the order of the tables in the query. A full outer join combines the effects of left and right joins. Many database systems do not implement full outer joins, although the effective result could be obtained from other features.

![](https://i.imgur.com/G9OWFWJ.png)

- There are many variations of these basic joins implemented in different ways by the different database systems vendors, for most purposes we just need to know the basic concepts. For more specific implementations it is recommended to consult the documentation of database system you are using.

## 04_02 Accessing Related Tables

- The ability to combine results from different from related rows in different tables is an important part of using a relational database system. In SQL, this is accomplished with the `join clause`.

```SQL
-- join example tables, left and right
CREATE TABLE left(id INTEGER, description TEXT);
CREATE TABLE right(id INTEGER, description TEXT);


INSERT INTO left VALUES ( 1, 'left 01' );
INSERT INTO left VALUES ( 2, 'left 02' );
INSERT INTO left VALUES ( 3, 'left 03' );
INSERT INTO left VALUES ( 4, 'left 04' );
INSERT INTO left VALUES ( 5, 'left 05' );
INSERT INTO left VALUES ( 6, 'left 06' );
INSERT INTO left VALUES ( 7, 'left 07' );
INSERT INTO left VALUES ( 8, 'left 08' );
INSERT INTO left VALUES ( 9, 'left 09' );

INSERT INTO right VALUES ( 6, 'right 06' );
INSERT INTO right VALUES ( 7, 'right 07' );
INSERT INTO right VALUES ( 8, 'right 08' );
INSERT INTO right VALUES ( 9, 'right 09' );
INSERT INTO right VALUES ( 10, 'right 10' );
INSERT INTO right VALUES ( 11, 'right 11' );
INSERT INTO right VALUES ( 11, 'right 12' );
INSERT INTO right VALUES ( 11, 'right 13' );
INSERT INTO right VALUES ( 11, 'right 14' );

SELECT * FROM left;
SELECT * FROM right;

-- Create a joint query, to join the left and right tables where the id's match, ON clause tells the condition under which the two tables should be joined.
--INNER JOIN returns only the intersection of two, i.e. columns where ID's match
SELECT l.description AS ld, r.description AS rd
    FROM left AS l
    JOIN right as r
    ON l.id = r.id;

--LEFT OUTER JOIN returns the intersection of two, i.e. columns where ID's match l.id = r.id as well as left table contents
SELECT l.description AS ld, r.description AS rd
    FROM left AS l
    LEFT JOIN right as r
    ON l.id = r.id;

--JOIN sale table with item table Below query gives us data from sale and item table.

SELECT s.id AS sale,s.date, i.name,i.description,s.quantity, s.price
    FROM sale AS s
    JOIN item AS i ON s.item_id = i.id;
```

- This was a very simple example of a joined query. The ability to combine results from related rows in different tables is a fundamental skill in SQL, this is what makes relationships useful in relational databases.

## 04_03 Relating Multiple Tables

- In practice, it is very common to have tables with many to many relationships. E.g. a single customer may buy many items and a single item may be purchased by many customers. This creates a many to many relationship, between customers and items. This is often implemented with a junction table.

- Sale table in test db has columns for its own id, customer_id and item_id, which refers to the id columns of item and customer table. We try to join the three tables from sale, customer and item.

```SQL
SELECT c.name AS Cust, c.zip, i.name AS Item, i.description, s.quantity as Qtty, s.price as Price
    FROM sale AS s -- sale table on left
    JOIN item AS i on s.item_id = i.id -- item table on right
    JOIN customer AS c on s.customer_id = c.id -- customer table on right
    ORDER BY Cust, Item
;
```

- Sale table is the junction table. Junction tables links many tables and perform many roles. Many to many relationships are very common in relational databases and junction tables are a very common tool for managing these relationships.

---
