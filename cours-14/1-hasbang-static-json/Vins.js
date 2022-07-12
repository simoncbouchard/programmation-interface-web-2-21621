class Vins {

    /**
     * Récupère en asynchrone le fichier 'data.json' et injecte les informations associées à l'id
     * @param {*} id 
     */
    afficherDetail(id) {
        //console.log('AfficherDetail');

        fetch('data.json')
            .then(function(response) {
                if (response.ok) return response.json();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {

                console.log(data);

                let elResult = document.querySelector('[data-js-result]');
                elResult.innerHTML = `<p>Les cépages de la région ${data[id].region} sont : ${data[id].cepage}.</p>`;;
            
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });
    };
}

export const { afficherDetail } = new Vins();