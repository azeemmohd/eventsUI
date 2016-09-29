import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EventCard from './EventCard.js'
import dateformat from 'dateformat';
import birthday from './birthday.jpg'
import discussion from './discussion.svg'
import party from './party.jpg'
import press from './press.png'


class App extends Component {

    constructor(props){
    super(props);
    this.state = {
                    eventData: {
                                "events": [
                                  {
                                    "occasion": "Birthday party",
                                    "invited_count": 120,
                                    "year": 2016,
                                    "month": 2,
                                    "day": 14
                                  },
                                  {
                                    "occasion": "Technical discussion",
                                    "invited_count": 23,
                                    "year": 2016,
                                    "month": 11,
                                    "day": 24
                                  },
                                  {
                                    "occasion": "Press release",
                                    "invited_count": 64,
                                    "year": 2015,
                                    "month": 12,
                                    "day": 17,
                                    "cancelled": true
                                  },
                                  {
                                    "occasion": "New year party",
                                    "invited_count": 55,
                                    "year": 2016,
                                    "month": 1,
                                    "day": 1
                                  },
                                ]
                              }
                };
  };


  // Returns a Date Formatted in Full Date Format
  getFormattedDate(year, month, day) {
      var date = new Date(year, month - 1, day);
      return dateformat(date, "fullDate");
  };

  // Outputs an event classifier using the occasion string
  naiveOccasionImageClassifier(occasion) {
    occasion = occasion.toLowerCase();
    if(occasion.includes("birthday")) {
      return birthday;
    }
    else if(occasion.includes("party")) {
      return party;
    }
    else if(occasion.includes("discussion")) {
      return discussion;
    }
    else if(occasion.includes("press")) {
      return press;
    }
    else {
      return "";
    }

  };

  // Generates Event Card Components
  getEventCards() {
    var dateFormatter = this.getFormattedDate;
    var imageClassifier = this.naiveOccasionImageClassifier;
    var eventBucketizer = this.bucketizeEvents;
    return this.state.eventData["events"].map(function(item, index){ 
      var dateObj = dateFormatter(item["year"],  item["month"], item["day"]);
      return  (<EventCard occasion={item["occasion"]} itemLabel={eventBucketizer(new Date(dateObj))} imageTag={imageClassifier(item["occasion"])} invitedCount={item["invited_count"]} date={dateObj}/>);
    });
  };

  //Sorts Event Card Based on Date
  sortEventCards(eventCards) {
    var sortedCards = eventCards.sort(function(a, b){
      var keyA = new Date(a.props.date);
      var keyB = new Date(b.props.date);
      if(keyA < keyB) return 1;
      if(keyA > keyB) return -1;
      return 0;
    });
    return sortedCards;
  };

  // Classify Events As Past/Upcoming
  bucketizeEvents(date){
      var today = new Date();
      var itemLabel = "";
      if(today < date) {
          itemLabel = "UPCOMING";
      }
      else if(today > date) {
        itemLabel = "PAST";
      }
      else {
        itemLabel = "TODAY"
      }
      return itemLabel;
    }

  render() {
    var eventCards = this.getEventCards();
    eventCards = this.sortEventCards(eventCards);

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
              {eventCards}
          </ul>
        </div>
      </div>
    );
  };
}

export default App;
