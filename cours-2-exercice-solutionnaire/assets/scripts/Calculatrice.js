let Calculatrice = (function() {

    /**
     * Section privée
     */
    // Méthodes privées
    function additionne(nb1, nb2) {                        
        return nb1 + nb2;
    };

    function soustraire(nb1, nb2) {                        
        return nb1 - nb2;
    };

    function multiplie(nb1, nb2) {                        
        return nb1 * nb2;
    };

    function divise(nb1, nb2) {                        
        return nb1 / nb2;
    };



    /**
     * Section publique
     */
    // Méthodes publiques
    function calculate() {
        let nb1 = parseInt(this.elNb1.value),
            nb2 = parseInt(this.elNb2.value),
            operator = this.elSelect.value,
            msg;

        if (!isNaN(nb1) && !isNaN(nb2)) {
            let result;
            if (operator == 'addition') result = additionne(nb1, nb2);
            if (operator == 'soustraction') result = soustraire(nb1, nb2);
            if (operator == 'multiplication') result = multiplie(nb1, nb2);
            if (operator == 'division') result = divise(nb1, nb2);
            msg = `<p>Le résultat de l'équation est : <span>${result}</span></p>`;
        } else {
            msg = '<p>Les entrées saisies ne sont pas valides.</p>';
        }

        this.elResult.innerHTML = msg;
    }
    
    
    // Constructeur
    let Calculatrice = function(elCalculatrice) {
        this.elForm = elCalculatrice.querySelector('form');
        this.elNb1 = this.elForm.nb1;
        this.elNb2 = this.elForm.nb2;
        this.elSelect = this.elForm.querySelector('select');
        this.elSubmit = this.elForm.querySelector('[data-js-submit]');
        this.elResult = elCalculatrice.querySelector('[data-js-result]');
    };
    

    // Prototype
    Calculatrice.prototype = {
        constructor: Calculatrice,
        // Méthodes publiques
        init: function() {                        
            this.elSubmit.addEventListener('click', function(e) {
                e.preventDefault();
                this.calculate();
            }.bind(this))
        },
        calculate
    };


    // Retourne l'objet avec son prototype
    return Calculatrice;
})();