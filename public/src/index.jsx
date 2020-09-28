import React from 'react';
import ReactDOM from 'react-dom';
import sampleSite from '../sampleData/sampleSite';
import Price from './components/Price.jsx';
import CheckIn from './components/CheckIn.jsx';
import CheckOut from './components/CheckOut.jsx';
import Guests from './components/Guests.jsx';
import Calendar from './components/Calendar.jsx';
import BookButton from './components/BookButton.jsx';
import Totals from './components/Totals.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: sampleSite[0].price,
      maxGuests: sampleSite[0].maxGuests,
      discount: sampleSite[0].weekdayDisc,
      checkin: null,
      checkout: null
    }
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
    console.log(sampleSite);
    return (
      <div>
        <h3>Booking Calendar</h3>
        <Price price= {this.state.price}/>
        <CheckIn checkin= {this.state.checkin}/>
        <CheckOut checkout= {this.state.checkout}/>
        <Guests maxGuests= {this.state.maxGuests}/>
        <BookButton/>
        <Calendar/>
        <Totals discount= {this.state.discount}/>
        <BookButton/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));