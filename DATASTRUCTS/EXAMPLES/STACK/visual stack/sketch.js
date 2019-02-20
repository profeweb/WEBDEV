var canvas;
var names;

var baseX = 50, baseY = 150;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	names = new Stack();
  	// append som items to the list
	names.push("Cynthia");
	names.push("Raymond");
	names.push("Barbara");
	names.push("Peter");
	names.push("James");
	names.push("Mary");
	names.push("Scott");


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a name');
	input.class("form-control");

	button = createButton('PUSH ITEM');
	button.position(input.x + input.width + 15, 100);
	button.mousePressed(pushItem);
	button.class('btn btn-info');

	button2 = createButton('POP ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(popItem);
	button2.class('btn btn-info');

	button3 = createButton('PEEK ITEM');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(peekItem);
	button3.class('btn btn-info');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	names.display(baseX, baseY);
}

function pushItem(){
	const name = input.value();
  	alert('Pushing ' + name + '!');
  	names.push(name);
  	input.value('');
}

function popItem(){
	const item = names.peek();
	alert('Poping item '+item+'!');
  	names.pop();
}

function peekItem(){
	const item = names.peek();
	alert('Peeking item '+item+'!');
}