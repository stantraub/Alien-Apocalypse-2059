import Player from "./player";

class ImmoveableObject {
    constructor(options){

        this.height = 30;
        this.width = 50;
        this.x = 200;
        this.y = 400;
        this.color = 'red';
        this.game = options.game;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
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

      checkYAbove(otherObject){
        if(otherObject.y>this.y-otherObject.height){return true}
        return false
      }

      checkYBelow(otherObject){
        if(otherObject.y<this.y-this.height){
          return true;
        }
        return false;
      }

      checkX(otherObject){
          if(otherObject.x+otherObject.width >=this.x && otherObject.x<=this.x+this.width+otherObject.width){return true}
          return false;
      }

      collideWith(otherObject) {
        if (otherObject instanceof Player) {
         if(this.checkYAbove(otherObject) && this.checkX(otherObject))
         {   
             otherObject.y=this.y-otherObject.height;
             otherObject.yVel=0;
         }
         else if(this.checkYBelow(otherObject) && this.checkX(otherObject)){
           otherObject.y = this.y+this.height;
          otherObject.yVel=0;
          console.log(otherObject.yVel);
         }
        } 
        return false;
    }

}

export default ImmoveableObject;