(function() {

	/**
	 * history.back()
	 * history.forward()
	 * history.pushState()
	 * history.replaceState()
	 */
	let elBtns = document.querySelectorAll('[data-js-btn]');

	for (let i = 0, l = elBtns.length; i < l; i++) {

		elBtns[i].addEventListener('click', function() {

			let dataset = elBtns[i].dataset.jsBtn;

			console.log(dataset);


			
		});
	}


	/**
	 * history.go();
	 */






	/**
	 * Comportements à l'événement 'popstate'
	 */






})();