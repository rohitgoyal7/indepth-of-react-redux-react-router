import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="child-component">
                <strong>Child Component</strong>
                {this.props.children}
           	</div>
        );
    }
}

// this.props.children is an array
