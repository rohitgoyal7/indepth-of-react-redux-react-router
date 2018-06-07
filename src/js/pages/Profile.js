import React from "react";

export default class Profile extends React.Component{
    render(){
        return(
            <div className="container padding-top-28">
			    <div className="row">
			        <div className="col-xs-12 col-sm-9 col-md-9">
			            <div className="well well-sm">
			                <div className="row">
			                    <div className="col-sm-6 col-md-4">
			                        <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
			                    </div>
			                    <div className="col-sm-6 col-md-8">
			                        <h4>
			                            Hose Kill</h4>
			                        <small><cite title="San Francisco, USA">San Francisco, USA <i className="glyphicon glyphicon-map-marker glyphicon-margin">
			                        </i></cite></small>
			                        <p>
			                            <i className="glyphicon glyphicon-envelope glyphicon-margin"></i>email@example.com
			                            <br />
			                            <i className="glyphicon glyphicon-globe glyphicon-margin"></i><a href="http://www.jquery2dotnet.com">www.jquery2dotnet.com</a>
			                            <br />
			                            <i className="glyphicon glyphicon-gift glyphicon-margin"></i>June 02, 1988</p>
			         
			                       
			                    </div>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
}