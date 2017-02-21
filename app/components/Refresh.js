import React, { Component } from 'react';

class Refresh extends Component {
    render() {
        return (
            <figure>
                <img src={require('../img/refresh.png')} className="refresh" alt="Refresh Icon"/>
            </figure>
        );
    }
}

export default Refresh;