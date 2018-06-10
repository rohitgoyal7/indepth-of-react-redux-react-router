import React from "react";
import GrandChild from './GrandChild';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('%cchild component called...','color:purple;font-weight:bold');
        return (
            <div className="child-component">
                <strong>Child Component</strong>
                <GrandChild/>
           	</div>
        );
    }
}
