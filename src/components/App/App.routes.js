import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { Home, Info, Team, Questions, Contact, Chat } from '../Pages';
import { Error404 } from '../Pages/Error';

export default function Routes() {
  return (
    <div className="Routes">
        <Router>
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Home} exact path="/home" />

            <Route component={Questions} exact path="/questions" />
            <Route component={Contact} exact path="/contact" />
              
            <Route component={Info} exact path="/info" />
            <Route component={Team} exact path="/team" />

            <Route component={Chat} exact path="/chat" />

            <Route component={Error404} exact path='/404'/>
            <Redirect to="/404" />
          </Switch>
        </Router>
    </div>
  );
}
