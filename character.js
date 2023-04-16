var gameChar_x;
var gameChar_y;

var lives;

var gameScore;

function drawGameCharIsLeftAndIsFalling()
{
    //jumping-left code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x +15, gameChar_y -15, 15,10);
	
	//body
	fill(247, 208, 32);
	ellipse(gameChar_x +5, gameChar_y -30, 30,30);

	//left wing
	fill(247, 208, 32);
	ellipse(gameChar_x + 15, gameChar_y - 42, 20,10);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x - 5, gameChar_y - 50, 25,25);

	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -5, gameChar_y -18, 15,10);

	//right eye
	noFill();
	stroke(0);
	strokeWeight(2);
	beginShape();
	vertex(gameChar_x -9, gameChar_y -56);
	vertex(gameChar_x -14, gameChar_y -53);
	vertex(gameChar_x -9, gameChar_y -50);
	endShape();

	noStroke();

	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x -16, gameChar_y - 45, 15,10);
}

function drawGameCharIsRightAndIsFalling()
{   
    //jumping-right code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -15, gameChar_y -15, 15,10);
	
	//body
	fill(247, 208, 32);
	ellipse(gameChar_x - 5, gameChar_y -30, 30,30);

	//left wing
	fill(247, 208, 32);
	ellipse(gameChar_x - 15, gameChar_y - 42, 20,10);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x + 5, gameChar_y - 50, 25,25);

	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x +5, gameChar_y -18, 15,10);

	//left eye
	noFill();
	stroke(0);
	strokeWeight(2);
	beginShape();
	vertex(gameChar_x +9, gameChar_y -56);
	vertex(gameChar_x +14, gameChar_y -53);
	vertex(gameChar_x +9, gameChar_y -50);
	endShape();

	noStroke();

	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x + 16, gameChar_y - 45, 15,10);
}
	
function drawGameCharIsLeft()
{
   // add your walking left code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x +15, gameChar_y -5, 15,10);
	
	//body
	fill(247, 208, 32);
	ellipse(gameChar_x +5, gameChar_y -20, 30,30);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x - 5, gameChar_y - 40, 25,25);

	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -5, gameChar_y -6, 15,10);

	//left eye
	fill(0);
	ellipse(gameChar_x -9, gameChar_y - 43, 10,10);
	fill(255);
	ellipse(gameChar_x - 7, gameChar_y - 45, 4,4);

	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x -16, gameChar_y - 35, 15,10);
}
	
function drawGameCharIsRight()
{
   //walking right code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -15, gameChar_y -5, 15,10);
	
	//body
	fill(247, 208, 32);
	ellipse(gameChar_x - 5, gameChar_y -20, 30,30);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x + 5, gameChar_y - 40, 25,25);

	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x +5, gameChar_y -6, 15,10);

	//right eye
	fill(0);
	ellipse(gameChar_x +9, gameChar_y - 43, 10,10);
	fill(255);
	ellipse(gameChar_x + 11, gameChar_y - 45, 4,4);

	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x + 16, gameChar_y - 35, 15,10);
}

function drawGameCharIsFallingOrIsPlummeting()
{
   //jumping facing forwards code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -10, gameChar_y -17, 15,10);
	ellipse(gameChar_x +10, gameChar_y -17, 15,10);

	//body
	fill(247, 208, 32);
	ellipse(gameChar_x, gameChar_y -30, 40,30);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x, gameChar_y - 50, 30,25);
	
	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x, gameChar_y -43, 30,15);

	//right eye
	noFill();
	stroke(0);
	strokeWeight(2);
	beginShape();
	vertex(gameChar_x +10, gameChar_y -56);
	vertex(gameChar_x +3, gameChar_y -53);
	vertex(gameChar_x +10, gameChar_y -50);
	endShape();

	//left eye
	noFill();
	stroke(0);
	strokeWeight(2);
	beginShape();
	vertex(gameChar_x -10, gameChar_y -56);
	vertex(gameChar_x -3, gameChar_y -53);
	vertex(gameChar_x -10, gameChar_y -50);
	endShape();
}

function drawGameCharStandingFront()
{
	//standing front facing code
	//feet
	fill(247, 179, 32);
	ellipse(gameChar_x -10, gameChar_y -5, 15,10);
	ellipse(gameChar_x +10, gameChar_y -5, 15,10);
	
	//body
	fill(247, 208, 32);
	ellipse(gameChar_x, gameChar_y -20, 40,30);
	
	//head
	fill(255, 220, 64);
	ellipse(gameChar_x, gameChar_y - 40, 30,25);
	
	//left eye
	fill(0);
	ellipse(gameChar_x -6, gameChar_y - 43, 10,10);
	fill(255);
	ellipse(gameChar_x - 4, gameChar_y - 45, 4,4);

	//right eye
	fill(0);
	ellipse(gameChar_x +6, gameChar_y - 43, 10,10);
	fill(255);
	ellipse(gameChar_x + 8, gameChar_y - 45, 4,4);
	
	//beak
	fill(247, 179, 32);
	ellipse(gameChar_x, gameChar_y -33, 30,15);
}

function startGame(){
	setupScene();//call the setupScene in scene.js
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
	
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	cameraPosX = 0
}

function checkPlayerDie(){
	if(gameChar_y > 575)
	{
		lives--;

		if(lives > 0)
		{
			startGame();
		}
	}
}

function drawLifeTokens(){
	for(var i = 0 ; i < lives ; i++)
	{
		if(isPlummeting == false || isPlummeting == true)
		{
			fill(212, 6, 116);
			beginShape(TRIANGLE_FAN);
			vertex(i*50 + 207.5, 60);
			vertex(i*50 + 207.5, 20);
			vertex(i*50 + 224, 40);
			vertex(i*50 + 207.5, 20);
			vertex(i*50 + 190, 40);
			vertex(i*50 + 207.5, 20);
			endShape();
		}
	}

	fill(255);
	noStroke();
	textSize(20);
	text("lives: ", 135, 45);
}

function drawGameScore(){
    fill(255);
	noStroke();
	textSize(20);
	text("score: " + gameScore, 30, 45);
}