import React from "react";

export default class ForceUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
    }

    shouldComponentUpdate(){
        return false;
    }

    update(){
        this.forceUpdate();
    }

    render() {
        console.log('%cComponent got rendered','color:purple;font-weight:bold')
        return (
            <div className="content" id="forceUpdate">
                <strong>Misconception about force update?</strong>
                <div>Click on the button and check console to view the results</div>
                <button className="btn btn-primary display-block" onClick={this.update}>Force update</button>
           	</div>
        );
    }
}

// forceUpdate runs the complete component lifecycle 
// skipping the shouldComponentUpdate()