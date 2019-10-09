class Car {
	
	constructor(matricula, marca, color, preu){
		this.matricula=matricula;
		this.marca=marca;
		this.color=color;
		this.preu=preu;
		this.divisa = "€";
	}

	info(){
		return this.matricula+", "+this.marca+", <i class='fa fa-car' style='color:"+this.color+"'></i>, "+this.preu+this.divisa;
	}

	color(){
		return this.color;
	}

	convertToDolars(){
		if(this.divisa=="€"){
			this.preu = Math.round(this.preu * 1.09,2);
			this.divisa ="$";
		}
	}

	convertToEuros(){
		if(this.divisa=="$"){
			this.preu = Math.round(this.preu / 1.09, 2);
			this.divisa ="€";
		}
	}


}