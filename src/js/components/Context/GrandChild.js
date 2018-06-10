import React from "react";
import PropTypes from 'prop-types';

class GrandChild extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('%cgrand child component called...','color:purple;font-weight:bold');
        return (
            <div className="grand-child-component">
                <strong>Grand Child Component</strong>
                <div>Color passed is {this.context.color}</div>
           	</div>
        );
    }
}

// GrandChild.contextTypes = {
//   color: PropTypes.string
// };

export default GrandChild;

// if this is a PureComponent,
// context would not have worked