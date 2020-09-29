import React from 'react';

const CheckOut = ({checkin, checkout}) => {
  if (!checkout) {
    return (
      <div>
        <h4>Check Out</h4>
      </div>
    )
  }
  return (
  <div>
    <h4>Check Out</h4>
    <div>{checkout}</div>
  </div>
  )
}

export default CheckOut;