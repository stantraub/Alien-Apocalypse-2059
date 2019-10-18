import React from 'react';
import './splash.css';
import '../../css/reset.css';
import HighscoreContainer from '../highscores/highscore_container';

class Splash extends React.Component {
    constructor(props){
        super(props)
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = Object.assign({}, { username: 'test1234', password: '123456' });
        this.props.processDemo(demoUser)
            .then((res) => {
              
                this.props.history.push(`/game`);
            }
            )
    }



    render() {
        
        return(
            <div className="main-div">
                <img className="background" src="https://i.pinimg.com/originals/ef/a9/39/efa9396fe51653bc074f75d2252692d0.gif"/>
                <div className="title">
                    <div className="title-text">
                    Alien Apocalypse: 2059
                    </div>
                </div>
                <div className="highscore-top-div">
                    Top 5 Scores
                </div>
                <div className="highscore-div">
                    <HighscoreContainer />
                </div>
                <div className="login-signup-form">
                    <button onClick={() => this.props.openModal('login')} className="session-button">
                
                        Sign In
            
                    </button>
                    &nbsp;
                    <button onClick={() => this.props.openModal('signup')} className="session-button">
                        
                        Create account
                
                    </button>
                    <button onClick={this.handleDemo} className="session-button-demo">
                        Demo Login
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Splash;