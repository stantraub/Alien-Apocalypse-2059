import React from 'react';
import { connect } from 'react-redux';
import {fetchHighscores} from '../../actions/session_actions';
import Highscore from "./highscore";

const msp = (state) => {
  
    return ({
        scores: state.session.scores || []
    })
}

const mdp = (dispatch) => {
    return {
        fetchHighscores: ()=> dispatch(fetchHighscores())
    }
}

export default connect(msp, mdp)(Highscore);