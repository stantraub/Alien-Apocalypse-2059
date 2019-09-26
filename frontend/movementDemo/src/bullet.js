import MovingObject from "./moving_object";
import AlienChaser from "./alien_chaser";



class Bullet extends MovingObject {
  constructor(options) {
    options.height = Bullet.RADIUS;
    options.width = Bullet.RADIUS;
    options.color = "red";
    options.x = options.x;
    options.y = options.y;
    options.xVel = options.xVel;
    options.yVel = 0;
    
    super(options);
  }
  move() {
    this.x += this.xVel
    if ( this.x < 0 || this.x > 1000){
      this.remove();
    }
  }
  collideWith(otherObject) {
    if (otherObject instanceof AlienChaser) {
      otherObject.remove();
      this.remove();
      return true;
    }
    // else if (otherObject instanceof Bullet) {
    //   this.remove();
    //   otherObject.remove();
    //   return true;
    // }

    return false;
  }
}

Bullet.RADIUS = 10;
Bullet.SPEED = 8;

export default Bullet;