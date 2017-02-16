import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <section className="quote">
                <p>{this.props.quote.text}</p>
                <span className="author">- {this.props.quote.author} -</span>
            </section>
        );
    }
}

export default Quote;