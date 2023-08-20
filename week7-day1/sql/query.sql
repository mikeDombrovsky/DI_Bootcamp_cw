CREATE TABLE book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR NOT NULL,
	author VARCHAR NOT NULL
);
INSERT INTO book(title, author)
VALUES
();

ALTER TABLE book
ADD COLUMN sku VARCHAR(255);

ALTER TABLE book
ALTER COLUMN sku
SET DEFAULT '123';

ALTER TABLE book
ALTER COLUMN sku
DROP DEFAULT;

ALTER TABLE book
ALTER COLUMN sku TYPE INTEGER USING sku::INTEGER
--only if values are convertable

ALTER TABLE book
RENAME COLUMN author TO book_author;

CREATE TABLE library(
	book_fk_id INTEGER 
	REFERENCES book(book_id) ON DELETE SET NULL,
	borrowed_date DATE NOT NULL
)

CREATE TABLE library(
	book_fk_id INTEGER 
	REFERENCES book(book_id) ON DELETE CASCADE,
	borrowed_date DATE NOT NULL
)