import React from 'react';

const CheckOut = ({checkOut, handleClick, showCalendar}) => {
  if (!checkOut) {
    return (
      <div onClick= { () => handleClick() }>
        <div className="label">Check out</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
    <div onClick= { () => handleClick() }>
        <div className="label">Check out</div>
      <span>{checkOut.split(' ').slice(1,3).join(' ')}</span>
    </div>
    )
  }


export default CheckOut;