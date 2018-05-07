import React from "react";
import {Link} from "react-router-dom";


export default class Login extends React.Component{
    constructor(){
        super();
    }
    navigate(pageName){
        let userName = this.refs.userName.value;
        let password = this.refs.password.value;
        if(userName && password){
            window.localStorage.userName = userName;
            window.localStorage.password = password;
            this.props.history.push(pageName);
        }
    }
    render(){
        return(
            <div className="container">    
                <div id="loginbox" className="mainbox col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">   
                    <div className="row">                
                        <div className="iconmelon">
                          <img src="./images/user-icon.png" alt="user icon"/>
                        </div>
                    </div> 
                    <div className="panel panel-default" >
                        <div className="panel-heading">
                            <div className="panel-title text-center">Login Form</div>
                        </div>     
                        <div className="panel-body login-form" >
                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                <input id="user" type="text" className="form-control" name="user" placeholder="User Name" ref="userName"/>                                        
                            </div>

                            <div className="input-group">
                                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                <input id="password" type="password" className="form-control" name="password" placeholder="Password" ref="password"/>
                            </div>                                                                  

                            <div className="form-group">
                                <div className="col-sm-12 controls" onClick={() => this.navigate('/dashboard/people')}>
                                    <button className="btn btn-primary pull-right">
                                        <i className="glyphicon glyphicon-log-in"></i> Log in
                                    </button>
                                </div>
                            </div>
                        </div>                     
                    </div>  
                </div>
            </div>
        )
    }
}