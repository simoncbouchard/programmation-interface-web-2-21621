let ModuleSansPrototype = (function() {
    
    /**
     * Section privée
     */
    // Variables privées
    let foo = 'bar',
        x = 0,
        y = 0;



    /**
     * Section publique
     */
    // Méthodes publiques
    function estPositif(nb) {
        let isPositive = false;
        if (!isNaN(nb) && nb >= 0) isPositive = true;
        return isPositive;
    };
    

    // Retourne les methodes publiques
    return {
        get: function() {
            return foo;
        },
        set: function(val) {
            foo = val;
        },
        aPlusB: function(valeur1, valeur2) {
            if (valeur1) x = valeur1;
            if (valeur2) y = valeur2;
    
            return x + y;
        },

        // Alias publique (public) pour appeler une fonction privée (private)
        estPositif: estPositif
    };
})();