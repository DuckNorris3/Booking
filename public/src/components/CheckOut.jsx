import React from 'react';

const CheckOut = ({checkOut, handleClick, showCalendar}) => {
  if (!checkOut) {
    return (
      <div onClick= { showCalendar ? () => {} : () =>  handleClick() }>
        <div className="label">Check out</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
    <div onClick= { showCalendar ? () => {} : () =>  handleClick() }>
        <div className="label">Check out</div>
      <div>{checkOut}</div>
    </div>
    )
  }


export default CheckOut;