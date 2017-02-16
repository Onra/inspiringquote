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
            <Quote quote={quote}/>
        )
    }
}

export default Home;