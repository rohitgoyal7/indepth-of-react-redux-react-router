import React from "react";

// THIS IS A STATEFUL COMPONENT
/*export default class StateVsStateless extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <strong>I am a Stateful Component</strong>
           	</div>
        );
    }
}*/

// THIS IS A STATELESS COMPONENT

const StateVsStateless = function(props){
    return (
        <div className="content">
            <strong>I am a Stateless Component</strong>
        </div>
    )
}

export default StateVsStateless;