import React from "react";
import {Route, Redirect} from "react-router-dom";

export default class PrivateRoute extends React.Component{
    render(){
    	let props = this.props;
    	let {component: Component, ...rest} = props;
    	return (
    		<Route 
	    		{...rest}
	    		render={({match})=> {
	    			if(window.localStorage && window.localStorage.userName){
	    				return <Component {...props}/>
	    			}
	    			return (
						<Redirect
				          to={{
				            pathname: "/",
				          }}
				        />
				    )
	    		}}
	    	/>
    	)
    }
}