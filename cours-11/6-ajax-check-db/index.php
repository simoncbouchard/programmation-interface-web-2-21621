<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 11 | Check Database (GET) | API XMLHttpRequest</title>
	<meta name="description" content="Cours 11 du cours 582-31F-MA Programmation d'interface Web 2 : API XMLHttpRequest">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 11 - Appel AJAX - Check Database (GET)</h1>
	</header>

	<main>

		<h3>Vérifie si le nom d'usager existe dans la base de données</h3>

		<form data-js-form>

			<div>
				<label for="username">Nom d'usager :</label>
				<input type="text" name="username" id="username"/>
				<span class="test test-1 test-2" data-js-available></span>
			</div>

			<div>
				<label for="password">Mot de passe : </label>
				<input type="text" name="password" id="password"/>
			</div>
			
			<div>
				<label for="lastname">Nom :</label>
				<input type="text" name="lastname" id="lastname"/>
			</div>
			
			<div>
				<label for="firstname">Prénom: </label>
				<input type="text" name="firstname" id="firstname"/>
			</div>
			
			<div>
				<button disabled data-js-btn>Créer</button>
			</div>

		</form>

	</main>
</body>
</html>