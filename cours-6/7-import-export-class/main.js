import Number from './Number.js';                                     // export default
//import { Number } from './Number.js';                               // export sans default

(function() {

    let elInputNumber = document.querySelector('input[name="nb"]'),
        elBtn = document.querySelector('[data-js-submit]');

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let nb = elInputNumber.value;
         
        for (let i = 1; i <= nb; i++) {
            //new Number(i);
            //new Number(i).init();
            new Number(i).showNbDetails();
        }

    });
})();