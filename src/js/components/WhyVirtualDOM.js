import React from "react";
import {Route, Link} from "react-router-dom";


export default class WhyVirtualDOM extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        
        function updateNode(node,val){
            if(node.innerText != val){
                node.innerText = val;
            }
        }
        const node = document.getElementById('test-node');

        let start = window.performance.now();
        for(let i=0; i<1000; i++){
            updateNode(node,i)
        }
        let end = window.performance.now();
        console.log('%cTotal time taken in UPDATING 1000 nodes: ','color:purple;font-weight:bold',(end-start));



        start = window.performance.now();
        for(let i=0; i<1000; i++){
            node.innerText
        }
        for(let i=0; i<1000; i++){
            node.innerText = i
        }
        end = window.performance.now();
        console.log('%cTotal time taken in READING + WRITING 1000 nodes: ','color:purple;font-weight:bold',(end-start));
    }

    render() {
        return (
            <div id="why-virtual-dom" className="content">
                <strong>From where Virtual DOM came into picture?</strong>
                <div>To view results check console.</div>
                <div id="test-node" className="display-none">This is a test node.</div>
            </div>
        );
    }
}