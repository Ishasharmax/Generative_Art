//Multiple Ellipses // eye effect

var maxCircleSize = 600;
var phase = 8, speed = 0.02;
var randomColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  var x = 20;
  var y = ((height/2)-((height/2)/2)-300) + sin(phase) * 3;

  phase = frameCount * speed;
  var sizeOffset = (cos(phase) + 0.1) * 0.4;
  var circleSize = sizeOffset * maxCircleSize;
  randomColor = color(random(20,255),random(16,255),random(220,255));
  fill(randomColor);
  count=5;
  for (let i=0; i<count; i++){
     ellipse(random(x,x+20), random(y,y+20), circleSize+90, circleSize);
     y+=random(420,440);
  }
  
  var x1 = 500;
  var y1 = ((height/2)-((height/2)/2)-600) + sin(phase) * 1;
  for (let i=0; i<count; i++){
     ellipse(random(x1,x1+20), random(y1,y1+20), circleSize+90, circleSize);
     y1+=random(420,440);
  }
  
  var x2 = 1000;
  var y2 = ((height/2)-((height/2)/2)-300) + sin(phase) * 1;
  for (let i=0; i<count; i++){
     ellipse(random(x2,x2+20), random(y2,y2+20), circleSize+90, circleSize);
     y2+=random(420,440);
  }
  
  var x3 = 1500;
  var y3 = ((height/2)-((height/2)/2)-600) + sin(phase) * 1;
  count1=5;
  for (let i=0; i<count1; i++){
     ellipse(random(x3,x3+20), random(y3,y3+20), circleSize+90, circleSize);
     y3+=random(420,440);
  }
  
  var x4 = 2000;
  var y4 = ((height/2)-((height/2)/2)-300) + sin(phase) * 1;
  for (let i=0; i<count; i++){
     ellipse(random(x4,x4+20), random(y4,y4+20), circleSize+90, circleSize);
     y4+=random(420,440);
  }
  
  var x5 = 3000;
  var y5 = ((height/2)-((height/2)/2)-600) + sin(phase) * 1;
  count1=5;
  for (let i=0; i<count1; i++){
     ellipse(random(x5,x5+20), random(y5,y5+20), circleSize+90, circleSize);
     y5+=random(420,440);
  }
  
  var x6 = 2400;
  var y6 = ((height/2)-((height/2)/2)-300) + sin(phase) * 1;
  for (let i=0; i<count; i++){
     ellipse(random(x6,x6+20), random(y6,y6+20), circleSize+90, circleSize);
     y6+=random(420,440);
  }
 
}




