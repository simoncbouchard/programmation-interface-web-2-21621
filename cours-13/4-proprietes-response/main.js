(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		if (elSelect.value != 0) {

			fetch('txt/' + elSelect.value + '.txt')
				.then(function(response) {

					console.log(response);
					console.log(response.type);
					console.log(response.status);
					console.log(response.statusText);
					console.log(response.ok);
					console.log(response.headers);

					return response.text();
				})
				.then(function(data) {

					console.log(data);

					elResult.innerHTML = `<p>${data}</p>`;
				});
		}
	});
})();