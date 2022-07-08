(function() {

	let elBtn = document.querySelector('[data-js-btn]'),
        elResult = document.querySelector('[data-js-result]');


	elBtn.addEventListener('click', function() {

        fetch('data.json')
            .then(function(response) {
                if (response.ok) {
                    console.log(response)
                    return response.json();
                } else {
                    throw new Error('La réponse n\'est pas OK');
                }
            })
            .then(function(data) {

                console.log(data);

                let elUl = document.createElement('ul');


                data.forEach(function(element) { 
                    let elLi = `<li>${element.equipe} de ${element.ville}</li>`;
                    elUl.insertAdjacentHTML('beforeend', elLi);
                });

                /*
                for (let key in data) {
                    let elLi = `<li>${data[key].equipe} de ${data[key].ville}</li>`;
                    elUl.insertAdjacentHTML('beforeend', elLi);
                }
                */

                elResult.appendChild(elUl);
                elBtn.disabled = true;

            })
            .catch(function(error) {
                console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
            });

	});
})();