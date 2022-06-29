<?php 
    require_once('fonctionsDB.php');

    if (isset($_GET['username']) && isset($_GET['password']) && isset($_GET['lastname']) && isset($_GET['firstname'])) {
        
        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $username = htmlspecialchars($_GET['username']);
        $password = htmlspecialchars($_GET['password']);
        $lastname = htmlspecialchars($_GET['lastname']);
        $firstname = htmlspecialchars($_GET['firstname']);

        add($username, $password, $lastname, $firstname);
    
    } else {
		echo 'Erreur query string';
	}
?>