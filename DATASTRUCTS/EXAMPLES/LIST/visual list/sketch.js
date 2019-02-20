var canvas;
var names;

var baseX = 100, baseY = 300;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	names = new List();
  	// append som items to the list
	names.append("Cynthia");
	names.append("Raymond");
	names.append("Barbara");
	names.append("Peter");
	names.append("James");
	names.append("Mary");
	names.append("Scott");


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a name');
	input.class("form-control");

	button = createButton('ADD ITEM');
	button.position(input.x + input.width + 15, 100);
	button.mousePressed(addItem);
	button.class('btn btn-info');

	button2 = createButton('REMOVE ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(removeItem);
	button2.class('btn btn-info');

	button3 = createButton('FIND ITEM');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(findItem);
	button3.class('btn btn-info');

	button4 = createButton('NEXT');
	button4.position(button3.x + button3.width + 15, 100);
	button4.mousePressed(next);
	button4.class('btn btn-danger');

	button5 = createButton('PREV');
	button5.position(button4.x + button4.width + 15, 100);
	button5.mousePressed(prev);
	button5.class('btn btn-danger');

	button6 = createButton('FIRST');
	button6.position(button5.x + button5.width + 15, 100);
	button6.mousePressed(first);
	button6.class('btn btn-warning');

	button7 = createButton('LAST');
	button7.position(button6.x + button6.width + 15, 100);
	button7.mousePressed(last);
	button7.class('btn btn-warning');
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	names.display(baseX, baseY);
}

function addItem(){
	const name = input.value();
  	alert('Adding ' + name + '!');
  	names.append(name);
  	input.value('');
}

function removeItem(){
	const name = input.value();
  	alert('Removing ' + name + '!');
  	names.remove(name);
  	input.value('');
}

function findItem(){
	const name = input.value();
	input.value('');
  	alert('Searching for ' + name + '!');
  	const position = names.find(name);
  	if(position==-1){
  		alert("Item "+ name +" doesn't appears in the list.");
  	}
  	else {
  		alert("Item "+ name +" is in position "+position+" in the list.");
  	}
}

function next(){
	names.next();
}

function prev(){
	names.prev();
}

function first(){
	names.front();
}

function last(){
	names.end();
}