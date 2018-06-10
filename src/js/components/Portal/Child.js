// Uncomment line 11,12 and componentDidMount()
// to see the results in a new window

import React from "react";
import ReactDOM from "react-dom";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.containerEl = document.getElementById('portalContainer');
     //    this.containerEl = document.createElement('div'); // STEP 1: create an empty div
    	// this.externalWindow = null;
    }

    /*componentDidMount() {
	    // STEP 3: open a new browser window and store a reference to it
	    this.externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

	    // STEP 4: append the container <div> (that has props.children appended to it) to the body of the new window
	    this.externalWindow.document.body.appendChild(this.containerEl);
	    
	    this.externalWindow.document.title = 'A React portal window';
	    this.copyStyles(document, this.externalWindow.document);
	    
	    // update the state in the parent component if the user closes the 
	    // new window
	    this.externalWindow.addEventListener('beforeunload', () => {
	      this.props.closeWindowPortal();
	    });
	}*/

	copyStyles(sourceDoc, targetDoc) {
		Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
		    if (styleSheet.cssRules) { // for <style> elements
		    	const newStyleEl = sourceDoc.createElement('style');
				Array.from(styleSheet.cssRules).forEach(cssRule => {
			        // write the text of each rule into the body of the style element
			        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
		    	});
		    targetDoc.head.appendChild(newStyleEl);
		    }else if (styleSheet.href) { // for <link> elements loading CSS from a URL
			    const newLinkEl = sourceDoc.createElement('link');
			    newLinkEl.rel = 'stylesheet';
			    newLinkEl.href = styleSheet.href;
			    targetDoc.head.appendChild(newLinkEl);
		    }
		 });
	}

	handleSelfClick(){
		console.log('self clicked....')
	}

    render() {
        return ReactDOM.createPortal(
                <div id="i-am-a-portal" onClick={()=>this.handleSelfClick()}>
                	I am a portal and the <strong>  Name: {this.props.name} </strong>  is coming from parent component.
                </div>,
            	this.containerEl,
          );
    }
}
