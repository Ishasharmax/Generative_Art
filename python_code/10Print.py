#10Print code

dis=20
x=20
y=20

def setup():
  size(710, 700)
  background(255)
  
def draw():
    global x,y, dis
    stroke(0)
    strokeWeight(2)
    noFill()
    if (random(0,1)<0.5):
        line(x,y,x+dis,y+dis)
    else:
        line(x,y+dis,x+dis,y)
    x=x+dis
    if(x>height-60):
        x=20
        y=y+dis
    if( y>width-70):
        exit()
