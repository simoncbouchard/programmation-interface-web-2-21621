export default 'Ma valeur par défault.';

const maValeur = 'Ma valeur exportée.';

function maFonction(nb) {

    let isPrime = true;

    for (let i = 2, l = nb; i < l; i++) {
        if (nb%i === 0) isPrime = false;
    }

    let msg = `Le chiffre ${nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;

    return msg;
}

export {
    maValeur,
    maFonction
}