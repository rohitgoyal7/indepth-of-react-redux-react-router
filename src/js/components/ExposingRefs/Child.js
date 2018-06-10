import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="child-component">
                <strong>Child Component</strong>
                <input type="text" className="form-control" placeholder="Some Input" ref={this.props.parentRefs}/>
           	</div>
        );
    }
}
