#border code
i = 0
increase=0
increase2=0
j=0

def setup():
  size(1200, 400)
  background(color(0,0,0))
  
def draw():
  global i, increase, j, increase2
  noStroke()
  translate(width/100, height/2)
  r=random(100, 255);
  b=random(100, 255);
  g=random(150, 255);
  fill(color(r,g,b))
  ellipse(i/2, sin(i*8)*90, 1,2)
  ellipse(j/3, cos(j)*90, 2,2)
  increase2 -= .000005
  j+=.255+increase2
  increase -= .000005
  i+=.255+increase
  frameRate(700)
