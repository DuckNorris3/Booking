import React from 'react';
import ReactDOM from 'react-dom';
import sampleSite from '../sampleData/sampleSite';
import Price from './components/Price.jsx';
import CheckInOut from './components/CheckInOut.jsx';
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
      discount: sampleSite[0].weekdayDisc
    }
  }
  render() {
    console.log(sampleSite);
    return (
      <div>
        <h3>Booking Calendar initial view</h3>
        <Price price= {this.state.price}/>
        <CheckInOut/>
        <Guests maxGuests= {this.state.maxGuests}/>
        <BookButton/>
        <h3>Booking Calendar checkin/out select view</h3>
        <Price price= {this.state.price}/>
        <CheckInOut/>
        <Guests maxGuests= {this.state.maxGuests}/>
        <Calendar/>
        <h3>Booking Calendar dates selected view</h3>
        <Price price= {this.state.price}/>
        <CheckInOut/>
        <Guests maxGuests= {this.state.maxGuests}/>
        <Totals discount= {this.state.discount}/>
        <BookButton/>
      </div>
    )
  }

}

ReactDOM.render(<App/>, document.getElementById('app'));