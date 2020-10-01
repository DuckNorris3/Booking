import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Price from './Price.jsx';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Guests from './Guests.jsx';
import { Calendar } from './Calendar.jsx';
import RequestBooking from './BookButton.jsx';
import Totals from './Totals.jsx';
import styled from 'styled-components';


const Container = styled.div`
height: 100%;
display: flex;
flex-direction: column;
align-items: left;
position: relative;
width: 319px;
font-family: "Calibre", Helvetica, Arial, sans-serif;
z-index: 99;
box-sizing: border-box;
font-weight: 400;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
`;
const Col = styled.div`
  background-color: white;
  padding: 10px;
  border-right: 1px solid #ebebeb;
`;

function App() {
  const[siteData, setSiteData] = useState(null);
  const[checkIn, setCheckIn] = useState(null);
  const[checkOut, setCheckOut] = useState(null);
  const[showCalendar, setShowCalendar] = useState(false);

  function updateCheckInOut(date, checkIn, checkOut) {
    const dateString = date.toString().split(' ').slice(1, 3).join(' ');
    if(!checkIn) {
      setCheckIn(dateString);
    } else if (checkIn && !checkOut) {
      setCheckOut(dateString);
    }
  }
  console.log("DATES", checkIn, checkOut);
  function toggleCalendar() {
    setShowCalendar(!showCalendar)
  }
  useEffect(() => {
    axios.get(`/1`)
      .then((result) => {
        console.log("received data")
        setSiteData(result.data[0])
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

  if (siteData) {
    return (
      <Container>
        <div className="banner">
          <div className="price-wrapper">
            <Price price= {siteData.price} />
          </div>
        </div>
          <div className="well-content">
            <FlexRow>
              <Col>
                <CheckIn checkIn= {checkIn}/>
              </Col>
              <Col>
                <CheckOut checkOut= {checkOut}/>
              </Col>
              <Col>
                <Guests maxGuests= {siteData.maxGuests}/>
              </Col>
            </FlexRow>
          </div>
          <div className="well-content">
            <RequestBooking handleClick= { () => toggleCalendar() }/>
          </div>
        <div>
          <Calendar showCalendar= {showCalendar} handleClick= {(date) => updateCheckInOut(date, checkIn, checkOut)}/>
        </div>
        <div>
          <Totals/>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        Loading site...
      </Container>
    )
  }
}


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

export default App;