export function addition(a, b) {
    return a + b;
}


export function soustraction(a, b) {
    return a - b;
}


export function multiplication(a, b) {
    return a * b;
}


export function division(a, b) {
    return a / b;
}


export function afficheResultatAddition(a, b) {
    return `Le résultat de l'addition ${a} + ${b} est : ${addition(a, b)}.`
}


export function copyArray(array) {
    let newArray = array;
    return newArray;
}


export function cloneArray(array) {
    /**
     * Les tableaux en JS sont des valeurs de référence, 
     * du coup, lorsque vous essayez de les copier en utilisant l'opérateur =, 
     * il ne copiera que la référence au tableau original et non la valeur du tableau. 
     * Pour créer une véritable copie d'un tableau, 
     * vous devez copier la valeur du tableau dans un nouvel espace variable. 
     * Encore ici, la syntaxe ES6 simplifie les choses avec la syntaxe [...Array].
     * ref : https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
     */
    let newArray = [...array];
    return newArray;
}