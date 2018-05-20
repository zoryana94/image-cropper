import React, { Component } from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { CropContainer } from './components/crop-container.jsx';

export default class App extends Component {
  render() {
    return (
        <Router style={{ height: '100%' }}>
            <div style={{ height: '100%' }}>
                <Route exact path='/' component={CropContainer} />
            </div>
        </Router>
    );
  }
}
