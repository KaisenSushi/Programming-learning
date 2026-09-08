# Changes and Transactions

[Previous lesson](02-queries.md) | [Module home](README.md) | [Exercises](exercises.md)

## Simple version

Database changes can affect one row or every row. Check your condition with `SELECT` first. Use a transaction when several changes must all succeed together or all be cancelled together.

`INSERT`, `UPDATE`, and `DELETE` change stored data. Before running an update or delete, write a `SELECT` with the same condition and inspect the target rows. Omitting `WHERE` affects every row. Use a disposable database while learning and maintain tested backups for valuable systems.

```sql
UPDATE books
SET published_year = 1965
WHERE book_id = 42;
```

A transaction groups related statements into one unit. Consider lending a book: creating a loan and marking a copy unavailable must either both happen or neither happen. Begin a transaction, execute both parameterized statements, and commit only when all succeed. On error, roll back. Many application libraries begin transactions automatically, so understand the library's defaults rather than mixing assumptions.

Transactions are commonly described by ACID properties. Atomicity keeps a unit all-or-nothing. Consistency means committed work respects defined rules. Isolation controls how concurrent transactions observe one another. Durability means a committed result survives expected failures. Database engines offer different isolation levels, which trade concurrency against anomalies such as nonrepeatable reads.

Schema changes should be versioned as migrations. A migration has a precise order, is reviewed with application changes, and is tested against realistic data volume. Adding a nullable column is often easier than adding a required column to a populated table. Large indexes or rewrites can lock tables, so production changes need product-specific planning.

Backups are only useful when restoration has been tested. Exporting rows is not always a complete backup because permissions, triggers, indexes, and configuration may matter. Protect credentials outside source control and grant applications only the privileges they need. Finally, close connections through the library's context manager or cleanup mechanism. Safe database work combines correct SQL with controlled scope, recovery, and observation.

Practice these decisions in the [exercises](exercises.md) and [project](project.md).
