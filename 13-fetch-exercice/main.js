(function() {

    /**
     * Récupère les éléments du DOM
     */
    let elForm = document.querySelector('[data-js-form]');
        elSelectEquipes = elForm.querySelector('[data-js-teams]'),
        elInputPrenom = elForm.prenom,
        elInputNom = elForm.nom,
        elInputNumero = elForm.numero,
        elBtn = elForm.querySelector('[data-js-submit]'),
        elJoueurs = document.querySelector('[data-js-joueurs]');


    /**
     * Initialise les gestionnaires d'événement
     */
    elSelectEquipes.addEventListener('change', afficheJoueurs);


    elBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (elSelectEquipes.value != 0) ajouteJoueur();
    });


    /**
     * Appel asynchrone pour récupérer les joueurs d'une équipe
     */
    function afficheJoueurs() {

        /**
         * Récupère la valeur de l'élément select
         */
        let idEquipe = encodeURIComponent(elSelectEquipes.value);

        /**
         * Redéfinition de quelques options pour la reqûete en POST avec une query string
         */
        let myInit = { 
            method: 'post',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            body: `idEquipe=${idEquipe}`
        };

        /**
         * Appel asynchrone fetch
         */
        fetch('requetes/requeteJoueurs.php', myInit)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                //console.log(data);
                elJoueurs.innerHTML = '<h3>Joueurs</h3>';
                data.forEach(function(element) {
                    let domJoueur = `<li data-js-joueur="${element.id}">${element.numero} : ${element.prenom} ${element.nomFamille}</li>`;
                    elJoueurs.insertAdjacentHTML('beforeend', domJoueur);

                    //new Player(elJoueurs.lastElementChild);
                });
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });
    };


    /**
     * Appel asynchrone pour ajouter un joueur pour une équipe
     */
    function ajouteJoueur() {
        
        /**
         * Récupère les valeurs du formulaire
         */
        let data = {	
            idEquipe: encodeURIComponent(elSelectEquipes.value),
            prenom: encodeURIComponent(elInputPrenom.value),
            nomFamille: encodeURIComponent(elInputNom.value),
            numero: encodeURIComponent(elInputNumero.value)
        }
        //console.log(data)

        /**
         * Redéfinition de quelques options pour la reqûete en POST en format json
         */
        let myInit = { 
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
            //body: `idEquipe=${data.idEquipe}&prenom=${data.prenom}`
        }

        /**
         * Appel asynchrone fetch
         */
        fetch('requetes/requeteAjout.php', myInit)
            .then(function(response) {
                //console.log(response)
                return response.text();
            })
            .then(function(id) {
                //console.log(id);
                let domJoueur = `<li data-js-joueur="${id}">${data.numero} : ${data.prenom} ${data.nomFamille}</li>`;
                elJoueurs.insertAdjacentHTML('beforeend', domJoueur);

                new Player(elJoueurs.lastElementChild);
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });
    }


})();