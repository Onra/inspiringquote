import React, { Component } from 'react';

// Import custom components
import Quote from './Quote';
import Refresh from './Refresh';

import quotes from '../data/quotes.json';

class Home extends Component {
    constructor() {
        super();

        this._generateRandomQuote = this._generateRandomQuote.bind(this);
    }
    
    componentWillMount() {
        console.log("componentDidMount");
        this._generateRandomQuote();
    }
    
    _generateRandomQuote() {
        this.setState({quote: quotes[Math.floor(Math.random()*quotes.length)]});
    }
    
    render() {
        return (
            <section>
                <h1>Inspiring Random Quote</h1>
                <Quote quote={this.state.quote}/>
                <Refresh onClick={this._generateRandomQuote}/>
            </section>
        )
    }
}

export default Home;