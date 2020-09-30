import React from 'react';

const CheckIn = ({checkin, checkout}) => {
  if (!checkin) {
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
    <div>{checkin}</div>
  </div>
  )
}

export default CheckIn;