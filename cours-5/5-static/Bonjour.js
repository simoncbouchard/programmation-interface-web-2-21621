class Bonjour {
    constructor() {
        this._bonjour = 'Bonjour !';
        this._string = 'Je suis une string !!'
    }


    static direBonjour() {
        //return 'Bonjour !';
        return this._bonjour;        // => undefined
    }


    static direQqch(string) {
        //return string;
        return this._string;
    }
}