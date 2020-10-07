import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(

  <Router>
    <Switch>
      <Route path="/:siteId">
        <App />
      </Route>
    </Switch>
  </Router>,

  document.getElementById('booking')
);