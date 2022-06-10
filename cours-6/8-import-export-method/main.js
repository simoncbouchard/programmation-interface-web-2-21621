import { showNbDetails } from './Number.js';


(function() {

    let elInputNumber = document.querySelector('input[name="nb"]'),
        elBtn = document.querySelector('[data-js-submit]');

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let nb = elInputNumber.value;
         
        showNbDetails(nb);

    });
})();