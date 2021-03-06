import React from 'react';
import { withRouter } from 'react-router-dom';
// import Modal from '../modal/modal';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      highScore: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
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
      password: this.state.password
    };

    this.props.login(user).then(()=> this.props.history.push('/game')).then(this.props.closeModal)
  }

  renderErrors() {
    return(
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="session-modal">
            <br/>
              <input
                maxlength="12" 
                className="session-modal-input"
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Enter Username"
              />
            <br/>
              <input 
                className="session-modal-input"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Enter Password"
              />
            <br/>
              <input 
                type="submit" 
                value={this.props.formType}
                className="session-modal-submit"
              />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);