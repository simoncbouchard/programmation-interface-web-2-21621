export default class Form {
    constructor(el) {
        this._el = el;
        this._elForm = this._el.querySelector('form');
        this._elInputPrenom = this._elForm .prenom;
        this._elInputNom = this._elForm .nom;
        this._elSubmit = this._elForm .querySelector('[data-js-submit]');
        this._elShow = this._elForm .querySelector('[data-js-show]');

        this._elInfos = this._el.querySelector('[data-js-infos]');

        this.init();
    }


    init() {
        this._elSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            //if (validation.isValid) {
            this.ajouterNouvelObjetInfo();
        }.bind(this));

        this._elShow.addEventListener('click', function(e) {
            e.preventDefault();
            this.afficherInfos();
        }.bind(this));
    }


    ajouterNouvelObjetInfo() {

        let tableauObjets;

        if (!sessionStorage.getItem('infos')) tableauObjets = [];
        else {
            // Si le contenu du session est un array
            if (Array.isArray(JSON.parse(sessionStorage.getItem('infos')))) tableauObjets = JSON.parse(sessionStorage.getItem('infos'));
            else {
                tableauObjets = [];
                tableauObjets.push(JSON.parse(sessionStorage.getItem('infos')));
            }
        }

        let infos = {
            'prenom': this._elInputPrenom.value,
            'nom': this._elInputNom.value
        };

        tableauObjets.push(infos);

        console.log(tableauObjets);
    
        sessionStorage.setItem('infos', JSON.stringify(tableauObjets));

    }


    afficherInfos() {

        if (sessionStorage.getItem('infos')) {

            let data = JSON.parse(sessionStorage.getItem('infos'));

            console.log(data);
            
            let listeInfos = '<ul>';

            /* for */
            for (let i = 0, l = data.length; i < l; i++) {
                listeInfos += `<li>${data[i].prenom} ${data[i].nom}</li>`;
            }
            
            /* for...in 
            for (const level in data) {
                listeInfos += `<li>${data[level].prenom} ${data[level].nom}</li>`;
            }
            */

            /* map
            data.map(obj => {
                listeInfos += `<li>${obj.prenom} ${obj.nom}</li>`;
            });
            */
            

            listeInfos += '</ul>';

            this._elInfos.innerHTML = listeInfos;

        } else {
            this._elInfos.innerHTML = `<p>Le sessionStorage 'infos' est vide.</p>`;
        }
    }
}