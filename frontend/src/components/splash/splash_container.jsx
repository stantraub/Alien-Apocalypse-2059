import React from 'react';
import { connect } from 'react-redux';
import {login} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);