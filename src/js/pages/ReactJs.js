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
import PropTypes from '../components/PropTypes';
import Fragment from '../components/Fragment';
import ForceUpdate from '../components/ForceUpdate';
import EventBinding from '../components/EventBinding';
import ExposingRefs from '../components/ExposingRefs';
import CompositionVsInheritance from '../components/CompositionVsInheritance';
import ErrorBoundaries from '../components/ErrorBoundaries';
import Context from '../components/Context';
import HigherOrderComponent from '../components/HigherOrderComponent';
import Portal from '../components/Portal';
import Poc from '../components/Poc';

export default class Profile extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			loading: true,
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
			},
			{
				id:13,
				name:'Exposing Refs',
				url: 'exposingRefs'
			},
			{
				id:14,
				name:'Event Binding',
				url: 'eventBinding'
			},
			{
				id:15,
				name:'Compositon vs Inheritance',
				url: 'compositionVsInheritance'
			},
			{
				id:16,
				name:'Error Boundaries',
				url: 'errorBoundaries'
			},
			{
				id:17,
				name:'Portal',
				url: 'portal'
			},
			{
				id:18,
				name:'Context',
				url: 'context'
			},
			{
				id:19,
				name:'Higher Order Components',
				url: 'higherOrderComponent'
			},
			{
				id:20,
				name:'POC',
				url: 'poc'
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
		if(id == 19){
			this.setState((prevState,props)=>{
				return {
					loading : true
				}
			});
			setTimeout(()=>{
				this.setState((prevState,props)=>{
					return {
						loading : false
					}
				});
			},2000)
		}
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
    	let loading = this.state.loading;
    	let HOC = HigherOrderComponent(Fragment)({loading: loading});
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
							<hr/>
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
								<Route exact={true} path={`${match.url}/propTypes`} component={PropTypes}/>
								<Route exact={true} path={`${match.url}/fragment`} component={Fragment}/>
								<Route exact={true} path={`${match.url}/forceUpdate`} component={ForceUpdate}/>
								<Route exact={true} path={`${match.url}/eventBinding`} component={EventBinding}/>
								<Route exact={true} path={`${match.url}/exposingRefs`} component={ExposingRefs}/>
								<Route exact={true} path={`${match.url}/compositionVsInheritance`} component={CompositionVsInheritance}/>
								<Route exact={true} path={`${match.url}/errorBoundaries`} component={ErrorBoundaries}/>
								<Route exact={true} path={`${match.url}/portal`} component={Portal}/>
								<Route exact={true} path={`${match.url}/context`} component={Context}/>
								<Route exact={true} path={`${match.url}/higherOrderComponent`} component={HOC}/>
								<Route exact={true} path={`${match.url}/poc`} render={(props)=>(
											<div id="poc">
												<div><strong>POC's</strong></div>
												<div><b>Check console to see results...</b></div>
												<Poc {...props}/>
											</div>
									)}/>
								
								<Redirect exact={true} from={`${match.url}`} to={`${match.url}/whyVirtualDOM`}/>
							</Switch>
							
			            </div>
			        </div>
			    </div>
			</div>
        )
    }
}