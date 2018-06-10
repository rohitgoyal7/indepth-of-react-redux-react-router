import React from "react";

export default class EventBinding extends React.Component {
    constructor(props) {
        super(props);
        // this.appraoch1 = this.appraoch1.bind(this);
    }

    appraoch1(param1,param2,event){
        console.log(param1);
        console.log(param2);
        console.log(event.target);
    }
    approach2(param1,param2,event){
        console.log(param1);
        console.log(param2);
        console.log(event.target);
    }

    /*approach2 = ()=>{
        console.log(param1);
        console.log(param2);
        console.log(event.target);
    }*/
    
    render() {
        return (
            <div className="content" id="event-binding">
                <strong>Event Binding</strong>
                <div></div>
                <button className="btn btn-primary" onClick={this.appraoch1.bind(this,'a','b')}>Approach-1</button>
                <button className="btn btn-primary" onClick={(e)=>{this.approach2('a','b',e)}}>Approach-2</button>
           	</div>
        );
    }
}
