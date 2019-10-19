import key from "keymaster";
class GameView {
  constructor(game, ctx,logout, update, user){
    this.ctx = ctx;
    this.game = game;
    this.logout = logout;
    this.update= update;
    this.user = user;
    this.player = this.game.addPlayer();
    this.cooldown = false;
    this.cooldownfunc = this.cooldownfunc.bind(this);
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  cooldownfunc() {
    this.cooldown = false;
  }
  
  bindKeyHandlers() {
    

 
    key(("a"), () => {this.player.moveLeft(); });
    key("d", () => { this.player.moveRight(); });
    key("w", () => { this.player.moveJump(); });


    key("space", () => { 
      if (!this.cooldown) {
        this.player.fireBullet(8);
        this.cooldown = true;
        setTimeout(() => this.cooldownfunc(), 200)
        }
      }
      );
  
  }

  animate(time) {
    this.frame = requestAnimationFrame(this.animate.bind(this));
    const timeDelta = time - this.lastTime;
    // console.log(this.game)
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    if(this.game.gameOver){
   
      cancelAnimationFrame(this.frame);
      this.update(this.user, this.player.score)
      this.logout();
    }

    
  }
}
GameView.DIM_X = 1000;
GameView.DIM_Y = 600;


export default GameView;