window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		      ctx.strokeStyle = "blue";
			  ctx.lineWidth = 5;
			  
			  //Stroke a simple bezier curve
			  ctx.beginPath();
			  ctx.moveTo(50,200);
			  
			  //bezierCurveTo(CX1, CY1, CX2, CY2, X, Y)
			  
			  ctx.bezierCurveTo(50,100, 200, 100, 200, 150);
              ctx.bezierCurveTo(150,98, 130, 200, 89, 160);


			  ctx.closePath();

			  
			  ctx.stroke();
				
						
						
		}
	}
}