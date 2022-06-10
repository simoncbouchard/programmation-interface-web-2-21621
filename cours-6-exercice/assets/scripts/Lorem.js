class Lorem {
    injectText(el, textArray) {

        let arrayLength = textArray.length - 1,
            randomNumber = Math.floor(Math.random() * arrayLength),
            dataset = el.dataset.jsComponent;

        el.innerHTML = `
                        <h3>${dataset}</h3>
                        <p>${textArray[randomNumber]}</p>
                        `;
    }
}