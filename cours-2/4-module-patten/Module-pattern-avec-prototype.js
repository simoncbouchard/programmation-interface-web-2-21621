let ModuleAvecPrototype = (function() {

    /**
     * Section privée
     */
    // Variables privées
    let nombrePage = 300,
        pageActuelle = 1,
        auteurPrenom = 'Billy',
        auteurNom = 'Bob';
    

    // Méthodes privées
    function concateneNom(prenom, nom) {
        return `${prenom} ${nom}`;
    };



    /**
     * Section publique
     */
    // Méthodes publiques
    function decrire() {    
        return `Ce livre de ${this.auteur} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
    };
    

    // Constructeur
    let ModuleAvecPrototype = function(valNbPage, valPageActuelle, valAuteurPrenom, valAuteurNom) {
        this.nombrePage = valNbPage || nombrePage;
        this.pageActuelle = valPageActuelle || pageActuelle;

        if (valAuteurPrenom && valAuteurNom) this.auteur = concateneNom(valAuteurPrenom, valAuteurNom);
        else this.auteur = concateneNom(auteurPrenom, auteurNom);
    };
    
    
    // Prototype
    ModuleAvecPrototype.prototype = {
        constructor: ModuleAvecPrototype,

        // Méthodes publiques
        avancePage: function() {                        
            if (this.pageActuelle < this.nombrePage) {
                this.pageActuelle++;
            }
        },
        reculePage: function() {
            if (this.pageActuelle > 0) {
                this.pageActuelle--;
            }
        },

        // Alias publique (public) pour appeler une fonction privée (private)
        decrire: decrire
    };


    // Retourne l'objet avec son prototype
    return ModuleAvecPrototype;
})();