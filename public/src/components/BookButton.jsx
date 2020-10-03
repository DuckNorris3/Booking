import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  transition: background-color 0.4s ease 0s, border-color 0.5s ease 0s, color 0.4s ease 0s;
  background-color: #40d9ac;
  border: none;
  color: #fff;
  display: block;
  width: 100%;
  line-height: 1.3333333;
  padding: 10px 15px;
  position: relative;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  font-family: Calibre, Helvetica, Arial, sans-serif;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: #40d9ac;
    background-color: #fff;
    border: 2px solid #40d9ac;
  }


`;

const Well = styled.div`
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #ebebeb;
  padding: 10px;
  ${props =>
    props.render &&
    css`
      visibility: visible
      opacity: 1;
      transition: all .6s ease-out;
    `}
    ${props =>
    props.hide &&
    css`
      visibility: hidden;
      opacity: 0;
      transition: all .6s ;
    `}
`;

const RequestBooking = ({handleClick, showCalendar, checkIn, checkOut}) => {
  if(!showCalendar) {
    return (
      <Well render= {!showCalendar} hide= {showCalendar}>
        <Button onClick= {checkIn && checkOut ? () => {} : () =>  handleClick()}>Request Booking</Button>
      </Well>
      );
  } else {
    return null;
  }
}

export default RequestBooking;

  // ${props =>
  //   props.render &&
  //   css`
  //     visibility: visible
  //     opacity: 1;
  //     transition: all .6s ease-out;
  //   `}
  //   ${props =>
  //   props.hide &&
  //   css`
  //     visibility: hidden;
  //     opacity: 0;
  //     transition: all .6s ;
  //   `}