import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./routes/index";
import Careers from "./routes/careers/index";
import Colleges from "./routes/colleges/index";
import CollegeDetails from "./routes/colleges/college";
import JobDetails from "./routes/careers/id";
import Scholarships from "./routes/scholarships/index";
import ScholarshipDetails from "./routes/scholarships/id";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/example" component={LandingPage} />
        <Route path="/careers/:id" component={JobDetails} />
        <Route path="/careers" component={Careers} />
        <Route path="/colleges/:id" component={CollegeDetails} />
        <Route path="/colleges" component={Colleges} />
        <Route path="/scholarships/:id" component={ScholarshipDetails} />
        <Route path="/scholarships" component={Scholarships} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
