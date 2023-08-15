CREATE TABLE actors (
	actor_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	age DATE NOT NULL,
	number_oscars SMALLINT NOT NULL
);
select * from actors;

CREATE TABLE IF NOT EXISTS flights (
	f_id SERIAL PRIMARY KEY,
	airline_name VARCHAR(100) NOT NULL,
	airline_code VARCHAR(10) NOT NULL,
	departure TIMESTAMP UNIQUE NOT NULL,
	seats INTEGER NOT NULL
);
SELECT f_id, airline_name FROM flights;
DROP TABLE flights;

INSERT INTO flights(airline_name, airline_code, departure, seats)
-- VALUES('El Al', 'EA', now(), 3), 
VALUES('EasyJet', 'EJ', now(), 55);
-- VALUES('RosAvia', 'RA', now(), 5);


SELECT f_id, airline_name FROM flights
WHERE airline_code = 'EJ';

-- UPDATE flights SET airline_name = 'ELAL' WHERE airline_code = 'EA';


--  UPDATE flights SET airline_name = 'ELAL' WHERE airline_code = 'EA';

-- DELETE FROM flights WHERE f_id = 1;

-- TRUNCATE TABLE flights; --resize


SELECT * FROM flights 
-- WHERE airline_name LIKE '%a%'
WHERE f_id IN (1,20)
ORDER BY airline_name ASC;