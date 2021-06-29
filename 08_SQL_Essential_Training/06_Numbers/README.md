# 6. Numbers

## 06_01 Numeric Types

- SQL data types are entirely platform dependent. The data types that are available on one database management system are almost guaranteed to be different from the data types available on another database management system. This also means that the numeric functions are going to have differences. Sometimes these differences are minor, while at other times these are significant. Here we will get an idea of how numeric functions work in SQL.

- SQL has 2 basic categories of numeric types, Integer and Real. There can be variation of these types on a fully featured database management system. These types may be spelled differently or may use different terminology but the integer types will mostly fall into these 3 categories: INTEGER(precision), DECIMAL(PRECISION, SCALE), MONEY(precision, scale). Integer type for numbers with no fractional part, with an optional precision option to specify how many bits are used to represent the integer. Decimal type is for fixed precision numbers with a decimal point. These aren't real or floating point numbers. Decimal types are more accurate than real types for quantities in a specific range of values. Decimals are just integers that have been scaled to accurately represent quantities less than one.

- Some systems provide money types that are specialized cases of decimal types. Financial calculations are a very common usage for decimal types, so some systems provide specialized type for this. Real types are typically used for various precisions. They may be called real or float or some variation of these names.

- Real types sacrifice accuracy for scale, i.e. they are capable of representing very large or very small numbers but only to a limited number of significant digits.

![](https://i.imgur.com/9l3CCMd.png)

- We will see a few simple numeric functions, these are a subset of functions that are likely available on all major database systems.

## 06_02 Finding type of a value

- Most database systems allow expressions or values of different types. The type of the resulting value will depend on the rules the system uses to convert values used in the expression. In some cases, we may need to know the type of the result, and for this purpose we have the `TYPEOF` function. TYPEOF function is used to find the type of an expression.

```SQL
SELECT TYPEOF(1 + 1); -- Returns integer

SELECT TYPEOF(1 + 1.0); -- Returns real

SELECT TYPEOF('panda'); -- Returns text

SELECT TYPEOF('panda' + 'koala'); -- Returns integer
```

## 06_03 Integer Division

- When performing division operations on integer values, the results will always be integers, and result may or may not be what you are expecting. If we divide `1/2` then result of integer division is 0, as out of 0.5 only the integer part is returned as result.

```SQL
-- Returns 0 since int division
SELECT 1/2;

-- Returns 0.5
SELECT 1.0/2;

-- Returns 0.5
SELECT CAST(1 AS REAL)/2;

-- 3
SELECT 17/5;

-- 3 and 2, int division and modulo division
SELECT 17/5, 17%5;
```

## 06_04 Rounding Numbers

- Used to round a numeric value to a specific number of decimal places. Some exampels:

```SQL
-- Returns the number as it is
SELECT 2.55555;

-- Rounds to next INT and returns 3
SELECT ROUND(2.55555);

-- Returns 2.556
SELECT ROUND(2.55555,3);

-- 3
SELECT ROUND(2.55555,0);
```
