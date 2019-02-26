
class Item {

	constructor(value){
		this.val=value;
	}

	display(i, x, y, w, h, c){
		rectMode(CENTER);
		strokeWeight(2);
		//fill(220, 53, 69);
		fill(c);
		rect(x, y, w, h);
		ellipseMode(CENTER);
		fill(200); strokeWeight(0.0);
		ellipse(x, y-h/2-15, 20, 20);
		fill(0);
		textSize(12);
		textAlign(CENTER);
		text(i, x, y-h/2-12);
		textSize(16);
		fill(255);
		text(this.val, x, y + 6);
	}
}