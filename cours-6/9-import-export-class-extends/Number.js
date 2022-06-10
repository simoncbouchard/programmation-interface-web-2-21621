export default class Number {

    isSquare() {
        let msg = `Le nombre ${this._nb} `;

        if (Math.sqrt(this._nb) % 1 === 0) {
            msg += `est le carré de ${Math.sqrt(this._nb)}.`
        } else {
            msg += `n'a pas de racine carré.`
        }

        return msg;
    };


    square() {
        let msg = `Le carré de ${this._nb} est ${Math.pow(this._nb, 2)}.`;
        return msg;
    }
}