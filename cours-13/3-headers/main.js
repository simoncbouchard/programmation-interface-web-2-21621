(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		if (elSelect.value != 0) {

			let myHeaders = new Headers({
				'Content-Type': 'text/html'
			});

			let myInit = { 
				method: 'GET',
				headers: myHeaders,
				referrer: '',
				mode: 'same-origin'
			};


			fetch('txt/' + elSelect.value + '.txt', myInit)
				.then(function(response) {
				
					console.log(myHeaders.get('Content-Type'));

					return response.text();
				})
				.then(function(data) {

					console.log(data);

					elResult.innerHTML = `<p>${data}</p>`;
				});
		}
	});
})();