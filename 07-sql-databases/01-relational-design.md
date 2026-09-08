# Tables and Relationships

[Module home](README.md) | [Next lesson](02-queries.md) | [Roadmap](../ROADMAP.md)

## Simple version

A table stores one kind of thing. Each row is one item, and each column stores one fact about it. A key gives every row a reliable identity and connects related rows in other tables.

A relational database stores facts in tables. A row represents one occurrence, such as one book or member, while a column represents one attribute. Each table needs a primary key whose value uniquely identifies a row. A generated integer is convenient, but a natural value can work when it is truly stable and unique.

```sql
CREATE TABLE authors (
    author_id INTEGER PRIMARY KEY,
    name VARCHAR(200) NOT NULL
);

CREATE TABLE books (
    book_id INTEGER PRIMARY KEY,
    title VARCHAR(300) NOT NULL,
    author_id INTEGER NOT NULL,
    published_year INTEGER,
    FOREIGN KEY (author_id) REFERENCES authors(author_id)
);
```

The foreign key states that each book's `author_id` must refer to an existing author. This protects referential integrity when enforcement is enabled. Product-specific setup may be required. For example, SQLite connections should enable foreign keys explicitly with `PRAGMA foreign_keys = ON`.

Normalization reduces duplicated facts. Storing the author name in every book row invites inconsistent spellings and makes a rename touch many records. Keeping authors separately stores that fact once. First normal form calls for atomic column values rather than comma-separated lists. A many-to-many relationship, such as books and categories, needs a junction table with both foreign keys and usually a composite primary key.

Constraints express the allowed state near the data. `NOT NULL` requires a value, `UNIQUE` prevents duplicates, and `CHECK` can enforce a local rule such as `published_year >= 1450`. Constraints complement application validation because multiple applications may write to the same database.

Choose data types deliberately. Store dates using the database's date facilities or a documented representation, not an ambiguous display string. Money often uses fixed-precision decimal types or integer minor units rather than binary floating point. Design for facts the system must preserve, and avoid columns whose meaning changes based on another flag. A schema is an executable part of the program's contract.

Continue with [Queries and Joins](02-queries.md).
