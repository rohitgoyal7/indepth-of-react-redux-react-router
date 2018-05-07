import React from "react";
import {Link, Route} from "react-router-dom";
import SelectedPerson from '../components/SelectedPerson';


export default class MyFriends extends React.Component{
    render(){
    	let match = this.props.match;
        return(
            <div className="col-sm-9 padding-top-28"> 
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
	            <div className="list-group col-sm-6">
				 	<Link to={`${match.url}/John`}><span className="list-group-item active">John Doe</span></Link>
				 	<Link to={`${match.url}/Mark`}><span className="list-group-item">Mark Ally</span></Link>
				 	<Link to={`${match.url}/Joe`}><span className="list-group-item">Joe Ted</span></Link>
				</div>
				<Route path={`${match.url}/:id(John)`} component={SelectedPerson}/>
	        </div>
        )
    }
}