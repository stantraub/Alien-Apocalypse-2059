//controls

class MovingObject {
 constructor(options) {
    this.height = options.height;
    this.width = options.width;
    this.canJump = options.canJump;
    this.x = options.x;
    this.y = options.y;
    this.color = options.color;
    this.xVel = options.xVel;
    this.yVel = options.yVel;
    this.game = options.game

  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  };
  
  //to repalce util.dist
  distance(otherObject) {
    if (otherObject.x < this.x){
      return this.x -otherObject.x;
    }else{
      return otherObject.x - this.x;
    }
  }

  isCollidedWith(otherObject) {
    const centerDist = this.distance(otherObject);
   return(centerDist< ((this.width / 2) + (otherObject.width / 2)));
  }

  remove() {
    this.game.remove(this);
  };

  move() {
    //GENERAL MOVEMENT CONSTRAINTS
    //gravity and friction 
    this.yVel += 2; //increase after testing
    this.x += this.xVel;
    this.y += this.yVel;
    this.xVel *= .97; //readjust to .9 after testing
    this.yVel *= .97;
    //floor
    if (this.y > 600 - 100 - this.height) {
      this.canJump = false;
      this.y = 600 - 100 - this.height;
      this.yVel = 0;
    }
    //wrapping logic
    // if (this.x < -this.width) {
    //   this.x = 1000;
    // } else if (this.x > 1000) {
    //   this.x = -this.width
    // } 
    //hard border logic
    if (this.x < 5 + this.width){
      this.xVel = 0;
      //change for tesing since map wont always be the same shape
    } else if (this.x > 995 - this.width){
      this.xVel = 0;
    }
  
  }
}


export default MovingObject