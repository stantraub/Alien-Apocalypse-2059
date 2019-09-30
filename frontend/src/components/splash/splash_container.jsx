import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
    debugger
    let user = state["session"];
    
    return {
        user: user,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        // login: user => dispatch(login(user)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);