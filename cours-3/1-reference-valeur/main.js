(function() {

    let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


    /**
     * Passage par valeur, type primitif
     */

    console.log('%cPassage par valeur, type primitif', css);





    /**
     * La variable contenant un objet est une référence à cet objet 
     * et non l’objet lui-même
     */

    console.log('%cUn objet est une référence à cet objet', css);





    /**
     * Passage par valeur, objet
     */

    console.log('%cPassage par valeur, objet', css);

    /**
     * JavaScript fait référence à la variable ordinateur dans la variable machine. 
     * Par conséquent, les deux variables ordinateur et machine font référence au même objet dans la mémoire.
     */
    (function() {
        function ouvrir(machine) {              // La variable machine partage la même référence à la variable ordinateur
            machine.estOuvert = true;
        }
        
        let ordinateur = {                      // La variable ordinateur est une référence à l'objet réel
            estOuvert: false
        };

        ouvrir(ordinateur);
        console.log(ordinateur.estOuvert);      // => true;
    })();



    /**
     * Les objets en JavaScript sont passés par référence, mais pas leur(s) propriété(s).
     */
    (function() {
        function ouvrir(machine) {
            machine = {
                estOuvert: true                 // La valeur de la propriété estOuvert est à true uniquement dans le scope de la fonction ouvrir()
            };
        };
        
        let ordinateur = {
            estOuvert: false
        };
        
        ouvrir(ordinateur);
        console.log(ordinateur.estOuvert);      // => false;
    })();


    (function() {
        function ouvrir(estOuvert) {
            estOuvert = true;                   // La valeur de la propriété estOuvert est à true uniquement dans le scope de la fonction ouvrir()
        }
        
        let ordinateur = {
            estOuvert: false
        };
        
        ouvrir(ordinateur.estOuvert);
        console.log(ordinateur.estOuvert);      // => false;
    })();



    /**
     * En résumé
     */
    (function() {
        function changeValeurs(a, b, c) {
            a = a * 10;
            b.item = 'changé';
            c = 'changé';
        }

        let chiffre = 10;
        let objet1 = {
            item: 'inchangé'
        };
        let objet2 = {
            item: 'inchangé'
        };

        changeValeurs(chiffre, objet1, objet2.item);

        console.log(chiffre);                   // => 10  |  la variable chiffre a été passé par valeur et non référence
        console.log(objet1.item);               // => 'changé'  |  la variable objet1 est une référence à l'objet, la variable b partage donc la même référence
        console.log(objet2.item);               // => 'inchangé'  |  les objets en JavaScript sont passés par référence, mais pas leur(s) propriété(s).
    })();

})();