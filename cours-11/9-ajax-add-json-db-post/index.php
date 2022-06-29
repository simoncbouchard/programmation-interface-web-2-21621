<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 11 | Add JSON to Database (POST) | API XMLHttpRequest</title>
	<meta name="description" content="Cours 11 du cours 582-31F-MA Programmation d'interface Web 2 : API XMLHttpRequest">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 11 - Appel AJAX - Add JSON to Database (POST)</h1>
	</header>

	<main>

		<h3>Ajouter un usager (POST)</h3>

		<div data-js-form-wrapper>
			<form data-js-form>

				<div>
					<label for="username">Nom d'usager :</label>
					<input type="text" name="username" id="username"/>
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
					<button data-js-btn>Créer</button>
				</div>

			</form>
		</div>

	</main>
</body>
</html>