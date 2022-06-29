(function() {

    let elBtns = document.querySelectorAll('[data-js-button]'),
        elDiv = document.querySelector('[data-js-result]'),
        msg;


    for (let i = 0, l = elBtns.length; i < l; i++) {
        elBtns[i].addEventListener('click', function() {
            let dataSet = elBtns[i].dataset.jsButton;
            showSection(dataSet);
        });
    }


    function showSection(data) {

        let xhr = new XMLHttpRequest();

        if (xhr) {

            xhr.open('GET', './data/' + data + '.json')

            xhr.addEventListener('readystatechange', function() {
                
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                
                        // Vide le conteneur
                        elDiv.innerHTML = '';
                        
                        // Traite le JSON
                        if (isJsonString(xhr.response)) {
                            let data = JSON.parse(xhr.response);

                            // Construit le contenu
                            let parsedJSON = showRecursiveData(data, true);

                            //console.log(parsedJSON);
                
                            // Affiche le ce que retourne la fonction
                            elDiv.innerHTML = parsedJSON;
                        }

                    } else {
                        console.log('Le fichier appelé dans la méthode open() n\'existe pas.');
                    }  
                }
            });

            xhr.send();

        }
    }


    /**
     * Reférence : https://stackoverflow.com/questions/2549320/looping-through-an-object-tree-recursively
     */
    function showRecursiveData(json, isNewRequest) {

        if (isNewRequest) msg = '';

        for (let key in json) {

            console.log(key);

            if (typeof json[key] == 'object' && json[key] !== null) {

                if (isNaN(key)) msg += `<h4>${key}</h4>`;

                showRecursiveData(json[key], false);
            
            } else {
                msg += `<p><small>${key} : </small>${json[key]}</p>`;
            }
        }
    
        return msg;
    }


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