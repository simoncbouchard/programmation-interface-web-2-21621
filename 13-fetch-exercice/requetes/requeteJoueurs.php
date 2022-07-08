<?php

	require_once('fonctionsDB.php');
	
    if (isset($_POST['idEquipe'])) {

		$joueurs = getAllJoueursParEquipe($_POST['idEquipe']);

		// Boucler sur les joueurs obtenus
		while ($joueur = mysqli_fetch_assoc($joueurs)) { 		// mysqli_fetch_assoc => récupére les résultats sous forme de tableau associatif
			$tableau[] = $joueur;
		}
		
		echo json_encode($tableau);								// json_encode => retourne la représentation JSON d'une valeur
			
	} else {
		echo 'Erreur query string';
	}
?>