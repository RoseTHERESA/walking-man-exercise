/*
1. Figure out how to manipulate the image's position using Javascript
2. Write code that moves the image 20px to the right every time you click on the screen
3. Next, rather than waiting for a click, just move the image 10px to the right every 200ms.
4. When the image hits the right edge of the screen, make it stop moving!
5. Next, make the image move to the left once it hits the right edge
6. When the image hits the left edge, it should move back to the right and continue switching forever!
7. Flip the image so that it looks like the stick figure is walking in the correct direction
8. Play with the number of pixels and speed of your animation until you find something that looks smooth
*/

var img = document.getElementsByTagName("IMG")[0];
var movingRight = true;
img.style.marginLeft = "0px";

setInterval( function(){
    var currentMargin = parseInt(img.style.marginLeft);
  var nextMargin;

    if(movingRight){
        nextMargin = currentMargin + 25;
        if(nextMargin >= window.outerWidth - img.width/2){
            movingRight = false;
            img.style.webkitTransform = "scale(-1,1)"
        }
    } else {
        nextMargin = currentMargin -25;
        if(nextMargin < -img.width/2){
            movingRight = true;
            img.style.webkitTransform = "scale(1,1)"
        }
    }
     img.style.marginLeft = nextMargin + "px";
} , 120);
