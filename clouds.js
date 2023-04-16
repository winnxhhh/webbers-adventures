var clouds;

function drawClouds()
{
    for(var i = 0 ; i < clouds.length ; i++)
	{
		fill(255);
		//cloud 1
		ellipse(clouds[i].x_pos, clouds[i].y_pos + 50, 100, 70);
		ellipse(clouds[i].x_pos + 50, clouds[i].y_pos + 40, 80, 80);
		ellipse(clouds[i].x_pos + 100, clouds[i].y_pos + 40, 100, 70);

		//cloud 2
		ellipse(clouds[i].x_pos + clouds[i].Move + 5 * clouds[i].Scale,
				clouds[i].y_pos + clouds[i].Move + 50,
				100 * clouds[i].Scale,
				70 * clouds[i].Scale);
		ellipse(clouds[i].x_pos + clouds[i].Move + 50 * clouds[i].Scale,
				clouds[i].y_pos + clouds[i].Move + 40,
				80 * clouds[i].Scale,
				80 * clouds[i].Scale);
		ellipse(clouds[i].x_pos + clouds[i].Move + 100 * clouds[i].Scale,
				clouds[i].y_pos + clouds[i].Move + 40,
				100 * clouds[i].Scale,
				70 * clouds[i].Scale);	
	}
}