import React from 'react';
import { connect } from 'react-redux';
import {fetchHighscores} from '../../actions/session_actions';
import Highscore from "./highscore";

const msp = (state) => {
    
}

const mdp = (dispatch) => {
    return {
        fetchHighscores: (scores)=> dispatch(fetchHighscores(scores))
    }
    
}

export default connect(msp, mdp)(Highscore);