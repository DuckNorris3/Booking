import React from 'react';
import styled, { css } from 'styled-components';
import { Well, Prices } from '../styling/styledComponents';

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