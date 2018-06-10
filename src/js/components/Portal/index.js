//uncomment portalContainer in index.html

import React from "react";
import Child from './Child';

export default class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Some Name"
        }
    }
    handleClick(){
        console.log('%cclicked.... - event bubbling from react behaviour','color:purple;font-weight:bold')
        // this.setState(()=>{
        //     return{
        //         name: "Some Other Name"
        //     }
        // })
    }

    render() {
        return (
            <div className="content" id="portal">
                <div className="parent "onClick={()=> this.handleClick()}>
                    <strong>Use of Portal</strong>
                    <div></div>
                    <div>Click any where on Portal and check console to see the results</div>
                    <Child name={this.name}/>
                </div>
           	</div>
        );
    }
}

// basically portals are used to generate a
// modal with the same component state

// can also be used in case of conflicting z-index

// Even though a portal can be anywhere in the DOM tree,
// it behaves like a normal React child in every other way
// event bubbling will work

// https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202