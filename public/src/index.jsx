import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import getSiteData from '../helpers/getSiteData';
import sampleSite from '../helpers/sampleSite';
import Price from './components/Price.jsx';
import CheckIn from './components/CheckIn.jsx';
import CheckOut from './components/CheckOut.jsx';
import Guests from './components/Guests.jsx';
import Calendar from './components/Calendar.jsx';
import RequestBooking from './components/BookButton.jsx';
import Totals from './components/Totals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: null,
      maxGuests: null,
      discount: null,
      checkin: null,
      checkout: null,
      total: null
    }
  }

  getSiteData(callback) {
    //axios request
    axios.get('/1')
    //callback
    .catch(err => {
      console.log(err);
    })
    .then(res => {
      console.log("received data", res.data[0])
      callback(res.data[0])
    })
    //set state with data
  }

  componentDidMount() {
    getSiteData(4, (siteData) => {
      console.log(siteData);
      this.setState({
        price: siteData.price,
        maxGuests: siteData.maxGuests,
        discount: siteData.weekdayDisc,
        minStay: siteData.minStay,
        availability: siteData.availability
      })
    })
  }
  //calculate price function
    //inputs: check in date, checkout date and weeknight percent off
    //IF discount exists:
      //count weeknights and weekends
      //set discount var to price times percent off
      //set totalSaved to discount * weekNightCount
      //set weeknightPrice to price - discount
      //set total to weeknightPrice * weekNightCount + price * weekEndCount
      //set totalNights = weeknight count + weekend count
    //ELSE
      //set totalNights = count nights
      //set total = price * totalNights
    //setState {savings: totalSaved, average: total/number of nights, total: total}


  render() {
    console.log(this.state.price)
    return (
      <div>
        <h3>Booking Calendar</h3>
        <Price price= {this.state.price}/>
        <CheckIn checkin= {this.state.checkin}/>
        <CheckOut checkout= {this.state.checkout}/>
        <Guests maxGuests= {this.state.maxGuests}/>
        <RequestBooking total= {this.state.total}/>
        <Calendar/>
        <Totals discount= {this.state.discount}/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));