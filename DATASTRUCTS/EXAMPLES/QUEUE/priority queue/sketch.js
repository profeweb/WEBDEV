var canvas;
var names;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	names = new Queue();
  	// append som items to the list
	names.enqueue(new Item("Cynthia", 4));
	names.enqueue(new Item("Raymond", 1));
	names.enqueue(new Item("Barbara", 2));
	names.enqueue(new Item("Peter", 1));
	names.enqueue(new Item("James", 5));
	names.enqueue(new Item("Mary", 2));
	names.enqueue(new Item("Scott", 3));


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a name');
	input.class("form-control");

	select = createSelect();
	select.position(input.x + input.width +5, 100);
	for(var i=1; i<=5; i++){
		select.option(i);
	}
	select.size(100);
	select.class("form-control");

	button = createButton('ENQUEUE ITEM');
	button.position(select.x + select.width + 15, 100);
	button.mousePressed(enqueueItem);
	button.class('btn btn-info');

	button2 = createButton('DEQUEU ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(dequeueItem);
	button2.class('btn btn-info');

	button3 = createButton('FRONT ITEM');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(frontItem);
	button3.class('btn btn-danger');

	button4 = createButton('BACK ITEM');
	button4.position(button3.x + button3.width + 15, 100);
	button4.mousePressed(backItem);
	button4.class('btn btn-danger');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	names.display(baseX, baseY);
}

function enqueueItem(){
	const name = input.value();
	const code = select.value();
  	alert('Enqueue ' + name + '!');
  	names.enqueue(new Item(name, code));
  	input.value('');
}

function dequeueItem(){
	const item = names.front();
	alert('Dequeue '+item.name+'!');
  	names.dequeue();
}

function frontItem(){
	const item = names.front();
	alert('Front item is '+item.name+'!');
}

function backItem(){
	const item = names.back();
	alert('Back item is '+item.name+'!');
}