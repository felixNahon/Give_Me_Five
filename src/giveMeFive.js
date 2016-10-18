import Liste_eleve from './Liste_eleve'; 
let eleves = []; 
function init(nom , prenom){
	eleves = [
	new Liste_eleve("Gastineau","Julien"),
	new Liste_eleve("Nahon","Felix"),
	new Liste_eleve("Dussol","Clement"),
	new Liste_eleve("Teboul","Clement")
	]
	let $eleve = $('#listeEleve'), 
	$one = $eleve.children('li').detach(); 

	for(let j=0; j<eleves.length; j++ ){
		let $li = $one.clone(),
		eleve = eleves[j];
		$li.find(".eleveNom").html(eleves.nom +" "+ eleves.prenom);

		eleve.id = j; 	

		$li.attr('title',eleves.name); 
		$('#listeEleve').append($li);  
		console.log(eleves[j]);
	}
}
init(); 
