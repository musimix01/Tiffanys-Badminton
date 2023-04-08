function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  function drawRacket(x,y,width,height){
     ellipse(x, y, width, height*0.5);
     rect(x, y+height*0.5, width*0.5, height*0.5);
  }
