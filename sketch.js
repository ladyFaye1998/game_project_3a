/*

The Game Project

Week 3

Game interaction

*/


let gameChar_x;
let gameChar_y;

let floorPos_y;

let isLeft;
let isRight;
let isFalling;
let isPlummeting;
let isJumping;
let ground;

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
	ground = gameChar_y;
}

function draw()
{
	///////////DRAWING CODE//////////

	drawBackground()

	// TODO: draw the canyon


	// draw the game character
	if(isLeft && isFalling)
	{
		jump_Left();
		gameChar_x = gameChar_x - 3;
	}
	else if(isRight && isFalling)
	{
		jump_Right();
		gameChar_x = gameChar_x + 3;
	}
	else if(isLeft)
	{
		walking_Left();
		gameChar_x = gameChar_x - 3;
	}
	else if(isRight)
	{
		walking_Right()
		gameChar_x = gameChar_x + 3;
	}
	else if((isFalling || isPlummeting || isJumping))
	{
		Jump_Facing_Forwards();
	}
	else if (!isFalling  && (gameChar_y === ground))
	{
		drawFrontFacingChar();
	}
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	if((gameChar_y > ground - 100) && isJumping)
		gameChar_y = gameChar_y - 2;
	if(gameChar_y === ground - 100){
		isJumping = false
		isFalling = true
	}
	if((gameChar_y < ground) && isFalling)
	{
		gameChar_y = gameChar_y + 1;
	}
	if(gameChar_y === ground){
		isFalling = false
	}

	//Coin(100, 100, 10, 10);
}


function keyPressed()
{
	if (keyCode === LEFT_ARROW)
	{
		isLeft = true;
	}
	else if(keyCode === RIGHT_ARROW)
	{
		isRight = true;
	}
	else if(keyCode === 32)
	{
		if(gameChar_y === ground){
			isJumping = true;
			// gameChar_y = gameChar_y - 100;
			// isFalling = true;
		}
	}

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
	if (keyCode === RIGHT_ARROW)
	{
		isRight = false;
	}

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

	//Add your code here ...

	strokeWeight(2);
	stroke(51);
	fill(255);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);
	//Color
	noStroke();
	beginShape();
	x = gameChar_x - 24;
	y = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		vertex(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 20) && y >= (gameChar_y + 15)){
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
		if(x2 <= (gameChar_x + 20) && y2 >= (gameChar_y + 15)){
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
	//Body Couture
	strokeWeight(2);
	stroke(51);
	x = gameChar_x - 24;
	y = gameChar_y + 45;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 20) && y >= (gameChar_y + 15)){
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
		if(x2 <= (gameChar_x + 20) && y2 >= (gameChar_y + 15)){
			x2 = x2 + 0.7; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(gameChar_x - 17.5, gameChar_y, endX2, endY2);

	//eys
	line(gameChar_x - 3, gameChar_y - 3, gameChar_x + 2, gameChar_y - 10);
	line(gameChar_x + 7, gameChar_y -3, gameChar_x + 2, gameChar_y - 10);

	//mouse
	fill(0,0,0);
	ellipse(gameChar_x + 8, gameChar_y + 8, 6, 9);

	//hand
	noFill();
	arc(gameChar_x - 10, gameChar_y + 18, 5, 15, 2, 1);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x - 5, gameChar_y + 3, 7, 5);
}

function jump_Left()
{
	//Add your code here ...
	strokeWeight(2);
	stroke(51);
	fill(255);
	arc(gameChar_x, gameChar_y, 35, 35, 84.8, 119.5);
	//Color
	noStroke();
	beginShape();

	x = gameChar_x + 19;
	y = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		vertex(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 26) && y >= (gameChar_y + 5)){
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
		if(x2 <= (gameChar_x + 26) && y2 >= (gameChar_y + 12)){
			x2 = x2 - 0.1; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		vertex(endX2, endY2);
	}
	vertex(gameChar_x + 17.5, gameChar_y);
	vertex(gameChar_x - 17.5, gameChar_y);
	endShape();
	//Body Couture
	strokeWeight(2);
	stroke(51);
	noFill();
	x = gameChar_x + 19;
	y = gameChar_y + 48;
	for(var i = 0; i < 38; i++) {
		point(x, y);
		var startX = x;
		var startY = y;
		if(x <= (gameChar_x + 26) && y >= (gameChar_y + 5)){
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
		if(x2 <= (gameChar_x + 26) && y2 >= (gameChar_y + 12)){
			x2 = x2 - 0.1; // 66
			y2 = y2 - i; // we need final 97
		}
		var endX2 = x2;
		var endY2 = y2;
		line(startX2, startY2, endX2, endY2);
	}
	line(gameChar_x + 17.5, gameChar_y, endX2, endY2);

	//eys
	line(gameChar_x - 10, gameChar_y, gameChar_x - 5, gameChar_y - 7);
	line(gameChar_x, gameChar_y, gameChar_x - 5, gameChar_y - 7);

	//mouse
	fill(0,0,0);
	ellipse(gameChar_x - 7, gameChar_y + 15, 6, 9);

	//hand
	noFill();
	arc(gameChar_x + 5, gameChar_y + 20, 5, 15, 2, 1);

	//blush
	noStroke();
	fill(255, 204, 255);
	ellipse(gameChar_x, gameChar_y + 8, 7, 5);
}

const drawBackground = () => {
	background(100,155,255);
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y);
}

function Coin(x, y, radius, width) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.width = width;
	this.pitch = 0;
	this.roll = 0;

	this.show = function() {
		var cos_p = cos(this.pitch);
		var sin_p = sin(this.pitch);
		push();
		translate(this.x, this.y);
		rotate(this.roll);
		stroke(138, 43, 226);
		fill(138, 43, 226);
		ellipse(0, + (this.width / 2) * cos_p * sign(sin_p), 2 * this.radius, (2 * this.radius) * sin_p);
		rect( - this.radius, - this.width * cos_p / 2, 2 * this.radius, this.width * cos(this.pitch));
		fill(230, 230, 250);
		ellipse(0, - (this.width / 2) * cos_p * sign(sin_p), 2 * this.radius, (2 * this.radius) * sin_p);
		pop();
	}
}