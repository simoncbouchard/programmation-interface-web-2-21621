class Occasion extends Auto {
    constructor(type, couleur, marque, valeur, prix) {
        super(type, couleur, marque);
    
        // valeur et prix sont spécifique à Occasion
        this._valeur = valeur;
        this._prix = prix;
    }


    calculeDifference() {
        return this._valeur - this._prix;
    }


    /**
     * La méthode decrire héritée de Auto est redéfinie.
     */
    decrire() {
        console.log('Occasion')
        return `Mon auto ${this._type} de marque ${this._marque} est de couleur ${this._couleur} vaut ${this._valeur}$ et m'a coûté ${this._prix}$, la différence est de ${this.calculeDifference()}$.`;
    }
}