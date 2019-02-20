var canvas;
var names;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	names = new CircularLinkedList();
  	// append som items to the list
	//names.insert("Cynthia", "head");
	//names.insert("Peter", "Cynthia");
	//names.insert("James", "Peter");
	//names.insert("Scott", "James");
	//names.insert("Mary", "Scott");


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a name');
	input.class("form-control");

	button = createButton('INSERT ITEM');
	button.position(input.x + input.width + 15, 100);
	button.mousePressed(insertItem);
	button.class('btn btn-info');

	button2 = createButton('REMOVE ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(removeItem);
	button2.class('btn btn-info');

	button3 = createButton('FIND ITEM');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(findItem);
	button3.class('btn btn-danger');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	names.display(baseX, baseY);
}

function insertItem(){
	const name = input.value();
  	alert('Insert ' + name + '!');
  	names.insert(name, "head");
  	input.value('');
}

function removeItem(){
	const name = input.value();
	alert('Remove '+name+'!');
  	names.remove(name);
  	input.value('');
}

function findItem(){
	const item = input.value();
	alert('Find '+item+'!');
  	var node = names.find(item);
  	console.log(node);
  	if(node!=null){
  		alert(node.element+" is in the Linked List!");
  	}
  	else {
  		alert(item+" is not in the Linked List!")
  	}
}