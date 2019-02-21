
class Item {

	constructor(key, value){
		this.key=key;
		this.val=value;
	}

	display(i, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		rect(x, y, w, h/2);
		rect(x, y+h/2, w, h/2);
		ellipseMode(CENTER);
		fill(200); strokeWeight(0.0);
		ellipse(x, y-h/2-15, 20, 20);
		fill(0);
		textSize(12);
		textAlign(CENTER);
		text(i, x, y-h/2-12);
		textSize(16);
		fill(255);
		text(this.key, x, y+5);
		text(this.val, x, y + h/2 + 6);
	}
}