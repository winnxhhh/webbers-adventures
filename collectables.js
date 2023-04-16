var collectable;

function drawCollectable(t_collectable)
{
    //collectable
    fill(0,0,0,100)
    ellipse(t_collectable.x_pos + 10, t_collectable.y_pos + 38, t_collectable.size + 6,t_collectable.size - 20);
    fill(224, 183, 36);
    ellipse(t_collectable.x_pos + 3, t_collectable.y_pos + 25,t_collectable.size + 5,t_collectable.size);
    fill(255, 205, 25);
    ellipse(t_collectable.x_pos, t_collectable.y_pos + 25, t_collectable.size, t_collectable.size);
    fill(100)
    textSize(15);
    text("$",t_collectable.x_pos - 3, t_collectable.y_pos + t_collectable.size - 1);
}

function checkCollectable(t_collectable)
{
    if(dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 40)
    {
        t_collectable.isFound = true;
        gameScore += max(0,1);

        coinSound.play();
    }
}