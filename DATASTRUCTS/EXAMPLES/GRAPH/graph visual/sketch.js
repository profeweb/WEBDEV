var canvas;
var g;
var vertices = [];

function setup() {
  	canvas = createCanvas(windowWidth, windowHeight);
  	canvas.position(0,0);
  	canvas.style('z-index', '-1');
  	canvas.style('display', 'block');
  	background(255);

  	vertices.push(new Vertex('A', 400, 200));
  	vertices.push(new Vertex('B', 300, 300));
  	vertices.push(new Vertex('C', 500, 300));
  	vertices.push(new Vertex('D', 200, 400));
  	vertices.push(new Vertex('E', 400, 400));
  	vertices.push(new Vertex('F', 600, 400));
  	vertices.push(new Vertex('G', 500, 500));

  	g = new Graph(vertices);

 	g.addEdge('A','B');
 	g.addEdge('B','E');
 	g.addEdge('A','C');
 	g.addEdge('B','D');
 	g.addEdge('C','E');
 	g.addEdge('C','F');
 	g.addEdge('E','G');


	button = createButton('DEPTH FIRST SEARCH');
	button.position(50, 100);
	button.mousePressed(dfs);
	button.class('btn btn-info');

	button2 = createButton('BREADTH FIRST SEARCH');
	button2.position(button.x + button.width + 15, 100);
	button2.mousePressed(bfs);
	button2.class('btn btn-info');

	select = createSelect();
	select.position(button2.x + button2.width + 15, 100);
	select.size(80);
	select.class("form-control");
	for(var i=0; i<vertices.length; i++){
		var label = vertices[i].info;
		select.option(label);
	}

	button3 = createButton('PATH TO');
	button3.position(select.x + select.width + 15, 100);
	button3.mousePressed(path);
	button3.class('btn btn-success');


}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	fill(255, 0, 0);
	stroke(255, 0, 255);
	strokeWeight(5);
	rectMode(CENTER);
	rect(mouseX, mouseY, 200, 50);
  	//g.display();
}

function dfs(){
  	alert('Depth First Search from A');
  	console.log('Depth First Search from A:');
  	g.clearMarked();
  	g.dfs('A',0);
}

function bfs(){
	alert('Breadth First Search from A');
	console.log('Breadth First Search from A:');
	g.clearMarked();
  	g.bfs('A',0);
}

function path(){
	const target = select.value();
	alert('Breadth First Search from A to '+target);
	var paths = g.pathTo(target); 
	var strPath ="";
	while (paths.length > 0) {
	   if (paths.length > 1) {
	      strPath += paths.pop() + '-';
	   }
	   else {
	      strPath += paths.pop();
	   }
	 }  
	 console.log("Path from A to "+target+":");
	 console.log(strPath);
}

function mouseDragged(){
	for(var i=0; i<g.vertices.length; i++){
		var v = g.vertices[i];
		if(dist(v.x, v.y, mouseX, mouseY)<50){
			v.updatePosition(mouseX, mouseY);
			break;
		}
	}
}
