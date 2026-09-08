# Solutions

[Module home](README.md) | [Exercises](exercises.md) | [Project](project.md)

Exercise 1 uses `member_id INTEGER PRIMARY KEY`, `name ... NOT NULL`, and `email ... NOT NULL UNIQUE`; `UNIQUE` prevents duplicate emails. Exercise 2 gives `categories` its own key and makes `(book_id, category_id)` the junction table primary key. Exercise 3 joins `books` to `authors` on `author_id`. Exercise 4 uses a left join and `WHERE b.book_id IS NULL`. Exercise 5 starts from authors, left joins books, groups by the author, and counts `b.book_id`; unlike `COUNT(*)`, that expression ignores the null-filled joined row for an author without books. Exercise 6 should use the parameter marker required by the chosen library. Exercise 7 rolls back both changes if either fails. Exercise 8 first runs `SELECT ... WHERE published_year < ?`, then uses a transaction and a tested backup.

Quiz summary: primary keys are unique and non-null. Foreign keys protect valid references. Atomic columns avoid hidden lists. `WHERE` filters rows and `HAVING` filters groups. Left joins retain unmatched left rows. Null is an unknown marker, not an ordinary value. Column counts ignore null. Parameters prevent SQL injection and handle values safely. Index maintenance costs work on writes. A failed unit rolls back. ACID means atomicity, consistency, isolation, and durability. Only a successful restoration demonstrates that backup data and procedures are usable.

For the project, separate `books` from `copies`, and make `loans` reference both `copies` and `members`. A returned date may be null. Prevent impossible date ordering with a check where supported. Whether books can be deleted should be explicit, often restricted while copies or history refer to them.
