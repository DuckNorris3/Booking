import React from 'react';
//Price starts with a default price in the upper left corner
//this persists through checkin/checkout view
//once number of days is known, price is recalculated from totals
const Price = ({price}) => {
  return(
    <div>${price}</div>
  )
}

export default Price;