var canvas;
var hTable;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	var someNames = ["David", "Jennifer", "Donnie", "Raymond",                 "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];


  	hTable = new HashTable();
  	// append som items to the hash table
	for (var i = 0; i < someNames.length; ++i) {
	   hTable.put(someNames[i]);
	}

	hTable.showDistro();


	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a value');
	input.class("form-control");

	button = createButton('PUT ITEM');
	button.position(input.x + input.width + 15, 100);
	button.mousePressed(insertItem);
	button.class('btn btn-info');

	button2 = createButton('GET ITEM');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(findItem);
	button2.class('btn btn-success');

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	hTable.display(baseX, baseY);
}

function insertItem(){
	const name = input.value();
  	alert('Insert ' + name +'!');
  	hTable.put(name);
  	input.value('');
}


function findItem(){
	const name = input.value();
	alert('Find '+name+'!');
	var item = hTable.get(name);
	if(item!=null){
		alert('Item '+name+' is in the hash table.');
	}
	else{
		alert('Item '+name+' is not in the hash table.');
	}
	input.value('');
}