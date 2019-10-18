import React from 'react';
import { connect } from 'react-redux';
import {login,logout} from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions';
// import {login,logout} from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = (state) => {
    return (
     {state:{
            errors: state.errors.session,
            user: state.session.user
     }}
    )
    };

const mapDispatchToProps = (dispatch) => {
    return {
        logout: ()=>dispatch(logout()),
        login: user => dispatch(login(user)),
        processDemo: (demoUser) => dispatch(login(demoUser)),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);