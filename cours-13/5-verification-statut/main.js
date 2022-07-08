(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		if (elSelect.value != 0) {

			fetch('txt/' + elSelect.value + '.txt')
				.then(function(response) {
					if (response.ok) {
						console.log(response);
						//return response.json();
						return response.text();
					} else {
						throw new Error('La réponse n\'est pas OK');
					}
				})
				.then(function(data) {
					elResult.innerHTML = `<p>${data}</p>`;
				})
				.catch(function(error) {
					console.log(`Il y a eu un problème avec l'opération fetch: ${error.message}`);
				});
		}
	});
})();