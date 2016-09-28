import React, { Component } from 'react';
import './App.css';

class EventCard extends Component {
  render() {
    return (
    <div align="center" className="event-card well clearfix pull-left">
      <div>
        <span className="occasion"><b>Occasion: </b> Birthday Party</span>
      </div>
      <div>
        <span className="date"><b>When:</b> Wednesday, 20th February, 2016</span>
      </div>
      <div>
        <span className="guests"><b>Guests Invited:</b> 23</span>
      </div>
    </div>);
  }
}

export default EventCard;

