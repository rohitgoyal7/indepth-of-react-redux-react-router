// try uncommenting the line 24 

import React from "react";
import PropTypes from 'prop-types';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="child-component">
                <strong>Child Component</strong>
                <div>Name passed is {this.props.name}</div>
                <div>Age passed is {this.props.age}</div>
            </div>
        );
    }
}

Child.propTypes = {
    name: PropTypes.string,
    age:  PropTypes.number
    //email: PropTypes.string.isRequired
}


export default Child;
