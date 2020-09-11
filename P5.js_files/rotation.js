let rotation = 10;            
let cirNum = 20;  
let size = 10;    

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  colorMode(HSB, 100);
}

function draw() {
  
  push();
  translate(width/2, height/2);
   background(0,34); 
  for(let i = 0; i < cirNum; i++) {
    let newRot = rotation + map(i*8, 90, cirNum, 0, 28*PI);
    let radius = i/2*size;
    fill(map(rotation, i, PI*i, i, 255), 244, 255);
    ellipse(sin(newRot*8)*radius, cos(newRot)*radius, size, size);
  }
  rotation-=PI/1000;
  if(rotation > 200*PI){ rotation = 0;}
}

function mouseClicked() {
  //saveFrames("Spiral_Test_", "png", 5, 25);  
}