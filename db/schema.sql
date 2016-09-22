CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	price int NOT NULL,
	devoured BOOLEAN DEFAULT false,
	cur_timestamp TIMESTAMP(8)
	PRIMARY KEY (id)
	
);
