DROP DATABASE users;

CREATE DATABASE users;

USE users;

CREATE TABLE IF NOT EXISTS users (
	user_id INT AUTO_INCREMENT,
	display_name VARCHAR (100) NOT NULL,
	logo VARCHAR (200) NOT NULL,
	profile_image_url VARCHAR (200) NOT NULL,
	category VARCHAR (100) NOT NULL,
	followers INT NOT NULL,
	following INT NOT NULL,
	PRIMARY KEY (user_id)
)

