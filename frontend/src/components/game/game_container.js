import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout, update} from '../../actions/session_actions';
import Game from './game';
import { updateHighScore } from '../../util/session_api_util';

const mapStateToProps = (state) => {
    
    return {
       user: state.session.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (user, score)=> dispatch(update(user, score)),
        logout: () => dispatch(logout())
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Game));