import React, {Component} from 'react';
import ReactDOM from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1>My app</h1>
                </div>
            </div>
        );
    }
}

if (document.getElementById('app-main-content')) {
    ReactDOM.render(<App />, document.getElementById('app-main-content'));
}
