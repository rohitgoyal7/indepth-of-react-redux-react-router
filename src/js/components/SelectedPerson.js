import React from "react";

export default class SelectedPerson extends React.Component{
    render(){
    	let match = this.props.match;
        return(
            <div className="card img-fluid col-sm-6">
			    <img className="card-img-top" src="./images/user-icon.png" alt="user icon"/>
			    <div className="card-img-overlay">
			    	<h4 className="card-title">John Doe</h4>
			     	<p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
			    </div>
			 </div>
        )
    }
}