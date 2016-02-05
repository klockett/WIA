/*
     Name:KEN LOCKETT
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

window.onload = function() {
    if (Modernizr.canvas) {
        var theCanvas = document.getElementById("Canvas1");

        // theCanvas.width = 150;
        // theCanvas.height = 150;

        if (theCanvas) {
            //get Context
            var ctx = theCanvas.getContext("2d");

            if (ctx) {

                //Draw Here

                //Draw a Stroked Rectangle
                ctx.strokeStyle = "black";
                ctx.lineWidth = 5;
                ctx.fillStyle = "blue";

                //Draw the rectangle
                //strokeRect(posX, posY, Width, Height)
                ctx.strokeRect(0, 0, 50, 100);
                ctx.fillRect(0, 0, 50, 100);
                ctx.strokeRect(0, 0, 50, 100);


                //Filled Rect


                /*******************************************
                 PART 2

                 Draw a circle starting at point (50 ,50)
                 That has a radius of 20 px
                 Set the color of the circle to a shade of red and set the alpha to .5
                 Set the stroke color to black and use a radius of 30px for this circle.

                 Reminder - set the style first then draw.
                 Use the arc method
                 ********************************************/


//Draw Circle here


                var theCanvas = document.getElementById('Canvas2');
                if (theCanvas && theCanvas.getContext) {
                    var ctx = theCanvas.getContext("2d");
                    if (ctx) {

                        ctx.strokeStyle = "blue";
                        ctx.fillStyle = "red";
                        ctx.lineWidth = 5;
                        var degrees = 360;// if changed to 180 it will go half and open
                        var radians = (degrees / 180) * Math.PI;

                        ctx.beginPath();
                        ctx.arc(50, 50, 30, 0, radians);
                        ctx.fill();
                        ctx.stroke();


                        /*******************************************
                         PART 3

                         Practice using Path drawing.
                         Create a 5-point star shaped pattern using the lineTo method.
                         Begin this shape at (100, 100)

                         Height and width and color are up to you.

                         ********************************************/


//Draw Star here
                        var theCanvas = document.getElementById('Canvas3');
                        if (theCanvas && theCanvas.getContext) {
                            var ctx = theCanvas.getContext("2d");
                            if (ctx) {
                                ctx.strokeStyle = "blue";
                                ctx.fillStyle= "red";
                                ctx.lineWidth = 5;

                                //draw on an open path
                                ctx.beginPath();
                                ctx.moveTo(25,175);
                                ctx.lineTo(75,25);
                                ctx.lineTo(90,95);
                                //ctx.lineTo(175,175);
                                //ctx.closePath();
                                //ctx.fill();
                                ctx.stroke();




                                /*******************************************
                         PART 4

                         Practice drawing with Bezier curves.
                         Try drawing the top to an umbrella.
                         This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

                         Position, height, width and color are your choice.
                         Do not overlap any other object.

                         ********************************************/

//Draw Umbrella top here

                        var theCanvas = document.getElementById('Canvas4');
                        if (theCanvas && theCanvas.getContext) {
                            var ctx = theCanvas.getContext("2d");
                            if (ctx) {

                                ctx.strokeStyle = "blue";
                                ctx.fillStyle = "red";
                                ctx.lineWidth = 5;

                                //stroke a Quater Arc
                                ctx.beginPath()
                                //arc(x,y,r, sa, ea, clockwisw or counter);
                                ctx.arc(150, 150, 100, 1.0 * Math.PI, 2 * Math.PI);
                                ctx.bezierCurveTo(180, 100, 140, 150, 100, 160);

                                ctx.closePath();
                                ctx.stroke();


                                /*******************************************
                                 PART 5

                                 Practice using text.
                                 Draw text into your canvas.  It can said whatever you would like in any color.

                                 ********************************************/

//Draw text here

                                var theCanvas = document.getElementById('Canvas5');
                                if (!(theCanvas && theCanvas.getContext)) {
                                } else {
                                    var ctx = theCanvas.getContext("2d");
                                    if (ctx) {

                                        var theString = "My Example of Drawing";

                                        ctx.fillText(theString, 20, 20);

                                        ctx.font = "25pt Georgia";
                                        ctx.fillStyle = "blue";
                                        ctx.fillText(theString, 20, 60);




/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/


    var theCanvas = document.getElementById('Canvas6');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //create a variable to hold our image
            var srcImg = document.getElementById("img1");


//Draw images here
//draw a scaled down Image
            //drawImage(srcImg, dx,dy, dw, dh)
            ctx.drawImage(srcImg, 50, 50, 140, 200);

//Draw a slice image
//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
            ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 280);
                     }
                    }
                   }
                 }

              }
           }

         }
       }
     }
    }
   }
  }
 }
}




console.log(Modernizr);

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


