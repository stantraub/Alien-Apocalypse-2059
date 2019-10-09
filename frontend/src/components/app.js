import React from 'react';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import { Switch, Route, Redirect  } from 'react-router-dom';

import Modal from './modal/modal';
import SplashContainer from "./splash/splash_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import GameContainer from './game/game_container';


const App = () => (
    <div>
        <Modal />
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/game" component={GameContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>
    </div>
);

export default App;