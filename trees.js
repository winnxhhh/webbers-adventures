var treePosY;
var trees_x;

function drawTrees()
{
    for(var i = 0 ; i < trees_x.length ; i++)
	{
		fill(94, 71, 16);
		rect(trees_x[i] + 50, treePosY, 30,20);
		fill(26, 89, 16);
		triangle(trees_x[i], treePosY,
			     trees_x[i] + 60, treePosY - 100,
		         trees_x[i] + 130, treePosY);
		fill(28, 107, 15);
		triangle(trees_x[i] + 10, treePosY - 50,
			     trees_x[i] + 60, treePosY - 130,
			     trees_x[i] + 120, treePosY - 50);
	}
}