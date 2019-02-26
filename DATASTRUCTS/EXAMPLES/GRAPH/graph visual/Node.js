
class Node {

	constructor(data, left, right){
		this.data=data;
		this.left=left;
		this.right=right;
		this.num=0;
	}

	show(){
		return this.data;
	}

	display(l, x, y, w, h){
		strokeWeight(2);
		var ww = map(l, 1, 5, 200, 10);
		var hh = map(l, 1, 5, 50, 100);
		if(this.left!=null){
			line(x, y, x - ww, y + hh);
		}
		if(this.right!=null){
			line(x, y, x +ww, y + hh);
		}
		ellipseMode(CENTER);
		strokeWeight(2);
		fill(220, 53, 69);
		ellipse(x, y, w, h);
		textAlign(CENTER);
		fill(200); strokeWeight(0.0);
		ellipse(x, y-h/2-15, 20, 20);
		textSize(12);
		textAlign(CENTER);fill(0);
		text(this.num, x, y-h/2-12);
		
		textSize(22);
		fill(255);
		text(this.data, x, y + 6);
		
		if(this.left!=null){
			this.left.display(l+1, x - ww, y + hh, w, h);
		}
		if(this.right!=null){
			this.right.display(l+1, x + ww, y + hh, w, h);
		}
	}
}