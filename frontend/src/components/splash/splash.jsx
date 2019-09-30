import React from 'react';
import './splash.css';
import '../../css/reset.css';


class Splash extends React.Component {
    constructor(props){
        super(props);
        
        this.state=props.user;
        debugger
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
                
                <div className="login-signup-form">
                    <button onClick={() => this.props.openModal('login')} className="session-button">
                
                        Sign In
            
                    </button>
                    &nbsp;
                    <button onClick={() => this.props.openModal('signup')} className="session-button">
                        
                        Create an account
                
                    </button>
                </div>

            </div>
        )
    }
}

export default Splash;