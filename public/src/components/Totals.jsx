import React from 'react';
import styled, { css } from 'styled-components';
import { Well, Prices } from '../styling/styledComponents';

const Totals = ({showCalendar, checkOut, totals, discount}) => {
  if(!showCalendar && checkOut) {
    return (
      <div>
        <Well render= {!showCalendar} hide= {showCalendar}>
          <Prices>Weeknight savings</Prices>
          <Prices className= "red">-${discount.toFixed(2)}</Prices>
        </Well>
        <Well render= {!showCalendar} hide= {showCalendar}>
          <Prices>Subtotal</Prices>
          <Prices className= "black">${totals.toFixed(2)}</Prices>
        </Well>
      </div>
    )
  } else {
    return null;
  }

}

export default Totals;