import MovingObject from "./moving_object";
import AlienChaser from "./alien_chaser";
import Bullet from "./bullet";


//sets controls
//controls
// const controls = {
//   left: false, right: false, up: false, keyListener: function (action) {
//     const keyStatus = (action.type == "keydown") ? true : false;
//     //sets the current keydown action
//     switch (action.keyCode) {
//       case 65:// A Left
//         controls.left = keyStatus
//         break;
//       case 87://W Up
//         controls.up = keyStatus
//         break;
//       case 68://D Right
//         controls.right = keyStatus
//       // case 32: //SPACE SHOOT
//       //   controls.shoot = keyStatus
//     }
//   }
// };
class Player extends MovingObject {
  constructor(options = {}) {
    options.color = "black";
    options.height = 40;
    options.width = 20;
    options.x = options.x || options.game.randomX();
    options.y = options.y || options.game.randomY();
    options.canJump = options.canJump || true;
    options.xVel = 0;
    options.yVel = 0;
    options.health = 5;
    super(options);
    this.jumpcount=0;
    this.score = 0;
    this.mirror = false;
    this.player = new Image();
    this.player.src = "sprite_base_addon_2012_12_14.png";
 
  }


  collideWith(otherObject) {
  //  if(otherObject instanceof AlienChaser){
  //    return true
  //  }
  }
  move() {
    if(this.health === 0){
      // this.remove();
    }

    this.yVel += 1.5; //increase after testing
    this.x += this.xVel;
    this.y += this.yVel;
    // this.xVel *= .92; //readjust to .9 after testing
    // this.yVel *= .92;

    if (this.y > 600 - 100 - this.height){
      this.canJump = false;
      this.y = 600 - 100 - this.height;
      this.yVel = 0;
    }
   
   

    if (this.x < 5 + this.width) {
      this.xVel = 0;
      //change for tesing since map wont always be the same shape
    } else if (this.x > 995 - this.width) {
      this.xVel = 0;
    }

  };



  draw(ctx) { 
    if(this.mirror){
      this.player.src = "sprite_base_addon_2012_12_14.png";
      ctx.drawImage(this.player, 150, 150, 50, 50, this.x, this.y - 40, 130, 130);
    }else{
        this.player.src = "cat_reversed.png";
      ctx.drawImage(this.player, 950, 10, 50, 50, this.x-100, this.y-75, 130, 130);
    }
   
  };

  fireBullet(vel) {
  
    if (this.xVel < 0){
      vel = -vel;
    }

    const bullet = new Bullet({
      x: this.x,
      y: this.y + 20,
      xVel: vel,
      color: this.color,
      game: this.game,
      mirror: this.mirror
    });
    
    this.game.add(bullet);
  }

  moveLeft(){
    this.mirror = false
    // this.movePlayer();

    // if (this.xVel > 0){
    //   this.xVel = .9
    // }
    this.xVel -= 1.5;
  }
  moveRight() {
    this.mirror = true;
    // this.movePlayer();
    // if (this.xVel < 0) {
    //   this.xVel = -.1
    // }
    this.xVel += 1.5; 
  }
  moveJump() { //add jumping logic like canJump, and the height restrictions 
    // this.movePlayer();
    if(this.jumpcount===0){
      this.yVel -=25;
      this.jumpcount+=1
    }else{
      this.jumpcount=0
    }
      
  }

}

export default Player;


