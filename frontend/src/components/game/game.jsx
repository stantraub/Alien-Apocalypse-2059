import React from 'react';
import './game_container';
import GameFile from "./gamefile";
import GameView from "./game_view";

class Game extends React.Component {
    constructor(props){
        super(props)
    this.handleOnClick = this.handleOnClick.bind(this);    
    

   console.log(this.props.user)
    }

    componentDidMount(){
        
        const canvasEl = document.getElementById("game-canvas");

        canvasEl.width = GameFile.DIM_X;
        canvasEl.height = GameFile.DIM_Y;

        const ctx = canvasEl.getContext("2d");
        const game = new GameFile();
        window.game = game;
        console.log(window.game)
    const gameView=new GameView(game, ctx, this.props.logout, this.props.update, this.props.user)
    gameView.start();
    }

    handleOnClick(e){
        e.preventDefault();
        
        this.props.logout()
    }

    // componentWillUnmount(){
    //     console.log('yes')
    //     this.props.update(this.props.user, window.game.players[0].score)
    // }

    render(){
       
        let game;
        if(this.props.user){
            game =
            <div>
                <div className="game-div">
                    
                    <canvas id="game-canvas" style={{ height: "110vh", width: 1600, backgroundColor: 'gray' }}></canvas>
                    <div className="button-wrapper">
                        <button onClick={this.handleOnClick}>Logout</button>
                    </div>
                   
                </div>
                
            
            </div>;
        }
       
        return (
        <div>
            {game}
        </div>
        )

    }

}

export default Game;