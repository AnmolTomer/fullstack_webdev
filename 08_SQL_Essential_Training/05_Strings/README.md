# 5. Strings

## 05_01 About SQL Strings

- SQL has a number of operators and functions for dealing with strings. In standard SQL, a literal string is represented by single quotes. Older versions, notably MySQL use double quote marks for literal strings.

- If you want to use the single quote in your literal string, you use two of them to represent one single quote in string, one is used as escape char.

```SQL
SELECT 'Here''s a single quote mark.';
```

- String handling tends to be platform specific in SQL. SQLite, PostgreSQL and many other vendors provide support for string concatenation in SQL.

```SQL
-- Standard SQL
SELECT 'This' || ' & ' || 'that' ;

-- MySQL uses a `CONCAT` function
SELECT CONCAT('This', ' & ', 'that');

-- Microsoft SQL uses a non standard operator +
SELECT 'This' + ' & ' + 'that';
```

- String function also varies from system to system. There are really just a few string functions that are considered standard and even these are not supported on different systems. SQLite supports these functions as close to the standard as possible.

```SQL
SUBSTR(string, start, length);
LENGTH(string);
TRIM(string);
UPPER(string);
LOWER(string);
```

## 05_02 Finding length of a string

- While the SQL standard does not include a function for finding the length of a string, most modern database systems do include one such function in some form, usually it's called length. length function is really simple, takes string as one argument and returs its length.

```SQL
-- Get length of string zebra
SELECT LENGTH('zebra') AS LEN;

-- Returns the cities by length of their names and lists the length of their names in longest to smallest city order
SELECT Name, Length(Name) AS Len, Population FROM City ORDER BY Len Desc, Name;
```

- While length isn't a standard SQL function, it is present and supported in most database systems.

## 05_03 Selecting part of a string

- Just like length, the SQL standard does not include the substring function, but all the major database engines have support for this feature. The name of the function may be different, and there may be other variations, but this is generally how it works. We will use the album database for this. We are going to start by just showing the substring function.

- In SQLite Substring function is named `SUBSTR`. The first argument is the string, and the second argument is the starting position for the substring.

```SQL
-- Starting position is 6, so string is returned
SELECT SUBSTR('this string',6);
-- Specify the number of characters to return as third argument, will return str
SELECT SUBSTR('this string',6,3);

-- E.g. There's a release data in the album table, we could get all of the released date column from album table as follows:
SELECT released FROM album ORDER BY released; -- Entries are just strings

-- To transform a date in a column given as 1959-08-17 we could use substr in the following manner, notice year is from 1 and 4 char, then from 6th index to 2 chars i.e. 6 and 7 are month and from 9 to 2 chars i.e. 9 and 10 are Day
SELECT released,
    SUBSTR(released, 1, 4) AS Year,
    SUBSTR(released, 6, 2) AS Month,
    SUBSTR(released, 9, 2) AS Day
    FROM album ORDER BY released
;
```

- This function can be useful when parsing out packed data from a text column.

## 05_04 Removing Spaces

- Sometimes, especially when dealing with input from users we need to remove spaces or other characters from the beginning and or end of the string. This is what the `trim()` function does.

```SQL
-- TRIM removes spaces from both the sides
SELECT TRIM('    string    ');

-- LTRIM removes spaces from the string on the left side, not from the end
SELECT LTRIM('    string    ');

-- RTRIM removes spaces from the string on the right side, not from the beginning
SELECT LTRIM('    string    ');

-- Specify a custom character to remove from string, instead of spaces
SELECT TRIM('....string....', '.');
```

- Trim function can be useful to process user input, where user may not realize that spaces are significant. It can also be used for stripping other repetitive characters from strings.

## 05_05 Folding Case

- There are circumstances where it can be very useful, to force a string into all lowercase or uppercase characters. SQL provides the UPPER and LOWER functions for this.

```SQL
--Not equal
SELECT 'StRiNg' = 'string';

-- Equal
SELECT LOWER('StRiNg') = LOWER('string');

-- Equal
SELECT UPPER('StRiNg') = UPPER('string');

SELECT UPPER(Name) FROM City ORDER BY Name;
SELECT LOWER(Name) FROM City ORDER BY Name;
```
