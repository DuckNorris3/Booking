import React from 'react';

const CheckIn = ({checkin, checkout}) => {
  if (!checkin) {
    return (
      <div>
        <h4>Check In</h4>
      </div>
    )
  }
  return (
  <div>
    <h4>Check In</h4>
    <div>{checkin}</div>
  </div>
  )
}

export default CheckIn;