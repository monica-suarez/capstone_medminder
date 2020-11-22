USE capstone_medminder;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(25),
    username VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO users (first_name, last_name, date_of_birth, email, username, password)
VALUES ("Test", "User", "1111-11-11", "testuser@testing.com", "testusername", "testpassword" )