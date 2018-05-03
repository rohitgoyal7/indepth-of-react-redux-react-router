import React from "react";

export default class Profile extends React.Component{
    render(){
        return(
            <div className="container">
			    <div className="row">
			        <div className="col-xs-12 col-sm-6 col-md-6">
			            <div className="well well-sm">
			                <div className="row">
			                    <div className="col-sm-6 col-md-4">
			                        <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
			                    </div>
			                    <div className="col-sm-6 col-md-8">
			                        <h4>
			                            Bhaumik Patel</h4>
			                        <small><cite title="San Francisco, USA">San Francisco, USA <i className="glyphicon glyphicon-map-marker glyphicon-margin">
			                        </i></cite></small>
			                        <p>
			                            <i className="glyphicon glyphicon-envelope glyphicon-margin"></i>email@example.com
			                            <br />
			                            <i className="glyphicon glyphicon-globe glyphicon-margin"></i><a href="http://www.jquery2dotnet.com">www.jquery2dotnet.com</a>
			                            <br />
			                            <i className="glyphicon glyphicon-gift glyphicon-margin"></i>June 02, 1988</p>
			         
			                        <div className="btn-group">
			                            <button type="button" className="btn btn-primary">
			                                Social</button>
			                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
			                                <span className="caret"></span><span className="sr-only">Social</span>
			                            </button>
			                            <ul className="dropdown-menu" role="menu">
			                                <li>Twitter</li>
			                                <li>Google</li>
			                                <li>Facebook</li>
			                                <li className="divider"></li>
			                                <li>Github</li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
}