class Log {    
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic: true,
    }
    angleMode(DEGREES)
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    Matter.Body.setAngle(this.body,angle);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
  }
 
    
    
}