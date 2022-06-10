export default 'Ma valeur par défault.';
//export const maValeur = 'Ma valeur.';
export const maDeuxiemeValeur = 'Ma 2e valeur.';

export function maFonction(nb) {
//export default function(nb) {
    
    let isPrime = true;
    
    for (let i = 2, l = nb; i < l; i++) {
        if (nb%i === 0) isPrime = false;
    }
    
    let msg = `Le chiffre ${nb} ${isPrime ? 'est' : 'n\'est pas'} premier.`;
    
    return msg;
} 