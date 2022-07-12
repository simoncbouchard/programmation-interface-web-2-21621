<?php
	$connexion = connectDB();
	
	function connectDB() {
		define('DB_HOST', 'localhost');
        define('DB_USER', 'root');
		define('DB_PASSWORD', 'root');			// MAC
        //define('DB_PASSWORD', '');			// Windows

        $laConnexion = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
				
		if (!$laConnexion) {
			// La connexion n'a pas fonctionné
			die('Erreur de connexion à la base de données. ' . mysqli_connect_error());
		}
		
		$selected = mysqli_select_db($laConnexion, 'ligue-async');

		if(!$selected) {
			die('La base de données n\'existe pas.');
		}
		
		mysqli_query($laConnexion, 'SET NAMES "utf8"');
		return $laConnexion;
	}
	
	function executeRequete($requete) {
		global $connexion;
		$resultats = mysqli_query($connexion, $requete);
		//$resultats = mysqli_fetch_all($connexion, $requete);
		return $resultats;
	}
	
	function getAllEquipes() {
		return executeRequete('SELECT id, nom, quartier from equipes');		
	}
	
	function getAllJoueursParEquipe($idEquipe) {
		return executeRequete("SELECT id, prenom, nomFamille FROM joueurs WHERE idEquipe = $idEquipe");
	}	
	
?>