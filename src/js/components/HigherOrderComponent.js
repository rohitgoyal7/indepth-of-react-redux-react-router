import React from "react";

const HigherOrderComponent = (PassedComponent) => (refs)=>(
    class extends React.Component {
    render() {
        return (
            <div className="content" id="hoc">
            <strong>Higher Order Component</strong>
                {
                    (refs.loading)
                      ? <div>Component is loading...</div>
                      : <PassedComponent {...this.props}/>
                }
            </div>
        )
    }
})

export default HigherOrderComponent;
