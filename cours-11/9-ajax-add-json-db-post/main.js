(function() {

	let elFormWrapper =  document.querySelector('[data-js-form-wrapper]'),
		elForm = elFormWrapper.querySelector('[data-js-form]'),
		elUsername = elForm.username,
		elPassword = elForm.password,
		elLastName = elForm.lastname,
		elFirstName = elForm.firstname,
		elBtn = elForm.querySelector('[data-js-btn]');


	elBtn.addEventListener('click', function(e) {
		e.preventDefault();

		// Validation FRONT
		//if (validation.isValid) { 
			elForm.classList.add('sent');
			elBtn.disabled = true;
			//add loader
			callAJAX();
		//}
	});


	function callAJAX() {
		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
		
		// Initialisation de la requète
		if (xhr) {

			let data = {	
							'username': elUsername.value, 
							'password': elPassword.value, 
							'lastname': elLastName.value, 
							'firstname': elFirstName.value
						};


			// Ouverture de la requète : fichier recherché
			xhr.open('POST', 'requeteAJAX.php');
			xhr.setRequestHeader('Content-Type', 'application/json');

			// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						if (xhr.response != 'Erreur query string') {

							console.log(xhr.response);

							// Traitement du DOM
							//window.setTimeout(function() {
							//remove loader
							elFormWrapper.innerHTML += '<h3>Merci !</h3>';
							//}, 2000);
						} else {
							console.log(xhr.response);
							elForm.classList.remove('sent');
							elBtn.disabled = false;
							//remove loader
						}

					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send(JSON.stringify(data));
		
		}
	}
})();