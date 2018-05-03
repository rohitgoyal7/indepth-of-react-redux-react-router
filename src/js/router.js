import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default class Router extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
          <div>
            <Route 
                exact
                path="/" 
                component={Login}
            />
            <Route 
                path="/dashboard" 
                component={Dashboard}
            />
          </div>
        </HashRouter>
      </div>
    )
  }
}
