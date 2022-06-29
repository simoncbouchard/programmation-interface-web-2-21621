<?php
	require_once('fonctionsDB.php');

	//echo checkUsername($_GET['username']);
	
	if (isset($_GET['username'])) {
        if (checkUsername($_GET['username']) >= 1) {
            echo 'Déjà utilisé';
		} else {
           	echo 'Disponible';
        } 
	} else {
		echo 'Erreur query string';
	}
?>