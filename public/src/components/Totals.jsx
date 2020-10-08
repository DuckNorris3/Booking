import React from 'react';
import styled, { css } from 'styled-components';
import { Well, Prices } from '../styling/styledComponents';

const Totals = ({calendarVisible, checkOut, total, discount}) => {
  if(!calendarVisible && checkOut) {
    return (
      <div>
        <Well render= {!calendarVisible} hide= {calendarVisible}>
          <Prices>Weeknight savings</Prices>
          <Prices className= "red">-${discount.toFixed(2)}</Prices>
        </Well>
        <Well render= {!calendarVisible} hide= {calendarVisible}>
          <Prices>Subtotal</Prices>
          <Prices className= "black">${total.toFixed(2)}</Prices>
        </Well>
      </div>
    )
  } else {
    return null;
  }

}

export default Totals;