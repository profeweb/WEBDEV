

class Item {

	constructor(info){
		this.info = info;
	}


	display(i, l, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		rect(x, y, w, h);

		ellipseMode(CENTER);
		fill(200); strokeWeight(0.0);
		ellipse(x + w/2 +15, y, 20, 20);
		fill(0);
		textSize(12);
		textAlign(CENTER);
		text(i, x + w/2 + 15, y + 5);
		textSize(16);
		fill(255);
		text(this.info, x, y+8);
		if(i>0){
			strokeWeight(1);
			line(x, y+h/2, x, y + h);
			line(x, y + h, x + w/2, y+h);
		}
	}


}