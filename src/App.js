import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './EventCard.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="pull-right">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <h2 className="banner-title">Events Listing</h2>
        </div>
        <div>
          <ul className="list-group">
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
              <EventCard/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
