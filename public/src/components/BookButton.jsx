import React from 'react';
import styled, { css } from 'styled-components';
import { Button, Well } from '../styling/styledComponents';

const RequestBooking = ({handleClick, calendarVisible, checkIn, checkOut}) => {
  if(!calendarVisible) {
    return (
      <Well render= {!calendarVisible} hide= {calendarVisible}>
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