import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import {Route,Redirect,Link} from 'react-router-dom';
import { Provider } from 'react-redux';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
