USE capstone_medminder;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users, medications, medication_alerts, dose_log;
SET FOREIGN_KEY_CHECKS = 1;

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
    PRIMARY KEY (id),
    UNIQUE KEY (username)
);

CREATE TABLE medications ( 
    med_id INT NOT NULL AUTO_INCREMENT,
    medication_name VARCHAR(50) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (med_id),
    FOREIGN KEY (user_id)
    REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE medication_alerts (
    alert_id INT NOT NULL AUTO_INCREMENT,
    alert TIME NOT NULL, 
    user_id INT NOT NULL,
    medication_id INT NOT NULL, 
    PRIMARY KEY (alert_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (medication_id) REFERENCES medications (med_id)
    ON DELETE CASCADE
);

CREATE TABLE dose_log (
    dose_id INT NOT NULL AUTO_INCREMENT,
    dose_time TIME NOT NULL,
    dose_date DATE NOT NULL, 
    user_id INT NOT NULL, 
    medication_id INT NOT NULL,
    medalert_id INT NOT NULL, 
    PRIMARY KEY (dose_id),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (medication_id) REFERENCES medications (med_id),
    FOREIGN KEY (medalert_id) REFERENCES medication_alerts (alert_id)
);


INSERT INTO users (first_name, last_name, date_of_birth, email, username, password)
VALUES ("Test", "User", "1111-11-11", "testuser@testing.com", "testusername", "testpassword" ),
("Test2", "User2", "1111-11-22", "testuser2@testing.com", "testusername2", "testpassword2" );


INSERT INTO medications (medication_name, user_id)
VALUES ("Tylenol", (SELECT id FROM users WHERE id = 1));
INSERT INTO medications (medication_name, user_id)
VALUES ("Ibuprofen", (SELECT id FROM users WHERE id = 1));
INSERT INTO medications (medication_name, user_id)
VALUES ("Aleve", (SELECT id FROM users WHERE id = 2));

INSERT INTO med_alerts (alert, user_id, medication_id)
VALUES("11:30:00", (SELECT id FROM users WHERE id = 2), (SELECT med_id FROM medications WHERE med_id = 1));
INSERT INTO medication_alerts (alert, user_id, medication_id)
VALUES("09:45:00", (SELECT id FROM users WHERE id = 1), (SELECT med_id FROM medications WHERE med_id = 2));

INSERT INTO dose_log (dose_time, dose_date, user_id, medication_id, medalert_id)
VALUES("12:15:00", "2020-11-04", (SELECT id FROM users WHERE id = 2), (SELECT med_id FROM medications WHERE med_id = 1), (SELECT alert_id FROM medication_alerts WHERE alert_id = 1));
INSERT INTO dose_log (dose_time, dose_date, user_id, medication_id, medalert_id)
VALUES("10:27:00", "2020-12-01", (SELECT id FROM users WHERE id = 1), (SELECT med_id FROM medications WHERE med_id = 2), (SELECT alert_id FROM medication_alerts WHERE alert_id = 1));