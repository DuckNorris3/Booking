import React from 'react';

const CheckOut = ({checkOut}) => {
  if (!checkOut) {
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
    <div>{checkOut}</div>
  </div>
  )
}

export default CheckOut;