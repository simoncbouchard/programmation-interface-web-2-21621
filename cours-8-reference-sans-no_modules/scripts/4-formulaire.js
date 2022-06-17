export function checkRequiredInputs(form) {

    let isValid = true,
        elsRequired = form.querySelectorAll('[required]');

    for (let i = 0, l = elsRequired.length; i < l; i++) {
        if (elsRequired[i].value == '') isValid = false;
    }

    return isValid;
}