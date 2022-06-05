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


    get difference() {
        let difference;
        if (this._difference) difference = this._difference;
        else difference = this.calculeDifference();

        return difference;
    }


    set difference(nouvelleValeur) {
        this._difference = nouvelleValeur;
    }
}