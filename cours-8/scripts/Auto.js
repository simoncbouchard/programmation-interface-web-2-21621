export default class Auto {
    constructor(marque, modele, annee, image, prix, rabais, couleurs) {
        this._marque = marque;
        this._modele = modele;
        this._image = image;
        this._couleurs = couleurs;
        this._annee = annee;
        this._prix = prix;
        this._rabais = rabais;
        this._prixReduit = this._prix - this._rabais;
    }


    injecteAuto() {

        // Mime un élément <div>
        document.body.innerHTML = '<div data-js-autos></div>';

        let elResult = document.querySelector('[data-js-autos]'),
            autoDOM = `
                <article class="auto">
                    <div class="auto__img-wrapper">
                        <img src="${this._image}" class="auto__img">
                    </div>
                    <div class="auto__text-wrapper">
                        <h2 class="auto__brand">${this._marque}</h2>
                        <h3 class="auto__model">${this._modele}</h3>
                        <p class="auto__year">${this._annee}</p>
                        ${this._prixReduit ?
                            `<h4 class="auto__price">
                                <span >${this._prixReduit} $</span>
                                <span class="auto__original-price">${this._prix} $</span>
                            </h4>` 
                            :
                            `<h4 class="auto__price">${this._prix} $</h4>`
                        }
                        <div class="auto__colors">
                            <h4 class="auto__color">Couleurs :</h4>
                            <div class="auto__colors-wrapper">
                            ${this.couleurs.map((couleur) =>
                                `<div class="auto__color-pellet" style="background-color: ${couleur}"></div>`
                            ).join('')}
                            </div>
                        </div>
                    </div>
                </article>`;

        elResult.insertAdjacentHTML('beforeend', autoDOM);
    }


    get marque() {
        return this._marque;
    }


    get couleurs() {
        return this._couleurs;
    }
}


/**
 * À tester
 * let auto = new Auto('Nissan', 'Leaf Plus SV', '2022', './assets/img/neuves/neuve-1.jpeg', 52329, 500, ['darkred', 'Grey', '#000000']);
 */