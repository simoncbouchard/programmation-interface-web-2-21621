<?php 
    require_once('fonctionsDB.php');

    //var_dump($_POST['username']);


    if (isset($_POST['username'], $_POST['password'], $_POST['lastname'], $_POST['firstname'])) {

        $username = htmlspecialchars($_POST['username']);
        $password = htmlspecialchars($_POST['password']);
        $lastname = htmlspecialchars($_POST['lastname']);
        $firstname = htmlspecialchars($_POST['firstname']);
        
        add($username, $password, $lastname, $firstname);
    
    } else {
		echo 'Erreur query string';
	}
    
?>