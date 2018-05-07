import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

export default class Router extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
          <div>
            <Switch>
              <Route 
                  exact
                  path="/" 
                  component={Login}
              />
              <Redirect exact from="/dashboard" to="/dashboard/people" />
              <PrivateRoute 
                  path="/dashboard" 
                  component={Dashboard}
              />
              <Redirect from="/login" to="/" />
              <Route 
                  render={()=> <div>Sorry, not page found for this Route!!!</div>}
              />
            </Switch>
          </div>
        </HashRouter>
      </div>
    )
  }
}
