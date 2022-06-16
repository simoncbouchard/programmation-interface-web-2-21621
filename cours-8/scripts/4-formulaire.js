export function checkRequiredInputs(form) {

    let isValid = true,
        elsRequired = form.querySelectorAll('[required]');

    for (let i = 0, l = elsRequired.length; i < l; i++) {
        if (elsRequired[i].value == '') isValid = false;
    }

    return isValid;
}


/**
 *  À tester
 *
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
 */