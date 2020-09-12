import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/index';

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/example" component={LandingPage} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
