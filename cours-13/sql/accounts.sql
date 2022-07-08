CREATE TABLE accounts (
	id int NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	nom varchar(50),
	prenom varchar(50),
	PRIMARY KEY (id)
);

INSERT into accounts(username, password, nom, prenom) VALUES
				(12345, 12345, "Billy", "Bob"),
				(54321, 54321, "Jane", "Davis");