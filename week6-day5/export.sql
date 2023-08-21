/*from DB to exel file*/
COPY users(name, age)
TO 'C:\Users\Public\export_users.csv' DELIMITER ',' CSV HEADER;


/*from exel file to DB*/
COPY actors(first_name,last_name,age,number_oscars) 
FROM 'path_of_the_file(/tmp or /Users/Public)' DELIMITER ',' CSV HEADER;