var canvas;
var names;

var baseX = 120, baseY = 300;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	names = new List();
  	// append som items to the list
	names.append(new ItemList("Cynthia", 44, "Female"));
	names.append(new ItemList("Robert", 22, "Male"));
	names.append(new ItemList("James", 26, "Male"));
	names.append(new ItemList("Mary", 51, "Female"));
	names.append(new ItemList("Elisabeth", 23, "Female"));
	names.append(new ItemList("Peter", 27, "Male"));
	names.append(new ItemList("Scott", 41, "Male"));


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.class("form-control");

	input2 = createInput();
	input2.position(input.x + input.width + 5, 100);
	input2.attribute("type","number");
	input2.value('0');
	input2.attribute("min","1");
	input2.attribute("max","100");
	input2.size(80);
	input2.class("form-control");

	select = createSelect();
	select.position(input2.x + input2.width +5, 100);
	select.option("Male");
	select.option("Female");
	select.size(100);
	select.class("form-control");

	button = createButton('ADD ITEM');
	button.position(select.x + select.width + 15, 100);
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
	const age = input2.value();
	const sex = select.value();
  	alert('Adding ' + name + '!');
  	names.append(new ItemList(name, age, sex));
  	input.value('');
  	input2.value('0');
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