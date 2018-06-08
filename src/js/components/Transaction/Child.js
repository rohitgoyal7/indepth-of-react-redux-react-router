import React from "react";
import GrandChild from './GrandChild';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateState = this.updateState.bind(this);
    }

    updateState(){
        this.setState({});
        this.setState({});
        this.props.updateStateViaChild();
    }

    render() {
        console.log('%cChild Component got rendered','color:green;font-weight:bold')
        return (
            <div className="child-component">
                <strong>Child Component</strong>
                <div>
                    <button className="btn btn-primary display-block" onClick={this.updateState}>Change state and props</button>
                </div>
                <GrandChild/>
           	</div>
        );
    }
}