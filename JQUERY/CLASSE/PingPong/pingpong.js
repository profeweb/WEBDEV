
var canvas, context;

// Field
var fieldWidth, fieldHeight;

// Ball
var xBall, yBall;
var ballWidth, ballHeight;
var incBall, incX, incY;

// Sticks
var stickWidth, stickHeight, stickSeparation;
var incStick;
var leftStickX, leftStickY, rightStickX, rightStickY;

// Sounds
var stickSound, pointSound;
var soundOn;

// KEY CODES

LEFT_UP = 'W';
LEFT_DOWN = 'Z';
RIGHT_UP = 'I';
RIGHT_DOWN = 'M';
SOUND='O';

// POINTS
var leftPoints, rightPoints;

function init(){
	canvas = $("#camp")[0];
	fieldWidth = canvas.width;
	fieldHeight = canvas.height;
	context = canvas.getContext('2d');

	stickSound = new Audio("beep.wav");
	pointSound = new Audio("point.wav");
	soundOn = true;

	leftPoints = 0;
	rightPoints = 0;

	initBall();
	initSticks()

	loopGame();
}

function loopGame(){
	
	drawField();

	drawLeftStick();
	drawRightStick();

	updateBall();
	drawBall();

	displayPoints();

	setTimeout(loopGame, 4);
}

function upLeftStick(){
	leftStickY -= incStick;
	if(leftStickY<0){
		leftStickY = 1;
	}
}

function downLeftStick(){
	leftStickY += incStick;
	if(leftStickY>fieldHeight - stickHeight){
		leftStickY = fieldHeight;
	}
}

function upRightStick(){
	rightStickY -= incStick;
	if(rightStickY<0){
		rightStickY = 1;
	}
}

function downRightStick(){
	rightStickY += incStick;
	if(rightStickY>fieldHeight - stickHeight){
		rightStickY = fieldHeight;
	}
}


function initSticks(){
	stickSeparation = 12;
	stickWidth = 10;
	stickHeight = fieldHeight/5;
	incStick = 2;

	leftStickX = stickSeparation;
	leftStickY = fieldHeight / 2 - stickHeight/2;

	rightStickX = fieldWidth  - stickSeparation - stickWidth;
	rightStickY = leftStickY;
}

function drawLeftStick(){
	context.fillStyle = "white";
	context.fillRect(leftStickX, leftStickY, stickWidth, stickHeight);
}

function drawRightStick(){
	context.fillStyle = "white";
	context.fillRect(rightStickX, rightStickY, stickWidth, stickHeight);
}

function initBall(){
	 xBall = fieldWidth / 2;
	 yBall = fieldHeight / 2;
	 ballWidth = 14;
	 ballHeight = 14;
	 incBall = 1;
	 incX = incBall;
	 incY = incBall;
}

function updateBall(){
	xBall += incX;
	yBall += incY;

	// Touching Left Stick
	if(yBall >= leftStickY && yBall<=leftStickY + stickHeight -1){
		if(xBall <=leftStickX + stickWidth){
			incX = -incX;
			xBall = leftStickX + stickWidth;
			if(soundOn){
				stickSound.play();
			}
		}
	} else {
		if(xBall<leftStickX - stickSeparation){
			rightPoints++;
			if(soundOn){
				pointSound.play();
			}
		}
	}

	// Touching Right Stick
	if(yBall >= rightStickY && yBall<=rightStickY + stickHeight -1){
		if(xBall  + stickWidth >= rightStickX){
			incX = -incX;
			xBall = rightStickX - stickWidth;
			if(soundOn){
				stickSound.play();
			}
		}
	} else {
		if(xBall + ballWidth > rightStickX + stickWidth+ stickSeparation){
			leftPoints++;
			if(soundOn){
				pointSound.play();
			}
		}
	}

	// Field Boundaries
	if( xBall + ballWidth > fieldWidth || xBall < 0){
		incX = - incX;
	}
	if( yBall + ballHeight > fieldHeight || yBall < 0){
		incY = - incY;
	}

	
}

function editSound(){
	soundOn = !soundOn;
}

function displayPoints(){
	context.fillStyle = "white";
	context.font = "48px Georgia";
	context.fillText(leftPoints, fieldWidth/4, 30);
	context.fillText(rightPoints, 3*fieldWidth/4, 30);
}

function drawBall(){
	context.fillStyle = "blue";
	context.fillRect(xBall, yBall, ballWidth, ballHeight);
}

function drawField(){
	context.fillStyle = "red";
	context.clearRect(0,0,fieldWidth, fieldHeight);
	context.fillRect(fieldWidth/2,0,2,fieldHeight);
}