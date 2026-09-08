# Queries and Joins

[Previous lesson](01-relational-design.md) | [Module home](README.md) | [Next lesson](03-transactions.md)

A `SELECT` query describes the result you want. Name columns explicitly in maintained application queries so schema changes do not silently alter the result shape.

```sql
SELECT book_id, title, published_year
FROM books
WHERE published_year >= 2000
ORDER BY published_year DESC, title ASC;
```

SQL uses three-valued logic because `NULL` represents missing or unknown information. Test it with `IS NULL` or `IS NOT NULL`, never `= NULL`. Decide whether missing values belong before aggregating. `COUNT(*)` counts rows, while `COUNT(column_name)` ignores null values in that column.

A join combines related rows using their keys:

```sql
SELECT b.title, a.name AS author_name
FROM books AS b
JOIN authors AS a ON a.author_id = b.author_id
ORDER BY a.name, b.title;
```

An inner join returns only matches. A left join keeps every row from the left table and fills unmatched right-side columns with null. Use a left join when asking which authors have no books. Missing or incorrect `ON` conditions can multiply rows, so inspect a small result and reason about expected cardinality.

Grouping summarizes sets. `WHERE` filters source rows before grouping, while `HAVING` filters groups after aggregation.

```sql
SELECT author_id, COUNT(*) AS book_count
FROM books
GROUP BY author_id
HAVING COUNT(*) >= 2;
```

Indexes help the database locate rows without scanning an entire table, especially for frequently filtered or joined columns. They also consume storage and make writes more expensive. Examine the database's query plan before adding indexes blindly.

Application values must be passed as parameters through the database library, not inserted into SQL with string concatenation. Parameters prevent data from being interpreted as SQL and usually handle quoting correctly. Table or column names cannot generally be parameters; choose those from a fixed allowlist if dynamic identifiers are required. Precision in queries includes both correct results and safe construction.

Continue with [Changes and Transactions](03-transactions.md).
