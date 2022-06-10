import Pair from './Pair.js';
import Impair from './Impair.js';


(function() {

    let elInputNumber = document.querySelector('input[name="nb"]'),
        elBtn = document.querySelector('[data-js-submit]');

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let nb = elInputNumber.value;
         
        if (nb % 2 == 0) new Pair(nb).showNbDetails();
        else new Impair(nb).showNbDetails();

    });
})();