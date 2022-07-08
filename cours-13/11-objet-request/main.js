(function() {

	let elFormWrapper =  document.querySelector('[data-js-form-wrapper]'),
		elForm = elFormWrapper.querySelector('[data-js-form]'),
		elUsername = elForm.username,
		elPassword = elForm.password,
		elLastName = elForm.lastname,
		elFirstName = elForm.firstname,
		elBtn = elForm.querySelector('[data-js-btn]');
        myInit = { 
            method: 'post',
            headers: {
              'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };


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

        let encodedUsername = encodeURIComponent(elUsername.value),
            encodedPassword = encodeURIComponent(elPassword.value),
            encodedLastname = encodeURIComponent(elLastName.value),
            encodedFirstname = encodeURIComponent(elFirstName.value);

        myInit.body = 'username=' + encodedUsername + '&password=' + encodedPassword + '&lastname=' + encodedLastname + '&firstname=' + encodedFirstname

        let myRequest = new Request('requeteFetch.php', myInit);

        //console.log(myInit)
        //console.log(myRequest)

        fetch(myRequest)
            .then(function(response) {
                if (response.ok) return response;
                else throw new Error('La réponse n\'est pas OK');
            })
            .then(function(data) {
                //console.log(data);
				elFormWrapper.innerHTML += '<h3>Merci !</h3>';
            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });
	};
})();