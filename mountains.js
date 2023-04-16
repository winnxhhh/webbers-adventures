var mountain;
var mountain_x;

function drawMountains()
{
    for(var i = 0 ; i < mountain_x.length ; i++)
	{
		var m_x1 = mountain_x[i] - mountain.Width/2;
		var m_y1 = mountain.Y + mountain.Height/2;
		var m_x2 = mountain_x[i];
		var m_y2 = mountain.Y - mountain.Height/2;
		var m_x3 = mountain_x[i] + mountain.Width/2;
		var m_y3 = mountain.Y + mountain.Height/2;

		fill(38, 42, 66);
		triangle(m_x1 + 30, m_y1, m_x2 + 70, m_y2 + 50, m_x3 + 70, m_y3);
		fill(65, 71, 110);
		triangle(m_x1,m_y1,m_x2,m_y2,m_x3,m_y3);
	}
}