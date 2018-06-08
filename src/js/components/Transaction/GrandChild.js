import React from "react";

export default class GrandChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.setState({});
        this.setState({});
    }
    render() {
        console.log('%cGrand Child Component got rendered','color:blue;font-weight:bold')
        return (
            <div className="grand-child-component">
                <strong>Grand Child Component</strong>
                <div>
                    <button className="btn btn-primary display-block" onClick={this.updateState}>Change state</button>
                </div>
           	</div>
        );
    }
}