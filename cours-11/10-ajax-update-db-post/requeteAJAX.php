<?php 
    require_once('fonctionsDB.php');
    
    if (isset($_POST['nom']) && isset($_POST['id'])) {

        $nom = htmlspecialchars($_POST['nom']);
        $id = htmlspecialchars($_POST['id']);
        
        changeTeamName($nom, $id);
    
    } else {
		echo 'Erreur query string';
	}
?>