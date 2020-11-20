DROP TABLE IF EXISTS users, medications, alerts;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50),
    middle_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE NOT NULL,
    email VARCHAR(50),
    phone VARCHAR(25),
    username VARCHAR(25),
    password VARCHAR(25),
    PRIMARY KEY (id)
);

-- CREATE TABLE medications(

-- );

-- CREATE TABLE alerts (

-- );