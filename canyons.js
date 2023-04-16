var canyon;

function drawCanyon(t_canyon)
{
    fill(128, 92, 15);
    beginShape();
    vertex(t_canyon.x_pos + 200, t_canyon.width + 332);
    vertex(t_canyon.x_pos + 200, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 220, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 208, t_canyon.width + 350);
    endShape();

    fill(128, 92, 15);
    beginShape();
    vertex(t_canyon.x_pos + 258, t_canyon.width + 332);
    vertex(t_canyon.x_pos + 270, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 250, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 250, t_canyon.width + 350);
    endShape();

    fill(100, 155, 255);
    beginShape();
    vertex(t_canyon.x_pos + 200, t_canyon.width + 332);
    vertex(t_canyon.x_pos + 208, t_canyon.width + 350);
    vertex(t_canyon.x_pos + 220, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 250, t_canyon.width + 476);
    vertex(t_canyon.x_pos + 250, t_canyon.width + 350);
    vertex(t_canyon.x_pos + 258, t_canyon.width + 332);
    endShape();
}
