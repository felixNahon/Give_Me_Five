import stats from './stats'; 
export default class Liste_eleve{

	/**
	 * [constructor description]
	 * @param  {[type]} nom    [nom de l eleve]
	 * @param  {[type]} prenom [prenom de l eleve]
	 * @return {[type]}        [description]
	 */
	constructor(nom, prenom){
		this.nom = nom; 
		this.prenom = prenom; 
		this.stats = new stats; 
	}
}