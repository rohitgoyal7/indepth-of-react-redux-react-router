import React from "react";
import Child from './Child'

export default class CompositionVsInheritance extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content" id="composition-vs-inheritance">
                <div id="parent">
                    <strong>Composition Explained</strong>
                    <div className="gap"></div>
                    <Child>
                        <div>One</div>
                        <div>Two</div>
                        <div>Three</div>
                    </Child>
                </div>
           	</div>
        );
    }
}

//use case - When components don’t know 
//their children ahead of time.