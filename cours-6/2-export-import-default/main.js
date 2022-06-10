/**
 * Exemple const default et fonction nommée
 */
import yolo, { maDeuxiemeValeur, maFonction } from './exportedScript.js';

console.log(yolo);
console.log(maDeuxiemeValeur);

console.log(maFonction(7));



/**
 * Exemple const nommée et fonction default
 *
import maFonctionYolo, { maValeur, maDeuxiemeValeur } from './exportedScript.js';

console.log(maValeur);
console.log(maDeuxiemeValeur);

console.log(maFonctionYolo(7));
*/