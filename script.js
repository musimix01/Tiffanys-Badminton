function setup() {
    createCanvas(windowWidth,windowHeight);
  }
  
  function draw() {
    background(3, 148, 252);   
    drawRacket(25,100,100,250)
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  function drawRacket(x,y,width,height){
    ellipseMode(CORNER);
    fill(255);
    rect(x+0.35*width, y+height*0.6, width*0.3, height*0.5);
     ellipse(x, y, width, height*0.6);
     
  }
