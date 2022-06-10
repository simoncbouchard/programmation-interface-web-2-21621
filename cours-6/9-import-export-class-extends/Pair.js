import Number from './Number.js';


export default class Pair extends Number {
    constructor(nb) {
        super();
        this._nb = nb;
    }


    /**
     * Un nombre égal à la somme de ses diviseurs propres est parfait.
     * Exemples : 
     *      1 + 2 + 3 = 6
     *      1 + 2 + 4 + 7 + 14 = 28
     * Liste des nombres parfaits : https://en.wikipedia.org/wiki/List_of_perfect_numbers
     */
    isPerfect() {
        let msg = `Le nombre ${this._nb} `,
            temp = 0;

        for (let i = 1; i <= this._nb / 2; i++) {
            if (this._nb % i === 0) temp += i;
        }
        
        if (temp == this._nb && temp !== 0) msg += 'est un nombre parfait !'
        else msg += 'n\'est pas un nombre parfait.' 

        return msg;
    } 
    

    showNbDetails() {
        let msg = this.isPerfect();
        msg += ` ${this.isSquare()}`;
        msg += ` ${this.square()}`;

        console.log(msg);
    }
}