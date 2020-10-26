
function Paquet (id, destinatari, pes){

	this.id = id;
	this.destinatari = destinatari;
	this.pes = pes;

	this.getInfo = getInfo;
	function getInfo(){
		return this.id+"<br/>"+this.destinatari+"<br/>"+this.pes+"Kg";
	}

}