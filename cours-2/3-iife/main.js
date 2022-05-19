let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;';


/**
 * IIFE
 */

console.log('%cIIFE', css);


let aPlusB = (function() {

    // console.log('aPlusB');

    // Défini les valeurs par défaut des variables x et y
    let x = 0,
        y = 0;

    return function(valeur1, valeur2) {

        //console.log(`x vaut : ${x}`);
        //console.log(`y vaut : ${y}`);

        if (valeur1) {
            x = valeur1;
            //console.log(`x vaut maintenant : ${x}`);
        }
        
        if (valeur2) {
            y = valeur2;
            //console.log(`y vaut maintenant : ${y}`);
        }

        return x + y;
    };
})();


console.log(aPlusB);
console.log(aPlusB.x);              // => undefined, aucun accès puisque seule la fonction interne est retournée

let resultat1 = aPlusB(); 
console.log(resultat1);             // => 0

let resultat2 = aPlusB(5, 4); 
console.log(resultat2);             // => 9


let resultat3 = aPlusB(5); 
console.log(resultat3);             // => 9, pourquoi ?

let resultat4 = aPlusB(10, 10); 
console.log(resultat4);             // => 20