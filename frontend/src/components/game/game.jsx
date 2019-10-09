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
    
    return(
        <div>
            <h1>Success</h1>
            <button onClick={this.handleOnClick}>Logout</button>
        </div>
    )
}

}

export default Game;