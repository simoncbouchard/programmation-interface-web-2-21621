(function() {

    let elCalculatrices = document.querySelectorAll('[data-js-calculatrice]');

    for (let i = 0, l = elCalculatrices.length; i < l; i++) {
        new Calculatrice(elCalculatrices[i]).init();
    }

})();