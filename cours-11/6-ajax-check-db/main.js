(function() {

	let elForm = document.querySelector('[data-js-form]'),
		elInputUsername = elForm.username,
		elAvailable = document.querySelector('[data-js-available]');
	

	elInputUsername.addEventListener('blur', function() {

		if (elInputUsername.value != '') {
	
			// Déclaration de l'objet XMLHttpRequest
			let xhr;
			xhr = new XMLHttpRequest();
			
			// Initialisation de la requète
			if (xhr) {

				let usernameValue = elInputUsername.value,
					encodedUsername = encodeURIComponent(usernameValue);

				// Ouverture de la requète : fichier recherché + paramètre(s) dans l'URL
				xhr.open('GET', 'requeteAJAX.php?username=' + encodedUsername);
						
				// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
				xhr.addEventListener('readystatechange', function() {
					
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {

							//console.log(xhr.response)
							
							// Traitement du DOM
							if (xhr.response == 'Disponible') {
								elAvailable.setAttribute('class', 'available');
							} else {
								elAvailable.setAttribute('class', 'taken');
							}

							elAvailable.textContent = xhr.response;

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



