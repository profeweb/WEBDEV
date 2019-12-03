function Producte(ref, nom, marca, categ, pvp){

	this.ref = ref;
	this.nom = nom;
	this.marca = marca;
	this.categ = categ;
	this.pvp = pvp;


	this.print = print;
	function print(){
		return this.ref+ " - "+ this.nom+ " - "+this.marca +" - "+this.categ+" - "+this.pvp;
	}

	this.discount = discount;
	function discount(quant){
		this.pvp *= quant;
	}

}