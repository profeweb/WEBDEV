function Estant (id){
	
	this.id = id;
	this.paquet = null;
	this.entrada = null;
	this.sortida = null;

	this.printInfo = printInfo;
	function printInfo(){
		return this.id + "";
	}

}