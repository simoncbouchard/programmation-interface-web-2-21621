/**
 * On définit notre espace de nom 
 * qui est en fait une variable globale qui permettra de protéger notre code et celui des autres.
 * L'instruction suivante affecte la variable global MON_ESPACE_NOM à deux options 
 * (le || permet de distinguer les deux options).
 * Option 1 : Si la variable globale MON_ESPACE_NOM existe déjà on récupère son contenu et l'affecte à l'objet MON_ESPACE_NOM
 * Option 2 : Si la variable globale MON_ESPACE_NOM n'existe pas on l'affecte à l'objet vide {} 
 */

var MON_ESPACE_NOM = MON_ESPACE_NOM || {};


(function(MEN) {
	
	//console.log(M)
	let Personne = MEN.Personne;							// Récupère l'objet Personne stocké dans l'objet MON_ESPACE_NOM
	//console.log(Personne);
	//console.log(Personne.prototype);

	
	/**
	 * Méthodes publiques
	 */
	function afficheCours() {
		let chaineCours = this.creeListe(this.listeDeCours);
		return `Voici la liste de cours que j'enseigne :\n${chaineCours}`;
	}

	function ajouteCours(cours) {
		this.listeDeCours.push(cours);
	}

	function afficheHoraire() {
		let chaineHoraire = this.creeListe(this.listeHoraire);
		return `Voici l'horaire des cours que j'enseigne :\n${chaineHoraire}`;
	}
	
	function setHoraire(plageHoraire) {
		this.listeHoraire.push(plageHoraire);
	}

	function afficheCourriel() {
		let chaineCourriel = this.creeListe(this.listeCourriel);
		return `Mes courriels :\n${chaineCourriel}`;
	}

	function setCourriel(courriel) {
		this.listeCourriel.push(courriel);
	}


	/**
	 * Création du constructeur Professeur
	 */
	let Professeur = function(prenom, nom) {
		Personne.call(this, prenom, nom);				// La méthode call() réalise un appel à une fonction avec une valeur this donnée et des arguments fournis individuellement. (MDN)
		this.listeDeCours = [];
        this.listeHoraire = [];
        this.listeCourriel = [];
	}
    

	/**
	 * Pour que Professeur puisse hérité du constructeur de Personne,
	 * on doit affecter au prototype de Professeur un pointeur sur le prototype de Personne
	 */
	Professeur.prototype = Object.create(Personne.prototype);
	//console.log(Professeur.prototype)

	// Initialise le constructeur de Professeur pour qu'il pointe sur le prototype Professeur
	Professeur.prototype.constructor = Professeur;

	// Ensemble des méthodes publiques dans le prototype de Professeur ajoutées aux méthodes héritées de Personne
	Professeur.prototype.afficheCours = afficheCours;
	Professeur.prototype.ajouteCours = ajouteCours;
	Professeur.prototype.afficheHoraire = afficheHoraire;
	Professeur.prototype.setHoraire = setHoraire;
	Professeur.prototype.afficheCourriel = afficheCourriel;
	Professeur.prototype.setCourriel = setCourriel;
        
	
	// Crée et affecte la clé Professeur de l'objet MON_ESPACE_NOM au constructeur Professeur
	MON_ESPACE_NOM.Professeur = Professeur;

})(MON_ESPACE_NOM);