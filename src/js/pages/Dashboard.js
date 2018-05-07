import React from "react";
import {Link, Route, withRouter, Prompt} from "react-router-dom";
import People from './People';
import Profile from './Profile';
import CustomLink from '../components/CustomLink';

class Dashboard extends React.Component{
	constructor(){
		super();
		this.state = {
			isPrompt : false
		}
	}
	togglePromptFlag(){
		let flag = this.state.isPrompt;
		this.setState({
			isPrompt: !flag
		})
	}
    render(){
    	let match = this.props.match || {};
    	let isPrompt = this.state.isPrompt;
        return(
            <div>
			    <div className="container-fluid">
			        <div className="row content">
			            <div className="col-sm-3 sidenav">
			                <h4 className="margin-top-zero">Dashboard</h4>
			                <ul className="nav nav-pills nav-stacked">
			                	<CustomLink to={`${match.url}/people`} label="People Nearby"/>
			                	<CustomLink to={`${match.url}/profile`} label="Profile"/>
			                	<CustomLink to="/" isExact={true} label="Log out"/>
			                	<li>
			                		<div className="checkbox">
								      <label><input type="checkbox" checked={isPrompt} onChange={()=> this.togglePromptFlag()}/>Enable Prompt</label>
								    </div>
			                	</li>
			                </ul>

			            </div>
			            <Route 
			                path={`${match.url}/people`}
			                component={People}
			            />
			            <Route 
			                path={`${match.url}/profile`}
			                component={Profile}
			            />
			            
			        </div>
			    </div>
			    <Prompt
			    	when={isPrompt}
			    	 message={location =>
			            `Are you sure you want to go to log out and go to ${location.pathname}`
			          }
			    />
			</div>
        )
    }
}

export default withRouter(Dashboard);