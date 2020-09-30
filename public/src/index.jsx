import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// ReactDOM.render(<App/>, document.getElementById('app'));
// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       price: null,
//       maxGuests: null,
//       discount: null,
//       checkin: null,
//       checkout: null,
//       total: null
//     }
//   }


//   componentDidMount() {

//   }


//   render() {
//     console.log(this.state.price)
//     return (
//       <div>
//         <h3>Booking Calendar</h3>
//         <Price price= {this.state.price}/>
//         <CheckIn checkin= {this.state.checkin}/>
//         <CheckOut checkout= {this.state.checkout}/>
//         <Guests maxGuests= {this.state.maxGuests}/>
//         <RequestBooking total= {this.state.total}/>
//         <Calendar/>
//         <Totals discount= {this.state.discount}/>
//       </div>
//     )
//   }

// }

ReactDOM.render(<App/>, document.getElementById('app'));