import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            highscore: 0,
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2,
            highscore: this.state.highscore
        };
        
        this.props.signup(user).then(()=>{this.props.history.push('/game')}).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="session-modal">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-form">
                        <br />
                        <input 
                            maxlength="12" 
                            className="session-modal-input"
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Enter Username"
                        />
                        <br />
                        <input
                            className="session-modal-input"
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Enter Password"
                        />
                        <br />
                        <input 
                            className="session-modal-input"
                            type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <br />
                        <input type="submit" value={this.props.formType} className="session-modal-submit" />
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);