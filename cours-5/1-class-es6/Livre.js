/*
Objet lirtéral
let livre = {
    auteurPrenom: 'Billy',
    auteurNom: 'Bob',
    nombrePage: 300,
    pageActuelle: 1
}

Objet prototype
function Livre(valAuteurPrenom, valAuteurNom, valNbPage, valPageActuelle) {
    this.auteurPrenom = valAuteurPrenom;
    this.auteurNom = valAuteurNom;
    this.nombrePage = valNbPage;
    this.pageActuelle = valPageActuelle;
};
*/


class Livre {
	constructor(auteurPrenom, auteurNom, nombrePage, pageActuelle) {
		this._auteurPrenom = auteurPrenom;
        this._auteurNom = auteurNom;
		this._nombrePage = nombrePage;
        this._pageActuelle = pageActuelle || 1;
	}


	concateneNom() {
        return `${this._auteurPrenom} ${this._auteurNom}`;
    };


	decrire() {
		return `Ce livre de ${this.concateneNom()} a ${this._nombrePage} pages, je suis présentement rendu à la page ${this._pageActuelle}.`;
	}


	avancePage() {                        
		if (this._pageActuelle < this._nombrePage) {
			this._pageActuelle++;
		}
	}


	reculePage() {
		if (this._pageActuelle > 0) {
			this._pageActuelle--;
		}
	}
};