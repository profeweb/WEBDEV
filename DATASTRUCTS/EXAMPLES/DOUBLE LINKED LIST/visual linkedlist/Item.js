

class Item {

	constructor(name){
		this.name = name;
	}


	display(i, l, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		rect(x, y, w, h);

		ellipseMode(CENTER);
		fill(200); strokeWeight(0.0);
		ellipse(x, y - h/2 - 15, 20, 20);
		
		fill(0);
		textSize(12);
		textAlign(CENTER);
		text(i, x , y - h/2 - 10);
		textSize(16);
		fill(255);
		text(this.name, x, y+8);

		// Arrow to next
		if(i>=0){
			strokeWeight(1.5);
			// right direction
			line(x + w/2, y - h/4, x + w, y-h/4);
			line(x + w, y - h/4, x + w - 10, y - h/4 -10);
			line(x + w, y - h/4, x + w - 10, y - h/4 +10);
			// left direction
			line(x - w/2, y + h/4, x - w, y+h/4);
			line(x - w, y + h/4, x - w + 10, y + h/4 -10);
			line(x - w, y + h/4, x - w + 10, y + h/4 +10);
		}

		// Display head
		if(i==0){
			noFill(); strokeWeight(2);
			rect(x, y, w*1.5, h*2.3, 15, 15);
			fill(0);
			text("HEAD", x, y - h*1.25);
		}

		// Display null
		if(i==0){
			fill(0);
			text("NULL", x - w - w/4 , y+15);
		}
		if(i==(l-1)){
			fill(0);
			text("NULL", x + w + w/4, y-8);
		}
		
	}


}