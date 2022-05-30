/**
 * 1 - Enlevez l’attribut disabled de l’élément <bouton> s’il y a un ou plusieurs caractère(s) saisi(s) dans le premier et le deuxième élément <input>. 
 * 2 - Replacez l’attribut disabled de l’élément <bouton> s’il n’y a aucun caractère dans l’un - ou les deux - élément(s) <input>.
 */


(function() {
    let elForm = document.querySelector('[data-js-form]')
        elInputs = elForm.querySelectorAll('input'),
        elSubmit = document.querySelector('[data-js-submit]');

    for (let i = 0, l = elInputs.length; i < l; i++) {
        elInputs[i].addEventListener('input', function() {

            let isFill = checkInputs();

            if (isFill) elSubmit.disabled = false;
            else elSubmit.disabled = true;
        });
    }

    function checkInputs() {

        let isFill = true;

        for (let i = 0, l = elInputs.length; i < l; i++) {
            if (elInputs[i].value == '') isFill = false;
        }

        return isFill;
    }

})();