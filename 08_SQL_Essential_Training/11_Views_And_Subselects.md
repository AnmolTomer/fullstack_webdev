# 11. Views and Subselects

<!-- TODO: Practice more Subselect statements -->

## 11_01 Creating a subselect

- Subselects are effectively nested queries. In SQL, the result of a select statement is effectively a table and can always be used as you would use a table. Because of this, a select statement may be used as data source in another select statement. This usage is called a subselect.

```SQL
CREATE TABLE t ( a TEXT, b TEXT );
INSERT INTO t VALUES ( 'NY0123', 'US4567' );
INSERT INTO t VALUES ( 'AZ9437', 'GB1234' );
INSERT INTO t VALUES ( 'CA1279', 'FR5678' );
SELECT * FROM t;

-- Break the above table t of 3 rows and 2 columns into 4 columns of State, StateCode, Country and Country Code
SELECT SUBSTR(a, 1, 2) AS State, SUBSTR(a, 3) AS SCode,
  SUBSTR(b, 1, 2) AS Country, SUBSTR(b, 3) AS CCode FROM t;

--Use the result as data source in another select command
-- Use country codes into finding names of countries, ss is subselect
SELECT co.Name, ss.CCode FROM (
    SELECT SUBSTR(a, 1, 2) AS State, SUBSTR(a, 3) AS SCode,
      SUBSTR(b, 1, 2) AS Country, SUBSTR(b, 3) AS CCode FROM t
  ) AS ss
  JOIN Country AS co
    ON co.Code2 = ss.Country
;

SELECT * FROM Country;

DROP TABLE t;
```

- Subselects are a convenient form of making data available in different forms, while keeping database schema well organized and simple.

## 11_02 Searching within a result set

- Using subselect to provide a list of rows for searching a table.

```SQL
--Say we want a list of albums that have tracks with duration of less than 90 seconds or less we do following:
SELECT DISTINCT * FROM track WHERE duration <= 90;

-- Here we print every detail of those rows where we have id is matching a subselect of a particular condition
-- We use IN operator where we have a list of values
SELECT * FROM album
  WHERE id IN (SELECT DISTINCT album_id FROM track WHERE duration <= 90)
;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.duration AS secs
  FROM album AS a
  JOIN track AS t
    ON t.album_id = a.id
  WHERE a.id IN (SELECT DISTINCT album_id FROM track WHERE duration <= 90)
  ORDER BY a.title, t.track_number
;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.duration AS secs
  FROM album AS a
  JOIN (
    SELECT DISTINCT album_id, track_number, duration, title
      FROM track
      WHERE duration <= 90
  ) AS t
    ON t.album_id = a.id
  ORDER BY a.title, t.track_number
;
```

- Subselects can be used wherever we would use a table, as the result of a select is effectively another table itself. Subselect just means running query on table returned from one select statement.

## 11_03 Creating a view

- We can save our select query as a view so that we can use it over and over as if it was a table. Below we have a query which separates durations separated out in minutes and seconds for a track. We can save this query as a view, and we can do so using `CREATE VIEW`.

```SQL
-- Simple query that we want to reuse and hence wish to save as view.
SELECT id, album_id, title, track_number, duration / 60 AS m, duration % 60 AS s FROM track;

-- Create view well simply by using CREATE VIEW viewName AS <SELECT statement is the view syntax>
CREATE VIEW trackLengthInMinutes AS
    SELECT id, album_id, title, track_number,
    duration / 60 AS m,
    duration % 60 AS s
    FROM track
;

SELECT * FROM trackLengthInMinutes;

SELECT a.title AS album, a.artist, t.track_number AS seq, t.title, t.m, t.s
  FROM album AS a
  JOIN trackLengthInMinutes AS t
    ON t.album_id = a.id
  ORDER BY a.title, t.track_number
;

DROP VIEW IF EXISTS trackLengthInMinutes;
```

- When we execute the above `CREATE VIEW` this will save the view for the table in corresponding database, and now we can use that view in a query

## 11_04 Creating a joined view

- A view can be a simple query or a complex, joined query. Technique is exactly the same. We have a query that joins the track on left and album on right and shows duration in minutes and seconds we make it into a view as follows:

```SQL
CREATE VIEW joinedAlbum AS
    SELECT a.artist AS artist,
        a.title AS album,
        t.title AS track,
        t.track_number AS trackno,
        t.duration / 60 AS m,
        t.duration % 60 AS s
        FROM track AS t
        JOIN album AS a
            ON a.id = t.album_id
;

-- Use the view with substring

SELECT artist, album, track, trackno,
  m || ':' || substr('00' || s, -2, 2) AS duration
FROM joinedAlbum;

-- Just deletes the view not the table
DROP VIEW IF EXISTS joinedAlbum;
```

- When we execute the above query it creates a view by the name of `joinedAlbum`. Now we can use the view just as a table. We can do `SELECT * FROM joinedAlbum;` and it would work perfectly. Any SELECT statement can be saved as view, these are standard feature across systems and platforms.
