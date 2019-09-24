
const context = document.querySelector("canvas").getContext("2d")
context.canvas.height = 600;
context.canvas.width = 1000;
//PLAYER DIMENSIONS
const playerBox = {
  height: 50, canJump: true, width: 20, x: 300, y: 0, xVel: 0, yVel: 0
};
const ghoul = {
  height: 40, canJump: true, width: 150, x: 700, y: 0, xVel: 0, yVel: 0
}
const bullet = {
  
}

//DIRECTIONAL KEYS
const controls = {
  left: false, right: false, up: false, keyListener:function(action) {
    const keyStatus = (action.type == "keydown") ? true : false;
    //sets the current keydown action
    switch (action.keyCode) {
      case 65:// A Left
        controls.left = keyStatus
        break;
      case 87://W Up
        controls.up = keyStatus
        break;
      case 68://D Right
        controls.right = keyStatus
      // case 32: //SPACE SHOOT
      //   controls.shoot = keyStatus
    }
  }
};

// const isLeft = function() {

// }

//MOVEMENT AND PHYSICS
const gameLoop = function() {
  //PLAYER MOVMENT
  if (controls.up && playerBox.canJump == false) {
    playerBox.yVel -= 30;
    playerBox.canJump = true;
  }
  if (controls.left){
    playerBox.xVel -= 1;
  }
  if (controls.right) {
    playerBox.xVel += 1;
  }
  // gravity, accelartion, and friction
  playerBox.yVel += 1.5;
  playerBox.x += playerBox.xVel;
  playerBox.y += playerBox.yVel;
  playerBox.xVel *= .9;
  playerBox.yVel *= .9;

  if (playerBox.y > context.canvas.height - 100 - playerBox.height ) {
    playerBox.canJump = false;
    playerBox.y = context.canvas.height - 100 - playerBox.height;
    playerBox.yVel = 0;
  }
  if (playerBox.x < -playerBox.width) {
    playerBox.x = 1000;
  }else if (playerBox.x > 1000){
    playerBox.x = -playerBox.width
  }
  // GHOUL MOVEMENT
  if (controls.up && playerBox.canJump == false) {
    ghoul.yVel -= 30;
    ghoul.canJump = true;
  }
  if (controls.left) {
    ghoul.xVel -= 1;
  }
  if (controls.right) {
    ghoul.xVel += 1;
  }
  // gravity, accelartion, and friction
  ghoul.yVel += 1.5;
  ghoul.x += ghoul.xVel;
  ghoul.y += ghoul.yVel;
  ghoul.xVel *= .9;
  ghoul.yVel *= .9;

  if (ghoul.y > context.canvas.height - 100 - ghoul.height) {
    ghoul.canJump = false;
    ghoul.y = context.canvas.height - 100 - ghoul.height;
    ghoul.yVel = 0;
  }
  if (ghoul.x < -ghoul.width) {
    ghoul.x = 1000;
  } else if (ghoul.x > 1000) {
    ghoul.x = -ghoul.width
  } 




  //COLORING 
  //BACKGROUND
  context.fillStyle = "blue";
  context.fillRect(0, 0, 1000, 600 )
  //PLAYER
  context.fillStyle = "black";
  context.beginPath();
  context.rect(playerBox.x, playerBox.y, playerBox.width, playerBox.height);
  context.fill();
  //Ghoul
  context.fillStyle = "black";
  context.beginPath();
  context.rect(ghoul.x, ghoul.y, ghoul.width, ghoul.height);
  context.fill();
  //LINE
  context.strokeStyle = "green";
  context.lineWidth = 4;
  context.beginPath();
  context.moveTo(0, 500);
  context.lineTo(1000, 500);
  context.stroke();

  window.requestAnimationFrame(gameLoop);
};

window.addEventListener("keydown", controls.keyListener)
window.addEventListener("keyup", controls.keyListener);
window.requestAnimationFrame(gameLoop);