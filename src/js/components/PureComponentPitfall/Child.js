import React from "react";

export default class Child extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('%cchild rendered...','color:purple;font-weight:bold')
        return (
            <div className="child-component">
                <strong>I am a pure compoenet</strong>
                <div></div>
                <button className="btn btn-primary" onClick={this.props.changeStateViaChild}>Trigger Props</button>
            </div>
        );
    }
}