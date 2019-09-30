

// const context = document.querySelector("canvas").getContext("2d")
// context.canvas.height = 600;
// context.canvas.width = 1000;
// //PLAYER DIMENSIONS
// const player = {
//   height: 50, canJump: true, width: 20, x: 300, y: 0, xVel: 0, yVel: 0
// };
// const ghoul = {
//   height: 50, canJump: true, width: 20, x: 900, y: 0, xVel: 0, yVel: 0
// }




// //DIRECTIONAL KEYS
// const controls = {
//   left: false, right: false, up: false, keyListener:function(action) {
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

// const playerIsLeft = function() {
//   return player.x < ghoul.x ? true :  false
// }
// const playerIsRight = function () {
//   return player.x > ghoul.x ? true : false
// }
// const playerGhoulDistance = function() {
//   return playerIsLeft() ? ghoul.x - player.x : player.x - ghoul.x
// }

// //MOVEMENT AND PHYSICS
// const gameLoop = function() {
//   //PLAYER MOVMENT
  if (controls.up && player.canJump == false) {
    player.yVel -= 30;
    player.canJump = true;
  }
  if (controls.left){
    player.xVel -= 1;
  }
  if (controls.right) {
    player.xVel += 1;
  }
//   // gravity, accelartion, and friction
//   player.yVel += 1.5;
//   player.x += player.xVel;
//   player.y += player.yVel;
//   player.xVel *= .9;
//   player.yVel *= .9;

//   if (player.y > context.canvas.height - 100 - player.height ) {
//     player.canJump = false;
//     player.y = context.canvas.height - 100 - player.height;
//     player.yVel = 0;
//   }
//   if (player.x < -player.width) {
//     player.x = 1000;
//   }else if (player.x > 1000){
//     player.x = -player.width
//   }

//   // GHOUL MOVEMENT
//   if (controls.up && player.canJump == false) {
//     ghoul.yVel -= 30;
//     ghoul.canJump = true;
//   }
  
//   if (playerGhoulDistance() > 20){
//     if (playerIsLeft()) {
//       ghoul.xVel -= 0.5;
//     } else if (playerIsRight()) {
//       ghoul.xVel += 0.5;
//     }
//   } 
  
//   // gravity, accelartion, and friction
//   ghoul.yVel += 1.5;
//   ghoul.x += ghoul.xVel;
//   ghoul.y += ghoul.yVel;
//   ghoul.xVel *= .7;
//   ghoul.yVel *= .7;

//   if (ghoul.y > context.canvas.height - 100 - ghoul.height) {
//     ghoul.canJump = false;
//     ghoul.y = context.canvas.height - 100 - ghoul.height;
//     ghoul.yVel = 0;
//   }

//   if (ghoul.x < -ghoul.width) {
//     ghoul.x = 1000;
//   } else if (ghoul.x > 1000) {
//     ghoul.x = -ghoul.width
//   } 




//   //COLORING 
//   //BACKGROUND
//   context.fillStyle = "blue";
//   context.fillRect(0, 0, 1000, 600 )
//   //PLAYER
//   context.fillStyle = "black";
//   context.beginPath();
//   context.rect(player.x, player.y, player.width, player.height);
//   context.fill();
//   //Ghoul
//   context.fillStyle = "green";
//   context.beginPath();
//   context.rect(ghoul.x, ghoul.y, ghoul.width, ghoul.height);
//   context.fill();
//   //LINE
//   context.strokeStyle = "green";
//   context.lineWidth = 4;
//   context.beginPath();
//   context.moveTo(0, 500);
//   context.lineTo(1000, 500);
//   context.stroke();

//   window.requestAnimationFrame(gameLoop);
// };

// window.addEventListener("keydown", controls.keyListener)
// window.addEventListener("keyup", controls.keyListener);
// window.requestAnimationFrame(gameLoop);