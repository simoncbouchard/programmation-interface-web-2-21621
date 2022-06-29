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
			let usernameValue = elUsername.value,
			   	passwordValue = elPassword.value,
			   	lastNameValue = elLastName.value,
			   	firstNameValue = elFirstName.value,
				encodedUsername = encodeURIComponent(usernameValue),
				encodedPassword = encodeURIComponent(passwordValue),
				encodedLastname = encodeURIComponent(lastNameValue),
				encodedFirstname = encodeURIComponent(firstNameValue);


			// Ouverture de la requète : fichier recherché + paramètre(s) dans l'URL
			xhr.open('GET', 'requeteAJAX.php?username=' + encodedUsername + '&password=' + encodedPassword + '&lastname=' + encodedLastname + '&firstname=' + encodedFirstname);

			// Écoute l'objet XMLHttpRequest instancié et défini le comportement en callback
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						if (xhr.response != 'Erreur query string') {
							// Traitement du DOM
							//window.setTimeout(function() {
							elFormWrapper.innerHTML += '<h3>Merci !</h3>';
							//}, 2000);
						} else {
							console.log(xhr.response);
							elForm.classList.remove('sent');
							elBtn.disabled = false;
						}
						
						//remove loader

					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send();
			
		}
	};
})();