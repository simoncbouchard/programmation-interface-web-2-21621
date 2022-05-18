let css = 'color: black; font-size: 14px; font-weight: bold; padding: 15px 0;';


/**
 * Module pattern sans prototype
 */

console.log('%cModule pattern sans prototype', css);


console.log(ModuleSansPrototype.get());
ModuleSansPrototype.set('Billy Bob');
console.log(ModuleSansPrototype.get());

let resultat1 = ModuleSansPrototype.aPlusB();
console.log(resultat1);                                 // => 0 

let resultat2 = ModuleSansPrototype.aPlusB(5, 4);
console.log(resultat2);                                 // => 9

let resultat3 = ModuleSansPrototype.aPlusB(5);
console.log(resultat3);                                 // => 9

let resultat4 = ModuleSansPrototype.aPlusB(10, 10); 
console.log(resultat4);                                 // => 20

console.log(ModuleSansPrototype.estPositif(10));        // => true
console.log(ModuleSansPrototype.estPositif(-10));       // => false
console.log(ModuleSansPrototype.estPositif('10'));      // => true (convertion de type)
console.log(ModuleSansPrototype.estPositif('dix'));     // => false



/**
 * Module pattern avec prototype
 */
/*
console.log('%cModule pattern avec prototype', css);


let livre1 = new ModuleAvecPrototype();
    livre2 = new ModuleAvecPrototype(400, 1, 'Jane', 'Davis');
    livre3 = new ModuleAvecPrototype();

console.log(livre1.decrire());
console.log(livre2.decrire());
console.log(livre3.decrire());


livre1.avancePage();
console.log(livre1.decrire());
console.log(livre3.decrire());
livre3.avancePage();
livre3.avancePage();
livre3.avancePage();
livre3.avancePage();
livre3.reculePage();
livre3.avancePage();
livre3.avancePage();
console.log(livre3.decrire());
*/