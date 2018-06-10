import React from "react";
import Child from './Child';

export default class ExposingRefs extends React.Component {
    constructor(props) {
        super(props);
        this.parentRefs = this.parentRefs.bind(this);
        this.clickMe = this.clickMe.bind(this);
    }

    clickMe(){
        this.refToInput.focus();
    }
    parentRefs(elem){
        this.refToInput = elem;
    }
    render() {
        return (
            <div className="content" id="exposing-refs">
                <div id="parent">
                    <strong>Exposing Child Refs to Parent</strong>
                    <div></div>
                    <button className="btn btn-primary" onClick={this.clickMe}>Click to focus input</button>
                    <Child parentRefs={this.parentRefs} />
                </div>
           	</div>
        );
    }
}

// Refs shouldn't be used extensively
