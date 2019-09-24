import React from 'react';
import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // login: user => dispatch(login(user))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);