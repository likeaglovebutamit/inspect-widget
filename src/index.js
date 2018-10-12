import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Menu extends Component {
    render() {
    return <div>History</div>
    }
}

window.onload = () => {
    var mountPoint = document.createElement("div");
    document.body.appendChild(mountPoint);
    ReactDOM.render(<Menu/>, mountPoint);
}