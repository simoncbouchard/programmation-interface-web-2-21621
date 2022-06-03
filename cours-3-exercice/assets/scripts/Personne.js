/**
 * On définit notre espace de nom 
 * qui est en fait une variable globale qui permettra de protéger notre code et celui des autres.
 * L'instruction suivante affecte la variable global MON_ESPACE_NOM à deux options 
 * (le || permet de distinguer les deux options).
 * Option 1 : Si la variable globale MON_ESPACE_NOM existe déjà on récupère son contenu et l'affecte à l'objet MON_ESPACE_NOM
 * Option 2 : Si la variable globale MON_ESPACE_NOM n'existe pas on l'affecte à l'objet vide {} 
 */

var MON_ESPACE_NOM = MON_ESPACE_NOM || {};

(function() {

	/**
	 * Méthodes publiques
	 */
	function sePresente() {
		return `Je m'appelle ${this.prenom} ${this.nom}`;
	}

	function creeListe(tableau) {
		let chaine = '';
		for (let i = 0, l = tableau.length; i < l; i++) {
			chaine += `${tableau[i]}\n`;
		}
		return chaine;
	}


	/**
	 * Création du constructeur Personne
	 * Par convention, la première lettre du nom du constructeur est en majuscule
	 */
	let Personne = function(prenom, nom) {
		this.prenom = prenom;
		this.nom = nom;
	}	


	/**
	 * Ensemble des méthodes publiques dans le prototype de Personne
	 */
	Personne.prototype = {
		constructor: Personne,
		setPrenom: function(prenom) {
			this.prenom = prenom;
		},
		setNom: function(nom) {
			this.nom = nom;
		},
		sePresente: sePresente,
		creeListe: creeListe
	}


	// Crée et affecte la clé Personne de l'objet MON_ESPACE_NOM au constructeur Personne
	MON_ESPACE_NOM.Personne = Personne;

})();