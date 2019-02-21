
class Item {

	constructor(key, value){
		this.key=key;
		this.val=value;
	}

	display(i, l, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		rect(x, y, w, h/2);
		fill(33, 136, 56);
		rect(x, y+h/2, w, h/2);
		if(l==0){
			ellipseMode(CENTER);
			fill(200); strokeWeight(0.0);
			ellipse(x, y-h/2-15, 20, 20);
			fill(0);
			textSize(12);
			textAlign(CENTER);
			text(i, x, y-h/2-12);
		}
		line(x, y - h*1.25, x, y - h*0.25);
		fill(0);
		textSize(12);
		textAlign(LEFT);
		text("KEY", x - w/2, y - h/2 + 10);
		textAlign(RIGHT);
		text("VALUE", x + w/2, y + h);
		textSize(16);
		fill(255);
		textAlign(CENTER);
		text(this.key, x, y+5);
		text(this.val, x, y + h/2 + 6);

	}
}