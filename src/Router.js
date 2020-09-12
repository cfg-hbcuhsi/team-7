import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/index';
import ChatBot from './routes/chatbot/index';
import Careers from './routes/careers/index'
import JobDetails from './routes/careers/id';

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/example" component={LandingPage} />
              <Route path="/chatbot" component={ChatBot} />
              <Route path="/careers/:id" component={JobDetails}/>
              <Route path="/careers" component={Careers} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
