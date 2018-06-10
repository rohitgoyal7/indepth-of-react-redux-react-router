import React from "react";
import Child from './Child'

export default class Fragment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content" id="fragment">
                <div id="parent">
                    <strong>Use of Fragments</strong>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>First Column</th>
                                <th>Second Column</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <Child/>
                            </tr>
                        </tbody>
                    </table>
                </div>
           	</div>
        );
    }
}
