import React from "react";
import {Link} from "react-router-dom";

export default class MyFriends extends React.Component{
    render(){
        return(
            <div>
			    <div className="container-fluid">
			        <div className="row content">
			            <div className="col-sm-3 sidenav">
			                <h4 className="margin-top-zero">Dashboard</h4>
			                <ul className="nav nav-pills nav-stacked">
			                    <li className="active">
			                        <Link to="/my-friends">People Nearby</Link>
			                    </li>
			                    <li>
			                        <Link to="/profile">Profile</Link>
			                    </li>
			                    <li>
			                        <Link to="/">Log out</Link>
			                    </li>
			                </ul>
			            </div>
			            <div className="col-sm-9"> 
			                <div className="input-group">
			                    <input type="text" className="form-control" placeholder="Search People.." />
			                    <span className="input-group-btn">
							          <button className="btn btn-default" type="button">
							            <span className="glyphicon glyphicon-search"></span>
			                    </button>
			                    </span>
			                </div>
			                <h4 className="margin-top-25"><small>People Nearby</small></h4>
			                <hr/>
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
}