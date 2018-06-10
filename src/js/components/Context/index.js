import React from "react";
import PropTypes from 'prop-types';
import Child from './Child';

class Context extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            color: 'green'
        }
        this.changeColor = this.changeColor.bind(this);
    }

    getChildContext() {
        console.log('%cGet Child Context Called','color:purple;font-weight:bold');
        return { color: this.state.color}
    }

    changeColor(){
        this.setState({
            color: 'blue'
        })
    }

    render() {
        return (
            <div className="content" id="context">
                <div id="parent">
                    <strong>Using Context</strong>
                    <div>Current State Color is: {this.state.color}</div>
                    <div><b>Click on the button and check console to view the results</b></div>
                    <button className="btn btn-primary" onClick={this.changeColor}>Change State</button>
                    <Child/>
                </div>
            </div>
        );
    }
}

Context.childContextTypes = {
  color: PropTypes.string
};

export default Context;

// experimental api ie it can change anytime
// getChildContext will automatically be called when the state changes
// if its a PureComponent context will not work
// using context, we can avoid passing props through intermediate elements

