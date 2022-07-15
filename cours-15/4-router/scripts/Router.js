import { getTeamPlayers } from './Teams.js';


export default class Router {
    constructor(el) {
        this._el = el;
        this._elOptions = this._el.querySelectorAll('option');
		this._elResult = document.querySelector('[data-js-result]');

        if (location.hostname == 'localhost') {
            this._domain = `${location.pathname.substring(0, location.pathname.lastIndexOf('4-router'))}4-router/` ;
        } else {
            this._domain = location.pathname;
        }

        this._routes = [];

        this.init();
    }


    init() {

        /**
         * Tableaux des routes
         */
        for (let i = 0, l = this._elOptions.length; i < l; i++) {

            if (this._elOptions[i].value != '0') {

                let teamName = this._elOptions[i].dataset.jsTeamName;
                teamName = teamName.replace(/\s/g, '-');
                teamName = teamName.toLowerCase();
                teamName = teamName.normalize('NFD').replace(/[\u0300-\u036f]/g, '');       // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

                this._routes.push({
                    optionIndex: i,
                    teamId: this._elOptions[i].value,
                    teamName: teamName
                });
            }
        }


        /**
         * Comportements au chargement de la page
         */
        let href = location.href,
            slug = href.substring(location.protocol.length + 2 + location.host.length + this._domain.length);

        if (slug.endsWith('/')) slug = slug.slice(0, -1);       // La méthode endsWith n'est pas supportée sur IE11
        //console.log(slug)

        let team = this.findTeam('teamName', slug);

        if (team) {
            getTeamPlayers(team.teamId);
            this._elOptions[team.optionIndex].selected = true;
        }
        else {
            if (href != this._domain) this.cleanUrl();
        }

        
        /**
         * Comportements à l'événement change du select
         */
        this._el.addEventListener('change', function() {
            if (this._el.value != 0) this.pushTeamState();
            else {
                this._elOptions[0].selected = true;
                this._elResult.innerHTML = '';
                this.cleanUrl();
            }
        }.bind(this));


        /**
         * Comportements à l'événement popstate
         */
        window.addEventListener('popstate', function(e) {

            //console.log('popstate');
            console.log(e.state);
            //console.log(e.state.data.optionIndex);
            //console.log(e.state.data.teamId);
            //console.log(e.state.data.teamName);

            if (e.state) {
                this._elOptions[e.state.data.optionIndex].selected = true;
                getTeamPlayers(e.state.data.teamId);
            } else {
                this._elOptions[0].selected = true;
                this._elResult.innerHTML = '';
            }
        }.bind(this));
    }


    /**
     * Trouver l'équipe à afficher
     */
    findTeam(key, value) {
        let team;

        for (let i = 0, l = this._routes.length; i < l; i++) {
            if (this._routes[i][key] == value) team = this._routes[i];
        }

        return team;
    }


    /**
     * Nettoyer l'URL
     */
    cleanUrl() {
        history.replaceState(null, null, this._domain);
    }


    /**
     * Push le nouvel état (state) et appelle la méthode asynchrone d'injection des joueurs
     */
    pushTeamState() {        
        let team = this.findTeam('teamId', this._el.value);

        history.pushState({data: team}, null, team.teamName + '/');
        getTeamPlayers(team.teamId);
    }
}