import React from "react";
import {Link, Route} from "react-router-dom";
import People from './People';
import Profile from './Profile';

export default class Dashboard extends React.Component{
    render(){
        return(
            <div>
			    <div className="container-fluid">
			        <div className="row content">
			            <div className="col-sm-3 sidenav">
			                <h4 className="margin-top-zero">Dashboard</h4>
			                <ul className="nav nav-pills nav-stacked">
			                    <li className="active">
			                        <Link to="/dashboard/people">People Nearby</Link>
			                    </li>
			                    <li>
			                        <Link to="/dashboard/profile">Profile</Link>
			                    </li>
			                    <li>
			                        <Link to="/">Log out</Link>
			                    </li>
			                </ul>
			            </div>
			            <Route 
			                path="/dashboard/people" 
			                component={People}
			            />
			            <Route 
			                path="/dashboard/profile" 
			                component={Profile}
			            />
			            
			        </div>
			    </div>
			</div>
        )
    }
}