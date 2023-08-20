CREATE TABLE users(
	name VARCHAR(30),
	age SMALLINT
);

INSERT INTO users
VALUES
('Andrei', 30),
('Mike', 35);

SELECT * FROM users;

ALTER TABLE users ADD COLUMN score SMALLINT;

UPDATE users
SET score = 10
WHERE name = 'Mike';

DELETE FROM users
WHERE name = 'Andrei';

DROP TABLE users;

CREATE TABLE login(
	id SERIAL NOT NULL PRIMARY KEY,
	secret VARCHAR(100) NOT NULL,
	name TEXT UNIQUE NOT NULL
);

INSERT INTO login
(secret ,name)
VALUES
('lol', 'John');

SELECT * FROM users JOIN login
ON users.name = login.name;