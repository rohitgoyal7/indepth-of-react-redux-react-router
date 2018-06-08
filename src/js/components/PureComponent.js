import React from "react";

export default class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: ['item-1','item-2']
        }
        this.mutateState = this.mutateState.bind(this);
        this.cloneState = this.cloneState.bind(this);
    }

    mutateState(){
        let items = this.state.items;
        items.push('item-3');
        this.setState({
            items: items
        },function(){
            console.log(this.state.items)
        })
    }

    cloneState(){
        let items = this.state.items;
        let newItems = items.concat('item-3');
        this.setState((prevState,props)=>({
            items: newItems
        }),() => {
            console.log(this.state.items)
        })
    }

    render() {
        console.log('%cComponent got rendered','color:purple;font-weight:bold')
        return (
            <div className="content" id="pure-component">
                <strong>I am a Pure Component</strong>
                <div>Pure components never updates on mutation, check console to view the results</div>
                <button className="btn btn-primary" onClick={this.mutateState}>Mutate State</button>
                <button className="btn btn-primary" onClick={this.cloneState}>Clone State</button>
            </div>
        );
    }
}
// Pure components never updates on mutation
// no matter if its props or state