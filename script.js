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
    fill(255)
     ellipse(x, y, width, height*0.5);
     rect(x, y+height*0.5, width*0.5, height*0.5);
  }
