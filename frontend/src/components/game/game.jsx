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
                <div className="game-div">
                    
                    <canvas id="game-canvas" style={{ height: "110vh", width: 1600, backgroundColor: 'gray' }}></canvas>
                    <div className="button-wrapper">
                        <button onClick={this.handleOnClick}>Logout</button>
                    </div>
                    {/* <script type="application/javascript" src="../vendor/keymaster.js"></script> */}
                    {/* <script src="./index.js" type="application/javascript"></script> */} 
                </div>
           
            
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