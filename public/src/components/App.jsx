import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Price from './Price.jsx';
import CheckIn from './CheckIn.jsx';
import CheckOut from './CheckOut.jsx';
import Guests from './Guests.jsx';
import { Calendar } from './Calendar.jsx';
import RequestBooking from './BookButton.jsx';
import Totals from './Totals.jsx';
import {
  calculateNights,
  calculateDiscount,
  calculateTotal
  } from '../utilityFunctions/priceUtilities.js'
import {
  Banner,
  GuestCol,
  Container,
  DatesAndGuests,
  FlexRow,
  Wrapper
} from '../styling/styledComponents';

function App() {

  const[siteData, setSiteData] = useState(null);

  const { siteId } = useParams();

  const[checkIn, setCheckIn] = useState(null);
  const[checkOut, setCheckOut] = useState(null);
  const[checkInSelect, setCheckInSelect] = useState(false);
  const[checkOutSelect, setCheckOutSelect] = useState(false);
  const[showCalendar, setShowCalendar] = useState(false);
  const[nights, setNights] = useState(0);
  const[discount, setDiscount] = useState(0);
  const[totals, setTotals] = useState(0);

  const DatesCol = styled.div`
    transition: background-color .5s ease 0s;
    transition-property: background-color;
    transition-duration: .5s;
    transition-timing-function: ease;
    transition-delay: 0s;
    padding: 10px 32px 10px 10px;
    border-right: 1px solid #ebebeb;
    &.checkIn {
      &:hover {
        background-color: ${checkInSelect ? '#ebebeb' : '#f4f4f4'}
      }
      background-color: ${checkInSelect ? '#ebebeb' : 'white'}
    }
    &.checkOut {
      &:hover {
        background-color: ${checkOutSelect ? '#ebebeb' : '#f4f4f4'}
      }
      background-color: ${checkOutSelect ? '#ebebeb' : 'white'}
    }
`;

  useEffect( () => {
    axios.get(`http://127.0.0.1:3002/sites/${siteId}`)
      .then((result) => {
        setSiteData(result.data[0])
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

    useEffect(() => {
      if (siteData) {
        setNights(calculateNights(checkIn, checkOut));
      }
    }, [checkOut]);

    useEffect(() => {
      if (siteData) {
        setDiscount(calculateDiscount(siteData.price, siteData.weekdayDisc, checkIn, checkOut));
      }
    }, [nights]);

    useEffect(() => {
      if (siteData) {
        setTotals(calculateTotal(nights, siteData.price, discount));
      }
    }, [discount]);

//HANDLING CHECKIN AND CHECKOUT

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
      setShowCalendar(false);
    }
  };

//SELECTING VIEWS
  function selectCheckIn() {
    if(!showCalendar) {
      setShowCalendar(true);
    }
    if (!checkInSelect) {
      setCheckInSelect(true);
      setCheckOutSelect(false);
    }
  };

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
  };

  function initialButtonClick() {
    setShowCalendar(true);
    setCheckInSelect(true);
  };

  function calculateTotal() {
    if (nights) {
      let subTotal = siteData.price * nights;
      return subTotal - discount;
    }
  }

  if (siteData) {
    return (
      <div>
      <Container>
        <Banner>
          <Wrapper>
            <Price price= {siteData.price} totals= {totals} nights= {nights}/>
          </Wrapper>
        </Banner>
          <DatesAndGuests>
            <FlexRow>
              <DatesCol className="checkIn" isSelected= {checkInSelect}>
                <CheckIn checkIn= {checkIn} handleClick= { () => selectCheckIn() } showCalendar= {showCalendar} checkInSelect= {checkInSelect} />
              </DatesCol>
              <DatesCol className= "checkOut" isSelected= {checkOutSelect}>
                <CheckOut checkOut= {checkOut} handleClick= { () => selectCheckOut() } showCalendar= {showCalendar}/>
              </DatesCol>
              <GuestCol>
                <Guests maxGuests= {siteData.maxGuests}/>
              </GuestCol>
            </FlexRow>
          </DatesAndGuests>
            <div>
              <Totals showCalendar= {showCalendar} checkOut= {checkOut} totals= {totals} discount= {discount} nights= {nights}/>
            </div>
          <div>
            <RequestBooking handleClick= { () => initialButtonClick() } showCalendar= {showCalendar} checkIn= {checkIn} checkOut= {checkOut} />
          </div>
        <div>
          <Calendar showCalendar= {showCalendar} handleClick= {(date) => updateCheckInOut(date, checkIn, checkOut)} availability= {siteData.availability[0]} checkIn= {checkIn} checkOut= {checkOut} checkInSelect= {checkInSelect} checkOutSelect= {checkOutSelect}/>
        </div>
      </Container>
    </div>
    );
  } else {
    return (
    <div>
      <Container>
        Loading site...
      </Container>
    </div>
    );
  }
};


export default App;