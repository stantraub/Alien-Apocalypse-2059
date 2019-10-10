import React from 'react';
import './game_container';
import GameFile from "./gamefile";
import GameView from "./game_view";

class Game extends React.Component {
    constructor(props){
        super(props)
    this.handleOnClick = this.handleOnClick.bind(this);    
    }
    componentDidMount(){
        console.log("working")
        const canvasEl = document.getElementById("game-canvas");

        canvasEl.width = GameFile.DIM_X;
        canvasEl.height = GameFile.DIM_Y;

        const ctx = canvasEl.getContext("2d");
        const game = new GameFile();
        window.game = game;
        new GameView(game, ctx).start();
    }
    handleOnClick(e){
        e.preventDefault();
        
        this.props.logout()
    }


    render(){
        let game;
        if(this.props.user){
            game =
            <div>
                <h1>Success</h1>
                <button onClick={this.handleOnClick}>Logout</button>
                <canvas id="game-canvas" style={{height: 600, width: 1000, backgroundColor: 'gray',}}></canvas>
                {/* <script type="application/javascript" src="../vendor/keymaster.js"></script> */}
                {/* <script src="./index.js" type="application/javascript"></script> */}
            
            </div>
        }
        return (
        <div>
            {game}
        </div>
        )

    }

}

export default Game;