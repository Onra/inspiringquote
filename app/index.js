import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/Home';

import './styles/stylesheet.scss';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Home />, document.getElementById('root'));
});