# 7. Dates and Times

## 07_01 Dates and Times in SQL: Overview

- Dates and Times have specific properties that are important to understand in database systems. They can be used for chronological and directional values, as well as for timestamp or other metadata, within a system or application. Dates and times are typically represented in standard SQL format, with the most significant parts to the left, and least significant parts to the right. This format works well for the database sorting and searching operations.

- Dates and Times are generally stored as UTC, UTC is technically equivalent to Greenwich Mean Time (GMT). This standardization allows unambiguous relative date and time calculations across local and international boundaries. UTC is easily converted to and from local time zones for reporting and display purposes. The SQL standard does not specify types for dates and times. Most database systems have special types set aside for dates and times. These types are usually represented as packed integer or decimal values and are optimized for date and time calculations.

- These can be DATE, TIME, DATETIME, YEAR, INTERVAL etc. Other database systems simply use text or varchar types for dates and times. The conversion to and from text is generally minimal and it's cost is mitigated by the fact that even when stored in a specific format, these conversions happen often enough that the number of conversions is generally not increased or decreased by storing the data one way or the other.

## 07_02 Date and Time related functions

- Every database system has it's own set of functions specifically tasked for handling dates and times. These functions are not standardized. Here we see Date and Time related functions for SQLite.

```SQL
-- Return the timestamp, current date and time in UTC timezone
SELECT DATETIME('now','localtime'); -- Return time and date for local time zone
SELECT DATETIME('now');

-- Return date
SELECT DATE('now','localtime'); -- Just the date
SELECT DATE('now');

-- Return time
SELECT TIME('now'); -- Just the time

SELECT DATETIME('now', '+1 day'); -- Current DateTime + 1 Day
SELECT DATETIME('now', '+3 days'); -- Current + 3 days
SELECT DATETIME('now', '-1 month');-- And so on
SELECT DATETIME('now', '+1 year');
-- Combine multiple arguments for more complex calculations
SELECT DATETIME('now', '+3 hours', '+27 minutes', '-1 day', '+3 years');
```
