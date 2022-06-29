<?php 
    require_once('fonctionsDB.php');

    if (isset($_POST['username']) && isset($_POST['password']) && isset($_POST['lastname']) && isset($_POST['firstname'])) {
        
        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $username = htmlspecialchars($_POST['username']);
        $password = htmlspecialchars($_POST['password']);
        $lastname = htmlspecialchars($_POST['lastname']);
        $firstname = htmlspecialchars($_POST['firstname']);

        add($username, $password, $lastname, $firstname);
    
    } else {
		echo 'Erreur query string';
	}
?>