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
		let li = $one.clone(),
		eleve = eleves[j];
		eleve.id = j; 	
		li.find('.nomEleve').html(eleve.nom+" "+eleve.prenom);
		li.find('.points').html('Points :'+ eleve.stats.getScore());

		$eleve.append(li);  
		li.attr('title',eleve.nom+" "+eleve.prenom ); 
	}

	$('.btnAjoutEleve').on('click',function(){

		 let nom_val = $('#nom').val();  
		 let prenom_val = $('#prenom').val();
		let eleve = new Liste_eleve(nom_val,prenom_val,); 

		 let $eleve = $('#listeEleve'); 

			let li = $one.clone();
			li.find('.nomEleve').html(eleve.nom+" "+eleve.prenom);
			li.find('.points').html('Points :'+ eleve.stats.getScore());
			li.find("#listeEleve").html('<input type="text" placeholder="prenom" id="prenom"')
	

			$eleve.append(li);  
			li.attr('title',eleve.nom+" "+eleve.prenom); 
	})



}
init(); 
