/**
 * 1 - Au chargement de la page, injecter la valeur de l'attribut 'maxlength' de l'input text dans l'élement <span data-js-input-limit>
 * 2 - À la saisi d'un caractère dans l'input text, afficher dynamiquement le nombre restant de caractère(s) avant d'atteindre la limite récupérée précédemment
 * 3 - Assurez-vous que la chaîne 'caractères' soit au pluriel seulement si le nombre restant est supérieur à 1
 * 4 - Au click du bouton 'Soumettre', si une valeur est saisie, injecter celle-ci dans l’élément <input>
 *     ainsi que la longueur de cette même valeur
 */


(function() {
    let elForm = document.querySelector('[data-js-form]')
        elInput = elForm.texte;
        elBtn = document.querySelector('[data-js-submit]'),
        elInputLimit = document.querySelector('[data-js-input-limit]'),
        elTextValue = document.querySelector('[data-js-text-value]'),
        elTextLength = document.querySelector('[data-js-text-length]'),
        maxLength = elInput.getAttribute('maxlength');


    elInputLimit.textContent = `${maxLength} caractères`;


    elInput.addEventListener('input', function(e) {
        let inputValue = elInput.value,
            characterLeft = maxLength - inputValue.length;

        elInputLimit.textContent = `${characterLeft} caractère${characterLeft > 1 ? 's' : ''}`;

    });

    
    elBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let inputValue = elInput.value;

        if (inputValue != '') {
            elTextValue.innerHTML = `<small>Le mot saisi est : </small>${inputValue}`;
            elTextLength.innerHTML = `<small>La longueur du mot saisi est : </small>${inputValue.length}`;
        }
    });
})();