import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/index';
import Colleges from './routes/colleges/college';

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/colleges" component={Colleges} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
