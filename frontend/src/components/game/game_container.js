import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout, fetchHighScore} from '../../actions/session_actions';
import Game from './game';

const mapStateToProps = (state) => {
    
    return {
       user: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHighScore: (user)=> dispatch(fetchHighScore(user)),
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Game));