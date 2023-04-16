var flagpole;

function renderFlagpole()
{
    push();
    strokeWeight(10);
    stroke(112, 110, 110);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 200); 
    fill(255, 112, 172);
    noStroke();

    if(flagpole.isReached)
    {
        rect(flagpole.x_pos, floorPos_y - 200, 70, 50);
    }
    else
    {
        rect(flagpole.x_pos, floorPos_y - 50, 70, 50);
    }
    
    pop();
}

function checkFlagpole(){
    var d = abs(gameChar_x - flagpole.x_pos);

    if(d < 15)
    {
        flagpole.isReached = true;

        winSound.play();
    }
}