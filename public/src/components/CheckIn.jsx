import React from 'react';

const CheckIn = ({checkIn, handleClick, showCalendar}) => {
  if (!checkIn) {
    return (
      <div onClick= { showCalendar ? () => {} : () =>  handleClick() }>
        <div className="label">Check in</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
  <div onClick= { showCalendar ? () => {} : () =>  handleClick() }>
    <div className="label">Check in</div>
    <div>{checkIn}</div>
  </div>
  )
}

export default CheckIn;