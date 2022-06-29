(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		// Déclaration de l'objet XMLHttpRequest
		if (elSelect.value != 0) {

			let xhr;
			xhr = new XMLHttpRequest();
			
			// Initialisation de la requète
			if (xhr) {

				// Ouverture de la requète : fichier recherché
				xhr.open('GET', 'html/' + elSelect.value + '.html');
	
				// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback 
				xhr.addEventListener('readystatechange', function() {

					// console.log('État de la requète : ' + xhr.readyState);
					// console.log('Code de status : ' + xhr.status);

					// Traitement du résultat 
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							// Les données ont été reçues
							console.log(xhr.response);
							//console.log(xhr.responseText);
							//console.log(xhr.responseXML);
							// console.log(xhr.responseURL);

							// injecte le résutat dans le DOM
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