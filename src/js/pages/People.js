import React from "react";

export default class MyFriends extends React.Component{
    render(){
        return(
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
	            <div className="list-group col-sm-6">
				 	<span className="list-group-item active">John Doe</span>
				 	<span className="list-group-item">Mark Ally</span>
					<span className="list-group-item">Joe Ted</span>
				</div>
				<div className="card img-fluid col-sm-6">
				    <img className="card-img-top" src="./images/user-icon.png" alt="user icon"/>
				    <div className="card-img-overlay">
				      <h4 className="card-title">John Doe</h4>
				      <p className="card-text">Some example text some example text. Some example text some example text. Some example text some example text. Some example text some example text.</p>
				    </div>
				  </div>
	        </div>
        )
    }
}