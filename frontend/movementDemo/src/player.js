import MovingObject from "./moving_object";
import AlienChaser from "./alien_chaser";
import Bullet from "./bullet";
import Game from "./game";


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
    this.score = 0;
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

    if (this.y > 600 - 100 - this.height) {
      this.canJump = false;
      this.y = 600 - 100 - this.height;
      this.yVel = 0;
    }
    //platform 
    // if (this.y > 400 - this.height && this.x > 400 & this.x < 500 && (this.y > 360) ) {
    //   this.y = 400 - this.height;
    //   this.yVel = 0;
    // }

    if (this.x < 5 + this.width) {
      this.xVel = 0;
      //change for tesing since map wont always be the same shape
    } else if (this.x > 995 - this.width) {
      this.xVel = 0;
    }

  };
  // bulletDist(){
  //   if (this.game.bullets[])
  // }
  fireBullet(vel) {
  
    if (this.xVel < 0){
      vel = -vel;
    }

    const bullet = new Bullet({
      x: this.x,
      y: this.y + 20,
      xVel: vel,
      color: this.color,
      game: this.game
    });
    
    this.game.add(bullet);
  }

  moveLeft(){
    // this.movePlayer();

    // if (this.xVel > 0){
    //   this.xVel = .9
    // }
    this.xVel -= 1.5;
  }
  moveRight() {
    // this.movePlayer();
    // if (this.xVel < 0) {
    //   this.xVel = -.1
    // }
    this.xVel += 1.5; 
  }
  moveJump() { //add jumping logic like canJump, and the height restrictions 
    // this.movePlayer();
    this.yVel -=20;
  }

}

export default Player;




  // moveLeft(){
  //   // if (this.xVel > 0){
  //   //   this.xVel = .9
  //   // }
  //   while (this.xVel > -4) {
  //     this.xVel -= 1;
  //   }

  // }
  // moveRight() {
  //   // if (this.xVel < 0) {
  //   //   this.xVel = -.1
  //   // }
  //   while (this.xVel < 4) {
  //     this.xVel += 1;
  //   }
  // }
  // moveJump() { //add jumping logic like canJump, and the height restrictions 
  //   if (this.y > 600 - 100 - this.height) {
  //     // this.canJump = false;
  //     // this.y = 600 - 100 - this.height;
  //     // this.yVel = 1.5
  //     this.y = this.y
  //   } else {
  //     this.yVel -= 20;
  //   }

  // }
  // move() {

  //   this.yVel += 1.5; //increase after testing
  //   this.x += this.xVel;
  //   this.y += this.yVel;
  //   this.xVel *= .99; //readjust to .9 after testing
  //   this.yVel *= .99;

  //   if (this.y > 600 - 100 - this.height) {
  //     this.canJump = false;
  //     this.y = 600 - 100 - this.height;
  //     this.yVel = 0;
  //   }

  //   if (this.x < 5 + this.width) {
  //     this.xVel = 0;
  //     //change for tesing since map wont always be the same shape
  //   } else if (this.x > 995 - this.width) {
  //     this.xVel = 0;
  //   }

  // };
  // playerAction(num){
  //   switch (num) {
  //     case -1:
  //       this.xVel -= 2;
  //       break;
  //     case 1:
  //       this.xVel += 2;
  //       break;
  //     case 2:
  //       this.yVel -= 4;
  //       break;

  //   }
  // }