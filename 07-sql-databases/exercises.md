# Exercises

[Module home](README.md) | [Solutions](solutions.md)

Use a disposable database and the `authors` and `books` schema from the lessons.

1. Add a `members` table with an integer primary key, required name, and unique required email. Explain which constraint prevents two accounts from sharing an email.
2. Design a `categories` table and `book_categories` junction table. The junction table must prevent the same book and category pair from appearing twice.
3. Write a query that lists book titles with author names, sorted by title.
4. Write a left-join query that lists authors who have no matching books.
5. Count books per author, including authors with zero books. Explain why `COUNT(b.book_id)` is preferable to `COUNT(*)` in this query.
6. Write a parameterized-query example in your programming language that looks up a book by title. Do not concatenate the title into SQL text.
7. Describe a transaction for creating a loan and marking a physical copy unavailable. State what should happen if the second statement fails.
8. Before deleting books older than a chosen year, write the safety query you would run and list two recovery precautions.

Compare your design and query shapes with [solutions](solutions.md).
