import React from 'react';
import styled from 'styled-components';


const CheckIn = ({checkIn, handleClick, showCalendar, checkInSelect}) => {
  if (!checkIn) {
    return (
      <div onClick= { () => handleClick() }>
        <div className="label">Check in</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
  <div onClick= { () => handleClick() }>
    <div className="label">Check in</div>
    <div>{checkIn.split(' ').slice(1,3).join(' ')}</div>
  </div>
  )
}

export default CheckIn;