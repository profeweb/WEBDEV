function Estant (id){
	
	this.id = id;
	this.paquet = null;
	this.entrada = null;
	this.sortida = null;

	this.afegirPaquet = afegirPaquet;
	function afegirPaquet(p){
		var info = "<p>Afegint paquet a l'Estant ...</p>";
		document.getElementById("log").innerHTML += info;
		this.paquet = p;
		this.entrada = new Date();
	}

	this.recollirPaquet = recollirPaquet;
	function recollirPaquet(){
		var info = "<p>Llevant paquet de l'Estant ...</p>";
		document.getElementById("log").innerHTML += info;
		this.paquet = null;
		this.sortida = new Date();
	}

	this.printInfo = printInfo;
	function printInfo(){

		var paquetInfo ="";
		if(this.paquet != null){
			paquetInfo += this.paquet.getInfo() + "<br/>";
			paquetInfo += this.formatEntrada() + "<br/>";
		}
		else if(this.sortida!= null){
			paquetInfo += "Sense paquet <br/>";
			paquetInfo += this.formatSortida() + "<br/>";
		}
		else {
			paquetInfo += "Sense paquet";
		}

		return "<b>"+ this.id + "</b><br/>"+ paquetInfo;
	}

	this.formatEntrada = formatEntrada;
	function formatEntrada(){
		return formataData(this.entrada);
	}

	this.formatSortida = formatSortida;
	function formatSortida(){
		return formataData(this.sortida);
	}

	function formataData(d){
		return d.getHours() + ":"+
			   d.getMinutes() + ":"+
			   d.getSeconds();
	}

}