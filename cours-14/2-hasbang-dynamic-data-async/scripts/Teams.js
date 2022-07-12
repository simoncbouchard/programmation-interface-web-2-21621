class Teams {
    constructor() {
        this._elTeamPlayers = document.querySelector('[data-js-team-players]');
        this.getTeamPlayers = this.getTeamPlayers.bind(this);
    }


    /**
     * Récupère en asynchrone les joueurs associés à une équipe
     * @param {string} id 
     */
    getTeamPlayers(id) {

        let encodedId = encodeURIComponent(id);

        fetch(`requetes/requeteAsync.php?id=${encodedId}`)
            .then (function(response) {
                if (response.ok) return response.json();
                else throw new Error('La réponse n\'est pas OK');
            })
            .then (function(data) {

                let elPlayersList = document.querySelector('[data-js-players]');

                if (elPlayersList) {
                    elPlayersList.classList.add('hidden');

                    /**
                     * Écoute l'événement 'transitionend' avant de lancer l'injection du nouvel élément
                     */
                    elPlayersList.addEventListener('transitionend', function(e) {
                        //console.log('Transition ended');

                        // https://stackoverflow.com/questions/18689031/transitionend-event-fires-twice
                        if (e.propertyName == 'opacity') { 
                            elPlayersList.remove();
                            this.showTeamPlayers(data);
                        }
                    }.bind(this));
                } else {
                    this.showTeamPlayers(data);
                }
            }.bind(this))
            .catch (function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });
    }


    /**
     * Injecte dans le DOM la liste des joueurs associés à l'équipe
     * @param {*} data 
     */
    showTeamPlayers(data) {

        //console.log(data)

        let listeJoueursParEquipe = '<div class="players-list hidden" data-js-players>';

        if (data.length === 0) {
            listeJoueursParEquipe += '<p>Cette équipe n\'a aucun joueur.</p>';
        } else {
            listeJoueursParEquipe += '<ul>';
            for (let key in data) {
                listeJoueursParEquipe += `<li data-js-player="${data[key].id}">${data[key].prenom} ${data[key].nomFamille}</li>`;
            }
            listeJoueursParEquipe += '</ul>';
        }
        listeJoueursParEquipe += '</div>';


        this._elTeamPlayers.insertAdjacentHTML('afterbegin', listeJoueursParEquipe);

        let elPlayersList = document.querySelector('[data-js-players]');

        setTimeout(function() {
            if (elPlayersList.classList.contains('hidden')) {
                elPlayersList.classList.remove('hidden')
            }
        }, 100);
    }
} 

export const { getTeamPlayers } = new Teams();