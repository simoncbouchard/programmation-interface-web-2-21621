class Form {
    constructor(el) {
        this._el = el;
        this._elInputs = this._el.getElementsByTagName("input");
        this._elTableauInput = Array.from(this._elInputs);
        this._elBtn = this._el.querySelector("[data-js-submit]");
        
        this.verification();
    }


    verification(){
        for(let i of this._elInputs){
            i.addEventListener("input", () =>{
                if(this._elTableauInput.every(el => el.value !== "")){
                    this._elBtn.disabled = false;
                }
                else {
                    this._elBtn.disabled = true;
                }
            })
        }
    }
}