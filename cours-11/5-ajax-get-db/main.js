(function() {

	let elSelect = document.querySelector('[data-js-team]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		// Déclaration de l'objet XMLHttpRequest
		if (elSelect.value != 0) {

			let xhr;
			xhr = new XMLHttpRequest();

			if (xhr) {	

				let selectValue = elSelect.value,
					encodedIdEquipe = encodeURIComponent(selectValue);
					
				// Ouverture de la requète : fichier recherché + paramètre(s) dans l'URL
				xhr.open('GET', `requeteAJAX.php?idEquipe=${encodedIdEquipe}`);
				
				// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback 
				xhr.addEventListener('readystatechange', function() {

					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							console.log(xhr.responseText);

							// Traitement du DOM
							elResult.innerHTML = xhr.response;

						} else if (xhr.status === 404) {
							console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
						}
					}
				});

				// Envoi de la requète
				xhr.send();
				
			}
		}
	});	
})();