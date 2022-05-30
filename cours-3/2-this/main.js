let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;'


/**
 * Contextes de l'objet this
 */

console.log('%cContextes de l\'objet this', css);

// Contexte global




// Fonction simple




// Gestionnaire d'événement





// Objet littéral





// Prototype





/**
 * Méthode call()
 */

console.log('%cMéthode call()', css);

// Redéfinir les valeur à l'appel d'un objet





// Chaîner le constructeur d’un objet (héritage)





/**
 * Méthode apply()
 */

 console.log('%cMéthode apply()', css);

let nombres = [5, 6, 2, 3, 7],
    max = Math.max.apply(this, nombres),
    min = Math.min.apply(window, nombres);

console.log(max);
console.log(min);



/**
 * Méthode bind()
 */

console.log('%cMéthode bind()', css);

// Gestionnaire d'événement





// Objet littéral

this.x = 9;                                             // En dehors de tout contexte, pour un navigateur, this est l'objet window
let objetX = {
    x: 99,
    getX: function() { 
        return this.x; 
    }
};

console.log(objetX.getX());                             // => 99

let getX = objetX.getX;                                 // Crée la variable getX, affecte la méthode getX à la variable mais sans l'appeler (on change le contexte d'appel)
console.log(getX());                                    // => 9  |  car this fait référence au contexte d'appel, ici l'objet global
           
let boundGetX = getX.bind(objetX);                      // On crée une nouvelle fonction à laquelle on lie module en tant que 'this'
console.log(boundGetX());                               // => 99



/**
 * Fonctions fléchées
 */

console.log('%cFonctions fléchées', css);


// Gestionnaire d'événement





// Objet littéral




