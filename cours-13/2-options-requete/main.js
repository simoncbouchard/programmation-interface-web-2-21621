(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		if (elSelect.value != 0) {

			let myInit = {
				method: 'GET',
				referrer: '',
				mode: 'same-origin'
			};

			fetch('txt/' + elSelect.value + '.txt', myInit)
				.then(function(response) {

					console.log(response);

					return response.text();
				})
				.then(function(data) {

					console.log(data);

					elResult.innerHTML = `<p>${data}</p>`;
				});
		}
	});
})();