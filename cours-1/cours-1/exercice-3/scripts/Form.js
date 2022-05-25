class Form {
    constructor(el) {
        this._el = el; // _ pour différencier une propriété à une méthode
        this._elForm = this._el.querySelector("form");
        this._elInput = this._elForm.texte;
        this._elBtn = this._el.querySelector("[data-js-submit]");
        this._elValue = this._el.querySelector("[data-js-text-value]");
        this.init();
    }

    init() {
        this._elBtn.addEventListener("click", function(e) {
            e.preventDefault();
            this.injectText();
        }.bind(this)); // Lié le contexte au parent. (Car this est au propre au bouton.)
    }

    injectText() {
        let value = this._elInput.value;

        if (value) {
            this._elValue.textContent = this._elInput.value;
        }
    }
}