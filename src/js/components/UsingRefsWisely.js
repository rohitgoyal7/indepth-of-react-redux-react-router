import React from "react";

// Using refs in class based component
/*export default class UsingRefsWisely extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(this.inputBox)
    }
    render() {
        return (
            <div className="content">
                <strong>Using Refs Wisely</strong>
                <input type="text" ref={(elem)=>{this.inputBox= elem}}/>
           	</div>
        );
    }
}*/


// Using refs in functional component
const UsingRefsWisely = (props) =>{
    let inputBox;
    let logRefs = function(){
        console.log(inputBox);
    }
    return(
        <div className="content" id="using-refs-wisely">
            <strong>Using Refs Wisely</strong>
            <div></div>
            <input type="text" className="form-control" defaultValue="Some Value" ref={(elem)=>{inputBox= elem}}/>
            <div></div>
            <button className="btn btn-primary" onClick={logRefs} >Log Refs</button>
        </div>
    )
}

export default UsingRefsWisely;




// ref="name" and accessing via this.refs.name is deprecated

// Refs should be used excessively since as per react everything must be managed from state
// and with refs, we might end up with writing jquery

// use cases - handeling focus, animations

// refs better than id ---- if we have 2 elements with same id and we want to change the color
// color will get applied only to the first element, but with refs it can be solved

// DONT INLINE REFS CALLBACK, SINCE IT PRODUCES PERFORMANCE HIT BY CREATING NEW FUNCTION ON
// EVERY RE-RENDER

