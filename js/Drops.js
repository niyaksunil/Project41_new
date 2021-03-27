// creating the Paper class
class Drops {
    constructor(x,y,radius){
      var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':2.0     
      }

      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
      this.width = 15;
      this.height = 15;
    } 
    
    // displaying the function
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(CENTER);
      strokeWeight(2);
      stroke(0);
      fill(0,11,56);
      ellipse(0, 0, this.width , this.height);
      pop();
    }

}
  