import React, { Component } from 'react';

// Import custom components
import Quote from './Quote';
import Refresh from './Refresh';

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
                <Refresh />
            </section>
        )
    }
}

export default Home;