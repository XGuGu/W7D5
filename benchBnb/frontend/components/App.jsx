import React from 'react';
import GreetingContainer from './greeting/greeting_container';


const App = () => (
  <div>
    <h1>Bench BnB</h1>
    <GreetingContainer />
    <Switch>
      <Route path="/login" component={LogInFormContainer} />
      <Route path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
