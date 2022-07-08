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

		if (!$selected) {
			die('La base de données n\'existe pas.');
		}
		
		mysqli_query($laConnexion, 'SET NAMES "utf8"');
		return $laConnexion;
	}
	
	/**
	 * On recoit une requete sql, on l'execute et retourne le resultat.
	 * Si $last est true, on retourne plutot l'id du dernier item inseré.
	 * @param $requete
	 * @param false $last
	 * @return bool|int|mysqli_result|string
	 */
	function executeRequete($requete, $last = false) {
		global $connexion;
		if ($last) {
			mysqli_query($connexion, $requete);
			return $connexion->insert_id;
		} else {
			$resultats = mysqli_query($connexion, $requete);
			return $resultats;
		}
	}

	function getAllEquipes() {
		return executeRequete("SELECT id, nom, quartier FROM equipes");		
	}

	function getAllJoueursParEquipe($idEquipe) {
		return executeRequete("SELECT * FROM joueurs WHERE idEquipe = $idEquipe");
	}

	function addEquipe($prenom, $nomFamille, $numero, $idEquipe) {
		return executeRequete("INSERT INTO joueurs (prenom, nomFamille, numero, idEquipe) 
							   VALUES ('$prenom', '$nomFamille', '$numero', '$idEquipe')", true);	
	}

	function deleteEquipe($idEquipe) {
		return executeRequete("DELETE FROM equipes WHERE id = '$idEquipe'");
	}

?>