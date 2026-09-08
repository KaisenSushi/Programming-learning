# SQL and Databases

[Roadmap](../ROADMAP.md) | [Start lesson 1](01-relational-design.md)

A database keeps information after a program closes. A relational database stores that information in tables and connects related rows with keys.

This module uses a small library database. You will make tables, add data, find it with SQL, connect related tables, and update several facts safely.

## Do these in order

1. [Tables and relationships](01-relational-design.md)
2. [Queries and joins](02-queries.md)
3. [Changes and transactions](03-transactions.md)
4. [Exercises](exercises.md)
5. [Quiz](quiz.md)
6. [Project](project.md)
7. [Solutions](solutions.md)

Use a disposable local database while learning. Never test an update or delete on important data. Before changing rows, use a `SELECT` query with the same condition and check what it finds.

You are done when you can design a few related tables, explain primary and foreign keys, write a join, use a parameter instead of joining user input into SQL text, and protect related changes with a transaction.

[CS50 SQL](https://cs50.harvard.edu/sql/) has free optional videos and extra practice.
