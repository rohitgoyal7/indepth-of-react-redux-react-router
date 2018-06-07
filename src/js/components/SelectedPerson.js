import React from "react";

export default class SelectedPerson extends React.Component{
	constructor(props){
		super(props);
	}

    render(){
    	let people = this.props.people;
    	let id = this.props.match.params.id;
        return(
            <div className="card img-fluid col-sm-6">
			    <img className="card-img-top" src="./images/user-icon.png" alt="user icon"/>
			    <div className="card-img-overlay">
			    	<h4 className="card-title">I am {people[id].name}</h4>
			     	<p className="card-text">I am a coder.....</p>
			    </div>
			 </div>
        )
    }
}