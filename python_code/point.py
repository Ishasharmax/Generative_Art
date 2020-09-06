#border code
i = 0
increase=0
increase2=0
j=0

def setup():
  size(600, 600)
  background(2)
  
def draw():
  global i, increase, j, increase2
  noStroke()
  translate(width/2, height/2)
  push();
  fill(222, 174, 252)
  ellipse(cos(i*8)*90, random(sin(i*8)*-90, sin(i)), 1,1)
  ellipse(random(sin(i)*-70, sin(i)*180), random(cos(i)*70, cos(i)*180), 1,1)
  ellipse(random(cos(j)*-70, cos(j)*-180), random(sin(j)*-70, sin(j)*-190), 1,1)
  ellipse(random(sin(i)*70, sin(i)*180), random(cos(i)*-190, cos(i)*100), 1,1)
  ellipse(random(cos(j)*70, cos(j)*180), random(sin(j)*70, sin(j)*180), 1,1)
  pop();
  push();
  fill(222)
  ellipse(cos(i*8)*90, random(sin(i*8)*-90, sin(i)), 1,1)
  # ellipse(random(sin(i)*-180, sin(i)*-70), random(cos(i)*-180, cos(i)*70), 1,1)
  ellipse(random(cos(j)*70, cos(j)*180), random(sin(j)*-190, sin(j)*-70), 1,1)
  ellipse(random(sin(i)*180, sin(i)*70), random(cos(i)*-190, cos(i)*100), 1,1)
  # ellipse(random(cos(j)*-170, cos(j)*-80), random(sin(j)*70, sin(j)*180), 1,1)
  pop();
  
  push();
  fill(252, 174, 217)
  ellipse(cos(i*-80)*50, random(sin(i*-8)*-50, sin(i)), 1,1)
  # ellipse(random(sin(i)*-180, sin(i)*-70), random(cos(i)*-180, cos(i)*70), 1,1)
  ellipse(random(cos(j)*70, cos(j)*180), random(sin(j)*-190, sin(j)*-70), 1,1)
  ellipse(random(sin(i)*180, sin(i)*70), random(cos(i)*-190, cos(i)*100), 1,1)
  # ellipse(random(cos(j)*-170, cos(j)*-80), random(sin(j)*70, sin(j)*180), 1,1)
  pop();
  
  push();
  fill(174, 205, 252)
  # ellipse(cos(i*-80)*50, random(sin(i*-8)*-50, sin(i)), 1,1)
  # ellipse(random(sin(i)*-180, sin(i)*-70), random(cos(i)*-180, cos(i)*70), 1,1)
  ellipse(random(cos(j)*-70, cos(j)*-180), random(sin(j)*-190, sin(j)*-70), 1,1)
  ellipse(random(sin(i)*-180, sin(i)*-50), random(cos(i)*-190, cos(i)*-100), 1,1)
  # ellipse(random(cos(j)*-170, cos(j)*-80), random(sin(j)*70, sin(j)*180), 1,1)
  pop();
  

  increase2 -= .0000005
  j+=.255+increase2
  increase -= .0000005
  i+=.255+increase
  frameRate(700)
