import React from "react";
import {Link, Route, NavLink, matchPath} from "react-router-dom";
import SelectedPerson from '../components/SelectedPerson';



export default class MyFriends extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			userInput: '',
			people: [
				{
					id:0,
					name: 'John Doe'
				},
				{
					id:1,
					name: 'Mark Ally'
				},
				{
					id:2,
					name: 'Bill Ted'
				},
				{
					id:3,
					name: 'Don Jour'
				}
			]
		}
	}

	changeUserInput(e){
		let input = e.target.value;
		this.setState((prevState, props) => {
			return {
				userInput : input
			}
		})
	}

    render(){
    	let match = this.props.match;
    	let people = this.state.people;
    	let userInput = this.state.userInput;
    	const match1 = matchPath('/users/123', {
		  path: '/users/:id',
		  exact: true,
		  strict: false
		})
        return(
            <div className="col-sm-9 padding-top-28"> 
	            <div className="input-group">
	                <input type="text" className="form-control" placeholder="Search People.." 
	                		value={this.userInput} onChange={(e)=>this.changeUserInput(e)}/>

	                <span className="input-group-btn">
				          <button className="btn btn-default" type="button">
				           <span className="glyphicon glyphicon-search"></span>
	                </button>
	                </span>
	            </div>
	            <h4 className="margin-top-25"><small>People Nearby</small></h4>
	            <hr/>
	            <div className="list-group col-sm-6">
				 	{/*<NavLink to={`${match.url}/1`} activeClassName="activeuser"><span className="list-group-item">John Doe</span></NavLink>
				 					 	<NavLink to={`${match.url}/2`} activeClassName="activeuser"><span className="list-group-item">Mark Ally</span></NavLink>
				 					 	<NavLink to={`${match.url}/3`} activeClassName="activeuser"><span className="list-group-item">Joe Ted</span></NavLink>
				 					 	<NavLink to={`${match.url}/4`} activeClassName="activeuser"><span className="list-group-item">Don Tedd</span></NavLink>*/}
					{
						people.map((person) => {
							if(person.name.toLowerCase().includes(userInput)){
								return (
									<NavLink to={`${match.url}/${person.id}`} activeClassName="activeuser" key={person.id}>
										<span className="list-group-item">{person.name}</span>
									</NavLink>
								)
							}
							return ''
						})
					}
				</div>
				<Route path={`${match.url}/:id(0|1|2)`} render={(ref) => <SelectedPerson people={people} {...ref}/>}/>
	        </div>
        )
    }
}

