import key from "keymaster";
class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer()
    this.controls = {
    // left: false, right: false, up: false, keyListener:function(action) {
    //   const keyStatus = (action.type == "keydown") ? true : false;
    //   //sets the current keydown action
    //   switch (action.keyCode) {
    //     case 65:// A Left
    //       controls.left = keyStatus
    //       break;
    //     case 87://W Up
    //       controls.up = keyStatus
    //       break;
    //     case 68://D Right
    //       controls.right = keyStatus
    //     // case 32: //SPACE SHOOT
    //     //   controls.shoot = keyStatus
    //   }
    // }
  };

  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }
  
  bindKeyHandlers() {
    
    console.log(this.player)
    // Object.keys(GameView.MOVES).forEach((k) => {
    //   const move = GameView.MOVES[k];
    //   key(k, () => { player.playerAction(move); });
    // });
    key(("a"), () => {this.player.moveLeft(); });
    key("d", () => { this.player.moveRight(); });
    key("w", () => { this.player.moveJump(); });


    key("space", () => { this.player.fireBullet(8); setTimeout(3000); });
  
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}


export default GameView;