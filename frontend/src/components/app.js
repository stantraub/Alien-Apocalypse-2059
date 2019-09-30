import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Switch, Route, Redirect  } from 'react-router-dom';

import Modal from './modal/modal';
import SplashContainer from "./splash/splash_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import PlayGameContainer from './game/play_game_container';


const App = () => (
    <div>
        <Modal />
        <Switch>
            <Route exact path="/" component={SplashContainer} />

            {/* <Route exact path="/" component={PlayGameContainer} /> */}

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Redirect to="/" />
        </Switch>
    </div>
);

export default App;