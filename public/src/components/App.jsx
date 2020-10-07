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
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
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
      background-color: ${checkOutSelect ? '#ebebeb' : 'white'}
      }
      &:hover {
        background-color: ${checkOutSelect ? '#ebebeb' : '#f4f4f4'}
      }
    }
`;

  useEffect( () => {
    axios.get(`http://127.0.0.1:3002/sites/${siteId}`)
      .then((result) => {
        console.log("received data");
        setSiteData(result.data[0])
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

    useEffect(() => {
      setNights(calculateNights());
    }, [checkOut]);

    useEffect(() => {
      setDiscount(calculateDiscount());
    }, [nights]);

    useEffect(() => {
      setTotals(calculateTotal());
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

//PRICE CALCULATIONS
  function calculateNights() {
    if (checkOut) {
      let count = 0;
      let date = new Date(checkIn.toString());
      let checkoutDate = new Date(checkOut.toString());
      // while loop over check in date up to check out date
      while (date < checkoutDate) {
        count += 1;
        date.setDate(date.getDate() + 1);
      }
      return count;
    }
  };

  function calculateDiscount() {
    if (nights) {
      if (siteData.weekdayDisc) {
        let amountOff = siteData.price * siteData.weekdayDisc;
        let weeknightCount = 0;
        let date = new Date(checkIn.toString());
        let checkoutDate = new Date(checkOut.toString());
        while (date < checkoutDate) {
          let day = date.getDay();
          if (day !== 0 && day !== 6) {
            weeknightCount += 1;
          }
          date.setDate(date.getDate() + 1);
        }
        let totalSaved = amountOff * weeknightCount;
        return totalSaved;
      } else {
        return 0;
      }
    }
  };

  function calculateTotal() {
    if (nights) {
      let subTotal = siteData.price * nights;
      return subTotal - discount;
    }
  }

  if (siteData) {
    console.log(siteData);
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
              <DatesCol className= "checkout" isSelected= {checkOutSelect}>
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