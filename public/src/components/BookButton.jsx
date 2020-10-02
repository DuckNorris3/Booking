import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #40d9ac;
  color: #fff;
  display: block;
  border: none;
  width: 100%;
  line-height: 1.3333333;
  padding: 10px 15px;
  position: relative;
  font-size: 19.2px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  touch-action: manipulation;
  background-image: none;
  white-space: nowrap;
  &:hover {
    color: #40d9ac;
    background-color: #fff;
    border: 3px solid #40d9ac;
  }
`;

const RequestBooking = ({handleClick, showCalendar, checkIn, checkOut}) => {
  if (showCalendar) {
    return null;
  }
  return (
    <div>
      <Button onClick= {checkIn && checkOut ? () => {} : () =>  handleClick()}>Request Booking</Button>
    </div>
    );
}

export default RequestBooking;