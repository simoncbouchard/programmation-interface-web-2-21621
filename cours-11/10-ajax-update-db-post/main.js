(function() {
	
	let elSubmits = document.querySelectorAll('[data-js-btn]');

	for (let i = 0, l = elSubmits.length; i < l; i++) {
		elSubmits[i].addEventListener('click', function(e) {
			e.preventDefault();
			if (elSubmits[i].previousElementSibling.value != '') callAJAX(elSubmits[i].parentNode);
		});
	}


	function callAJAX(elParent){
		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();

		// Initialisation de la requète
		if (xhr) {	
			
			let elLabel = elParent.querySelector('label'),
				elInput = elParent.querySelector('input'),
				inputValue = elInput.value,
				id = elInput.dataset.jsEquipeId,
				encodedNom = encodeURIComponent(inputValue),
				encodedId = encodeURIComponent(id);


			xhr.open('POST', 'requeteAJAX.php');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			// Ouverture de la requète : fichier recherché
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						// Traitement du DOM
						elLabel.textContent = `${inputValue} :`;
						elInput.value = '';

					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send('nom=' + encodedNom + '&id=' + encodedId);

		}
	}
})();