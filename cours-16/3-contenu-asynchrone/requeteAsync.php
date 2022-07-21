<?php

	// Pour accéder à la base de données
	require_once('fonctionsDB.php');
	
	$tableau = array();

	// Obtenir les équipes dans la BD
	//$equipes = getAllEquipes();
	$players = getAllJoueursParEquipe($_GET['idEquipe']);

	// Boucler sur les joueurs obtenus
	while ($player = mysqli_fetch_assoc($players)) {
	   $tableau[] = $player;
    }
   
	header('Content-type: application/json; charset=utf-8');
	echo json_encode($tableau);
	
?>