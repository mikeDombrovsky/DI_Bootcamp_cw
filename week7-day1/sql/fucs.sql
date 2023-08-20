
CREATE [OR REPLACE] FUNCTION func_name(params)
RETURNS return_type
LANGUAGE plpgsql
AS
$$
DECLARE
-- variable declaration

BEGIN
-- logic
END;
$$


SELECT get_film_count(40, 90);
SELECT get_film_count(len_from => 40, len_to => 90);
SELECT get_film_count(len_from := 40, len_to := 90);-- old one

CREATE FUNCTION get_film_count(len_from INT, len_to INT)
	RETURNS INT
	LANGUAGE plpgsql
AS
$$
DECLARE
film_count INTEGER;
BEGIN
	SELECT count(1)
	INTO film_count
	FROM film
	WHERE length BETWEEN len_from AND len_to;
	RETURN film_count;
END;
$$
