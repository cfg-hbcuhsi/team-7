<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./routes/index";
import Colleges from "./routes/colleges/index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/colleges" component={Colleges} exact />
      </Switch>
    </BrowserRouter>
=======
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './routes/index';
import ChatBot from './routes/chatbot/index';
import Careers from './routes/careers/index'
import JobDetails from './routes/jobdetails/index';

function App() {
  return (
      <BrowserRouter>
            <Switch>
              <Route path="/" component={LandingPage} exact />
              <Route path="/example" component={LandingPage} />
              <Route path="/chatbot" component={ChatBot} />
              <Route path="/careers" component={Careers} />
              <Route path="/jobdetails" component={JobDetails}/>
            </Switch>
      </BrowserRouter>
>>>>>>> 0a9dbb1037632ab93ff41b83e0dc3425bded3202
  );
}

export default App;
