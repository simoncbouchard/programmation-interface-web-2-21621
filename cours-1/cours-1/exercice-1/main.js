/**
 * 1 - Au chargement de la page, injecter la valeur de l'attribut 'maxlength' de l'input text dans l'élement <span data-js-input-limit>
 * 2 - À la saisi d'un caractère dans l'input text, afficher dynamiquement le nombre restant de caractère(s) avant d'atteindre la limite récupérée précédemment
 * 3 - Assurez-vous que la chaîne 'caractères' soit au pluriel seulement si le nombre restant est supérieur à 1
 * 4 - Au click du bouton 'Soumettre', si une valeur est saisie, injecter celle-ci dans l’élément <input>
 *     ainsi que la longueur de cette même valeur
 */

window.addEventListener("DOMContentLoaded"/* Same as Load */, () => {
    let elForm = document.querySelector("[data-js-form]"),
        elTexte = elForm.texte,
        elLimit = document.querySelector("[data-js-input-limit]"),
        elBtn = document.querySelector("[data-js-submit]"),
        maxlength = elTexte.getAttribute("maxlength");
        elLimit.textContent = maxlength;                
        
    elTexte.addEventListener("input", () => {
        let textValue = elTexte.value,
            textLength = textValue.length,
            diff = maxlength - textLength;
            
            if(diff <= 1){
                elLimit.textContent = diff;
                elLimit.textContent += " caractère"
            }
            else {
                elLimit.textContent = diff;
                elLimit.textContent += " caractères"
            }
        })

    elBtn.addEventListener("click", (e) => {
        e.preventDefault();
    })    
});