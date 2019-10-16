import key from "keymaster";
class GameView {
  constructor(game, ctx,logout){
    this.ctx = ctx;
    this.game = game;
    this.logout = logout;
    this.player = this.game.addPlayer()
    // window.GameOver=false;
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }
  
  bindKeyHandlers() {
    
    console.log(this.player)
 
    key(("a"), () => {this.player.moveLeft(); });
    key("d", () => { this.player.moveRight(); });
    key("w", () => { this.player.moveJump(); });


    key("space", () => { this.player.fireBullet(8); setTimeout(3000); });
  
  }

  animate(time) {
    this.frame = requestAnimationFrame(this.animate.bind(this));
    const timeDelta = time - this.lastTime;
    // console.log(this.game)
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    if(this.game.gameOver){
      // window.history.go(-1)
      cancelAnimationFrame(this.frame);
      this.logout();
    }

    // every call to animate requests causes another call to animate
  }
}
GameView.DIM_X = 1000;
GameView.DIM_Y = 600;


export default GameView;