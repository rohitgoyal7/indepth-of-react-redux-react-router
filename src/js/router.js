import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Login from "./pages/Login";
import MyFriends from "./pages/MyFriends";

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
                path="/my-friends" 
                component={MyFriends}
            />
          </div>
        </HashRouter>
      </div>
    )
  }
}
