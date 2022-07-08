(function() {

	let elFormWrapper =  document.querySelector('[data-js-form-wrapper]'),
		elForm = elFormWrapper.querySelector('[data-js-form]'),
		elUsername = elForm.username,
		elPassword = elForm.password,
		elLastName = elForm.lastname,
		elFirstName = elForm.firstname,
		elBtn = elForm.querySelector('[data-js-btn]');


    elBtn.addEventListener('click', function(e) {
        e.preventDefault();

        // Validation FRONT
        //if (validation.isValid) { 
            elForm.classList.add('sent');
            elBtn.disabled = true;
            //add loader

            callFetch({
                username: encodeURIComponent(elUsername.value),
                password: encodeURIComponent(elPassword.value),
                lastname: encodeURIComponent(elLastName.value),
                firstname: encodeURIComponent(elFirstName.value)
            })
                .then(function(response) {
                    elFormWrapper.innerHTML += `<h3>Merci ${firstname.value} !</h3>`;
                })
                .catch(function(error) {
                    console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
                });
        //}
    });


    async function callFetch(data) {

        try {

            let response = await fetch('requeteFetch.php', {
                method: 'post',
                headers: {
                    'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                body: new URLSearchParams(data)
            });

            if (response.ok) return response;
            else throw new Error('La réponse n\'est pas OK');

        } catch (error) {
            return error.message;
        }
	};
})();