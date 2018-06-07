import React from "react";

export default class WhyNoIndexAsKey extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items: ['item-1','item-2']
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState(){
        this.setState({
            items: ['item-3','item-4']
        })
    }
    render() {
        let items = this.state.items;
        return (
            <div className="content" id="why-no-index-as-key">
                <strong>Why not to use index as key?</strong>
                <ul id="i-am-a-list">
                    {
                        items.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <input type="text"/>
                                    <span>{item}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="btn btn-primary" onClick={this.changeState}>Change State</button>
           	</div>
        );
    }
}
