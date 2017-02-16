import React, { Component } from 'react';

import Quote from './Quote';

import quotes from '../data/quotes.json';

class Home extends Component {
    _getRandomQuote() {
        return quotes[Math.floor(Math.random()*quotes.length)];
    }
    
    render() {
        const quote = this._getRandomQuote();
        return (
            <section>
                <h1>Inspiring Random Quote</h1>
                <Quote quote={quote}/>
            </section>
        )
    }
}

export default Home;