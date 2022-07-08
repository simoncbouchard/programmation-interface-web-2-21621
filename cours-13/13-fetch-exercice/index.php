<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 13 | Exercice en classe | API Fetch</title>
	<meta name="description" content="Exercice cours 13 du cours 582-31F-MA Programmation d'interface Web 2 : API Fetch">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 13 - Exercice en classe</h1>
	</header>

	<main>

        <section class="ligue" data-js-ligue>

            <form class="ligue__form" data-js-form>

                <h3>Sélectionner une équipe</h3>

                <div>
                    <select data-js-teams>
                        <option value="0">Veuillez sélectionner une équipe</option>
                        <?php
                            // Générer les options dynamiquement
                            require_once('requetes/fonctionsDB.php');
                            $equipes = getAllEquipes();

                            // Récupération des résultats sous forme de tableau associatif
                            while ($equipe = mysqli_fetch_assoc($equipes)) { 
                                echo '<option value="' . $equipe['id'] . '">' . $equipe['nom'] . ' de ' . $equipe['quartier'] . '</option>';
                            }
                        ?>
                    </select>
                </div>

                <h3>Ajouter un joueur</h3>

                <div>
                    <label for="prenom">Prénom : </label>
                    <input type="text" id="prenom" name="prenom" value="Billy">
                </div>

                <div>
                    <label for="nom">Nom : </label>
                    <input type="text" id="nom" name="nom" value="Bob">
                </div>

                <div>
                    <label for="numero">Numéro : </label>
                    <input type="number" id="numero" name="numero" value="44">
                </div>

                <div>
                    <button data-js-submit>Soumettre</button>
                </div>
            </form>
            
            <ul class="ligue__joueurs" data-js-joueurs></ul>

        </section>
	</main>
</body>
</html>