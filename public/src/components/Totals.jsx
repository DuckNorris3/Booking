import React from 'react';
//Totals is not visible at start

const Totals = ({showCalendar, checkOut, totals, discount}) => {

  if(!showCalendar && checkOut) {
    return (
      <div>
      <div>Weeknight Savings  ${discount} saved</div>
      <div>Subtotal                 ${totals}</div>
      </div>
    )
  } else {
    return null;
  }

}

export default Totals;