
export const maValeur = 'Ma valeur exportée.';


export function maFonction(nb) {

    //console.log(this);                  // => undefined
    //console.log(globalThis);            // => objet window

    let isPrime = true;

    for (let i = 2, l = nb; i < l; i++) {
        if (nb%i === 0) isPrime = false;
    }

    let msg = `Le chiffre ${nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;

    return msg;
}