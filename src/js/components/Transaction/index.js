import React from "react";
import Child from './Child';

export default class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateStateViaChild = this.updateStateViaChild.bind(this);
    }

    updateStateViaChild(){
        this.setState({});
        this.setState({});
    }
    render() {
        console.log('%cIndex component got rendered','color:purple;font-weight:bold')
        return (
            <div className="content" id="transaction">
                <div id="parent">
                    <strong>What exactly a Transaction is?</strong>
                    <div>Doesn't matter how many times we update the state, the components will be rendered once.</div>
                    <div><b>Click on the button and check console to view the results</b></div>
                    <Child updateStateViaChild={this.updateStateViaChild}/>
                </div>
           	</div>
        );
    }
}

// even after setting the state twice
// component is updating only once
// this is what transation is

// this is the reason we should not rely on setState sequence