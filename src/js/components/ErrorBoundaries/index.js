// uncomment Error in Child.js

import React from "react";
import Child from './Child';

export default class ErrorBoundaries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            isError: true
        })
        console.log('%creplace with a fallback UI','color:purple;font-weight:bold');
    }

    render() {
        let isError = this.state.isError;
        if(!isError){
            return (
                <div className="content" id="error-boundaries">
                    <div id="parent">
                        <strong>Error Boundaries</strong>
                        <Child/>
                    </div>
                </div>
            )
        }
        
        return (
            <div className="content" id="error-boundaries">
                <div id="parent">
                    <strong>Fallback UI</strong>
                </div>
            </div>
        )
    }
}


// can place a fallback UI
// errors are always caught in the parent


// React doesn’t need error boundaries to recover from errors in event handlers.
// Unlike the render method and lifecycle hooks, the event handlers don’t happen during 
// rendering. So if they throw, React still knows what to display on the screen.

// if you want to catch errors on event use try/catch and set state to fallback UI in catch