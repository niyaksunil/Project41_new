// created the Umbrella class
class Umbrella {
    constructor(x,y,radius,width,height){
        var options = {
            isStatic: true
        }
    
      this.body = Bodies.circle(x,y,radius,options);
      this.image = loadImage("images/walking_1.png");
      World.add(world, this.body);
      this.width = width;
      this.height = height;
    }

// displaying the function
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}