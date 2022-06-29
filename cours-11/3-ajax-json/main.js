(function() {

    let elButton = document.querySelector('[data-js-btn]'),
        elResult = document.querySelector('[data-js-result]');


    elButton.addEventListener('click', function() {

        // Déclaration de l'objet XMLHttpRequest
		let xhr;
		xhr = new XMLHttpRequest();
		
		// Initialisation de la requète
		if (xhr) {

            // Ouverture de la requète : fichier recherché
            xhr.open('GET', 'data.json');

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
                        //console.log(xhr.responseURL);

                        // Traite le JSON
                        if (isJsonString(xhr.response)) {
                            let data = JSON.parse(xhr.response);

                            // Construit le contenu
                            let teamList = '<ul>';
            
                            for (let level in data) {
                                teamList += `<li>${data[level].equipe} de ${data[level].ville}.</li>`;
                            }

                            teamList += '</ul>';
            
                            // Injecte le résutat dans le DOM
                            elResult.innerHTML = teamList;
                        }

                    } else if (xhr.status === 404) {
                        console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
                    }
                    
                }
            });

            // Envoi de la requète
            xhr.send();

		}
    });


    /**
     * Vérifie le format JSON
     * reférence : https://stackoverflow.com/questions/3710204/how-to-check-if-a-string-is-a-valid-json-string
     * @param {string} string 
     * @returns 
     */
    function isJsonString(string) {
        let isJSONFormat = true;
        try {
            JSON.parse(string);
        } catch (e) {
            isJSONFormat = false;
        }
        return isJSONFormat;
    }
})();