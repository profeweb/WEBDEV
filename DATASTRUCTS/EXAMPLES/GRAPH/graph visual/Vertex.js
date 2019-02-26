
class Vertex {
	
	constructor(info, x, y){
		this.info = info;
		this.x = x;
		this.y = y;
		this.num = 0;
	}

	updatePosition(x, y){
		this.x = x;
		this.y = y;
	}

	getPosition(){
		return createVector(this.x, this.y);
	}

	display(w, h){
		ellipseMode(CENTER);
		fill(255,0,0);
		stroke(0); strokeWeight(2);
		ellipse(this.x, this.y, w, h);
		fill(180); noStroke();
		ellipse(this.x, this.y + h/1.25, w/3, h/3);
		fill(0);
		textAlign(CENTER);
		textSize(10);
		text(this.num, this.x, this.y + h/1.25 + 4);
		textSize(18); fill(255);stroke(255); strokeWeight(2);
		text(this.info, this.x, this.y+5);

	}
}