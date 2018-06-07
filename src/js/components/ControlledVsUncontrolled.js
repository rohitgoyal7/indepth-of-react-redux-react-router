import React from "react";

export default class ControlledVsUncontrolled extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue : 'Controlled Input'
        }
    }

    changeInput(e){
        console.log('method called...')
        let value = e.target.value
        this.setState((prevState,props) => ({
            inputValue: value
        }))
    }
    render() {
        return (
            <div className="content">
                <div>
                    <div><strong>Controlled Input</strong></div>
                    <input type="text" className="form-control" defaultValue="Uncontrolled Input"/>
                </div>
                <hr/>
                <div>
                    <div><strong>Uncontrolled Input</strong></div>
                    <input type="text" className="form-control" value={this.state.inputValue} onChange={(e) => this.changeInput(e)}/>
                </div>
           	</div>
        );
    }
}
