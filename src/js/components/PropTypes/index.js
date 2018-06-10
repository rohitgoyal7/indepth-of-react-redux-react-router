import React from "react";
import Child from './Child';

export default class PropTypes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content" id="propTypes">
                <div id="parent">
                    <strong >Check Props that are being passed.</strong>
                    <Child name="John Doe" age={25}/>
                </div>
           	</div>
        );
    }
}

