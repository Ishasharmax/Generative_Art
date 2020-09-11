//Wave 1

let rotation = 10;             //Rads to keep track of rotation angle
let cirNum = 20;   //How long the spiral will be 
let size = 10;    //How big each circle will be

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  colorMode(HSB, 100);
}

function draw() {
  push();
  translate(width/2, height/2);
  background(0,2); 
  for(let i = 0; i < cirNum; i++) {
    let newRot = rotation + map(i*8, 90000, cirNum, 0, 28*PI);
    let radius = i/2*size;
    fill(map(rotation, i, PI*i, i, 255), 244, 255);
    ellipse(sin(newRot*190)*radius, cos(newRot*100)*radius, size, size);
  }
  rotation+=PI/1000;
  if(rotation > 20*PI){ rotation = 0;}
}

function mouseClicked() {
  //saveFrames("gArt", "png", 15, 25);  
}


//
////wave 2
//
//let rotation = 10;             //Rads to keep track of rotation angle
//let cirNum = 20;   //How long the spiral will be 
//let size = 10;    //How big each circle will be
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//  background(0);
//  noStroke();
//  colorMode(HSB, 100);
//}
//
//function draw() {
//  
//  push();
//  translate(width/2, height/2);
//  background(0,2); 
//  for(let i = 0; i < cirNum; i++) {
//    let newRot = rotation + map(i*8, 90000, cirNum, 0, 28*PI);
//    let radius = i/2*size;
//    fill(map(rotation, i, PI*i, i, 255), 244, 255);
//    ellipse(sin(newRot*10)*radius, cos(newRot*100)*radius, size, size);
//  }
//  rotation+=PI/1000;
//  if(rotation > 200*PI){ rotation = 0;}
//}
//
//function mouseClicked() {
//  //saveFrames("gArt", "png", 15, 25);  
//}