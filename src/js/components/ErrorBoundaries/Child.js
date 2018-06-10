import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // throw new Error('Injected Error');
    }
    render() {
        return (
            <div className="child-component">
                <strong>I am a child Component</strong>
            </div>
        );
    }
}
