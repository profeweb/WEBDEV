var canvas;
var bsTree;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	bsTree = new BSTree();
  	// add some members to the set A
  	for(var i=0; i<10; i++){
  		bsTree.insert(round(random(100)));
  	}
  	/*
	bsTree.insert("Cynthia");
	bsTree.insert("Peter");
	bsTree.insert("James");
	bsTree.insert("Steve");
	bsTree.insert("Scott");
	bsTree.insert("Mary");
	bsTree.insert("Calvin");
	*/
	
	bsTree.traverseInOrder();
	bsTree.traversePreOrder();
	bsTree.traversePostOrder();

	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter data');
	input.class("form-control");


	button = createButton('INSERT');
	button.position(input.x + input.width + 15, 100);
	button.mousePressed(insertItem);
	button.class('btn btn-info');

	button2 = createButton('REMOVE');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(removeItem);
	button2.class('btn btn-info');

	button3 = createButton('FIND');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(findItem);
	button3.class('btn btn-success');

	button4 = createButton('MIN');
	button4.position(button3.x + button3.width + 15, 100);
	button4.mousePressed(findMin);
	button4.class('btn btn-success');

	button5 = createButton('MAX');
	button5.position(button4.x + button4.width + 15, 100);
	button5.mousePressed(findMax);
	button5.class('btn btn-success');

	button6 = createButton('INORDER');
	button6.position(button5.x + button5.width + 15, 100);
	button6.mousePressed(inOrder);
	button6.class('btn btn-danger');

	button7 = createButton('PREORDER');
	button7.position(button6.x + button6.width + 15, 100);
	button7.mousePressed(preOrder);
	button7.class('btn btn-danger');

	button8 = createButton('POSTORDER');
	button8.position(button7.x + button7.width + 15, 100);
	button8.mousePressed(postOrder);
	button8.class('btn btn-danger');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	bsTree.display(windowWidth/2, baseY);
}

function insertItem(){
	const name = input.value();
  	alert('Insert ' + name + ' in the tree!');
  	bsTree.insert(name);
  	input.value('');
}

function removeItem(){
	const member = input.value();
  	alert('Remove ' + member + ' from the tree!');
	bsTree.remove(member);
  	input.value('');
}

function findItem(){
	const name = input.value();
  	alert('Find ' + name + ' in the tree!');
  	var node = bsTree.find(name);
  	if(node!=null){
  		alert("The element "+name+" is in the tree!");
  	}
  	else {
  		alert("The element "+name+" is NOT in the tree!");
  	}
  	input.value('');
}

function findMin(){
  	alert('Search minimum value in the tree!');
	const minValue = bsTree.getMin();
  	alert("The minimum value in the tree is: "+minValue);
}

function findMax(){
  	alert('Search maximum value in the tree!');
	const maxValue = bsTree.getMax();
  	alert("The maximum value in the tree is: "+maxValue);
}

function inOrder(){
	bsTree.traverseInOrder();
	bsTree.traverseMode = "IN ORDER";
}

function preOrder(){
	bsTree.traversePreOrder();
	bsTree.traverseMode = "PRE ORDER";
}

function postOrder(){
	bsTree.traversePostOrder();
	bsTree.traverseMode = "POST ORDER";
}