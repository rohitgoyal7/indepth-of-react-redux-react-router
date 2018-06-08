import React from "react";
import Child from './Child';

export default class PureComponentPitfall extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            someState:'some initial state'
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState({
            someState: 'changed state'
        })
    }

    // changeStateViaChild(){
    //     console.log('props called')
    // }

    changeStateViaChild = () =>{
        console.log('change state via props...')
        this.changeState();
    }



    render() {
        console.log('%cparent rendered...','color:purple;font-weight:bold')
        return (
            <div className="content" id="pure-component-pitfall">
                <strong>Pitfall while using Pure Component</strong>
                <div id="parent">
                    <div>Parent Component</div>
                    <div><b>Parent State:</b> {this.state.someState}</div>
                    <div><b>Click on the button and check console to view the results</b></div>
                    {/*<Child changeStateViaChild={this.changeStateViaChild}/>*/}
                    <Child changeStateViaChild={()=>this.changeStateViaChild()} />
                    <button className="btn btn-primary" onClick={this.changeState}>Change State</button>
                </div>
                
            </div>
        );
    }
}


// <Child someFunction={()=> this.someFunction()}/>
//<Child someFunction={this.someFunction}/>

// never use bind or arrow function inside render 
// while passing function as props to child component



