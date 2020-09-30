import React from 'react';

const CheckOut = ({checkin, checkout}) => {
  if (!checkout) {
    return (
      <div>
        <div className="label">Check out</div>
        <span>Select date</span>
      </div>
    )
  }
  return (
  <div>
     <div className="label">Check out</div>
    <div>{checkout}</div>
  </div>
  )
}

export default CheckOut;