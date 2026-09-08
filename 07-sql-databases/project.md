# Project: Library Lending Database

[Module home](README.md) | [Solutions](solutions.md)

Build a small relational database for authors, books, physical copies, members, and loans. One book may have several copies. A loan connects one copy to one member and records checkout, due, and optional return dates. Choose primary keys, foreign keys, required fields, and at least two useful checks or unique constraints. Include a junction table if you add categories.

Seed enough data to demonstrate every query. Write queries for available copies, overdue unreturned loans, a member's borrowing history, authors with no books, and the number of copies per title. Use a left join where retaining unmatched rows matters. Add one justified index and record the query it supports.

Demonstrate a transaction that creates a loan and changes copy availability. Force the second statement to fail in a disposable database and verify that the first change does not remain. Access user-supplied lookup values through parameters in a short application script.

Submit schema SQL, seed SQL, query SQL, the application script, and a README containing setup and verification steps. Include a brief design note explaining cardinalities and deletion choices. The [solutions](solutions.md) give a design outline, not a file to copy blindly.
