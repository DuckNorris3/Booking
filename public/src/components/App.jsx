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
  const[checkInSelect, setCheckInSelect] = useState(false);
  const[checkOutSelect, setCheckOutSelect] = useState(false);
  const[showCalendar, setShowCalendar] = useState(false);

  function updateCheckInOut(date, checkIn, checkOut) {
    const dateString = date.toString().split(' ').slice(0, 4).join(' ');
    if(!checkIn || checkInSelect || date < new Date(checkIn.toString())) {
      setCheckIn(dateString);
      setCheckOut(null);
      setCheckOutSelect(true);
      setCheckInSelect(false);
    } else if (checkIn) {
      setCheckOut(dateString);
      setCheckOutSelect(false);
      showTotals();
    }
  }

  function showTotals() {
    //close calendar
    //show button
    setShowCalendar(false);
    //update price to average per night
    //if savings, show savings
    //show subtotal
  }

  function initialButtonClick() {
    setShowCalendar(true)
    setCheckInSelect(true)
  }

  function selectCheckIn() {
    if(!showCalendar) {
      setShowCalendar(true);
    }
    if (!checkInSelect) {
      setCheckInSelect(true);
      setCheckOutSelect(false);
    }
  }
  console.log("selected checkin", checkInSelect)
  console.log("selected checkout", checkOutSelect)

  function selectCheckOut() {
    if(!showCalendar) {
      setShowCalendar(true);
    }
    if (!checkOutSelect && checkIn) {
      setCheckOutSelect(true);
      setCheckInSelect(false);
    } else {
      setCheckInSelect(true);
    }
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
    console.log(siteData.availability[0])
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
                <CheckIn checkIn= {checkIn} handleClick= { () => selectCheckIn() } showCalendar= {showCalendar} checkInSelect= {checkInSelect} />
              </Col>
              <Col>
                <CheckOut checkOut= {checkOut} handleClick= { () => selectCheckOut() } showCalendar= {showCalendar}/>
              </Col>
              <Col>
                <Guests maxGuests= {siteData.maxGuests}/>
              </Col>
            </FlexRow>
          </div>
          <div className="well-content">
            <RequestBooking handleClick= { () => initialButtonClick() } showCalendar= {showCalendar} checkIn= {checkIn} checkOut= {checkOut} />
          </div>
        <div>
          <Calendar showCalendar= {showCalendar} handleClick= {(date) => updateCheckInOut(date, checkIn, checkOut)} availability= {siteData.availability[0]} checkIn= {checkIn} checkOut= {checkOut} checkInSelect= {checkInSelect} checkOutSelect= {checkOutSelect}/>
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


export default App;