

class Item {

	constructor(name, code){
		this.name = name;
		this.code = code;
	}


	display(i, l, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		var c = lerpColor(color(220,53,69), color(40, 167, 69), (this.code-1) / 4.0);
		fill(c);
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
		text(this.name + " "+ this.code, x, y+8);

		// Arrow to next
		if(i>=0){
			strokeWeight(1.5);
			line(x + w/2, y, x + w, y);
			line(x + w, y, x +w - 10, y -10);
			line(x + w, y, x +w - 10, y +10);
		}

		// Arrow to last
		if(i==l-1){
			strokeWeight(1.5);
			line(x - w, y, x -w , y - h/2);
			line(x - w, y, x -w/2, y);
			line(x - w/2, y, x -w/2 - 10, y -10);
			line(x - w/2, y, x -w/2 - 10, y +10);
		}

		// Highlighting front and back items
		if(i==0 || i==l-1){
			var msg = (i==0)?"FRONT":"BACK";
			noFill(); strokeWeight(2);
			rect(x, y, w*1.5, h*2.3, 15, 15);
			fill(0);
			text(msg, x, y - h*1.25);
		}
	}


}