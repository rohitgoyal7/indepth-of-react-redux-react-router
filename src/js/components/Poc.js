import React from "react";


/********************************************************************************************************************/

// STATELESS COMPONENT ES6
/*const Poc = () =>{
	return <div>hi</div>
}*/

/********************************************************************************************************************/

// STATELESS COMPONENT ES5
/*function Poc(){
	return <div>hello</div>
}*/

/********************************************************************************************************************/

// FRAGMENTS ALTERNAIVE -  return array, but its a bad syntax
/*const Poc = () =>{
	return (
		[1,2,3].map((item)=>{
			return <div key={item}>{item}</div>
		})
	)
}*/

/********************************************************************************************************************/

// LIFE CYCLE HOOKS
/*
	- componentWillMount is the only hook which gets executed while doing SSR
	- never call setState in render
	- Lifecycle --- constructor, componentWillMount, render, componentDidMount
	- component re-renders on state change, prop change, forceUpdate
*/

/********************************************************************************************************************/


// PURE COMPONENT - render gets called if state points to new ref
class Poc extends React.PureComponent{
	constructor(props){
		super(props)
		this.state ={
			num:1,
			arr:[]
		}
	}
	handleClick(){
		let arr = this.state.arr;
		arr.push(1);
		/*this.setState(()=>({
			arr: arr
		}))*/
		this.setState((prevState)=>({
			num: prevState.num+1
		}))
	}
	render(){
		console.log('component rendered....')
		return(
			<div>
				<button className="btn btn-primary" onClick={()=>this.handleClick()}>Change State</button>
			</div>
		)
		
	}
}
/*
	- react compoent does blind rendering, does not matter if the value has changed or not
	- render gets called if state points to new ref, eg everytime when a number or string is changed or 
	  when an array is cloned and not mutated
	- render does get called if same string or number is assigned
	- pure component functionaity can be mocked in shouldComponentUpdate
*/

/********************************************************************************************************************/

// SETSTATE PITFALL

/*
	- this.setState({val: !this.state.val})
*/

export default Poc;
