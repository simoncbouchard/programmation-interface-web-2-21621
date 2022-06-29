<?php 
    require_once('fonctionsDB.php');
    
    if (isset($_POST['id'])) {

        $id = htmlspecialchars($_POST['id']);

        // Si l'id existe
        if (mysqli_num_rows(checkId($id)) > 0) {
            deleteTeam($id);
        } else {
            echo 'Erreur id';
        }
        
    } else {
		echo 'Erreur query string';
	}
?>