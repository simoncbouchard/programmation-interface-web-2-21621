let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


/**
 * Fonction
 */
/*
console.log('%cFonction', css);

function aPlusB(valeur1, valeur2) {
    let x;
    if (valeur2) {
        x = valeur2;
    }
    return valeur1 + x;
}

let resultat1 = aPlusB(5, 4);
console.log(resultat1);                 // => 9

let resultat2 = aPlusB(5);
console.log(resultat2);                 // => NaN, la valeur de x n'est pas maintenue entre les deux appels
*/


/**
 * Closure
 */

console.log('%cClosure', css);

/**
 * La fonction aPlusB(a, b) maintient sa référence à son contexte lors de sa création, c’est-à-dire à la fonction closure().
 * Les variables x et y conservent donc leur valeur au-delà de l’appel de closure() et son accessible à l’aide de la fonction aPlusB().
 */


function closure() {

    console.log('closure()');

    let x = 0,
        y = 0;

    return function (valeur1, valeur2) {
        if (valeur1) {
            x = valeur1;
        }
        if (valeur2) {
            y = valeur2;
        }

        return x + y;
    };
}

let aPlusB = closure();                 // aPlusB devient la fonction retourné par closure().

let resultat1 = aPlusB();               // 0 + 0 = 0
console.log(resultat1);                 // => 0

let resultat2 = aPlusB(5, 4);           // 5 + 4 = 9
console.log(resultat2);                 // => 9

let resultat3 = aPlusB(5);              // 5 + ? = ?
console.log(resultat3);                 // 9, pourquoi ?

let resultat4 = aPlusB(null, 10);       // null + 10 = ?
console.log(resultat4);                 // 15, pourquoi ?


/**
 * La ligne let aPlusB = closure(); est cependant inélégante et le rapport entre le nom de la fonction closure() et la fonction finale (aPlusB()) n’est pas très explicite. 
 * Cette méthode de travail profiterait de pouvoir assigner aPlusB directement à une fonction anonyme. 
 * Cependant, pour que la fonction aPlusB() retiennent la valeur de x et de y, il faut que la fonction soit d'abord appelée et non simplement déclaré. 
 * Ainsi l’exemple suivant ne fonctionne pas puisque la fonction anonyme n’est pas appelée initialement.
 */

/*
let aPlusB = function () {

    console.log('aPlusB');

    let x = 0,
        y = 0;

    return function (valeur1, valeur2) {
        if (valeur1) {
            x = valeur1;
        }

        if (valeur2) {
            y = valeur2;
        }
        return x + y;
    };
}

let resultat1 = aPlusB(5, 4);
console.log(resultat1);                 // => function(), aPlusB retourne le premier return
*/

/**
 * La solution pour contourner ce problème est d’utiliser une Immediately Invoked Function Expression (IIFE).
 */