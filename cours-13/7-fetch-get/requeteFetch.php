<?php
	// Pour accéder à la base de données
	require_once('fonctionsDB.php');
	
	$tableau = array();

	// Obtenir les équipes dans la BD
	$equipes = getAllEquipes();

	// Boucler sur les équipes obtenues
	while ($equipe = mysqli_fetch_assoc($equipes)) {
	   $tableau[] = $equipe;
    }
   
	echo json_encode($tableau);
?>