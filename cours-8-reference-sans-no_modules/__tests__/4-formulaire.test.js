import { checkRequiredInputs } from '../scripts/4-formulaire';


describe('Validation', function() {
    test('Vérifie les champs obligatoires', function() {
        
        document.body.innerHTML = `
                    <form>
                        <div>
                            <label for="prenom">Prénom</label>
                            <input type="text" id="prenom" name="prenom" value="test" required>
                        </div>

                        <div>
                            <label for="nom">Nom</label>
                            <input type="text" id="nom" name="nom" value="test" required>
                        </div>

                        <div>
                            <button>Soumettre</button>
                        </div>
                    </form>
                    `;

        expect(checkRequiredInputs(document.querySelector('form'))).toBe(true);
    });
});