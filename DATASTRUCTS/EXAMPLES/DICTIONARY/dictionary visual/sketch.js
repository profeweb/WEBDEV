var canvas;
var phoneBook;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	phoneBook = new Dictionary();
  	// append som items to the list
	phoneBook.add("Cynthia"	, 	"687672654");
	phoneBook.add("Peter"	, 	"682637771");
	phoneBook.add("James"	,	"641515188");
	phoneBook.add("Scott"	,	"971554367");
	phoneBook.add("Mary"	,	"971846778");
	phoneBook.add("Alan"	,	"677586778");

	phoneBook.showAll();

	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a key');
	input.class("form-control");

	input2 = createInput();
	input2.position(input.x + input.width + 15, 100);
	input2.size(200);
	input2.attribute('placeholder', 'Enter a value');
	input2.class("form-control");

	button = createButton('INSERT ITEM');
	button.position(input2.x + input2.width + 15, 100);
	button.mousePressed(insertItem);
	button.class('btn btn-info');

	button2 = createButton('REMOVE ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(removeItem);
	button2.class('btn btn-info');

	button3 = createButton('FIND ITEM');
	button3.position(button2.x + button2.width + 15, 100);
	button3.mousePressed(findItem);
	button3.class('btn btn-success');

	button4 = createButton('CLEAR ALL');
	button4.position(button3.x + button3.width + 15, 100);
	button4.mousePressed(clearAll);
	button4.class('btn btn-danger');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	phoneBook.display(baseX, baseY);
}

function insertItem(){
	const name = input.value();
	const phone = input2.value();
  	alert('Insert ' + name + ':' + phone +'!');
  	phoneBook.add(name, phone);
  	input.value('');
  	input2.value('');
}

function removeItem(){
	const name = input.value();
	alert('Remove '+name+'!');
  	phoneBook.remove(name);
  	input.value('');
}

function findItem(){
	const name = input.value();
	alert('Find '+name+'!');
	var phone = phoneBook.find(name);
	if(phone!=null){
		alert(name +'\'s phone number is '+ phone +".");
	}
	else {
		alert('No phone number for '+name+'!');
	}
	input.value('');
}

function clearAll(){
	alert('Clear all content!');
	phoneBook.clear();
}