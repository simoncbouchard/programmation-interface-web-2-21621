<?php 
    require_once('fonctionsDB.php');
    
    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data);
    
    if (isset($data['idEquipe'], $data['prenom'], $data['nomFamille'], $data['numero'])) {

        $prenom = htmlspecialchars($data['prenom']);
        $nomFamille = htmlspecialchars($data['nomFamille']);
        $numero = htmlspecialchars($data['numero']);
        $idEquipe = htmlspecialchars($data['idEquipe']);

        $return_id = addEquipe($prenom, $nomFamille, $numero, $idEquipe);

        echo $return_id;
    
    } else {
		echo 'Erreur query string';
	}
?>