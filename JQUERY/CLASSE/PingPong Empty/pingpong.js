

var canvas, context;
var fieldWidth, fieldHeight;

canvas = $("#camp")[0];

fieldWidth = canvas.width;
fieldHeight = canvas.height;
context = canvas.getContext('2d');

//
var goalsLeft=0, goalsRight=0;

// Ball
var xBall, yBall;
var ballWidth, ballHeight;
var incBall, incX, incY;

// Sticks
var stickWidth, stickHeight, stickSeparation;
var incStick;
var leftStickX, leftStickY, rightStickX, rightStickY;

// KEY CODES

LEFT_UP = 'W';
LEFT_DOWN = 'Z';
RIGHT_UP = 'I';
RIGHT_DOWN = 'M';
SOUND='O';


initBall();
initSticks();
loopGame();

function loopGame(){
	
	drawField();
	drawScore();
	drawLeftStick();
	drawRightStick();
	drawBall();
	updateBall();

	setTimeout(loopGame, 4);
}

function updateBall(){

	xBall += incX;
	yBall += incY;

	// 
	if((yBall<ballWidth/2) || (yBall> fieldHeight - ballWidth/2)){
		incY*=-1;
	}
	else if((xBall<ballWidth/2) || (xBall> fieldWidth - ballWidth/2)){
		incX*=-1;
	}

	// Left Stick
	if ((yBall >= leftStickY) && 
		(yBall <= leftStickY + stickHeight -1) &&
		(xBall - ballWidth <= leftStickX + stickWidth)){
		incX*=-1;
	}

	// Right Stick
	if((yBall >= rightStickY) && 
	   (yBall<=rightStickY + stickHeight -1) &&
	   (xBall  + stickWidth >= rightStickX)){
	   	incX*=-1;
	}

	// Left Goal
	if (xBall<ballWidth/2){
		goalsRight++;
		initBall();
	}

	// Right Goal
	if (xBall>=fieldWidth - ballWidth/2){
		goalsLeft++;
		initBall();
	}
}


function drawField(){
	context.fillStyle = "red";
	context.clearRect(0,0,fieldWidth, fieldHeight);
	context.fillRect(fieldWidth/2,0,2,fieldHeight);
}

function drawScore(){
	context.fillStyle = "white";
	context.font = "48px Georgia";
	context.fillText(goalsLeft, fieldWidth/4, 30);
	context.fillText(goalsRight, 3*fieldWidth/4, 30);
}

function initBall(){
	xBall = fieldWidth/2;
	yBall = fieldHeight/2;
	ballWidth = 20;
	ballHeight = 20;
	incBall = 1;
	incX = (-1 + 2*Math.random())*5;
	incY = (-1 + 2*Math.random())*5;
}

function drawBall(){
	context.fillStyle = "blue";
	context.beginPath();
	context.arc(xBall,yBall,ballWidth,0,2*Math.PI);
	context.fill();
}


function initSticks(){
	stickWidth = 15;
	stickHeight = 100;
	stickSeparation= 20;
	incStick=5;
	leftStickX =stickSeparation;
	leftStickY = fieldHeight/2 - stickHeight/2;
	rightStickX = fieldWidth - stickSeparation - stickWidth;
	rightStickY =  fieldHeight/2 - stickHeight/2;
}

function drawLeftStick(){
	context.fillStyle = "white";
	context.fillRect(leftStickX,leftStickY, stickWidth, stickHeight);
}

function drawRightStick(){
	context.fillStyle = "white";
	context.fillRect(rightStickX,rightStickY, stickWidth, stickHeight);
}


function moveUpLeftStick(){
	leftStickY-=incStick;
	if(leftStickY<0){
		leftStickY=1;
	}
}

function moveDownLeftStick(){
	leftStickY+=incStick;
	if(leftStickY>fieldHeight - stickHeight){
		leftStickY = fieldHeight - stickHeight -1;
	}
}

function moveUpRightStick(){
	rightStickY-=incStick;
	if(rightStickY<0){
		rightStickY=1;
	}
}

function moveDownRightStick(){
	rightStickY+=incStick;
	if(rightStickY>fieldHeight - stickHeight){
		rightStickY = fieldHeight - stickHeight -1;
	}
}