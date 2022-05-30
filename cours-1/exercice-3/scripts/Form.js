class Form {
    constructor(el) {
        this._el = el;
        this._elForm = this._el.querySelector('form');
        this._elTextInput = this._elForm.texte;
        this._elSubmit = this._elForm.querySelector('[data-js-submit]');
        this._elText = this._el.querySelector('[data-js-text-value]');

        this.init();
    }


    init() {
        this._elSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            if (this._elTextInput.value != '') this.showText();
        }.bind(this));
    }


    showText(e) {
        this._elText.textContent = this._elTextInput.value;
    }

}