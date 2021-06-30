# 08. Aggregates

<!-- TODO: Aggregate and Aggregate functions -->

## 08_01 What are aggregates ?

- Aggregate data is information derived from more than one rows at a time upon query. SQL has powerful features for dealing with aggregate data.

- Count for example is an aggregate function, it returns the single value from a query that spans over many rows of data. E.g. if we want to know how many countries are represented in each region, this is where we see the true power of aggregate functions in SQL.

- The `GROUP BY` clause groups the results, before calling the aggregate function. This allows us to apply the aggregate function to groups of data rather than the entire query.

```SQL
-- Groups the count of countries in a region in desc order
SELECT Region, COUNT(*) AS Count
    FROM Country
    GROUP BY Region
    ORDER BY Count DESC, Region
;

-- Album DB - Find how many tracks each album has, we group by album id and order by number of tracks
```

- This also works with JOIN queries.

```SQL
SELECT a.title AS Album, COUNT(t.track_number) as Tracks
  FROM track AS t
  JOIN album AS a
    ON a.id = t.album_id
  GROUP BY a.id
  ORDER BY Tracks DESC, Album
;
```

- We can use the `HAVING` clause to specify some conditions in aggregate functions.

```SQL
SELECT a.title AS Album, COUNT(t.track_number) AS Tracks
  FROM track AS t
  JOIN album AS a
    ON a.id = t.album_id
  GROUP BY a.id
  HAVING Tracks >= 10
  ORDER BY Tracks DESC, Album
;
```

- Using `WHERE` as well as `HAVING` clause:

```SQL
SELECT a.title AS Album, COUNT(t.track_number) as Tracks
  FROM track AS t
  JOIN album AS a
    ON a.id = t.album_id
  WHERE a.artist = 'The Beatles'
  GROUP BY a.id
  HAVING Tracks >= 10
  ORDER BY Tracks DESC, Album
;
```

- WHERE clause is used before the group by clause. WHERE clause operates on the data before the aggregation, and the `HAVING` clause has to be after the group by clause, because the having operation operates on the aggregated data, after it's been aggregated.

- `HAVING` is for aggregate data and `WHERE` is for non-aggregate data. SQL has powerful tools to operate on aggregate data. Aggregate functions operate on groups of rows rather than individual rows. They are useful on joined queries as well as straight queries. Having clause is for filtering the aggregate queries, just how where clause filters the non-aggregate queries.

## 08_02 Using aggregate functions

- SQL provides a number of functions that operate on aggregate values. AVG, MAX, MIN, COUNT are some of the examples. Queries using these can be as follows:

```SQL
SELECT COUNT(Population) FROM Country;
SELECT AVG(Population) FROM Country;
SELECT Region, ROUND(AVG(Population),2) AS 'Avg. Population' FROM Country GROUP BY Region;
SELECT Region, MIN(Population), MAX(Population) FROM Country GROUP BY Region;
SELECT Region, SUM(Population) FROM Country GROUP BY Region;
```

## 08_03 Aggregating on Distinct Values

- If and when you want your aggregate functions to operate on distinct values, SQL has the distinct keyword to be used in aggregate functions. Some of the example queries are as follows:

```SQL
--Count columns that have a value for HeadOfState
SELECT COUNT(HeadOfState) FROM Country;
-- Shows us that there are lots of duplicate values as individuals like Elisabeth II are head of multiple states
SELECT Name,HeadOfState FROM Country ORDER BY HeadOfState;
--To Count Distinct values only we do following:
SELECT COUNT(DISTINCT(HeadOfState)) FROM Country;
```

- By removing duplicates we are no longer counting just rows, we are counting each distinct value. The distinct keyword can be used with any of the aggregate functions. It's used to remove duplicates before the aggregate is called.
