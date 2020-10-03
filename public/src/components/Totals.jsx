import React from 'react';
import styled, { css } from 'styled-components';
//Totals is not visible at start
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
const Prices = styled.span`
  color: black;
  font-size: 10px;
  font-weight: 800;
  &.right {
    font-weight: 400;
    float: right;
    padding-top: 5px;
  }
  &.red {
    font-weight: 400;
    color: red;
    float: right;
    padding-top: 5px;
  }
`;
const Totals = ({showCalendar, checkOut, totals, discount}) => {
  if(!showCalendar && checkOut) {
    return (
      <div>
        <Well render= {!showCalendar} hide= {showCalendar}>
          <Prices>Weeknight savings</Prices>  <Prices className= "red">-${discount}.00</Prices>
        </Well>
        <Well render= {!showCalendar} hide= {showCalendar}>
        <Prices>Subtotal</Prices><Prices className= "right">${totals}.00</Prices>
        </Well>
      </div>
    )
  } else {
    return null;
  }

}

export default Totals;