class Number {
    constructor() {
        this.showNbDetails = this.showNbDetails.bind(this);     // Lie (bind) le contexte this à la méthode showNbDetails exportée
    }


    isPair(nb) {
        let msg = `Le chiffre ${nb} est ${nb % 2 == 0 ? 'pair' : 'impair'}.`;
        return msg;
    }


    isPrime(nb) {
        let isPrime = true;
    
        for (let i = 2, l = nb; i < l; i++) {
            if (nb%i === 0) isPrime = false;
        }
    
        let msg = `Le chiffre ${nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;
        return msg;
    }


    square(nb){
        let msg = `Le carré de ${nb} est ${Math.pow(nb,2)}.`;
        return msg;
    }


    showNbDetails(nb) {
        let msg = this.isPair(nb);
        msg += ` ${this.isPrime(nb)}`;
        msg += ` ${this.square(nb)}`;

        console.log(msg);
    }
}


export const { showNbDetails } = new Number();