class Teams {
    constructor() {
		this._elResult = document.querySelector('[data-js-result]');

        // Lie le contexte de la méthode exportée getTeamPlayers au this de l'instance de la classe
        this.getTeamPlayers = this.getTeamPlayers.bind(this);
    }


    getTeamPlayers(id) {

        fetch(`requetes/requeteAsync.php?id=${id}`)
            .then (function(response) {
                return response.json();
            }.bind(this))
            .then (function(data) {

                //console.log(data);
                //console.log(history.state);

                let listeEquipe = '';

                // Est-ce qu'il y a des joueurs dans cette équipe
                if (data.length === 0) {
                    listeEquipe = '<p>Cette équipe n\'a aucun joueur.</p>';
                } else {
                    listeEquipe = '<ul>';
                    for (let key in data) {
                        listeEquipe += `<li>${data[key].prenom} ${data[key].nomFamille}</li>`;
                    }
                    listeEquipe += '</ul>';
                }

                this._elResult.innerHTML = listeEquipe;
            }.bind(this))
            .catch (function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            }.bind(this));
    }
}

export const { getTeamPlayers } = new Teams();