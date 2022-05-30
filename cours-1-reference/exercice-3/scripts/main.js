/**
 * 1 - Il y a deux fois exactement le même comportement dans le DOM, soit : 
 *     chaque formulaire a un <input> de type text, au clic de son <button>, il faut injecter sa valeur saisie (s’il y a une valeur) dans l’élément DOM data-js-text-value.
 * 2 - Pour éviter le code spaghetti, écrivez le script en orienté objet (classe ES6),
 *     ceci prenant soin de passer la référence du noeud DOM courant en argument lors de l’instantiation de l’objet Form. 
 *     Ainsi, vous pourrez limiter la portée du contexte DOM afin de récupérer les éléments nécessaires de chaque formulaire afin de développer son comportement attendu de façon autonome, modulaire et réutilisable.
 */


(function() {

    let elForms = document.querySelectorAll('[data-js-form]');

    for (let i = 0, l = elForms.length; i < l; i++) {
        new Form(elForms[i]);
    }

})();