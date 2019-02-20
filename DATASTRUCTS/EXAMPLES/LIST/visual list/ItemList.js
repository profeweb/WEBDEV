

class ItemList {

	constructor(info){
		this.info = info;
	}


	display(i, l, p, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		if(i==p){
			fill(200,200,100, 55);
			rect(x, y, w*1.15, h*2.25);
		}
		fill(220, 53, 69);
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
		text(this.info, x, y+8);
		if(i<l-1){
			strokeWeight(1);
			line(x + w/2, y, x + w/2 + 20, y);
		}
	}


}