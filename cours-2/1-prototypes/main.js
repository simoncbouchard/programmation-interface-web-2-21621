let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


/**
 * Rappel objets littéraux
 */

console.log('%cRappel objets littéraux', css);

/*
let livre1 = {
    nombrePage: 300,
    pageActuelle: 1,
    auteurPrenom: 'Billy',
    auteurNom: 'Bob',
    maMethode: function() {
        console.log(this.auteurPrenom + ' ' + this.auteurNom);
    } 
}

livre1.maMethode();
*/



/**
 * Prototypes Objet
 */

console.log('%cPrototypes Objet', css);

// Constructeur de l'objet prototype Livre
function Livre(valNbPage, valPageActuelle, valAuteurPrenom, valAuteurNom) {
    this.nombrePage = valNbPage;
    this.pageActuelle = valPageActuelle;
    this.auteurPrenom = valAuteurPrenom;
    this.auteurNom = valAuteurNom;
};



// Définir des méthodes
// Syntaxe 1 :
Livre.prototype = {
    avancePage: function() {
        if (this.pageActuelle < this.nombrePage) {
            this.pageActuelle++;
        }
    },
    reculePage: function() {
        if (this.pageActuelle > 0) {
            this.pageActuelle--;
        }
    }
}

// Syntaxe 2 :
Livre.prototype.decrire = function () {
    return `Ce livre de ${this.auteurPrenom + ' ' + this.auteurNom} a ${this.nombrePage} pages, je suis présentement rendu à la page ${this.pageActuelle}.`;
};


// Instancier un prototype
let livre1 = new Livre(300, 1, 'Billy', 'Bob'),
    livre2 = new Livre(400, 1, 'Jane', 'Davis');



// Accéder aux propriétés d’une instance d’objet
console.log(livre1.nombrePage);             // Propriété de l'objet prototype livre
console.log(livre1.pageActuelle);           // Propriété de l'objet prototype livre
console.log(livre1.auteurPrenom);           // Propriété de l'objet prototype livre
console.log(livre1.auteurNom);              // Propriété de l'objet prototype livre

console.log(livre2.nombrePage);             // Propriété de l'objet prototype livre             
console.log(livre2.pageActuelle);           // Propriété de l'objet prototype livre
console.log(livre2.auteurPrenom);           // Propriété de l'objet prototype livre
console.log(livre2.auteurNom);              // Propriété de l'objet prototype livre

console.log(livre1.valueOf());              // Propriété du data type JavaScript Object
console.log(livre2.valueOf());              // Propriété du data type JavaScript Object



// Appeler des méthodes d’une instance d’objet
console.log(livre1.decrire());
livre1.avancePage();
console.log(livre1.decrire());


console.log(livre2.decrire());
livre2.avancePage();
livre2.avancePage();
livre2.avancePage();
livre2.avancePage();
livre2.avancePage();
livre2.avancePage();
livre2.reculePage();
console.log(livre2.decrire());