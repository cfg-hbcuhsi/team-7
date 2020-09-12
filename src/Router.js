import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/index';
import ChatBot from './routes/chatbot/index';

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/example" component={LandingPage} />
              <Route path="/chatbot" component={ChatBot} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
