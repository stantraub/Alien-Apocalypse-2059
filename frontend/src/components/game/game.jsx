import React from 'react';
import './game_container';

class Game extends React.Component {
    constructor(props){
        super(props)
    this.handleOnClick = this.handleOnClick.bind(this);    
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
            <script type="application/javascript" src="../vendor/keymaster.js"></script>
            <script src="./main.js" type="application/javascript"></script>
        
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