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

  const[checkInDate, setCheckInDate] = useState(null);
  const[checkOutDate, setCheckOutDate] = useState(null);
  const[checkInSelect, setCheckInSelect] = useState(false);
  const[checkOutSelect, setCheckOutSelect] = useState(false);
  const[calendarVisible, setCalendarVisible] = useState(false);
  const[nights, setNights] = useState(0);
  const[discount, setDiscount] = useState(0);
  const[subtotal, setSubtotal] = useState(0);

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
        console.error(err);
      })
    }, []);

    useEffect(() => {
      if (siteData) {
        setNights(calculateNights(checkInDate, checkOutDate));
      }
    }, [checkOutDate]);

    useEffect(() => {
      if (siteData) {
        setDiscount(calculateDiscount(siteData.price, siteData.weekdayDisc, checkInDate, checkOutDate));
      }
    }, [nights]);

    useEffect(() => {
      if (siteData) {
        setSubtotal(calculateTotal(nights, siteData.price, discount));
      }
    }, [nights]);

//HANDLING CHECKIN AND CHECKOUT

  function updateCheckInOut(selectedDate, checkInDate, checkOutDate) {
    const dateString = selectedDate.toString().split(' ').slice(0, 4).join(' ');
    if(!checkInDate || checkInSelect || selectedDate < new Date(checkInDate.toString())) {
      setCheckInDate(dateString);
      setCheckOutDate(null);
      setCheckOutSelect(true);
      setCheckInSelect(false);
    } else if (checkInDate) {
      setCheckOutDate(dateString);
      setCheckOutSelect(false);
      setCalendarVisible(false);
    }
  };

//SELECTING VIEWS
  function selectCheckIn() {
    if(!calendarVisible) {
      setCalendarVisible(true);
    }
    if (!checkInSelect) {
      setCheckInSelect(true);
      setCheckOutSelect(false);
    }
  };

  function selectCheckOut() {
    if(!calendarVisible) {
      setCalendarVisible(true);
    }
    if (!checkOutSelect && checkInDate) {
      setCheckOutSelect(true);
      setCheckInSelect(false);
    } else {
      setCheckInSelect(true);
    }
  };

  function initialButtonClick() {
    setCalendarVisible(true);
    setCheckInSelect(true);
  };

  if (siteData) {
    return (
      <div>
      <Container>
        <Banner>
          <Wrapper>
            <Price price= {siteData.price} total= {subtotal} nights= {nights}/>
          </Wrapper>
        </Banner>
          <DatesAndGuests>
            <FlexRow>
              <DatesCol className="checkIn" isSelected= {checkInSelect}>
                <CheckIn checkIn= {checkInDate} handleClick= { () => selectCheckIn() } calendarVisible= {calendarVisible} checkInSelect= {checkInSelect} />
              </DatesCol>
              <DatesCol className= "checkOut" isSelected= {checkOutSelect}>
                <CheckOut checkOut= {checkOutDate} handleClick= { () => selectCheckOut() } calendarVisible= {calendarVisible}/>
              </DatesCol>
              <GuestCol>
                <Guests maxGuests= {siteData.maxGuests}/>
              </GuestCol>
            </FlexRow>
          </DatesAndGuests>
            <div>
              <Totals calendarVisible= {calendarVisible} checkOut= {checkOutDate} total= {subtotal} discount= {discount} nights= {nights}/>
            </div>
          <div>
            <RequestBooking handleClick= { () => initialButtonClick() } calendarVisible= {calendarVisible} checkIn= {checkInDate} checkOut= {checkOutDate} />
          </div>
        <div>
          <Calendar calendarVisible= {calendarVisible} handleClick= {(date) => updateCheckInOut(date, checkInDate, checkOutDate)} availability= {siteData.availability[0]} checkIn= {checkInDate} checkOut= {checkOutDate} checkInSelect= {checkInSelect} checkOutSelect= {checkOutSelect}/>
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