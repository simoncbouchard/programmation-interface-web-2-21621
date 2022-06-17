import Auto from '../scripts/Auto';


describe('Classe Auto', function() {
    
    let auto = new Auto('Nissan', 'Leaf Plus SV', '2022', './assets/img/neuves/neuve-1.jpeg', 52329, 500, ['darkred', 'Grey', '#000000']);


    test('Retourne la marque', function() {
        expect(auto.marque).toBe('Nissan');
    });


    test('Retourne les couleurs', function() {
        expect(auto.couleurs).toEqual(['darkred', 'Grey', '#000000']);
    });


    test('Retourne la description de cette auto', function() {
        auto.injecteAuto();
        let dom = document.querySelector('[data-js-autos]').lastElementChild.innerHTML,
            trimDom = dom.trim()
        expect(trimDom)
            .toBe(`<div class="auto__img-wrapper">
                        <img src="./assets/img/neuves/neuve-1.jpeg" class="auto__img">
                    </div>
                    <div class="auto__text-wrapper">
                        <h2 class="auto__brand">Nissan</h2>
                        <h3 class="auto__model">Leaf Plus SV</h3>
                        <p class="auto__year">2022</p>
                        <h4 class="auto__price">
                                <span>51829 $</span>
                                <span class="auto__original-price">52329 $</span>
                            </h4>
                        <div class="auto__colors">
                            <h4 class="auto__color">Couleurs :</h4>
                            <div class="auto__colors-wrapper">
                            <div class="auto__color-pellet" style="background-color: darkred"></div><div class="auto__color-pellet" style="background-color: Grey"></div><div class="auto__color-pellet" style="background-color: #000000"></div>
                            </div>
                        </div>
                    </div>`
                );
    });
});