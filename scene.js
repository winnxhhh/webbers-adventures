function setupScene()
{
    mountain = {Y:282, Width:300, Height:300};
	mountain_x = [2500, 3000, 170, 950, 1800];

	treePosY = height/2;
	treePosY = 412
	trees_x = [1600, 2300, -1000, -850, -580, -200, 10, 250, 430, 680, 980, 1050, 1250];

	clouds = [{x_pos: 2600, y_pos:120, Scale:1.5, Move:100}, 
                {x_pos:2005, y_pos:50, Scale:1.5, Move:160}, 
                {x_pos:50, y_pos:70, Scale:1.5, Move:90}, 
                {x_pos:700, y_pos:10, Scale:1.5, Move:150}, 
                {x_pos:1300, y_pos:85, Scale:1.5, Move:130}];

	canyon = [{x_pos: 400, width: 100, isFalling: false}, 
                {x_pos: 200, width: 100, isFalling: false}, 
                {x_pos: -250, width: 100, isFalling: false},
                {x_pos: 2550, width: 100, isFalling: false},
                {x_pos: 2000, width: 100, isFalling: false},
                {x_pos: 1000, width: 100, isFalling: false},
                {x_pos: 1300, width: 100, isFalling: false}];

    collectable = [{x_pos: 1900, y_pos: floorPos_y - 35, size: 30, isFound: false},
                   {x_pos: 2600, y_pos: floorPos_y - 35, size: 30, isFound: false}, 
                   {x_pos: 300, y_pos: floorPos_y - 35, size: 30, isFound: false}, 
                   {x_pos: 1000, y_pos: floorPos_y - 35, size: 30, isFound: false}];

    flagpole = {isReached: false, x_pos: 3000};
}

//introduction sign
function startCard(){
    fill(0,0,0);
    textSize(80);
    text("WEBBER'S ADVENTURES", 20, 200);

    textSize(50);
    text("Press the S key to start", 250,300)
}

//game over sign after falling into canyon
function drawGameOver(){
    fill(255, 0, 0);
    textSize(100);

    if(lives > 0)
    {
        text("CONGRATULATIONS", 20, 200);
        text("You win!", 320, 300);

        textSize(50);
        text("Press the spacebar to restart", 200, 400);
    }
    else
    {
        text("GAME OVER", 200, 200);
        text("You lose!", 320, 300);

        textSize(50);
        text("Press the spacebar to restart", 200, 400);
    }
}

function checkGameOver(){
    if(flagpole.isReached)
    {
        gameOver = true;
        gameOverSign = true;
    }
    else if(lives == 0)
    {
        gameOver = true;
        gameOverSign = true;
        loseSound.play();
    }

    return gameOver;
}


