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
    this.health = options.health

  }

  draw(ctx) {
    // ctx.fillStyle = this.color;
    // ctx.beginPath();
    // ctx.fillStyle = "blue";
    // ctx.rect(this.x, this.y, this.width, this.height);
    // ctx.fill();
    let player = new Image();
    player.src = "sprite_base_addon_2012_12_14.png";
    ctx.drawImage(player, 150, 150, 50, 50, this.x, this.y, 150, 150);
  };
  distanceX(otherObject) {
    if (otherObject.x < this.x){
      return this.x -otherObject.x;
    }else{
      return otherObject.x - this.x;
    }
  }
  distanceY(otherObject) {
    if (otherObject.y < this.y){
      return this.y -otherObject.y;
    }else{
      return otherObject.y - this.y;
    }
  }
  isCollidedWith(otherObject) {
    const centerDistX = this.distanceX(otherObject);
    const centerDistY = this.distanceY(otherObject);
   return(centerDistX< ((this.width / 2) + (otherObject.width / 2)) && centerDistY< ((this.height / 2) + (otherObject.height / 2)) );
  }

  remove() {
    this.game.remove(this);
  };

  move() {
    //GENERAL MOVEMENT CONSTRAINTS
    //gravity and friction 
    this.yVel += 2; //increase after testing
    this.x += 2//this.xVel;
    this.y += 2//this.yVel;
    this.xVel *= .8; //readjust to .9 after testing
    this.yVel *= .8;
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