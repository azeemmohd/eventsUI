import React, { Component } from 'react';
import './App.css';

class EventCard extends Component {
  render() {
    return (
    <div className="event-card well clearfix pull-left">
      <div clasName="eventLabel">
        <span className={this.props.itemLabel}><b>{this.props.itemLabel}</b></span>
        <br/>
      </div>
      <div className="eventImage" >
        <img src={this.props.imageTag}/>
      </div>
      <p className="infoPara">
        <span className="occasion"><b>Occasion: </b> {this.props.occasion} </span>
        <br/>
        <span className="date"><b>When:</b> {this.props.date} </span>
        <br/>
        <span className="guests"><b>Guests Invited:</b> {this.props.invitedCount}</span>
        <br/>
      </p>
    </div>);
  }
}

export default EventCard;

