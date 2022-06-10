import Number from './Number.js';


export default class Impair extends Number {
    constructor(nb) {
        super();
        this._nb = nb;
    }


    isPrime() {
        let isPrime = true;

        for (let i = 2, l = this._nb; i < l; i++) {
            if (this._nb % i === 0) isPrime = false;
        }

        let msg = `Le chiffre ${this._nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    showNbDetails() {
        let msg = this.isPrime();
        msg += ` ${this.isSquare()}`;
        msg += ` ${this.square()}`;

        console.log(msg);
    }
}