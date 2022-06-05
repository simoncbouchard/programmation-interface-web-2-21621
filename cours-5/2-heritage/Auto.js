class Auto {
    constructor(type, couleur, marque) {
        this._type = type;
        this._couleur = couleur;
        this._marque = marque;

        this._nbRoues = 4;
    }


    decrire() {
        return `Mon auto ${this._type} de marque ${this._marque} est de couleur ${this._couleur}.`;
    }
}