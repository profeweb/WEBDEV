function Magatzem (num){
	
	this.numEstants = num;
	this.estants = new Array();

	this.inicialitza = inicialitza;
	function inicialitza(){
		for(var i=0; i<this.numEstants; i++){
			this.estants[i] = new Estant(i);
		}
	}


	this.entrada = entrada;
	function entrada(pos, p){

	}

	this.sortida = sortida;
	function sortida(numEstant){

	}

	this.mostraTaula = mostraTaula;
	function mostraTaula(){
		var txt="<h3> Magatzem</h3>";
		txt += "<table border='1'><tr>";
		for(var i=0; i<this.numEstants; i++){
			var e = this.estants[i];
			txt += "<td>"+ e.printInfo() + "</td>";
		}
		txt += "</tr></table>";
		document.getElementById("content").innerHTML = txt;
	}

	this.calculaPreus = calculaPreus;
	function calculaPreus(){

	}

	this.ordenaPes = ordenaPes;
	function ordenaPes(){
		
	}

}