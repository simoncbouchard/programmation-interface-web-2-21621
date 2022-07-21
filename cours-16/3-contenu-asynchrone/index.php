<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 16 | Contenu asynchrone | Balise template</title>
	<meta name="description" content="Cours 16 du cours 582-31F-MA Programmation d'interface Web 2 : Clone et insertion avec la balise template">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 16 - Balise template - asynchrone</h1>
	</header>

	<main>

		<template data-js-player-template>
			<li data-js-player="{{id}}">#{{id}} : {{nomFamille}}, {{prenom}}</li>
		</template>

		<form>
			<h3>Choisissez l'équipe :</h3>

			<select data-js-team>
				<option value="0">Veuillez sélectionner une équipe</option>
				<?php
					// Générer les options dynamiquement
					require_once('fonctionsDB.php');
					$equipes = getAllEquipes();

					// Récupération des résultats sous forme de tableau associatif
					while ($equipe = mysqli_fetch_assoc($equipes)) { 
						echo '<option value="' . $equipe['id'] . '">' . $equipe['nom'] . ' de ' . $equipe['quartier'] . '</option>';
					}
				?>
			</select>	
		</form>
		
		<ul data-js-players></ul>

	</main>
</body>
</html>