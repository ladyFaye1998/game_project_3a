/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y - 50;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
	isJumping = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character


	if(isLeft && isFalling)
	{
		// add your jumping-left code

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code

	}
	else if(isLeft)
	{
		// add your walking left code
		walking_Left();
		gameChar_x = gameChar_x - 3;

	}
	else if(isRight)
	{
		// add your walking right code
		walking_Right()
		gameChar_x = gameChar_x + 3;
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

		var jumpHeight = gameChar_y - 30;
		var ground = gameChar_y;
		while(gameChar_y != jumpHeight)
		{
			Jump_Facing_Forwards();
			gameChar_y = gameChar_y - 1;
		//	console.log(gameChar_y);
		}
		//else if(gameChar_y <= ground){
			//Jump_Facing_Forwards();
		//	gameChar_y = gameChar_y + 3;
		//}
		//gameChar_y = ground;
	}
	else
	{
		// add your standing front facing code
		drawFrontFacingChar();
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

}


function keyPressed()
{
	//gameChar_x = mouseX;
	//gameChar_y = mouseY;
	// if statements to control the animation of the character when
	// keys are pressed
	if (keyCode === LEFT_ARROW)
	{
		isLeft = true;
	}
	else if(keyCode === RIGHT_ARROW)
	{
		isRight = true;
	}
	else if(keyCode === UP_ARROW)
	{
		isFalling = true;
	};

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if (keyCode === LEFT_ARROW)
	{
		isLeft = false;
	}
	else if(keyCode === RIGHT_ARROW)
	{
		isRight = false;
	}
	else if(keyCode === UP_ARROW)
	{
		isFalling = false;
	};

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}

function drawFrontFacingChar()
{
	fill(255, 255, 255);
	strokeWeight(2);
	stroke(51);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);

	//Body Couture
	x = gameChar_x - 24;
	y = gameChar_y + 45;

	x2 = gameChar_x - 24;
	y2 = gameChar_y + 45;
	//color of body
	noStroke();
	beginShape();
	xLimit = x + 45;
	yLimit = y - 31;
	for(var i = 0; i < 38; i++) {
		vertex(x, y);
		//var startX = x;
		//var startY = y;
		if(x <= xLimit && y >= yLimit){
			x = x + 3.2; // 66
			y = y - i/2; // we need final 97
		}
		var endX = x;
		var endY = y;
		vertex(endX, endY);
	}

	for(var i = 0; i < 38; i++) {
		vertex(x2, y2);
		//var startX2 = x2;
		//var startY2 = y2;
		if(x2 <= xLimit && y2 >= yLimit){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		vertex(endX2, endY2);
	}
	vertex(gameChar_x - 17.5, gameChar_y);
	vertex(gameChar_x + 17.5, gameChar_y);
	vertex(endX, endY);
	endShape(CLOSE);

	//stroke of body
	x = gameChar_x - 24 + 0.1;
	y = gameChar_y + 45 + 0.1;

	x2 = gameChar_x - 24 - 0.1;
	y2 = gameChar_y + 45 - 0.1;
	strokeWeight(2);
	stroke(51);
	for(var i = 0; i < 38; i++) {
		point(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= xLimit && y2 >= yLimit){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(gameChar_x - 17.5, gameChar_y, endX2, endY2);

	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= xLimit && y >= yLimit){
			x = x + 3.2; // 66
			y = y - i/2; // we need final 97
		}
		var endX = x;
		var endY = y;
		line(startX, startY, endX, endY);
	}
	line(gameChar_x + 17.5, gameChar_y, endX, endY);

	//eyes
	strokeWeight(2);
	stroke(51);
	fill(0, 0, 0);
	ellipse(gameChar_x - 7, gameChar_y - 2, 5, 5);
	ellipse(gameChar_x + 7, gameChar_y - 2, 5, 5);

	//mouse
	arc(gameChar_x, gameChar_y + 5, 10, 5, 6.5, 3);

	//hands
	fill(255, 255, 255);
	arc(gameChar_x - 8, gameChar_y + 17, 5, 15, 6.5, 3);
	arc(gameChar_x + 8, gameChar_y + 17, 5, 15, 6.5, 3);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x - 11, gameChar_y + 3, 7, 5);
	ellipse(gameChar_x + 11, gameChar_y + 3, 7, 5);
}

function Jump_Facing_Forwards()
{
	//gameChar_x = 245;
	//gameChar_y = 137;
	//Add your code here ...
	strokeWeight(2);
	stroke(51);
	//head
	fill(255);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);
	//COLOR
	noStroke();
	beginShape();
	xJumpFront = gameChar_x;
	yJumpFront = gameChar_y + 40;
	for(var i = 0; i < 50; i++)
	{
		vertex(xJumpFront, yJumpFront);
		var startX3 = xJumpFront;
		var startY3 = yJumpFront;
		if(xJumpFront <= (gameChar_x + 155) && yJumpFront >= (gameChar_y + 10)){
			xJumpFront = xJumpFront + 2;
			yJumpFront = yJumpFront - i;
		}
		var endX3 = xJumpFront;
		var endY3 = yJumpFront;
		vertex(endX3, endY3);
	}
	vertex(gameChar_x + 17.5, gameChar_y);
	vertex(gameChar_x, gameChar_y);

	xJumpFront2 = gameChar_x;
	yJumpFront2 = gameChar_y + 40;
	for(var i = 0; i < 50; i++)
	{
		vertex(xJumpFront2, yJumpFront2);
		var startX4 = xJumpFront2;
		var startY4 = yJumpFront2;
		if(xJumpFront <= (gameChar_x + 155) && yJumpFront2 >= (gameChar_y + 5)){
			xJumpFront2 = xJumpFront2 - 2;
			yJumpFront2 = yJumpFront2 - i;
		}
		var endX4 = xJumpFront2;
		var endY4 = yJumpFront2;
		vertex(endX4, endY4);
	}
	vertex(gameChar_x - 17.5, gameChar_y);
	vertex(gameChar_x, gameChar_y);
	endShape();
	//body conture
	strokeWeight(2);
	stroke(51);
	xJumpFront = gameChar_x;
	yJumpFront = gameChar_y + 40;
	for(var i = 0; i < 50; i++)
	{
		point(xJumpFront, yJumpFront);
		var startX3 = xJumpFront;
		var startY3 = yJumpFront;
		if(xJumpFront <= (gameChar_x + 155) && yJumpFront >= (gameChar_y + 10)){
			xJumpFront = xJumpFront + 2;
			yJumpFront = yJumpFront - i;
		}
		var endX3 = xJumpFront;
		var endY3 = yJumpFront;
		line(startX3, startY3, endX3, endY3);
	}
	line(gameChar_x + 17.5, gameChar_y, endX3, endY3);

	xJumpFront2 = gameChar_x;
	yJumpFront2 = gameChar_y + 40;
	for(var i = 0; i < 50; i++)
	{
		point(xJumpFront2, yJumpFront2);
		var startX4 = xJumpFront2;
		var startY4 = yJumpFront2;
		if(xJumpFront <= (gameChar_x + 155) && yJumpFront2 >= (gameChar_y + 5)){
			xJumpFront2 = xJumpFront2 - 2;
			yJumpFront2 = yJumpFront2 - i;
		}
		var endX4 = xJumpFront2;
		var endY4 = yJumpFront2;
		line(startX4, startY4, endX4, endY4);
	}
	line(gameChar_x - 17.5, gameChar_y, endX4, endY4);

	//eys
	line(gameChar_x - 11, gameChar_y + 2, gameChar_x - 6, gameChar_y - 5);
	line(gameChar_x - 1, gameChar_y + 2, gameChar_x - 6, gameChar_y - 5);

	line(gameChar_x + 1, gameChar_y + 2, gameChar_x + 6, gameChar_y - 5);
	line(gameChar_x + 11, gameChar_y + 2, gameChar_x + 6, gameChar_y - 5);

	//mouse
	fill(0,0,0);
	ellipse(gameChar_x, gameChar_y + 10, 6, 6);

	//hands
	noFill();
	arc(gameChar_x - 10, gameChar_y + 20, 5, 15, 1, 1);
	arc(gameChar_x + 10, gameChar_y + 20, 5, 15, 1, 1);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x - 14, gameChar_y + 5, 7, 5);
	ellipse(gameChar_x + 14, gameChar_y + 5, 7, 5);
}

function walking_Left()
{
	//Add your code here ...
	fill(255, 255, 255);
	strokeWeight(2);
	stroke(51);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);
	noStroke();
	beginShape();

	//COLOR
	x = gameChar_x + 19;
	y = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		vertex(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 226) && y >= (gameChar_y + 5)){
			x = x - 3.6; // 66
			y = y - i; // we need final 97
		}
		var endX = x;
		var endY = y;
		vertex(endX, endY);
	}
	vertex(gameChar_x - 17.5, gameChar_y);

	x2 = gameChar_x + 19;
	y2 = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		vertex(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= (gameChar_x+ 19) && y2 >= (gameChar_y + 12)){
			x2 = x2 - 0.1; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		vertex(endX2, endY2);
	}
	vertex(gameChar_x + 17.5, gameChar_y);
	vertex(gameChar_x, gameChar_y);
	vertex(gameChar_x - 17.5, gameChar_y);
	endShape();
	//Body Couture
	strokeWeight(2);
	stroke(51);
	x = gameChar_x + 19;
	y = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 226) && y >= (gameChar_y + 5)){
			x = x - 3.6; // 66
			y = y - i; // we need final 97
		}
		var endX = x;
		var endY = y;
		line(startX, startY, endX, endY);
	}
	line(gameChar_x - 17.5, gameChar_y, endX, endY);

	x2 = gameChar_x + 19;
	y2 = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		point(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= (gameChar_x+ 19) && y2 >= (gameChar_y + 12)){
			x2 = x2 - 0.1; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(gameChar_x + 17.5, gameChar_y, endX2, endY2);

	//eye
	fill(0);
	ellipse(gameChar_x - 7, gameChar_y, 4, 8);

	//mouth
	fill(0);
	arc(gameChar_x - 9, gameChar_y + 14, 10, 5, 4, 8);

	//hand
	noFill();
	ellipse(gameChar_x + 8, gameChar_y + 13, 5, 15);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x - 2, gameChar_y + 8, 8, 5);
}

function  walking_Right()
{
	//Add your code here ...
	strokeWeight(2);
	stroke(51);
	fill(255);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);
	noStroke();
	//Color
	beginShape();
	x = gameChar_x - 24;
	y = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		vertex(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 21) && y >= (gameChar_y + 14)){
			x = x + 3.2; // 66
			y = y - i/2; // we need final 97
		}
		var endX = x;
		var endY = y;
		vertex(endX, endY);
	}
	vertex(gameChar_x + 17.5, gameChar_y);

	x2 = gameChar_x - 24;
	y2 = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		vertex(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= (gameChar_x + 21) && y2 >= (gameChar_y + 14)){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		vertex(endX2, endY2);
	}
	vertex(gameChar_x - 17.5, gameChar_y);
	vertex(gameChar_x + 17.5, gameChar_y);
	endShape();
	strokeWeight(2);
	stroke(51);
	//Body Couture
	x = gameChar_x - 24;
	y = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 21) && y >= (gameChar_y + 14)){
			x = x + 3.2; // 66
			y = y - i/2; // we need final 97
		}
		var endX = x;
		var endY = y;
		line(startX, startY, endX, endY);
	}
	line(gameChar_x + 17.5, gameChar_y, endX, endY);

	x2 = gameChar_x - 24;
	y2 = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		point(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= (gameChar_x + 21) && y2 >= (gameChar_y + 14)){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(gameChar_x - 17.5, gameChar_y, endX2, endY2);

	//eye
	fill(0);
	ellipse(gameChar_x + 5, gameChar_y, 4, 8);

	//mouth
	fill(0);
	//ellipse(255, 303, 6, 4);
	arc(gameChar_x + 11, gameChar_y + 13, 10, 5, 7, 3);


	//hand
	noFill();
	ellipse(gameChar_x - 10, gameChar_y + 13, 5, 15);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x + 5, gameChar_y + 8, 7, 5);
}

function jump_Right()
{
	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...

	strokeWeight(2);
	stroke(51);
	noFill();
	arc(45, 485, 35, 35, 84.8, 119.5);

	//Body Couture
	x = 21;
	y = 530;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= 66 && y >= 499){
			x = x + 3.2; // 66
			y = y - i/2; // we need final 97
		}
		var endX = x;
		var endY = y;
		line(startX, startY, endX, endY);
	}
	line(62.5, 485, endX, endY);

	x2 = 21;
	y2 = 530;
	for(var i = 0; i < 38; i++) {
		point(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= 66 && y2 >= 499){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(27.5, 485, endX2, endY2);

	//eys
	line(42, 482, 47, 475);
	line(52, 482, 47, 475);

	//mouse
	fill(0,0,0);
	ellipse(53, 493, 6, 9);

	//hand
	noFill();
	arc(35, 503, 5, 15, 2, 1);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(40, 488, 7, 5);
}

function jump_Left()
{
	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
	strokeWeight(2);
	stroke(51);
	noFill();
	arc(240, 480, 35, 35, 84.8, 119.5);

	//Body Couture
	x = 259;
	y = 528;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= 266 && y >= 485){
			x = x - 3.6; // 66
			y = y - i; // we need final 97
		}
		var endX = x;
		var endY = y;
		line(startX, startY, endX, endY);
	}
	line(222.5, 480, endX, endY);

	x2 = 259;
	y2 = 528;
	for(var i = 0; i < 38; i++) {
		point(x2, y2);
		var startX2 = x2;
		var startY2 = y2;
		if(x2 <= 266 && y2 >= 492){
			x2 = x2 - 0.1; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(257.5, 480, endX2, endY2);

	//eys
	line(230, 480, 235, 473);
	line(240, 480, 235, 473);

	//mouse
	fill(0,0,0);
	ellipse(233, 495, 6, 9);

	//hand
	noFill();
	arc(245, 500, 5, 15, 2, 1);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(240, 488, 7, 5);
}
