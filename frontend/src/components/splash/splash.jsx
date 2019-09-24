import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Splash extends React.Component {
    render() {
        return(
            <div className="login-signup-form">
                <Link to="/login">
                    Sign In
                </Link>
                &nbsp;
                <Link to="/signup">
                    Create an account
                </Link>
            </div>
        )
    }
}

export default Splash;