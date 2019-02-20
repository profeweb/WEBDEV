

class ItemList {

	constructor(name, age, sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}


	display(i, l, p, x, y, w, h){
		rectMode(CENTER);
		strokeWeight(2);
		if(i==p){
			fill(200,200,100, 55);
			rect(x, y, w*1.15, h*2);
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
		text(this.name, x, y-8);
		text(this.age, x-w/3.5, y+20);
		text(this.sex, x+w/5, y+20);
		strokeWeight(1); 
		line(x - w/2, y, x + w/2, y);
		line(x - w/10, y, x-w/10, y+h/2);
		if(i<l-1){
			line(x + w/2, y + h/3, x + w/2 + 20, y+ h/3);
		}
	}


}