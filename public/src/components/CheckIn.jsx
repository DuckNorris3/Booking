import React from 'react';

const CheckIn = (props) => {
  if (props.checkIn === null) {
    return (
      <div>
        <div className="label">Check in</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
  <div>
    <div className="label">Check in</div>
    <div>{props.checkIn}</div>
  </div>
  )
}

export default CheckIn;