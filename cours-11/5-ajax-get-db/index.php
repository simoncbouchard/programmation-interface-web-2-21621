<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 11 | GET Database | API XMLHttpRequest</title>
	<meta name="description" content="Cours 11 du cours 582-31F-MA Programmation d'interface Web 2 : API XMLHttpRequest">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 11 - Appel AJAX - GET Database</h1>
	</header>

	<main>

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
		
		<div data-js-result></div>

	</main>
</body>
</html>