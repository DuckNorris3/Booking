import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Well } from '../styling/styledComponents';

const RequestBooking = ({handleClick, showCalendar, checkIn, checkOut}) => {
  if(!showCalendar) {
    return (
      <Well render= {!showCalendar} hide= {showCalendar}>
        <Button onClick= {checkIn && checkOut ? () => {} : () =>  handleClick()}>
          Request Booking
        </Button>
      </Well>
      );
  } else {
    return null;
  }
};

export default RequestBooking;