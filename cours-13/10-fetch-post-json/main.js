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
            callFetch();
        //}
    });


    function callFetch() {

        let data = {	
            'username': encodeURIComponent(elUsername.value), 
            'password': encodeURIComponent(elPassword.value), 
            'lastname': encodeURIComponent(elLastName.value), 
            'firstname': encodeURIComponent(elFirstName.value)
        }

        let myInit = { 
            method: 'post',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        };


        fetch('requeteFetch.php', myInit)
            .then(function(response) {
                if (response.ok) return response;
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                //console.log(data);
				elFormWrapper.innerHTML += `<h3>Merci ${elFirstName.value} !</h3>`;
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });

	};
})();