// JavaScript Document


window.onload = function(){
	
	var theCanvas = document.getElementById("Canvas1");
	
	   // theCanvas.width = 150;
		//theCanvas.height = 150;
		
		if(theCanvas){
			 //get Context
			 var ctx = theCanvas.getContext("2d");
			 
			 if(ctx){
				 
				     //Draw Here
					 
					 //Draw a Stroked Rectangle
					 ctx.strokeStyle = "blue";
					 ctx.lineWidth =5;
					 
					 //Draw the rectangle
					 ctx.strokeRect(posX, posY, Width, Height)
					 ctx.strokeRect(25,25, 100, 125);
					 
					 //Filled Rect
					 
					 //Set the fillStyle 
					 ctx.fillStyle = "green";
					 
					 ctx.fillRect(150, 25, 100, 125);
					 
					 //Draw a filled and stroked rectangle
					 
					 ctx.strokeStyle = "red";
					 ctx.fillStyle = "yellow";
					 ctx.lineWidth =10;
					 
					 //draw the rectangel
					 
					ctx.strokeRect(275, 25, 100, 125);
					 ctx.fillRect(275, 25, 100, 125);
					 
					 //clearing a rectangle
					 
					// ctx.clearRect()15, 75, 450, 50);
					 
				 
				 }
			 
			
			
		}
	
	
}
	