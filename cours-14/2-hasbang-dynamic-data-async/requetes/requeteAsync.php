<?php

	// Pour accéder à la base de données
	require_once('fonctionsDB.php');
	
	$tableau = array();

	// Obtenir les équipes dans la BD
	$joueurs = getAllJoueursParEquipe($_GET['id']);

	// Récupérer la ligne suivante d'un ensemble de résultats sous forme de tableau associatif
	while ($joueur = mysqli_fetch_assoc($joueurs)) { 
	   $tableau[] = $joueur;
    }
   
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($tableau);
	
?>