import React from "react";
import {HashRouter, Route} from "react-router-dom";

export default class Router extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
          <Route 
              path="/" 
              render={()=>(
                <div>Initial Route</div>
              )} 
          />
        </HashRouter>
      </div>
    )
  }
}