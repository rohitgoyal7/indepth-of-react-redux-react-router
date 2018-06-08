import React from "react";
import {Link, Route, Switch, Redirect} from "react-router-dom";
import WhyVirtualDOM from '../components/WhyVirtualDOM';
import WhyNoJquery from '../components/WhyNoJquery';
import WhyNoIndexAsKey from '../components/WhyNoIndexAsKey';
import UsingRefsWisely from '../components/UsingRefsWisely';
import StateVsStateless from '../components/StateVsStateless';
import ControlledVsUncontrolled from '../components/ControlledVsUncontrolled';
import PureComponent from '../components/PureComponent';
import PureComponentPitfall from '../components/PureComponentPitfall';
import Transaction from '../components/Transaction';
// import PropTypes from '../components/PropTypes';
// import Fragment from '../components/Fragment';
// import ForceUpdate from '../components/Transaction';

export default class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			tabs : [{
				id:1,
				name:'Why Virtual DOM ?',
				url: 'whyVirtualDOM'
			},
			{
				id:2,
				name:'Why No Jquery ?',
				url: 'whyNoJquery'
			},
			{
				id:3,
				name:'Why no Index as Key ?',
				url: 'whyNoIndexAsKey'
			},
			{
				id:4,
				name:'Using Refs Wisely',
				url: 'usingRefsWisely'
			},
			{
				id:5,
				name:'State vs Stateless Components',
				url: 'stateVsStateless'
			},
			{
				id:6,
				name:'Controlled vs Uncontrolled Inputs',
				url: 'controlledVsUncontrolled'
			},
			{
				id:7,
				name:'Pure Component',
				url: 'pureComponent'
			},
			{
				id:8,
				name:'Pure Component Pitfall',
				url: 'pureComponentPitfall'
			},
			{
				id:9,
				name:'Transaction',
				url: 'transaction'
			},
			{
				id:10,
				name:'PropTypes',
				url: 'propTypes'
			},
			{
				id:11,
				name:'Fragment',
				url: 'fragment'
			},
			{
				id:12,
				name:'ForceUpdate',
				url: 'forceUpdate'
			}]
		};
	}

	componentDidMount(){
		this.state.tabs.forEach((tab)=>{
			if(this.props.location.pathname.indexOf(tab.url)> -1){
				this.setState((prevState,props)=>{
					return {
						selectedTab: tab.id
					}
				})
			}
		})
	}

	selectTab(id){
		if(this.state.id == id){
			return;
		}
		this.setState((prevState,props)=>{
			return {
				selectedTab : id
			}
		})
	}
    render(){
    	let tabs = this.state.tabs;
    	let match = this.props.match;
        return(
            <div className="reactjs container padding-top-28">
			    <div className="row">
			       <div className="col-xs-12 col-sm-9 col-md-9">
			            <div className="well well-sm">
			               <ul className="nav">
			               	 {
			               	 	tabs.map((tab,index)=>{
			               	 		let classes = "nav-item"
			               	 		if(this.state.selectedTab == tab.id){
			               	 			classes = "nav-item active";
			               	 		}

			               	 		return(
										<li className={classes} key={tab.id} onClick={()=> this.selectTab(tab.id)}>
										    <Link className="nav-link" to={`${match.url}/${tab.url}`}>{tab.name}</Link>
										 </li>
			               	 		)
			               	 	})
			               	 }
							</ul>
							<Switch>
								<Route exact={true} path={`${match.url}/whyVirtualDOM`} component={WhyVirtualDOM}/>
								<Route exact={true} path={`${match.url}/whyNoJquery`} component={WhyNoJquery}/>
								<Route exact={true} path={`${match.url}/whyNoIndexAsKey`} component={WhyNoIndexAsKey}/>
								<Route exact={true} path={`${match.url}/usingRefsWisely`} component={UsingRefsWisely}/>
								<Route exact={true} path={`${match.url}/stateVsStateless`} component={StateVsStateless}/>
								<Route exact={true} path={`${match.url}/controlledVsUncontrolled`} component={ControlledVsUncontrolled}/>
								<Route exact={true} path={`${match.url}/pureComponent`} component={PureComponent}/>
								<Route exact={true} path={`${match.url}/pureComponentPitfall`} component={PureComponentPitfall}/>
								<Route exact={true} path={`${match.url}/transaction`} component={Transaction}/>
								<Redirect exact={true} from={`${match.url}`} to={`${match.url}/whyVirtualDOM`}/>
							</Switch>
							
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
}