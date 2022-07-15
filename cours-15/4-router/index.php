<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 15 | Router | API History et pushState()</title>
	<meta name="description" content="Cours 15 du cours 582-31F-MA Programmation d'interface Web 2 : API History et pushState()">

    <script>
		let elBase = document.createElement('base'),
			href;

		// https://developer.yoast.com/blog/relative-urls-issues/
		// https://developer.mozilla.org/fr/docs/Web/HTML/Element/base
		if (location.hostname == 'localhost') {
            href = `${location.protocol}//${location.host}${location.pathname.substring(0, location.pathname.lastIndexOf('4-router/'))}4-router/`
        } else {
            href = `${location.protocol}//${location.host}${location.pathname}`;
        }

		elBase.setAttribute('href', href);
		document.head.append(elBase);
	</script>

	<!-- styles -->
	<link rel="stylesheet" type="text/css" href="../styles/styles.css">

    <!-- scripts -->
    <script type="module" src="./scripts/main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 15 - Router</h1>
	</header>

	<main>

        <select data-js-component="Router">
            <option value="0" data-js-team-name>Veuillez sélectionner une équipe</option>
            <?php
                // Générer les options dynamiquement
                require_once('requetes/fonctionsDB.php');
                $equipes = getAllEquipes();

                // Récupération des résultats sous forme de tableau associatif
                while ($equipe = mysqli_fetch_assoc($equipes)) {
                    echo '<option value="' . $equipe['id'] . '" data-js-team-name="' . $equipe['nom'] . '">' . $equipe['nom'] . ' de ' . $equipe['quartier'] . '</option>';
                }
            ?>
        </select>	


        <div data-js-result></div>
        
	</main>
</body>
</html>