<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 13 | Fetch POST FormData() | API Fetch</title>
	<meta name="description" content="Exercice cours 13 du cours 582-31F-MA Programmation d'interface Web 2 : API Fetch">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 13 - Fetch POST FormData()</h1>
	</header>

	<main>

		<h3>Ajouter un usager</h3>

		<div data-js-form-wrapper>
			<form data-js-form>

				<div>
					<label for="username">Nom d'usager :</label>
					<input type="text" name="username" id="username" />
				</div>

				<div>
					<label for="password">Mot de passe : </label>
					<input type="text" name="password" id="password" />
				</div>
				
				<div>
					<label for="lastname">Nom :</label>
					<input type="text" name="lastname" id="lastname" />
				</div>
				
				<div>
					<label for="firstname">Prénom: </label>
					<input type="text" name="firstname" id="firstname" />
				</div>
				
				<div>
					<button data-js-btn>Soumettre</button>
				</div>

			</form>
		</div>

	</main>
</body>
</html>