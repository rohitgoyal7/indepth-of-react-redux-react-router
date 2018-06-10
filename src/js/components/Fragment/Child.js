import React from "react";

export default class Child extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <td>One</td>
                <td>Two</td>
            </React.Fragment>
        );
    }
}
