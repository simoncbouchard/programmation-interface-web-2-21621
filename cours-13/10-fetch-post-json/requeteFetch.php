<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data);
    //var_dump($data['username']);
    //var_dump($data['password']);
    //var_dump($data['lastname']);
    //var_dump($data['firstname']);
    
    
    if (isset($data['username'], $data['password'], $data['lastname'], $data['firstname'])) {

        $username = htmlspecialchars($data['username']);
        $password = htmlspecialchars($data['password']);
        $lastname = htmlspecialchars($data['lastname']);
        $firstname = htmlspecialchars($data['firstname']);
        
        add($username, $password, $lastname, $firstname);
    
    } else {
		echo 'Erreur query string';
	}
    
?>