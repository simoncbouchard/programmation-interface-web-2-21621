(function() {
	
	let elSubmits = document.querySelectorAll('[data-js-btn]');

	for (let i = 0, l = elSubmits.length; i < l; i++) {
		elSubmits[i].addEventListener('click', function(e) {
			e.preventDefault();
			callAJAX(elSubmits[i]);
		});
	}


	function callAJAX(el) {

		let elParent = el.parentNode,
			id = el.dataset.jsEquipeId,
			encodedId = encodeURIComponent(id);

		// Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();

		// Initialisation de la requète
		if (xhr) {	

			xhr.open('POST', 'requeteAJAX.php');
			xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			// Ouverture de la requète : fichier recherché
			xhr.addEventListener('readystatechange', function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {

						//console.log(xhr.response);

						// Traitement du DOM
						if (xhr.response != 'Erreur id') elParent.parentNode.removeChild(elParent);

					} else if (xhr.status === 404) {
						console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
					}
				}
			});

			// Envoi de la requète
			xhr.send('id=' + encodedId);

		}
	}
})();