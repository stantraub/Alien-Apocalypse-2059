import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session
      
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
      </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));