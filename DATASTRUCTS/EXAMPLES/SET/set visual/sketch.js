var canvas;
var setA, setB, setC;

var baseX = 150, baseY = 250;

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	setA = new Set();
  	// add some members to the set A
	setA.add("Cynthia");
	setA.add("Peter");
	setA.add("James");

	console.log("SET A: "+	setA.show());

	setB = new Set();
  	// add some members to the set A
	setB.add("Peter");
	setB.add("Scott");
	setB.add("Mary");
	setB.add("Alan");

	console.log("SET B: "+	setB.show());

	setC = new Set();

	console.log("SET C: "+	setC.show());

	input = createInput();
	input.position(50, 100);
	input.size(200);
	input.attribute('placeholder', 'Enter a name');
	input.class("form-control");

	select = createSelect();
	select.position(input.x + input.width + 15, 100);
	select.size(100);
	select.class("form-control");
	select.option("A");
	select.option("B");

	button = createButton('INSERT');
	button.position(select.x + select.width + 15, 100);
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

	button4 = createButton('UNION');
	button4.position(button3.x + button3.width + 15, 100);
	button4.mousePressed(unionAB);
	button4.class('btn btn-danger');

	button5 = createButton('INTERSECT');
	button5.position(button4.x + button4.width + 15, 100);
	button5.mousePressed(intersectAB);
	button5.class('btn btn-danger');

	button6 = createButton('DIFFERENCE');
	button6.position(button5.x + button5.width + 15, 100);
	button6.mousePressed(differenceAB);
	button6.class('btn btn-danger');

	button7 = createButton('SUBSET');
	button7.position(button6.x + button6.width + 15, 100);
	button7.mousePressed(subsetAB);
	button7.class('btn btn-danger');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
  	setA.display("Set A", baseX, baseY, color(220, 53, 69));
  	setB.display("Set B", baseX, baseY+150, color(33, 136, 56));
  	setC.display("Set C", baseX, baseY+300, color(19, 132, 150));
}

function insertItem(){
	const member = input.value();
	const setName = select.value();
  	alert('Insert ' + member + ' to set '+setName+'!');
  	switch(setName){
  		case "A": setA.add(member); break;
  		case "B": setB.add(member); break;
  	}
  	input.value('');
}

function removeItem(){
	const member = input.value();
	const setName = select.value();
  	alert('Remove ' + member + ' from the set '+setName+'!');
  	switch(setName){
  		case "A": setA.remove(member); break;
  		case "B": setB.remove(member); break;
  	}
  	input.value('');
}

function findItem(){
	const member = input.value();
	const setName = select.value();
  	alert('Find ' + member + ' in the set '+setName+'!');
  	var containsItem=false;
  	switch(setName){
  		case "A": containsItem = setA.contains(member); break;
  		case "B": containsItem = setB.contains(member); break;
  	}
  	if(containsItem){
  		alert("The member "+member+" is in the set "+setName+"!");
  	}
  	else {
  		alert("The member "+member+" is NOT in the set "+setName+"!");
  	}
  	input.value('');
}

function unionAB(){
	alert('Set union A & B');
	setC = setA.union(setB);
}

function intersectAB(){
	alert('Set intersect A & B');
	setC = setA.intersect(setB);
}

function differenceAB(){
	alert('Set difference A & B');
	setC = setA.difference(setB);
}

function subsetAB(){
	alert('Set subset A & B');
	var isSubset = setB.subset(setA);
	const msg = isSubset ? "Set B is a subset of set A." : "Set B is NOT a subset of set A."
	alert(msg);
}