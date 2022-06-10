export default class {
//export default class Number {
//export class Number {

    constructor(nb) {
        this._nb = nb;
        this._elParent = document.querySelector('[data-js-result]');

        //console.log(this);
        //this.init();
    }

    
    init() {
        this.showNbDetails();
    }
    

    isPair() {
        let msg = `Le chiffre ${this._nb} est ${this._nb % 2 == 0 ? 'pair' : 'impair'}.`;
        return msg;
    }


    isPrime() {
        let isPrime = true;
    
        for (let i = 2, l = this._nb; i < l; i++) {
            if (this._nb % i === 0) isPrime = false;
        }
    
        let msg = `Le chiffre ${this._nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    square() {
        let msg = `Le carré de ${this._nb} est ${Math.pow(this._nb, 2)}.`;
        return msg;
    }


    showNbDetails() {
        let msg = this.isPair();
        msg += ` ${this.isPrime()}`;
        msg += ` ${this.square()}`;

        console.log(msg);

        //this._elParent.insertAdjacentHTML('beforeend', msg)
    }
}