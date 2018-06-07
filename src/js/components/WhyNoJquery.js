import React from "react";

export default class WhyNoJquery extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            items:['item-1','item-2']
        };
        this.updateItems = this.updateItems.bind(this);
        this.addItemUsingJquery = this.addItemUsingJquery.bind(this);
    }

    updateItems(){
        this.setState({
            items:['item-3','item-4']
        })
    }

    addItemUsingJquery(){
        $('#i-am-a-list').append('<li>I am added via JQuery</li>')
    }

    render() {
        let items = this.state.items;
        return (
            <div id="why-no-jquery" className="content">
                <strong>Why not to use JQuery with ReactJS?</strong>
                <ul id="i-am-a-list">
                    {
                        items.map((item,index)=>{
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button className="btn btn-primary" onClick={this.addItemUsingJquery}>Add Item Using JQuery</button>
                <button className="btn btn-primary" onClick={this.updateItems}>Update Items</button>
           	</div>
        );
    }
}