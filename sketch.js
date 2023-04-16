var floorPos_y;

var isLeft;
var isRight;

var isFalling;
var isPlummeting;

var gameOver = false;
var gameOverSign = false;

var startCardSign = true;

var jumpSound;
var bgmSound;
var coinSound;
var loseSound;
var winSound;

var soundReady;
var soundLoadCounter;

// preloads all the game sounds
function preload()
{
	soundReady = false;
	soundLoadCounter = 0;

	soundFormats('mp3');

	jumpSound = loadSound('assets/jumpsounds.mp3', soundLoaded);
	bgmSound = loadSound('assets/bgmsound.mp3', soundLoaded);
	coinSound = loadSound('assets/coinsound.mp3', soundLoaded);
	loseSound = loadSound('assets/losesound.mp3', soundLoaded);
	winSound = loadSound('assets/winsound.mp3', soundLoaded);

	jumpSound.setVolume(0.6);
	bgmSound.setVolume(0.3);
	coinSound.setVolume(0.5);
	loseSound.setVolume(0.9);
	winSound.setVolume(0.5);
}

// code that ensures all sounds are loaded before game codes are executed
function soundLoaded()
{
	soundLoadCounter++;
	if(soundLoadCounter == 5)
	{
		soundReady = true;
	}
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;

	gameScore = 0
	lives = 3

	startGame();
}
	
function draw()
{
	//to make the character in the center while background moves
	cameraPosX = gameChar_x - width/2;

	//fill the sky blue
	background(100,155,255); 

	//draw some green ground
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); 

	push();
	translate(-cameraPosX, 0);

	//draw the canyon
	for(var i = 0 ; i < canyon.length ; i++)
    {
		drawCanyon(canyon[i]);
	}
    
    //draw the clouds
    drawClouds();
    
    //draw the mountains
    drawMountains();
    
    //draw the trees
    drawTrees();

	//draw collectables
	for(var i = 0 ; i < collectable.length ; i++)
	{
		if(!collectable[i].isFound)
		{
			drawCollectable(collectable[i]);
			checkCollectable(collectable[i]);
		}
	}

	//draw flagpole
	renderFlagpole();
	
	//the game character
	if(isLeft && isFalling)
	{
		//jumping-left code
		drawGameCharIsLeftAndIsFalling();
	}
	else if(isRight && isFalling)
	{
		//jumping-right code
		drawGameCharIsRightAndIsFalling();
	}
	else if(isLeft)
	{
		//walking left code
		drawGameCharIsLeft();
	}
	else if(isRight)
	{
		//walking right code
		drawGameCharIsRight();
	}
	else if(isFalling || isPlummeting)
	{
		//jumping facing forwards code
		drawGameCharIsFallingOrIsPlummeting();
	}
	else
	{
		//standing front facing code
		drawGameCharStandingFront();
	}

    pop();

	//game statistics
	drawGameScore();
	drawLifeTokens();

	//game over sign
	if(checkGameOver() && gameOverSign == true)
    {
        drawGameOver();
    }

	///////////INTERACTION CODE//////////
	//walking left and right 
	if(isLeft == true)
	{
		gameChar_x -= 5;
	}
	else if(isRight == true)
	{
		gameChar_x += 5;
	}
	else if(gameChar_y < floorPos_y)
	{
		gameChar_y += 2;
		isFalling = true;
	}
	else 
	{
		isFalling = false;
	}

	//falling down the canyons
	for(var i = 0 ; i < canyon.length ; i++)
	{
		if((gameChar_x >= canyon[i].x_pos + 210) && (gameChar_x <= canyon[i].x_pos + 240) && (gameChar_y >= floorPos_y))
		{	
			gameChar_y += 4;
			isPlummeting = true;
			isFalling = true;
			isLeft = false;
			isRight = false;
		}
	}

	checkPlayerDie();

	//checks character's distance from the flagpole
	if(flagpole.isReached == false)
	{
		checkFlagpole();
	}

	//introduction sign
	if(startCardSign == true)
	{
		startCard();
	}
}

function keyPressed()
{
	//arrow keys functionality when pressed
	if(keyCode == 37) 
	{
		isLeft = true;
	}
	else if(keyCode == 39)
	{
		isRight = true;
	}
	else if(keyCode == 38)
	{
		if(gameChar_y >= floorPos_y)
		{
			gameChar_y -= 50;
			isFalling = false;
			isPlummeting = false;

			jumpSound.play();
		}	
	}

	// commands to start game
	if(keyCode == 83)
	{
		startCardSign = false;
		bgmSound.play();
	}
	
	// commands to restart game after winning or losing
	if(keyCode == 32 && (gameOver == true || flagpole.isReached == true))
	{
		setup();
		gameOverSign = false;
	}
}

function keyReleased()
{
	//arrow keys functionality when released
	if(keyCode == 37) 
	{
		isLeft = false;
	}
	else if(keyCode == 39)
	{
		isRight = false;
	}
}