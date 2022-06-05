class Auto {
    constructor(type, couleur, marque) {
        this._type = type;
        this._couleur = couleur;
        this._marque = marque;
    }


    decrire() {
        return `Mon auto ${this.type} de marque ${this.marque} est de couleur ${this.marque}.`;
    }


    get marque() {
        return this._marque;
    }


    set marque(nouvelleMarque) {
        this._marque = nouvelleMarque;
    }
}