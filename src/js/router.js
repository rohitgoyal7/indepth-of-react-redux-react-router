import React from "react";
import {HashRouter, Route, Switch, Redirect, BrowserRouter, StaticRouter} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

export default class Router extends React.Component{
  render(){
    return(
      <div>
        <HashRouter basename="/my-app">
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
            <ScrollToTop/>
          </div>
        </HashRouter>
      </div>
    )
  }
}
