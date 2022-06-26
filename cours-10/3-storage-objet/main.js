import Form from './Form.js';


(function() {

    let elForms = document.querySelectorAll('[data-js-form]');

    for (let i = 0, l = elForms.length; i < l; i++) {
        new Form(elForms[i]);
    }

})();