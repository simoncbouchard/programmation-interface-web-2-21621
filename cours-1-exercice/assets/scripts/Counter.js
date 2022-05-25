class Counter {
    constructor(el) {
        this._el = el;
        this._elBtn = this._el.querySelectorAll("[data-js-btn]");
        this._elNumberNode = this._el.querySelectorAll("[data-js-number]");
        this._elNumber = this._elNumberNode[0];
        this.fluctu();
    }

    fluctu(){
        for(let i of this._elBtn){
            i.addEventListener("click", () => {
                if(i.dataset.jsBtn == "minus"){
                    this._elNumber.innerText--;
                }
                else if(i.dataset.jsBtn == "plus"){
                    this._elNumber.innerText++;
                }
            })
        }
    }
}

