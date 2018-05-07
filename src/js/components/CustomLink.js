import React from "react";
import {Route, Link} from "react-router-dom";

export default class CustomLink extends React.Component{
    render(){
    	let props = this.props;
    	return(
    		<Route
    			path={props.to}
    			exact={props.isExact}
    			children={({match})=>{
    				return (
    					<li className={match ? "active" : ""}>
    						<Link to={props.to}>{props.label}</Link>
    					</li>
    				)
    			}}
    		/>
    	)
    }
}