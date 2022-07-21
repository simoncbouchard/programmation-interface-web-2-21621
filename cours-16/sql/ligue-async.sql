CREATE TABLE equipes (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(50) NOT NULL UNIQUE,
	quartier varchar(50) NOT NULL,
	PRIMARY KEY(id)
);
-- CRÉATION de la table joueurs qui réfère à equipes
CREATE TABLE joueurs (
	id int NOT NULL AUTO_INCREMENT,
	prenom varchar(50) NOT NULL,
	nomFamille varchar(50) NOT NULL,
	numero tinyint,
	idEquipe int NULL,
	PRIMARY KEY(id),
	FOREIGN KEY (idEquipe) references equipes(id) ON DELETE SET NULL
	-- 1:N avec equipes
);	

INSERT into equipes(nom, quartier) VALUES 
				("Canadiens", "Verdun"), 
				("Rangers", "Hochelaga"),
				("Red Wings", "Plateau");

INSERT into joueurs(prenom, nomFamille, numero, idEquipe) VALUES
				("Simon", "C-Bouchard", 4, 1),
				("Marc-André", "Charpentier", 10, 1),
				("Stéphanie", "Pouliot", 3, 2),
				("Guillaume", "Harvey", 33, 3);
				

-- LA CLÉ ÉTRANGÈRE EST TOUJOURS DU CÔTÉ 0,1 ou 1,1 DE LA RELATION 1:N